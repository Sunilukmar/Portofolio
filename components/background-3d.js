"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useMemo } from "react"
import { Stars, Float, Sphere, Box, Torus, Octahedron } from "@react-three/drei"

function FloatingGeometry({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.3
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.5
    }
  })

  const GeometryComponent = geometry

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <GeometryComponent ref={meshRef} position={position} scale={0.5}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.7}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </GeometryComponent>
    </Float>
  )
}

function ParticleField() {
  const points = useRef()
  const particlesCount = 1000

  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [])

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05
      points.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#0066ff" transparent opacity={0.6} />
    </points>
  )
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#0066ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#10b981" />

        {/* Stars */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />

        {/* Particle Field */}
        <ParticleField />

        {/* Floating Geometries */}
        <FloatingGeometry position={[-8, 3, -5]} geometry={Sphere} color="#0066ff" speed={0.8} />
        <FloatingGeometry position={[8, -2, -8]} geometry={Box} color="#00ffff" speed={1.2} />
        <FloatingGeometry position={[-5, -4, -3]} geometry={Torus} color="#10b981" speed={0.6} />
        <FloatingGeometry position={[6, 4, -6]} geometry={Octahedron} color="#6b46c1" speed={1.5} />
        <FloatingGeometry position={[-3, 6, -4]} geometry={Sphere} color="#f59e0b" speed={0.9} />
        <FloatingGeometry position={[4, -6, -7]} geometry={Box} color="#ec4899" speed={1.1} />
        <FloatingGeometry position={[0, 8, -5]} geometry={Torus} color="#3b82f6" speed={0.7} />
      </Suspense>
    </Canvas>
  )
}
