import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, ReactNode } from 'react';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  enablePan?: boolean;
  autoRotate?: boolean;
  className?: string;
}

export const Scene3D = ({
  children,
  cameraPosition = [0, 0, 5],
  enableZoom = false,
  enablePan = false,
  autoRotate = false,
  className = ''
}: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FFB347" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
            castShadow
          />
          <Environment preset="studio" />
          {children}
          <OrbitControls
            enableZoom={enableZoom}
            enablePan={enablePan}
            autoRotate={autoRotate}
            autoRotateSpeed={2}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 4}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
