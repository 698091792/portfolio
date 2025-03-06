import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Laptop() {
  const laptop = useRef<THREE.Group>();
  
  useFrame((state) => {
    if (laptop.current) {
      laptop.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <primitive
        ref={laptop}
        object={useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf').scene}
        position={[0, 0, 0]}
        scale={1.0}
      />
    </Float>
  );
}

export default function Scene() {
  return (
    <Canvas className="w-full h-[600px] mt-14">
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Laptop />
    </Canvas>
  );
}