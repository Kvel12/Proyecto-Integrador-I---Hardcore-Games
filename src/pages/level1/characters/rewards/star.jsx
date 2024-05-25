import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'

export function Start({onClick, ...props}) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/assets/models/rewards/star.glb')
  const { actions } = useAnimations(animations, group)


  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.05;
    }
  });
 

  return (
    <group ref={group} {...props} dispose={null}>
      <RigidBody type='fixed' name='Start'>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model"rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Root">
            <group name="star" position={[0, 0.601, 0.418]} scale={80}>
              <mesh
                name="star_0"
                castShadow
                receiveShadow
                geometry={nodes.star_0.geometry}
                material={materials.glassesFrames}
                onClick={onClick}
              />
              <mesh
                name="star_1"
                castShadow
                receiveShadow
                geometry={nodes.star_1.geometry}
                material={materials.lens}
                onClick={onClick}
              />
              <mesh
                name="star_2"
                castShadow
                receiveShadow
                geometry={nodes.star_2.geometry}
                material={materials.Star}
                onClick={onClick}
              />
            </group>
          </group>
        </group>
      </group>

      </RigidBody>
    </group>
  )
}

useGLTF.preload('/assets/models/rewards/star.glb')