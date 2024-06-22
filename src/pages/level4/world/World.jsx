import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Model({showPlatform5, showRest, appleVisibility, keyVisibility, starVisibility}) {
  const { nodes, materials } = useGLTF('/assets/models/world/Level4-1.glb')
  return (
    <group dispose={null}>
      <group name="Scene">
        <group name="tree_trunk_02" />
        <group name="tree_trunk_01" />
        <group name="tree_02" />
        <group name="tree_01" />
        <group name="star" />
        <group name="spikes" />
        <group name="sign_direction" />
        <group name="sign_caution" />
        <group name="rock_03" />
        <group name="rock_02" />
        <group name="rock_01" />
        <group name="platform_02" />
        <group name="platform_01" />
        <group name="ladder_tile_broken" />
        <group name="ladder_tile" />
        <group name="ladder_endcap" />
        <group name="key001" />
        <group name="ground_02_tile" />
        <group name="ground_02" />
        <group name="ground_01_tile" />
        <group name="ground_01" />
        <group name="grass_02" />
        <group name="grass_01" />
        <group name="fruit" />
        <group name="daisy" />
        <group name="crate" />
        <group name="coin" />
        <group name="checkpoint" />
        <group name="cactus_02" />
        <group name="cactus_01" />
        <group name="bush_05" />
        <group name="bush_04" />
        <group name="bush_03" />
        <group name="bush_02" />
        <group name="bush_01" />
        <group name="bridge_tile" />
        <group name="bridge_start" />
        <group name="bouncer" />
        <group name="barrel" />

        <RigidBody colliders="trimesh" type="fixed">
        <group name="mountain1">
          <group name="ground_02001">
            <mesh
              name="ground_02_toon_material_0001"
              geometry={nodes.ground_02_toon_material_0001.geometry}
              material={materials['toon_material.002']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="little_mountain2">
          <group name="ground_01001">
            <mesh
              name="ground_01_toon_material_0001"
              geometry={nodes.ground_01_toon_material_0001.geometry}
              material={materials['toon_material.003']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="little_mountain1">
          <group name="ground_01002">
            <mesh
              name="ground_01_toon_material_0002"
              geometry={nodes.ground_01_toon_material_0002.geometry}
              material={materials['toon_material.004']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="little_mountain3">
          <group name="ground_01003">
            <mesh
              name="ground_01_toon_material_0003"
              geometry={nodes.ground_01_toon_material_0003.geometry}
              material={materials['toon_material.005']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="little_mountain4">
          <group name="ground_01004">
            <mesh
              name="ground_01_toon_material_0004"
              geometry={nodes.ground_01_toon_material_0004.geometry}
              material={materials['toon_material.006']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="mountain2">
          <group name="ground_02002">
            <mesh
              name="ground_02_toon_material_0002"
              geometry={nodes.ground_02_toon_material_0002.geometry}
              material={materials['toon_material.007']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform1">
          <group name="platform_01001">
            <mesh
              name="platform_01_toon_material_0001"
              geometry={nodes.platform_01_toon_material_0001.geometry}
              material={materials['toon_material.008']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform2">
          <group name="platform_01002">
            <mesh
              name="platform_01_toon_material_0002"
              geometry={nodes.platform_01_toon_material_0002.geometry}
              material={materials['toon_material.009']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform3">
          <group name="platform_01003">
            <mesh
              name="platform_01_toon_material_0003"
              geometry={nodes.platform_01_toon_material_0003.geometry}
              material={materials['toon_material.010']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform4">
          <group name="platform_01004">
            <mesh
              name="platform_01_toon_material_0004"
              geometry={nodes.platform_01_toon_material_0004.geometry}
              material={materials['toon_material.011']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform6">
          <group name="platform_01006">
            <mesh
              name="platform_01_toon_material_0006"
              geometry={nodes.platform_01_toon_material_0006.geometry}
              material={materials['toon_material.013']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="begin1">
          <group name="bridge_start001">
            <mesh
              name="bridge_start_toon_material_0001"
              geometry={nodes.bridge_start_toon_material_0001.geometry}
              material={materials['toon_material.014']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="begin2">
          <group name="bridge_start002">
            <mesh
              name="bridge_start_toon_material_0002"
              geometry={nodes.bridge_start_toon_material_0002.geometry}
              material={materials['toon_material.015']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft1">
          <group name="bridge_tile001">
            <mesh
              name="bridge_tile_toon_material_0001"
              geometry={nodes.bridge_tile_toon_material_0001.geometry}
              material={materials['toon_material.016']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft2">
          <group name="bridge_tile002">
            <mesh
              name="bridge_tile_toon_material_0002"
              geometry={nodes.bridge_tile_toon_material_0002.geometry}
              material={materials['toon_material.017']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft3">
          <group name="bridge_tile003">
            <mesh
              name="bridge_tile_toon_material_0003"
              geometry={nodes.bridge_tile_toon_material_0003.geometry}
              material={materials['toon_material.018']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft5">
          <group name="bridge_tile011">
            <mesh
              name="bridge_tile_toon_material_0011"
              geometry={nodes.bridge_tile_toon_material_0011.geometry}
              material={materials['toon_material.032']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="end1">
          <group name="bridge_start003">
            <mesh
              name="bridge_start_toon_material_0003"
              geometry={nodes.bridge_start_toon_material_0003.geometry}
              material={materials['toon_material.020']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform7">
          <group name="platform_01007">
            <mesh
              name="platform_01_toon_material_0007"
              geometry={nodes.platform_01_toon_material_0007.geometry}
              material={materials['toon_material.021']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight1">
          <group name="bridge_tile005">
            <mesh
              name="bridge_tile_toon_material_0005"
              geometry={nodes.bridge_tile_toon_material_0005.geometry}
              material={materials['toon_material.022']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight2">
          <group name="bridge_tile006">
            <mesh
              name="bridge_tile_toon_material_0006"
              geometry={nodes.bridge_tile_toon_material_0006.geometry}
              material={materials['toon_material.023']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight3">
          <group name="bridge_tile007">
            <mesh
              name="bridge_tile_toon_material_0007"
              geometry={nodes.bridge_tile_toon_material_0007.geometry}
              material={materials['toon_material.024']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight4">
          <group name="bridge_tile008">
            <mesh
              name="bridge_tile_toon_material_0008"
              geometry={nodes.bridge_tile_toon_material_0008.geometry}
              material={materials['toon_material.025']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight5">
          <group name="bridge_tile009">
            <mesh
              name="bridge_tile_toon_material_0009"
              geometry={nodes.bridge_tile_toon_material_0009.geometry}
              material={materials['toon_material.026']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeRight6">
          <group name="bridge_tile010">
            <mesh
              name="bridge_tile_toon_material_0010"
              geometry={nodes.bridge_tile_toon_material_0010.geometry}
              material={materials['toon_material.027']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="end2">
          <group name="bridge_start004">
            <mesh
              name="bridge_start_toon_material_0004"
              geometry={nodes.bridge_start_toon_material_0004.geometry}
              material={materials['toon_material.028']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform8">
          <group name="platform_01008">
            <mesh
              name="platform_01_toon_material_0008"
              geometry={nodes.platform_01_toon_material_0008.geometry}
              material={materials['toon_material.029']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform9">
          <group name="platform_01009">
            <mesh
              name="platform_01_toon_material_0009"
              geometry={nodes.platform_01_toon_material_0009.geometry}
              material={materials['toon_material.030']}
            />
          </group>
        </group>
        </RigidBody>
        {showPlatform5 && (
        <RigidBody colliders="trimesh" type="fixed">
        <group name="platform5">
          <group name="platform_01005">
            <mesh
              name="platform_01_toon_material_0005"
              geometry={nodes.platform_01_toon_material_0005.geometry}
              material={materials['toon_material.012']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        {showRest && (
          <>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft4">
          <group name="bridge_tile004">
            <mesh
              name="bridge_tile_toon_material_0004"
              geometry={nodes.bridge_tile_toon_material_0004.geometry}
              material={materials['toon_material.019']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="end3">
          <group name="bridge_start005">
            <mesh
              name="bridge_start_toon_material_0005"
              geometry={nodes.bridge_start_toon_material_0005.geometry}
              material={materials['toon_material.031']}
            />
          </group>
        </group>
        </RigidBody>
        
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft6">
          <group name="bridge_tile012">
            <mesh
              name="bridge_tile_toon_material_0012"
              geometry={nodes.bridge_tile_toon_material_0012.geometry}
              material={materials['toon_material.033']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft7">
          <group name="bridge_tile013">
            <mesh
              name="bridge_tile_toon_material_0013"
              geometry={nodes.bridge_tile_toon_material_0013.geometry}
              material={materials['toon_material.034']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="bridgeLeft8">
          <group name="bridge_tile014">
            <mesh
              name="bridge_tile_toon_material_0014"
              geometry={nodes.bridge_tile_toon_material_0014.geometry}
              material={materials['toon_material.035']}
            />
          </group>
        </group>
        </RigidBody>
        </>
        )}

        <group name="Flag">
          <group name="checkpoint001">
            <mesh
              name="checkpoint_toon_material_secondary_0001"
              geometry={nodes.checkpoint_toon_material_secondary_0001.geometry}
              material={materials['toon_material_secondary.001']}
            />
          </group>
        </group>
        <RigidBody name='flag' type="fixed">
        <group name="Flagpole">
          <group name="checkpoint002">
            <mesh
              name="checkpoint_toon_material_0001"
              geometry={nodes.checkpoint_toon_material_0001.geometry}
              material={materials['toon_material.036']}
            />
          </group>
        </group>
        </RigidBody>
        <group name="Sign1">
          <group name="sign_direction001">
            <mesh
              name="sign_direction_toon_material_0001"
              geometry={nodes.sign_direction_toon_material_0001.geometry}
              material={materials['toon_material.037']}
            />
          </group>
        </group>
        <group name="Sign2">
          <group name="sign_direction002">
            <mesh
              name="sign_direction_toon_material_0002"
              geometry={nodes.sign_direction_toon_material_0002.geometry}
              material={materials['toon_material.038']}
            />
          </group>
        </group>
        {keyVisibility.Key1 && (
        <RigidBody name='Key1' type='fixed'>
        <group name="Key1">
          <group name="key002">
            <mesh
              name="key001_toon_material_0001"
              geometry={nodes.key001_toon_material_0001.geometry}
              material={materials['toon_material.039']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        {keyVisibility.Key2 && (
        <RigidBody name='Key2' type='fixed'>
        <group name="Key2">
          <group name="key003">
            <mesh
              name="key001_toon_material_0002"
              geometry={nodes.key001_toon_material_0002.geometry}
              material={materials['toon_material.040']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        <RigidBody name='cactus' type='fixed'>
        <group name="Cactus1">
          <group name="cactus_02001" />
        </group>
        <group name="Cactus2">
          <group name="cactus_02002">
            <mesh
              name="cactus_02_toon_material_0002"
              geometry={nodes.cactus_02_toon_material_0002.geometry}
              material={materials['toon_material.042']}
            />
          </group>
        </group>
        <group name="Cactus3">
          <group name="cactus_02003">
            <mesh
              name="cactus_02_toon_material_0003"
              geometry={nodes.cactus_02_toon_material_0003.geometry}
              material={materials['toon_material.043']}
            />
          </group>
        </group>
        <group name="Cactus4">
          <group name="cactus_02004">
            <mesh
              name="cactus_02_toon_material_0004"
              geometry={nodes.cactus_02_toon_material_0004.geometry}
              material={materials['toon_material.044']}
            />
          </group>
        </group>
        <group name="Cactus5">
          <group name="cactus_02005">
            <mesh
              name="cactus_02_toon_material_0005"
              geometry={nodes.cactus_02_toon_material_0005.geometry}
              material={materials['toon_material.045']}
            />
          </group>
        </group>
        <group name="Cactus6">
          <group name="cactus_02006">
            <mesh
              name="cactus_02_toon_material_0006"
              geometry={nodes.cactus_02_toon_material_0006.geometry}
              material={materials['toon_material.046']}
            />
          </group>
        </group>
        <group name="Cactus7">
          <group name="cactus_02007">
            <mesh
              name="cactus_02_toon_material_0007"
              geometry={nodes.cactus_02_toon_material_0007.geometry}
              material={materials['toon_material.047']}
            />
          </group>
        </group>
        <group name="Cactus8">
          <group name="cactus_02008">
            <mesh
              name="cactus_02_toon_material_0008"
              geometry={nodes.cactus_02_toon_material_0008.geometry}
              material={materials['toon_material.048']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree1">
          <group name="tree_02001">
            <mesh
              name="tree_02_toon_material_0001"
              geometry={nodes.tree_02_toon_material_0001.geometry}
              material={materials['toon_material.049']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree2">
          <group name="tree_02002">
            <mesh
              name="tree_02_toon_material_0002"
              geometry={nodes.tree_02_toon_material_0002.geometry}
              material={materials['toon_material.050']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree3">
          <group name="tree_02003">
            <mesh
              name="tree_02_toon_material_0003"
              geometry={nodes.tree_02_toon_material_0003.geometry}
              material={materials['toon_material.051']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree4">
          <group name="tree_02004">
            <mesh
              name="tree_02_toon_material_0004"
              geometry={nodes.tree_02_toon_material_0004.geometry}
              material={materials['toon_material.052']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree4001">
          <group name="tree_02005">
            <mesh
              name="tree_02_toon_material_0005"
              geometry={nodes.tree_02_toon_material_0005.geometry}
              material={materials['toon_material.053']}
            />
          </group>
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Tree4002">
          <group name="tree_02006">
            <mesh
              name="tree_02_toon_material_0006"
              geometry={nodes.tree_02_toon_material_0006.geometry}
              material={materials['toon_material.054']}
            />
          </group>
        </group>
        </RigidBody>
        <group name="Danger_Sign">
          <group name="sign_caution001">
            <mesh
              name="sign_caution_toon_material_0001"
              geometry={nodes.sign_caution_toon_material_0001.geometry}
              material={materials['toon_material.055']}
            />
          </group>
        </group>
        <group name="Bush1">
          <group name="bush_05001">
            <mesh
              name="bush_05_toon_material_0001"
              geometry={nodes.bush_05_toon_material_0001.geometry}
              material={materials['toon_material.056']}
            />
          </group>
        </group>
        <group name="Bush2">
          <group name="bush_05002">
            <mesh
              name="bush_05_toon_material_0002"
              geometry={nodes.bush_05_toon_material_0002.geometry}
              material={materials['toon_material.057']}
            />
          </group>
        </group>
        <group name="Bush3">
          <group name="bush_05003">
            <mesh
              name="bush_05_toon_material_0003"
              geometry={nodes.bush_05_toon_material_0003.geometry}
              material={materials['toon_material.058']}
            />
          </group>
        </group>
        <group name="Bush4">
          <group name="bush_05004">
            <mesh
              name="bush_05_toon_material_0004"
              geometry={nodes.bush_05_toon_material_0004.geometry}
              material={materials['toon_material.059']}
            />
          </group>
        </group>
        <group name="Bush5">
          <group name="bush_05005">
            <mesh
              name="bush_05_toon_material_0005"
              geometry={nodes.bush_05_toon_material_0005.geometry}
              material={materials['toon_material.060']}
            />
          </group>
        </group>
        <group name="Bush6">
          <group name="bush_05006">
            <mesh
              name="bush_05_toon_material_0006"
              geometry={nodes.bush_05_toon_material_0006.geometry}
              material={materials['toon_material.061']}
            />
          </group>
        </group>
        {starVisibility.Start1 && (
        <RigidBody name='Start1' type='fixed'>
        <group name="Star1">
          <group name="star001">
            <mesh
              name="star_toon_material_0001"
              geometry={nodes.star_toon_material_0001.geometry}
              material={materials['toon_material.062']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        {starVisibility.Start2 && (
        <RigidBody name='Start2' type='fixed'>
        <group name="Star2">
          <group name="star002">
            <mesh
              name="star_toon_material_0002"
              geometry={nodes.star_toon_material_0002.geometry}
              material={materials['toon_material.063']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        {starVisibility.Start3 && (
        <RigidBody name='Start3' type='fixed'>
        <group name="Star3">
          <group name="star003">
            <mesh
              name="star_toon_material_0003"
              geometry={nodes.star_toon_material_0003.geometry}
              material={materials['toon_material.064']}
            />
          </group>
        </group>
        </RigidBody>
        )}
        <group name="Sign3">
          <group name="sign_direction003">
            <mesh
              name="sign_direction_toon_material_0003"
              geometry={nodes.sign_direction_toon_material_0003.geometry}
              material={materials['toon_material.065']}
            />
          </group>
        </group>
        <group name="Sign3001">
          <group name="sign_direction004">
            <mesh
              name="sign_direction_toon_material_0004"
              geometry={nodes.sign_direction_toon_material_0004.geometry}
              material={materials['toon_material.066']}
            />
          </group>
        </group>
        <group name="BushFruit1" />
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Barrel1">
          <mesh
            name="barrel_toon_material_0001"
            geometry={nodes.barrel_toon_material_0001.geometry}
            material={materials['toon_material.067']}
          />
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Barrel2">
          <mesh
            name="barrel_toon_material_0002"
            geometry={nodes.barrel_toon_material_0002.geometry}
            material={materials['toon_material.068']}
          />
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Barrel3">
          <mesh
            name="barrel_toon_material_0003"
            geometry={nodes.barrel_toon_material_0003.geometry}
            material={materials['toon_material.069']}
          />
        </group>
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <group name="Barrel4">
          <mesh
            name="barrel_toon_material_0004"
            geometry={nodes.barrel_toon_material_0004.geometry}
            material={materials['toon_material.070']}
          />
        </group>
        </RigidBody>
        {appleVisibility.apple1 && (
        <RigidBody name='apple1' type='fixed'>
        <group name="Apple1">
          <mesh
            name="fruit_toon_material_0001"
            geometry={nodes.fruit_toon_material_0001.geometry}
            material={materials['toon_material.071']}
          />
        </group>
        </RigidBody>
        )}
        {appleVisibility.apple2 && (
        <RigidBody name='apple2' type='fixed'>
        <group name="Apple2">
          <mesh
            name="fruit_toon_material_0002"
            geometry={nodes.fruit_toon_material_0002.geometry}
            material={materials['toon_material.072']}
          />
        </group>
        </RigidBody>
        )}
        <RigidBody colliders="trimesh" type="fixed" name='plano'>
        <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials.Transparent} />
        </RigidBody>
      </group>
    </group>
  )
}

useGLTF.preload('/assets/models/world/Level4-1.glb')