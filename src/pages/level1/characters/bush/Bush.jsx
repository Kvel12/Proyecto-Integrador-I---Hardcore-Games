import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

export default function Bush(props) {
  const { nodes, materials } = useGLTF('/assets/models/bush/Arbusto.glb');
  const meshRef = useRef();

  return (
    <group {...props} dispose={null} position={[3, 0.3, 0]}>
      <RigidBody type="fixed" name='Bush'>
        <mesh
          ref={meshRef}
          castShadow
          receiveShadow
          geometry={nodes.stylized_bush.geometry}
          material={materials['stylized bush']}
          scale={[1, 1, 1.09]}
        />
      </RigidBody>
    </group>
  );
}

useGLTF.preload('/assets/models/bush/Arbusto.glb');



