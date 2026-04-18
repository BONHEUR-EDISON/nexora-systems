import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.5;
    ref.current.rotation.x = Math.sin(t * 0.3) * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#2F80FF" metalness={0.6} roughness={0.2} emissive="#0a3cff" emissiveIntensity={0.6} />
      </mesh>
    </Float>
  );
}

export function Hero() {
  return (
    <section className="relative h-screen w-full bg-[#070A12] overflow-hidden">
      {/* 3D Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} intensity={1} />
          <Orb />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight">
            Powering Your Business with <span className="text-blue-400">Technology</span>
          </h1>
          <p className="mt-6 text-gray-400 text-sm md:text-lg">
            Building modern apps, networks, and infrastructure for ambitious businesses.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl">Get Started</button>
            <button className="border border-gray-600 hover:border-white px-6 py-3 rounded-xl">Our Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// NOTE: install deps for 3D
// npm install @react-three/fiber @react-three/drei three
