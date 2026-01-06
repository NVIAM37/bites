import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, ReactNode, useState, useEffect } from 'react';

interface Scene3DProps {
  children: ReactNode;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  enablePan?: boolean;
  autoRotate?: boolean;
  className?: string;
  fallbackImage?: string;
}

export const Scene3D = ({
  children,
  cameraPosition = [0, 0, 5],
  enableZoom = false,
  enablePan = false,
  autoRotate = false,
  className = '',
  fallbackImage
}: Scene3DProps) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setHasError(true);
      console.warn("WebGL Context Lost. Switching to fallback.");
    };

    window.addEventListener('webglcontextlost', handleContextLost);
    return () => window.removeEventListener('webglcontextlost', handleContextLost);
  }, []);

  if (hasError && fallbackImage) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <img src={fallbackImage} alt="3D Fallback" className="w-full h-full object-contain opacity-80" />
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        onError={() => setHasError(true)}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={cameraPosition} />
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#FFD700" />
          <spotLight
            position={[5, 15, 5]}
            angle={0.25}
            penumbra={1}
            intensity={2}
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
