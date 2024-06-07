import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Text } from '@react-three/drei';
import HealthBar from '../../components/HealthBar';
import * as THREE from 'three'; // Importar THREE

function Monstruo(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/assets/models/monstruo.glb');
  const { actions } = useAnimations(animations, group);
  const [lives, setLives] = useState(15);
  const maxLives = 15;
  const healthBarPositionRef = useRef(new THREE.Vector3());

  
  useEffect(() => {
    console.log('Available animations:', actions); // Agregar esto para ver las animaciones disponibles
    if (actions['Walk1_Action']) {
      actions['Walk1_Action'].play();
    } else {
      console.log('Animation "Walk1_Action" not found.');
    }
  }, [actions]);

  useFrame((state, delta) => {
    group.current.rotation.y += 0.01; // Rotar el dragón lentamente en su lugar
  });

  const updateHealthBarPosition = () => {
    if (group.current) {
      const boundingBox = new THREE.Box3().setFromObject(group.current);
      const dragonPosition = boundingBox.min.clone().add(boundingBox.max).multiplyScalar(0.5);
      healthBarPositionRef.current.copy(dragonPosition);
      healthBarPositionRef.current.y -= 15;
    }
  };

  return (
    <group ref={group} {...props} dispose={null}>
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
