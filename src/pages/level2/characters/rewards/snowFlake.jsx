import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function snowFlake({onClick, ... props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/snowflake.glb');
  const meshRef = useRef();


  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });



  return (
    <group {...props} dispose={null} ref={meshRef} scale={0.03}>
      <RigidBody type='fixed' name='snowFlake'>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowflake_Mat_Particles_0.geometry}
        material={materials.Mat_Particles}
        scale={0.03}
        onClick={onClick}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowflake_Mat_Snowflake_0.geometry}
        material={materials.Mat_Snowflake}
        scale={0.03}
        onClick={onClick}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowflake_Mat_Snowflake_0_1.geometry}
        material={materials.Mat_Snowflake}
        scale={0.03}
        onClick={onClick}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowflake_Mat_Snowflake_0_2.geometry}
        material={materials.Mat_Snowflake}
        scale={0.03}
        onClick={onClick}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Snowflake_Mat_Snowflake_0_3.geometry}
        material={materials.Mat_Snowflake}
        scale={0.03}
        onClick={onClick}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/snowflake.glb')