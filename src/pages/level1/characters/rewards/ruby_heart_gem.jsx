import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function ruby_heart_gem({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/ruby_heart_gem.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });
 
 
  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' name='rubyHeart'>
      <group scale={1} ref={meshRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['����������������������__0'].geometry}
          material={materials['Scene_-_Root']}
          scale={1}
        />
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/ruby_heart_gem.glb')
