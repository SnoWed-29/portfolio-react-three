import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Model() {
  const { scene } = useGLTF('/Doughnut_Blender3.1.gltf');

  
  return (
    <group position={[0, -1, 0]} scale={[15, 50, 50]}> {/* Reposition and scale */}
    <primitive object={scene} />
  </group>
  
  );
}

function ModelText() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}> {/* Adjust camera position */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} />
      <Model /> {/* Load your model */}
      <OrbitControls />
    </Canvas>
  );
}

export default ModelText;
