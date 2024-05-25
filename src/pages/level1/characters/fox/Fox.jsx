import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFox } from '../../../../context/FoxContext';
import { Vector3 } from 'three';

export default function Fox() {
  const foxBodyRef = useRef();
  const foxRef = useRef();
  const { fox, setFox } = useFox(); // Obtener la referencia y la función para establecer el zorro desde el contexto
  const { nodes, materials, animations } = useGLTF('/assets/models/fox/Prueba2.glb');
  const { actions } = useAnimations(animations, foxRef);

  useEffect(() => {
    actions[fox.animation]?.reset().fadeIn(0.5).play();
    return () => {
      if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
    };
  }, [actions, fox.animation]);

  const handleCollision = (event) => {
    console.log("Funciona");
    if (event.otherCollider.userData.tag === "bush") { // Si la colisión es con el arbusto
      const {contac} = event;
      const {normal} = contac;
      const impulseMagnitud = 10;
      const impulse = new Vector3(normal.x*impulseMagnitud, normal.y*impulseMagnitud, normal.z*impulseMagnitud);
      foxBodyRef.current.applyImpulse(impulse);
    }
  };

  return (
    <RigidBody 
      ref={foxBodyRef} 
      position={[0,0,0]}
      colliders={false}
      onCollisionEnter={handleCollision}
      tag="fox">
      <group ref={foxRef} name="Scene">
        <group
          name="Fox"
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



