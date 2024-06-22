import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

export function gemPower({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/gem_pack.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });


  return (
    <group {...props} dispose={null}>
        <RigidBody type='fixed' name='gemPower'>
          <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gem_Pack_Material_0.geometry}
          material={materials.Material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
          onClick={onClick}
          />
        </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/gem_pack.glb')