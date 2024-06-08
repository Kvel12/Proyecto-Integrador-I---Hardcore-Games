import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/mazeLevel3.glb");
  return (
    <group {...props} dispose={null}>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials['Material.003']}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials['Material.003']}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed" name='Arbol'>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={materials.Material_1}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.Material_2}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload("/assets/models/world/mazeLevel3.glb");


