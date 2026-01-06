import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AIChatOrb } from '@/components/ai/AIChatOrb';
import { Package, ChefHat, Bike, Home, Check, Phone, MessageSquare } from 'lucide-react';

interface TrackingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  completed: boolean;
  active: boolean;
  time?: string;
}

const Tracking = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const orderNumber = 'FV-ABC123XYZ';

  const [steps, setSteps] = useState<TrackingStep[]>([
    { id: 1, title: 'Order Confirmed', description: 'Your order has been received', icon: Package, completed: true, active: false, time: '2:30 PM' },
    { id: 2, title: 'Preparing', description: 'Chef is preparing your order', icon: ChefHat, completed: true, active: false, time: '2:35 PM' },
    { id: 3, title: 'On the Way', description: 'Driver is heading to your location', icon: Bike, completed: false, active: true, time: 'Est. 3:00 PM' },
    { id: 4, title: 'Delivered', description: 'Order delivered to your doorstep', icon: Home, completed: false, active: false, time: 'Est. 3:15 PM' },
  ]);

  // Simulate order progress
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < 4) {
          setSteps(steps => steps.map((step, i) => ({
            ...step,
            completed: i < prev + 1,
            active: i === prev + 1,
          })));
          return prev + 1;
        }
        return prev;
      });
    }, 10000); // Move to next step every 10 seconds for demo

    return () => clearInterval(interval);
  }, []);

  const driver = {
    name: 'Alex Rodriguez',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
    rating: 4.9,
    vehicle: 'Honda CB500X',
    phone: '+1 (555) 123-4567',
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="font-display text-4xl font-bold mb-2">
              <span className="text-gradient-primary">Track Your Order</span>
            </h1>
            <p className="text-muted-foreground">Order #{orderNumber}</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map / Tracking Visual */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-card p-6 rounded-2xl mb-6"
              >
                {/* Simulated Map */}
                <div className="relative h-[300px] rounded-xl bg-gradient-to-br from-muted to-muted/50 overflow-hidden mb-6">
                  {/* Map Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <svg className="w-full h-full">
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                  </div>

                  {/* Route Line */}
                  <svg className="absolute inset-0 w-full h-full">
                    <path
                      d="M 50 250 Q 150 200 200 150 T 350 80"
                      stroke="hsl(var(--primary))"
                      strokeWidth="4"
                      strokeDasharray="8 4"
                      fill="none"
                      className="animate-pulse"
                    />
                  </svg>

                  {/* Restaurant Marker */}
                  <div className="absolute left-[50px] bottom-[50px]">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shadow-lg">
                      <ChefHat className="w-5 h-5" />
                    </div>
                    <div className="mt-1 text-xs font-medium bg-background px-2 py-1 rounded shadow">
                      Restaurant
                    </div>
                  </div>

                  {/* Driver Marker - Animated */}
                  <motion.div
                    animate={{
                      left: currentStep >= 3 ? '200px' : '100px',
                      bottom: currentStep >= 3 ? '150px' : '200px',
                    }}
                    transition={{ duration: 2 }}
                    className="absolute"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg ring-4 ring-primary/30">
                      <Bike className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </motion.div>

                  {/* Destination Marker */}
                  <div className="absolute right-[50px] top-[30px]">
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
                      <Home className="w-5 h-5" />
                    </div>
                    <div className="mt-1 text-xs font-medium bg-background px-2 py-1 rounded shadow">
                      Your Location
                    </div>
                  </div>

                  {/* ETA Badge */}
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-4 py-2 rounded-full shadow">
                    <p className="text-sm font-bold">ETA: 15 mins</p>
                  </div>
                </div>

                {/* Progress Steps */}
                <div className="relative">
                  {/* Progress Line */}
                  <div className="absolute top-6 left-6 right-6 h-1 bg-muted rounded-full">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>

                  <div className="relative flex justify-between">
                    {steps.map((step) => {
                      const Icon = step.icon;
                      return (
                        <div key={step.id} className="flex flex-col items-center">
                          <motion.div
                            animate={{
                              scale: step.active ? [1, 1.1, 1] : 1,
                            }}
                            transition={{ repeat: step.active ? Infinity : 0, duration: 1 }}
                            className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${step.completed
                                ? 'bg-primary text-primary-foreground'
                                : step.active
                                  ? 'bg-primary/20 text-primary ring-4 ring-primary/30'
                                  : 'bg-muted text-muted-foreground'
                              }`}
                          >
                            {step.completed ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                          </motion.div>
                          <p className="mt-2 text-xs font-medium text-center">{step.title}</p>
                          <p className="text-xs text-muted-foreground">{step.time}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Driver Info */}
              {currentStep >= 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card p-6 rounded-2xl"
                >
                  <h3 className="font-display font-bold mb-4">Your Driver</h3>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={driver.photo}
                      alt={driver.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold">{driver.name}</p>
                      <p className="text-sm text-muted-foreground">{driver.vehicle}</p>
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-primary">★</span>
                        <span>{driver.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-muted font-medium"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Order Summary */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h3 className="font-display font-bold mb-4">Order Summary</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2x Classic Smash</span>
                    <span>$29.98</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">1x Dragon Roll</span>
                    <span>$18.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">2x Mango Sunset</span>
                    <span>$15.98</span>
                  </div>
                  <div className="border-t border-border pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-gradient-primary">$53.97</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Delivery Address */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6 rounded-2xl"
              >
                <h3 className="font-display font-bold mb-2">Delivery Address</h3>
                <p className="text-sm text-muted-foreground">
                  123 Main Street, Apt 4B<br />
                  New York, NY 10001
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIChatOrb />
    </div>
  );
};

export default Tracking;
