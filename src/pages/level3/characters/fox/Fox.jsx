import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFox } from '../../../../context/FoxContext';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


export default function Fox() {
  const foxBodyRef = useRef();
  const foxRef = useRef();
  const { fox, setFox } = useFox(); // Obtener la referencia y la función para establecer el zorro desde el contexto
  const { nodes, materials, animations } = useGLTF('/assets/models/fox/Prueba2.glb');
  const { actions } = useAnimations(animations, foxRef);
  const [defend, setDefend] = useState(false);
  const [showDefensiveCube, setShowDefensiveCube] = useState(false);

  useEffect(() => {
    actions[fox.animation]?.reset().fadeIn(0.5).play();
    return () => {
      if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
    };
  }, [actions, fox.animation]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'p') {
        // Presionó la tecla 'p', cambiar el estado para mostrar o ocultar el cubo defensivo
        setShowDefensiveCube(!showDefensiveCube);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showDefensiveCube]);


  return (
    <RigidBody ref={foxBodyRef} position={[0,0,0]} colliders={false} name='Fox'>
      <group ref={foxRef} name="Scene">
      {showDefensiveCube && (
          <mesh position={[0, 0, 0]} visible={showDefensiveCube}> {/* Cubo defensivo */}
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshBasicMaterial color="white" transparent opacity={0.5} />
          </mesh>
        )}
        <group
          position={[0, -0.63, 0]}
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
