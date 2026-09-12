import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei'
import type { Group, Mesh } from 'three'
import { DoubleSide } from 'three'
import { palette } from '../../theme/theme'

function SaturnPlanet() {
  const planetRef = useRef<Mesh>(null)
  const glowRef = useRef<Mesh>(null)
  const ringsRef = useRef<Group>(null)

  useFrame((state, delta) => {
    const { pointer } = state

    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.25
      planetRef.current.rotation.x += pointer.y * 0.0015
      planetRef.current.rotation.y += pointer.x * 0.0015
    }
    if (glowRef.current) {
      glowRef.current.rotation.y -= delta * 0.05
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z += delta * 0.12
    }
  })

  return (
    <Float speed={1.6} rotationIntensity={0.35} floatIntensity={1.1}>
      {/* Planeta */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[1.35, 48, 48]} />
        <MeshDistortMaterial
          color={palette.accent}
          emissive={palette.accent}
          emissiveIntensity={0.55}
          roughness={0.4}
          metalness={0.15}
          distort={0.18}
          speed={1.4}
        />
      </mesh>

      {/* Halo/atmósfera */}
      <mesh ref={glowRef} scale={1.18}>
        <sphereGeometry args={[1.35, 32, 32]} />
        <meshBasicMaterial color={palette.brandEnd} transparent opacity={0.18} side={DoubleSide} />
      </mesh>

      {/* Anillos estilo Saturno */}
      <group ref={ringsRef} rotation={[Math.PI / 2.4, 0, 0.15]}>
        <mesh>
          <torusGeometry args={[2.6, 0.045, 16, 120]} />
          <meshStandardMaterial
            color={palette.brandEnd}
            emissive={palette.brandEnd}
            emissiveIntensity={0.4}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[3.05, 0.03, 16, 120]} />
          <meshStandardMaterial
            color={palette.accent}
            emissive={palette.accent}
            emissiveIntensity={0.4}
            transparent
            opacity={0.6}
          />
        </mesh>
        <mesh>
          <torusGeometry args={[2.3, 0.018, 16, 120]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.35} />
        </mesh>
      </group>

      <Sparkles count={24} scale={4.5} size={2.5} speed={0.3} opacity={0.7} color={palette.accent} />
    </Float>
  )
}

export function Hero3DObject() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.6, 6.5], fov: 45 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 4, 4]} intensity={1.6} color={palette.accent} />
      <pointLight position={[-4, -3, -2]} intensity={1.2} color={palette.brandEnd} />
      <Stars radius={45} depth={25} count={1200} factor={2.5} saturation={0} fade speed={0.6} />
      <Suspense fallback={null}>
        <SaturnPlanet />
      </Suspense>
    </Canvas>
  )
}
