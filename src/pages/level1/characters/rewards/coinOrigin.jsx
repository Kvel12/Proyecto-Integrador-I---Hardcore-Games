import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Coin({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/coinOrigin.glb');
  const meshRef = useRef();


  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody type='fixed' name='Coin'>
        <mesh 
        ref={meshRef}
        castShadow
        receiveShadow
        geometry={nodes.Coin_Material_0.geometry}
        material={materials.Material}
        scale={1}
        onClick={onClick}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/assets/models/rewards/coinOrigin.glb')
