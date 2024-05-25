import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFox } from '../../../../context/FoxContext';
import { useFrame } from '@react-three/fiber';

export default function Fox() {
  const foxBodyRef = useRef();
  const foxRef = useRef();
  const { fox, setFox } = useFox();
  const { nodes, materials, animations } = useGLTF('/assets/models/fox/Prueba2.glb');
  const { actions } = useAnimations(animations, foxRef);

  useEffect(() => {
    actions[fox.animation]?.reset().fadeIn(0.5).play();
    return () => {
      if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
    };
  }, [actions, fox.animation]);


  return (
    <RigidBody ref={foxBodyRef} position={[0, 0, 0]} colliders={false} name='Fox'>
      <group ref={foxRef} name="Scene">
        <group
          position={[0, -0.6, 0]}
          rotation={[0.094, -Math.PI / 1.7, 0.094]}
          scale={0.01}
        >
          <skinnedMesh
            name="Fox_Mesh"
            geometry={nodes.Fox_Mesh.geometry}
            material={materials.Fox}
            skeleton={nodes.Fox_Mesh.skeleton}
          />
          <primitive object={nodes.Fox_Pelvis} />
        </group>
      </group>
    </RigidBody>
  );
}

useGLTF.preload('/assets/models/fox/Prueba2.glb');
