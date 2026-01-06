import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface FoodModelProps {
  color?: string;
  shape?: 'burger' | 'pizza' | 'sushi' | 'salad' | 'dessert' | 'drink';
  scale?: number;
  autoRotate?: boolean;
}

// Placeholder 3D shapes representing food categories
// TODO: Replace with actual .gltf/.glb models from Poly Pizza or Sketchfab
export const FoodModel = ({ 
  color = '#FF6B4A', 
  shape = 'burger',
  scale = 1,
  autoRotate = true 
}: FoodModelProps) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && autoRotate) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const renderShape = () => {
    switch (shape) {
      case 'burger':
        return (
          <group ref={meshRef as any} scale={scale}>
            {/* Bottom bun */}
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[1.2, 1.3, 0.3, 32]} />
              <meshStandardMaterial color="#D4A574" />
            </mesh>
            {/* Patty */}
            <mesh position={[0, -0.05, 0]}>
              <cylinderGeometry args={[1.1, 1.1, 0.25, 32]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Cheese */}
            <mesh position={[0, 0.1, 0]}>
              <boxGeometry args={[2, 0.08, 2]} />
              <meshStandardMaterial color="#FFD700" />
            </mesh>
            {/* Lettuce */}
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[1.15, 1.15, 0.1, 32]} />
              <meshStandardMaterial color="#90EE90" />
            </mesh>
            {/* Top bun */}
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#D4A574" />
            </mesh>
          </group>
        );

      case 'pizza':
        return (
          <group ref={meshRef as any} scale={scale} rotation={[0.3, 0, 0]}>
            {/* Pizza base */}
            <mesh>
              <cylinderGeometry args={[1.5, 1.5, 0.15, 32]} />
              <meshStandardMaterial color="#F4A460" />
            </mesh>
            {/* Sauce */}
            <mesh position={[0, 0.08, 0]}>
              <cylinderGeometry args={[1.3, 1.3, 0.05, 32]} />
              <meshStandardMaterial color="#FF6347" />
            </mesh>
            {/* Cheese spots */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <mesh key={i} position={[Math.cos(i) * 0.7, 0.12, Math.sin(i) * 0.7]}>
                <sphereGeometry args={[0.25, 16, 16]} />
                <meshStandardMaterial color="#FFF8DC" />
              </mesh>
            ))}
            {/* Pepperoni */}
            {[0.5, 1.5, 2.5, 3.5, 4.5].map((i) => (
              <mesh key={i} position={[Math.cos(i) * 0.5, 0.15, Math.sin(i) * 0.5]}>
                <cylinderGeometry args={[0.15, 0.15, 0.05, 16]} />
                <meshStandardMaterial color="#8B0000" />
              </mesh>
            ))}
          </group>
        );

      case 'sushi':
        return (
          <group ref={meshRef as any} scale={scale}>
            {/* Rice base */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[1.5, 0.4, 0.8]} />
              <meshStandardMaterial color="#FFFAF0" />
            </mesh>
            {/* Fish topping */}
            <mesh position={[0, 0.3, 0]} rotation={[0.1, 0, 0]}>
              <boxGeometry args={[1.6, 0.15, 0.9]} />
              <meshStandardMaterial color="#FA8072" />
            </mesh>
            {/* Nori wrap */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[0.3, 0.5, 0.85]} />
              <meshStandardMaterial color="#1B4D3E" />
            </mesh>
          </group>
        );

      case 'salad':
        return (
          <group ref={meshRef as any} scale={scale}>
            {/* Bowl */}
            <mesh position={[0, -0.2, 0]}>
              <sphereGeometry args={[1.2, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#DEB887" />
            </mesh>
            {/* Lettuce */}
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <mesh key={i} position={[Math.cos(i) * 0.5, 0.2 + Math.random() * 0.2, Math.sin(i) * 0.5]}>
                <sphereGeometry args={[0.25, 8, 8]} />
                <meshStandardMaterial color={i % 2 === 0 ? "#90EE90" : "#228B22"} />
              </mesh>
            ))}
            {/* Tomatoes */}
            <mesh position={[0.3, 0.4, 0.3]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#FF6347" />
            </mesh>
            <mesh position={[-0.4, 0.35, -0.2]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#FF6347" />
            </mesh>
          </group>
        );

      case 'dessert':
        return (
          <group ref={meshRef as any} scale={scale}>
            {/* Cake base */}
            <mesh position={[0, -0.3, 0]}>
              <cylinderGeometry args={[0.8, 0.9, 0.5, 32]} />
              <meshStandardMaterial color="#8B4513" />
            </mesh>
            {/* Cream layer */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.85, 0.85, 0.15, 32]} />
              <meshStandardMaterial color="#FFFAF0" />
            </mesh>
            {/* Top layer */}
            <mesh position={[0, 0.2, 0]}>
              <cylinderGeometry args={[0.75, 0.8, 0.4, 32]} />
              <meshStandardMaterial color="#D2691E" />
            </mesh>
            {/* Cherry on top */}
            <mesh position={[0, 0.5, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshStandardMaterial color="#DC143C" />
            </mesh>
          </group>
        );

      case 'drink':
        return (
          <group ref={meshRef as any} scale={scale}>
            {/* Glass */}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.5, 0.4, 1.5, 32, 1, true]} />
              <meshStandardMaterial color="#87CEEB" transparent opacity={0.4} />
            </mesh>
            {/* Liquid */}
            <mesh position={[0, -0.1, 0]}>
              <cylinderGeometry args={[0.45, 0.35, 1.2, 32]} />
              <meshStandardMaterial color={color} transparent opacity={0.8} />
            </mesh>
            {/* Ice cubes */}
            <mesh position={[0.15, 0.3, 0.1]} rotation={[0.2, 0.5, 0.1]}>
              <boxGeometry args={[0.2, 0.2, 0.2]} />
              <meshStandardMaterial color="#E0FFFF" transparent opacity={0.6} />
            </mesh>
            {/* Straw */}
            <mesh position={[0.3, 0.5, 0]} rotation={[0, 0, 0.2]}>
              <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
              <meshStandardMaterial color="#FF6B6B" />
            </mesh>
          </group>
        );

      default:
        return (
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[0.8, 0.3, 100, 16]} />
            <meshStandardMaterial color={color} />
          </mesh>
        );
    }
  };

  return renderShape();
};
