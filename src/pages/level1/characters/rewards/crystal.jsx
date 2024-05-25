import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function crystal({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/crystal.glb');
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.y += 0.05;
    }
  });


  return (
    <group {...props} dispose={null}>
      <RigidBody  type='fixed' name='Crystal'>
      <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      geometry={nodes.pCube22_phongE2_0.geometry}
      material={materials.phongE2}
      scale={0.01}
      onClick={onClick}
/>


      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/crystal.glb')
