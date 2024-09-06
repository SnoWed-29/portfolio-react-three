import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

// Define a custom shader material for the gradient globe
const GradientShaderMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color1: { value: new THREE.Color('#ABC9E9') },
    color2: { value: new THREE.Color('#F5BFD7') },
    color3: { value: new THREE.Color('#ABC9E9') },
  },
  vertexShader: `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vPosition;
    uniform vec3 color1;
    uniform vec3 color2;
    uniform vec3 color3;
    void main() {
      float gradient = (vPosition.y + 1.0) / 2.0;
      vec3 color = mix(color1, color2, gradient);
      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

function FloatingIcosahedron() {
  const meshRef = useRef();
  const edgesRef = useRef();
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust rotation speed here
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[3.31, 1]} /> Increased size
        <primitive object={GradientShaderMaterial} attach="material" />
        
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry" args={[new THREE.IcosahedronGeometry(3.4, 2)]} /> {/* Increased size */}
        <lineBasicMaterial color="#CAEFD7" linewidth={5} /> {/* Increased linewidth for better visibility */}
      </lineSegments>
      </mesh>
    </>
  );
}

function RollingGlobe() {
  return (
    <Canvas
      style={{ height: '100%', width: '100%' }}
      camera={{ position: [0, 0, 6], fov: 75 }} // Adjusted camera position to fit larger size
    >
      <ambientLight intensity={0.5} />
      <directionalLight color="#ffffff" intensity={1} position={[5, 5, 5]} />
      <FloatingIcosahedron />
      <OrbitControls 
        enableZoom={false} // Disable zooming
        enableRotate={true} // Enable rotation
        enablePan={false} // Disable panning
      />
    </Canvas>
  );
}

export default RollingGlobe;
