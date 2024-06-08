import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { RigidBody } from '@react-three/rapier';

function Monstruo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/models/monstruo.glb');
  const { actions } = useAnimations(animations, group);
  const [lives, setLives] = useState(15);
  const maxLives = 15;
  const [direction, setDirection] = useState(new THREE.Vector3(1, 0, 0)); // Dirección inicial

  useEffect(() => {
    if (nodes && nodes.Body_lod1) {
      nodes.Body_lod1.material = new THREE.MeshStandardMaterial({ color: props.color });
    }
  }, [nodes, props.color]);

  useEffect(() => {
    if (actions['Walk1_Action']) {
      actions['Walk1_Action'].play();
    } else {
      console.log('Animation "Walk1_Action" not found.');
    }
  }, [actions]);

  useFrame((state, delta) => {
    if (group.current) {
      // Mover el monstruo en la dirección actual
      group.current.position.addScaledVector(direction, delta * 4); // Ajustar la velocidad aquí

      // Detectar colisiones y cambiar de dirección
      const worldBox = new THREE.Box3().setFromObject(group.current);
      if (worldBox.min.x <= -35 || worldBox.max.x >= 35) {
        direction.x = -direction.x; // Cambiar de dirección en el eje X
      }
      if (worldBox.min.z <= -30 || worldBox.max.z >= 30) {
        direction.z = -direction.z; // Cambiar de dirección en el eje Z
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[0.20, 0.20, 0.20]}>
      <group name="Scene">
        <group name="Creep">
          <skinnedMesh
            name="Body_lod1"
            geometry={nodes.Body_lod1.geometry}
            material={nodes.Body_lod1.material}
            skeleton={nodes.Body_lod1.skeleton}
          />
          <primitive object={nodes.HandR} />
          <primitive object={nodes.FootR} />
          <primitive object={nodes.KneeIKR} />
          <primitive object={nodes.ElbowIKR} />
          <primitive object={nodes.HandL} />
          <primitive object={nodes.FootL} />
          <primitive object={nodes.KneeIKL} />
          <primitive object={nodes.ElbowIKL} />
          <primitive object={nodes.Torso} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/assets/models/monstruo.glb');

export default Monstruo;
