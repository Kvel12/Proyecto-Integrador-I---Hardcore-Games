import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';

export default function Creature(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/creature/creature.glb')
  const { actions } = useAnimations(animations, group);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (actions['Bite_Action']) {
      actions['Bite_Action'].play();
    } else {
      console.log('Animation "Bite_Action" not found.');
    }
  }, [actions]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'p') {
        setIsVisible(false); // Ocultar la criatura al presionar la tecla 'p'
        setTimeout(() => {
          setIsVisible(true); // Volver a mostrar la criatura después de un segundo
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    <>
    {isVisible && (
      <group ref={group} {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[0.6, -1, -32]} rotation={[0, 90.3, 0]}>
        <RigidBody name='Creature' type='fixed'>
        <group name="Scene">
          <group name="Creep">
            <skinnedMesh
              name="Body_lod0"
              geometry={nodes.Body_lod0.geometry}
              material={materials['Material.001']}
              skeleton={nodes.Body_lod0.skeleton}
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
        </RigidBody>
      </group>
    )}
    </>
  )
}

useGLTF.preload('/assets/models/creature/Creature.glb')