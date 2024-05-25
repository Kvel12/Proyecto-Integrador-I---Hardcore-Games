import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';

export function lifePotion({onClick, ...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/lifePotion.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group {...props} dispose={null}>
      <RigidBody type="fixed" name="lifePotion">
        <group scale={0.02} ref={meshRef}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Potion_Elixir1_0.geometry}
            material={materials.Elixir1}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
            onClick={onClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Fill_FillElixir1_0.geometry}
            material={materials.FillElixir1}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
            onClick={onClick}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Glass_GlassElixir1_0.geometry}
            material={materials.GlassElixir1}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.02}
            onClick={onClick}
          />
        </group>
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/assets/models/rewards/lifePotion.glb');

