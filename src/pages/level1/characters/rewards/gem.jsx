import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier';

export function gem({onClick,...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/gem.glb')
  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.y += 0.05;
    }
  });



  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' name='gem'>
      <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      geometry={nodes.Object_2.geometry}
      material={materials.phong3SG}
      scale={0.03}
      onClick={onClick}
      />
      </RigidBody>
      
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/gem.glb')