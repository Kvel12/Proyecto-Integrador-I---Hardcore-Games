import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

export function bullet({onClick,...props}) {
  const { nodes, materials } = useGLTF('/assets/models/rewards/bullet.glb');
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <RigidBody type='fixed' name='Bullet'>
        <group position={[-34.367, 3.086, 2.016]} rotation={[0, -Math.PI / 2, 0]} scale={1.029}>
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_02_-_Default_0'].geometry}
            material={materials['02_-_Default']}
            onClick={onClick}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_07_-_Default_0'].geometry}
            material={materials['07_-_Default']}
            onClick={onClick}
            />
            <mesh
            castShadow
            receiveShadow
            geometry={nodes['Cylinder001_03_-_Default_0'].geometry}
            material={materials['03_-_Default']}
            onClick={onClick}
            />
      </group>
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/bullet.glb')
