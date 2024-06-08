import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function World(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/Level3.glb");
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
      <group position={[-6, -0.016, -6]}>
        <RigidBody colliders="trimesh" type="fixed" name="trampa">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SpikeTrap1.geometry}
          material={materials['Room_Boss_11lambert39.001']}
          position={[5.988, 0.011, 5.811]}
          scale={0.001}
        />
        </RigidBody>
      </group>
      <group position={[-6, -0.016, -6]}>
        <RigidBody colliders="trimesh" type="fixed" name="trampa">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SpikeTrap2.geometry}
          material={materials['Room_Boss_11lambert39.002']}
          position={[6.017, 0.011, 5.811]}
          scale={0.001}
        />
        </RigidBody>
      </group>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0.geometry}
        material={materials.Material_0}
        position={[0, -0.004, 0]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed" name='Arbol'>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_1.geometry}
        material={materials.Material_1}
        position={[0, -0.005, 0]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_2.geometry}
        material={materials.Material_2}
        position={[0, -0.005, 0]}
      />
      </RigidBody>
    </group>
  )
}

useGLTF.preload("/assets/models/world/Level3.glb");

