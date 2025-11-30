"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SubtleShape() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Very slow, subtle rotation
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={3.5}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshDistortMaterial
                    color="#1a1a1a" // Very dark grey to blend with black background
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.4}
                    metalness={0.8}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 -z-10 h-screen w-full opacity-50 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <ambientLight intensity={0.2} />
                <directionalLight position={[10, 10, 5]} intensity={0.5} />
                <SubtleShape />
                <Environment preset="night" />
            </Canvas>
        </div>
    );
}
