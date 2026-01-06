import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { Calendar, Clock, Users, Check, ChevronLeft, RotateCcw, Move3D } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Text, RoundedBox } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';

interface Table {
  id: number;
  seats: 2 | 4 | 6 | 8;
  position: [number, number, number];
  status: 'available' | 'occupied' | 'selected';
}

const initialTables: Table[] = [
  // 2-seater tables (intimate/window)
  { id: 1, seats: 2, position: [-4, 0, -3], status: 'available' },
  { id: 2, seats: 2, position: [-4, 0, 0], status: 'occupied' },
  { id: 3, seats: 2, position: [-4, 0, 3], status: 'available' },
  { id: 4, seats: 2, position: [4, 0, -3], status: 'available' },
  { id: 5, seats: 2, position: [4, 0, 3], status: 'available' },

  // 4-seater tables (center)
  { id: 6, seats: 4, position: [-1.5, 0, -2], status: 'available' },
  { id: 7, seats: 4, position: [1.5, 0, -2], status: 'occupied' },
  { id: 8, seats: 4, position: [-1.5, 0, 2], status: 'available' },
  { id: 9, seats: 4, position: [1.5, 0, 2], status: 'available' },

  // 6-seater tables (larger groups)
  { id: 10, seats: 6, position: [0, 0, 5], status: 'available' },
  { id: 11, seats: 6, position: [0, 0, -5], status: 'occupied' },

  // 8-seater table (private dining)
  { id: 12, seats: 8, position: [4, 0, 0], status: 'available' },
];

// 3D Chair Component
const Chair = ({ position, rotation = 0 }: { position: [number, number, number]; rotation?: number }) => {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      {/* Seat */}
      <RoundedBox args={[0.3, 0.05, 0.3]} position={[0, 0.35, 0]} radius={0.02}>
        <meshStandardMaterial color="#8B4513" />
      </RoundedBox>
      {/* Back */}
      <RoundedBox args={[0.3, 0.3, 0.05]} position={[0, 0.5, -0.12]} radius={0.02}>
        <meshStandardMaterial color="#8B4513" />
      </RoundedBox>
      {/* Legs */}
      {[[-0.1, 0, -0.1], [0.1, 0, -0.1], [-0.1, 0, 0.1], [0.1, 0, 0.1]].map((pos, i) => (
        <mesh key={i} position={[pos[0], 0.17, pos[2]]}>
          <cylinderGeometry args={[0.02, 0.02, 0.34]} />
          <meshStandardMaterial color="#5D3A1A" />
        </mesh>
      ))}
    </group>
  );
};

// 3D Table Component
const Table3D = ({
  table,
  isSelected,
  onSelect
}: {
  table: Table;
  isSelected: boolean;
  onSelect: () => void;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && isSelected) {
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 + 0.3;
    }
  });

  const getTableDimensions = () => {
    switch (table.seats) {
      case 2: return { width: 0.8, depth: 0.8, chairs: 2 };
      case 4: return { width: 1, depth: 1, chairs: 4 };
      case 6: return { width: 1.5, depth: 1, chairs: 6 };
      case 8: return { width: 2, depth: 1, chairs: 8 };
      default: return { width: 1, depth: 1, chairs: 4 };
    }
  };

  const { width, depth, chairs } = getTableDimensions();

  const getTableColor = () => {
    if (table.status === 'occupied') return '#ef4444';
    if (isSelected) return '#22c55e';
    return '#f97316';
  };

  const getChairPositions = () => {
    const positions: { pos: [number, number, number]; rot: number }[] = [];
    switch (chairs) {
      case 2:
        positions.push({ pos: [0, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [0, 0, -depth / 2 - 0.25], rot: 0 });
        break;
      case 4:
        positions.push({ pos: [0, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [0, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [width / 2 + 0.25, 0, 0], rot: -Math.PI / 2 });
        positions.push({ pos: [-width / 2 - 0.25, 0, 0], rot: Math.PI / 2 });
        break;
      case 6:
        positions.push({ pos: [-width / 3, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [width / 3, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [-width / 3, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [width / 3, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [width / 2 + 0.25, 0, 0], rot: -Math.PI / 2 });
        positions.push({ pos: [-width / 2 - 0.25, 0, 0], rot: Math.PI / 2 });
        break;
      case 8:
        positions.push({ pos: [-width / 3, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [0, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [width / 3, 0, depth / 2 + 0.25], rot: Math.PI });
        positions.push({ pos: [-width / 3, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [0, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [width / 3, 0, -depth / 2 - 0.25], rot: 0 });
        positions.push({ pos: [width / 2 + 0.25, 0, 0], rot: -Math.PI / 2 });
        positions.push({ pos: [-width / 2 - 0.25, 0, 0], rot: Math.PI / 2 });
        break;
    }
    return positions;
  };

  return (
    <group position={table.position}>
      {/* Table Top */}
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          if (table.status !== 'occupied') onSelect();
        }}
        position={[0, 0.3, 0]}
      >
        <RoundedBox args={[width, 0.08, depth]} radius={0.02}>
          <meshStandardMaterial
            color={getTableColor()}
            metalness={0.1}
            roughness={0.8}
          />
        </RoundedBox>
      </mesh>

      {/* Table Leg */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.08, 0.12, 0.3]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.5} />
      </mesh>

      {/* Table Number */}
      <Text
        position={[0, 0.4, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {table.id}
      </Text>

      {/* Seats Badge */}
      <Text
        position={[0, 0.55, 0]}
        fontSize={0.1}
        color={isSelected ? '#22c55e' : table.status === 'occupied' ? '#ef4444' : '#f97316'}
        anchorX="center"
        anchorY="middle"
      >
        {table.seats} seats
      </Text>

      {/* Chairs */}
      {getChairPositions().map((chair, i) => (
        <Chair key={i} position={chair.pos} rotation={chair.rot} />
      ))}
    </group>
  );
};

// Restaurant Floor
const Floor = () => {
  return (
    <group>
      {/* Main Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>

      {/* Floor Pattern */}
      {Array.from({ length: 7 }).map((_, i) =>
        Array.from({ length: 7 }).map((_, j) => (
          <mesh
            key={`${i}-${j}`}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[(i - 3) * 2, 0, (j - 3) * 2]}
          >
            <planeGeometry args={[1.9, 1.9]} />
            <meshStandardMaterial color={(i + j) % 2 === 0 ? '#3a3a3a' : '#2a2a2a'} />
          </mesh>
        ))
      )}

      {/* Walls */}
      <mesh position={[0, 1.5, -7]} receiveShadow>
        <boxGeometry args={[14, 3, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[-7, 1.5, 0]} receiveShadow>
        <boxGeometry args={[0.2, 3, 14]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[7, 1.5, 0]} receiveShadow>
        <boxGeometry args={[0.2, 3, 14]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>

      {/* Bar Area */}
      <mesh position={[5.5, 0.5, -5.5]}>
        <boxGeometry args={[2.5, 1, 0.8]} />
        <meshStandardMaterial color="#4a3728" />
      </mesh>
      <Text position={[5.5, 1.2, -5.5]} fontSize={0.2} color="#888">
        BAR
      </Text>

      {/* Kitchen Area */}
      <mesh position={[-5.5, 0.5, -5.5]}>
        <boxGeometry args={[2.5, 1, 0.8]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <Text position={[-5.5, 1.2, -5.5]} fontSize={0.2} color="#888">
        KITCHEN
      </Text>

      {/* Entrance */}
      <Text position={[0, 0.5, 6.5]} fontSize={0.25} color="#22c55e">
        ↑ ENTRANCE
      </Text>
    </group>
  );
};

// 3D Scene
const RestaurantScene = ({
  tables,
  selectedTable,
  onSelectTable
}: {
  tables: Table[];
  selectedTable: number | null;
  onSelectTable: (id: number) => void;
}) => {
  return (
    <Canvas shadows>
      <Suspense fallback={null}>
        <PerspectiveCamera makeDefault position={[0, 12, 12]} fov={50} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ff9966" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#66ccff" />
        <spotLight position={[0, 10, 0]} angle={0.5} intensity={0.8} castShadow />
        <Environment preset="city" />

        <Floor />

        {tables.map((table) => (
          <Table3D
            key={table.id}
            table={table}
            isSelected={selectedTable === table.id}
            onSelect={() => onSelectTable(table.id)}
          />
        ))}

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={25}
          minPolarAngle={0.2}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
        />
      </Suspense>
    </Canvas>
  );
};

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
];

const Booking = () => {
  const navigate = useNavigate();
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [guests, setGuests] = useState(2);
  const [step, setStep] = useState(1);
  const [tableData, setTableData] = useState<Table[]>(initialTables);

  const handleTableClick = (tableId: number) => {
    const table = tableData.find(t => t.id === tableId);
    if (table?.status === 'occupied') {
      toast.error('This table is already booked');
      return;
    }

    setTableData(prev => prev.map(t => ({
      ...t,
      status: t.id === tableId ? 'selected' : t.status === 'selected' ? 'available' : t.status
    })));
    setSelectedTable(tableId);
    toast.success(`Table ${tableId} selected!`);
  };

  const handleConfirmBooking = () => {
    if (!selectedTable || !selectedTime) {
      toast.error('Please select a table and time');
      return;
    }
    toast.success('Table booked successfully!');
    navigate('/');
  };

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const selectedTableData = tableData.find(t => t.id === selectedTable);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Book Your</span> Table
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our restaurant in 3D - drag to rotate, scroll to zoom, and click to select your table
            </p>
          </motion.div>

          {/* Steps Indicator */}
          <div className="flex justify-center gap-4 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center gap-2 ${step >= s ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                  {step > s ? <Check className="w-4 h-4" /> : s}
                </div>
                <span className="hidden sm:block text-sm font-medium">
                  {s === 1 ? 'Select Table' : s === 2 ? 'Choose Time' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Table Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid lg:grid-cols-4 gap-6"
            >
              {/* 3D Restaurant View */}
              <div className="lg:col-span-3">
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold flex items-center gap-2">
                      <Move3D className="w-5 h-5 text-primary" />
                      3D Floor Plan
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-orange-500" /> Available
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" /> Occupied
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-green-500" /> Selected
                      </span>
                    </div>
                  </div>

                  <div className="h-[500px] bg-gradient-to-b from-slate-900 to-slate-800">
                    <RestaurantScene
                      tables={tableData}
                      selectedTable={selectedTable}
                      onSelectTable={handleTableClick}
                    />
                  </div>

                  <div className="p-4 bg-muted/50 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <RotateCcw className="w-4 h-4" /> Drag to rotate
                    </span>
                    <span>Scroll to zoom</span>
                    <span>Click table to select</span>
                  </div>
                </div>
              </div>

              {/* Selection Panel */}
              <div className="glass-card p-6 rounded-2xl h-fit">
                <h3 className="font-display text-xl font-bold mb-6">Your Booking</h3>

                {/* Guests */}
                <div className="mb-6">
                  <label className="flex items-center gap-2 text-sm font-medium mb-3">
                    <Users className="w-4 h-4" /> Number of Guests
                  </label>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 font-bold"
                    >
                      -
                    </button>
                    <span className="font-bold text-2xl w-8 text-center">{guests}</span>
                    <button
                      onClick={() => setGuests(Math.min(12, guests + 1))}
                      className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Table Types */}
                <div className="mb-6">
                  <label className="text-sm font-medium mb-3 block">Available Tables</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[2, 4, 6, 8].map((seats) => {
                      const count = tableData.filter(t => t.seats === seats && t.status === 'available').length;
                      return (
                        <div key={seats} className="p-3 bg-muted rounded-lg text-center">
                          <p className="font-bold text-lg">{seats}</p>
                          <p className="text-xs text-muted-foreground">{count} available</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Table Info */}
                {selectedTableData && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-primary/10 rounded-xl mb-6 border-2 border-primary/30"
                  >
                    <p className="font-bold text-lg">Table #{selectedTableData.id}</p>
                    <p className="text-sm text-muted-foreground">
                      {selectedTableData.seats} seats
                    </p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectedTable && setStep(2)}
                  disabled={!selectedTable}
                  className="w-full btn-gradient-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-3xl mx-auto"
            >
              <div className="glass-card p-6 rounded-2xl">
                <button
                  onClick={() => setStep(1)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                  <ChevronLeft className="w-4 h-4" /> Back to table selection
                </button>

                {/* Date Selection */}
                <div className="mb-8">
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold mb-4">
                    <Calendar className="w-5 h-5" /> Select Date
                  </h3>
                  <div className="flex gap-2 overflow-x-auto pb-2">
                    {generateCalendarDays().map((date, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedDate(date)}
                        className={`flex-shrink-0 p-3 rounded-xl text-center transition-all ${selectedDate.toDateString() === date.toDateString()
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-muted/80'
                          }`}
                      >
                        <p className="text-xs opacity-70">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </p>
                        <p className="font-bold text-lg">{date.getDate()}</p>
                        <p className="text-xs opacity-70">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="mb-8">
                  <h3 className="flex items-center gap-2 font-display text-xl font-bold mb-4">
                    <Clock className="w-5 h-5" /> Select Time
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg text-sm font-medium transition-all ${selectedTime === time
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-muted/80'
                          }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => selectedTime && setStep(3)}
                  disabled={!selectedTime}
                  className="w-full btn-gradient-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Confirmation
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="max-w-lg mx-auto"
            >
              <div className="glass-card p-8 rounded-2xl text-center">
                <button
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>

                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-display text-2xl font-bold mb-2">Confirm Your Booking</h3>
                <p className="text-muted-foreground mb-8">Review your reservation details</p>

                <div className="space-y-4 text-left mb-8">
                  <div className="flex justify-between p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Table</span>
                    <span className="font-bold">#{selectedTable} ({selectedTableData?.seats} seats)</span>
                  </div>
                  <div className="flex justify-between p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Guests</span>
                    <span className="font-bold">{guests} people</span>
                  </div>
                  <div className="flex justify-between p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-bold">
                      {selectedDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between p-4 bg-muted rounded-lg">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-bold">{selectedTime}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleConfirmBooking}
                  className="w-full btn-gradient-primary"
                >
                  Confirm Booking
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Booking;
