import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

export function potion({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/potion.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });


  return (
    <group {...props} dispose={null} ref={meshRef}>
        <RigidBody type='fixed' name='Potion'>
        <group scale={0.5}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Potion_Low001_Neon_0.geometry}
          material={materials.Neon}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.5}
          onClick={onClick}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Potion_Low002_Potion_0.geometry}
          material={materials.Potion}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.5}
          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Potion_Low003_Glass_0.geometry}
          material={materials.Glass}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.5}
        />
      </group>
        </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/potion.glb')