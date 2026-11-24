import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const FloatingGlassMesh = () => {
  const meshRef = useRef();
  const innerMeshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = state.mouse.x;
    const mouseY = state.mouse.y;

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouseY * 0.4 + t * 0.15,
        0.05
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouseX * 0.5 + t * 0.2,
        0.05
      );
    }

    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x = -t * 0.25;
      innerMeshRef.current.rotation.y = -t * 0.35;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      <group>
        {/* Outer Frosted Glass Distorted Orb */}
        <mesh ref={meshRef} scale={1.8}>
          <icosahedronGeometry args={[1, 12]} />
          <MeshDistortMaterial
            color="#6366F1"
            roughness={0.15}
            metalness={0.1}
            distort={0.35}
            speed={2}
            reflectivity={0.9}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transmission={0.65}
            ior={1.4}
            thickness={0.8}
            wireframe={false}
          />
        </mesh>

        {/* Inner Glowing Core */}
        <mesh ref={innerMeshRef} scale={0.95}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#22D3EE"
            emissive="#7C3AED"
            emissiveIntensity={0.6}
            roughness={0.2}
            metalness={0.8}
            wireframe={true}
          />
        </mesh>

        {/* Orbiting Ring */}
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 64]} />
          <meshBasicMaterial color="#A5B4FC" opacity={0.4} transparent />
        </mesh>
      </group>
    </Float>
  );
};

export default FloatingGlassMesh;
