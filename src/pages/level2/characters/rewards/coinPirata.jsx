import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier';

export function coinPirata({onClick, ... props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/coinPirata.glb')
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05; // Gira la moneda sobre su eje vertical
    }
  });

  return (
    <group {...props} dispose={null}>
        <RigidBody>
            <mesh
            ref={meshRef}
            castShadow
            receiveShadow
            geometry={nodes.Object_2.geometry}
            material={materials.lambert1}
            rotation={[-Math.PI / 2, 0, 0]} // Rotación para poner la moneda en vertical
            onClick={onClick}
            />
        </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/coinPirata.glb')
