import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Creature(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/creature/creature.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions['Bite_Action']) {
      actions['Bite_Action'].play();
    } else {
      console.log('Animation "Bite_Action" not found.');
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null} scale={[0.4, 0.4, 0.4]} position={[0.6, -1, -32]} rotation={[0, 90.3, 0]}>
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
    </group>
  )
}

useGLTF.preload('/assets/models/creature/Creature.glb')