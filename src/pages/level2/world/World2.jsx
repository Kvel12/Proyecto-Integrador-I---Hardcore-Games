import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function World2(props) {
  const { nodes, materials } = useGLTF("/assets/models/world/level2.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[91.047, 2.371, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      >
        <group
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        >
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_002-material001"].geometry}
            material={materials.Material_002}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material"].geometry}
            material={materials.Material_001}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material001"].geometry}
            material={materials.Material_001}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material002"].geometry}
            material={materials.Material_001}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material003"].geometry}
            material={materials.Material_001}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material004"].geometry}
            material={materials.Material_001}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material005"].geometry}
            material={materials.Material_001}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material"].geometry}
            material={materials.Material_003}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material001"].geometry}
            material={materials.Material_003}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material002"].geometry}
            material={materials.Material_003}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material003"].geometry}
            material={materials.Material_003}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material004"].geometry}
            material={materials.Material_003}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material005"].geometry}
            material={materials.Material_003}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
        </group>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material006"].geometry}
          material={materials.Material_001}
          position={[-4.452, 7.442, -3.705]}
          rotation={[0, -1.298, 0]}
          scale={1.458}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_002-material"].geometry}
          material={materials.Material_002}
          position={[0.54, -8.06, 5.139]}
          scale={[0.109, 0.109, 0.169]}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material007"].geometry}
          material={materials.Material_001}
          scale={3.939}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material-material"].geometry}
          material={materials["Material.001"]}
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        />
        </RigidBody>
      </group>
      <group
        position={[65.782, 1.673, -31.515]}
        rotation={[-Math.PI / 2, 0, 0.393]}
        scale={[0.4, 0.3, 0.3]}
      >
        <group
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        >
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_002-material003"].geometry}
            material={materials["Material_002.001"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material010"].geometry}
            material={materials["Material_001.001"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material011"].geometry}
            material={materials["Material_001.001"]}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material012"].geometry}
            material={materials["Material_001.001"]}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material013"].geometry}
            material={materials["Material_001.001"]}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material014"].geometry}
            material={materials["Material_001.001"]}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material015"].geometry}
            material={materials["Material_001.001"]}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material006"].geometry}
            material={materials["Material_003.001"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material007"].geometry}
            material={materials["Material_003.001"]}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material008"].geometry}
            material={materials["Material_003.001"]}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material009"].geometry}
            material={materials["Material_003.001"]}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material010"].geometry}
            material={materials["Material_003.001"]}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material011"].geometry}
            material={materials["Material_003.001"]}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
        </group>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material008"].geometry}
          material={materials["Material_001.001"]}
          position={[-4.452, 7.442, -3.705]}
          rotation={[0, -1.298, 0]}
          scale={1.458}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_002-material002"].geometry}
          material={materials["Material_002.001"]}
          position={[0.54, -8.06, 5.139]}
          scale={[0.109, 0.109, 0.169]}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material009"].geometry}
          material={materials["Material_001.001"]}
          scale={3.939}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material-material001"].geometry}
          material={materials["Material.002"]}
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        />
        </RigidBody>
      </group>
      <group
        position={[25.077, 1.456, -68.206]}
        rotation={[-Math.PI / 2, 0, 1.313]}
        scale={[0.4, 0.3, 0.3]}
      >
        <group
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        >
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_002-material005"].geometry}
            material={materials["Material_002.004"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material018"].geometry}
            material={materials["Material_001.004"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material019"].geometry}
            material={materials["Material_001.004"]}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material020"].geometry}
            material={materials["Material_001.004"]}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material021"].geometry}
            material={materials["Material_001.004"]}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material022"].geometry}
            material={materials["Material_001.004"]}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_001-material023"].geometry}
            material={materials["Material_001.004"]}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material012"].geometry}
            material={materials["Material_003.004"]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material013"].geometry}
            material={materials["Material_003.004"]}
            position={[0, 32.108, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material014"].geometry}
            material={materials["Material_003.004"]}
            position={[-0.499, 63.741, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material015"].geometry}
            material={materials["Material_003.004"]}
            position={[-0.499, 95.331, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material016"].geometry}
            material={materials["Material_003.004"]}
            position={[-1.145, 126.316, 0]}
          />
          </RigidBody>
          <RigidBody colliders="trimesh" type="fixed">
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["Material_003-material017"].geometry}
            material={materials["Material_003.004"]}
            position={[-1.145, 157.266, 0]}
          />
          </RigidBody>
        </group>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material016"].geometry}
          material={materials["Material_001.004"]}
          position={[-4.452, 7.442, -3.705]}
          rotation={[0, -1.298, 0]}
          scale={1.458}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_002-material004"].geometry}
          material={materials["Material_002.004"]}
          position={[0.54, -8.06, 5.139]}
          scale={[0.109, 0.109, 0.169]}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material_001-material017"].geometry}
          material={materials["Material_001.004"]}
          scale={3.939}
        />
        </RigidBody>
        <RigidBody colliders="trimesh" type="fixed">
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Material-material002"].geometry}
          material={materials["Material.005"]}
          position={[0.864, -7.944, 1.282]}
          rotation={[Math.PI, 0, Math.PI / 2]}
          scale={0.779}
        />
        </RigidBody>
      </group>
      <group
        position={[13.201, 0, -95.132]}
        rotation={[-Math.PI / 2, 0, -0.219]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1109.27, 2150.615, 176.91]}>
          <RigidBody colliders="trimesh" type="fixed">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ceiling_rockterrain_0.geometry}
              material={materials.rockterrain}
              position={[0, 0, 0.001]}
            />
          </RigidBody>
          </group>

          <group position={[1109.27, 10.323, 176.91]}>
            <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow={false}
                receiveShadow={true}
                geometry={nodes.floor_rockterrain_0.geometry}
                material={materials.rockterrain}
                position={[0, 0, 0.001]}
              />
            </RigidBody>
          </group>

          <group position={[-365.552, 44.385, 207.488]}>
            <group position={[604.594, -16.491, 1239.11]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cliff1_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[40.4, 857.373, -21.784]}
                />
              </RigidBody>
            </group>

            <group
              position={[2434.29, -22.7, 216.135]}
              rotation={[0, -1.534, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cliff2_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[-50.907, 378.276, 100.072]}
                />
              </RigidBody>
            </group>

            <group position={[412.634, -40.715, -1386.892]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.cliff3_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[157.588, 446.014, 296.761]}
                />
              </RigidBody>
            </group>

            <group position={[2355.036, 593.315, 457.504]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar1_pilars_0.geometry}
                  material={materials.pilars}
                  position={[-12.704, 772.295, -1.596]}
                />
              </RigidBody>
            </group>
            <group
              position={[1288.797, -291.774, -1666.079]}
              rotation={[-Math.PI, 1.054, -Math.PI]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar1_1_pilars_0.geometry}
                  material={materials.pilars}
                  position={[-19.73, 1199.375, -2.48]}
                />
              </RigidBody>
            </group>
            <group
              position={[1505.524, 2079.271, 466.267]}
              rotation={[0, 1.225, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar2_pilars_0.geometry}
                  material={materials.pilars}
                  position={[41.783, -226.06, -58.313]}
                />
              </RigidBody>
            </group>
            <group
              position={[-149.144, 2079.271, 466.268]}
              rotation={[0, -0.725, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar2_1_pilars_0.geometry}
                  material={materials.pilars}
                  position={[48.677, -263.36, -67.935]}
                />
              </RigidBody>
            </group>

            <group
              position={[293.503, 654.936, -756.37]}
              rotation={[0, 1.083, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar3_pilars_0.geometry}
                  material={materials.pilars}
                  position={[28.786, 262.283, 24.954]}
                />
              </RigidBody>
            </group>

            <group position={[1875.088, 2076.131, 387.544]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar4_pilars_0.geometry}
                  material={materials.pilars}
                  position={[9.331, -173.206, -7.015]}
                />
              </RigidBody>
            </group>
            <group position={[1611.023, 2076.131, -1145.341]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar4_1_pilars_0.geometry}
                  material={materials.pilars}
                  position={[9.331, -173.206, -7.016]}
                />
              </RigidBody>
            </group>
            <group position={[2668.994, 2149.673, 584.026]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar5_pilars_0.geometry}
                  material={materials.pilars}
                  position={[38.681, -64.926, -10.328]}
                />
              </RigidBody>
            </group>
            <group position={[1092.731, 1.781, -578.569]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar6_pilars_0.geometry}
                  material={materials.pilars}
                  position={[15.65, 249.572, -30.119]}
                />
              </RigidBody>
            </group>
            <group position={[1361.784, 2086.638, 832.232]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar7_pilars_0.geometry}
                  material={materials.pilars}
                  position={[19.638, -101.801, 5.202]}
                />
              </RigidBody>
            </group>
            <group position={[1167.307, 1924.035, 786.711]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pilar8_pilars_0.geometry}
                  material={materials.pilars}
                  position={[13.733, -102.473, -6.609]}
                />
              </RigidBody>
            </group>
            <group position={[1934.657, -22.21, -430.613]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.smallrock1_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[-2.257, 4.589, 9.058]}
                />
              </RigidBody>
            </group>
            <group
              position={[1905.386, -31.004, -289.97]}
              rotation={[0.004, -0.42, 0.056]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.smallrock2_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[-1.769, 1.201, 3.414]}
                />
              </RigidBody>
            </group>
            <group
              position={[2051.408, -26.377, -600.12]}
              rotation={[0.055, -0.06, 0.041]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.smallrock3_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[1.284, 1.005, 6.591]}
                />
              </RigidBody>
            </group>
            <group position={[1799.561, -27.103, -534.508]}>
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.smallrock4_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[4.524, 0.125, 4.934]}
                />
              </RigidBody>
            </group>
            <group
              position={[522.014, 815.173, -173.729]}
              rotation={[-1.971, -1.349, -1.936]}
            >
              <RigidBody colliders="trimesh" type="fixed">
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.smallrock5_cliffs_0.geometry}
                  material={materials.cliffs}
                  position={[-11.314, 10.519, -7.913]}
                />
              </RigidBody>
            </group>
            <group position={[923.371, 20.037, 580.348]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrockcluster_cliffs_0.geometry}
                material={materials.cliffs}
                position={[1.828, -17.659, -40.336]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[80.404, -0.057, -51.862]}
        rotation={[-Math.PI / 2, 0, -1.093]}
        scale={0.01}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[1109.27, 2150.615, 176.91]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.ceiling_rockterrain_0001.geometry}
              material={materials["rockterrain.001"]}
              position={[0, 0, 0.001]}
            />
          </group>
          <group position={[1109.27, 10.323, 176.91]}>
          <RigidBody colliders="trimesh" type="fixed">
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.floor_rockterrain_0001.geometry}
              material={materials["rockterrain.001"]}
              position={[0, 0, 0.001]}
            />
          </RigidBody>
          </group>
          <group position={[-365.552, 44.385, 207.488]}>
            <group position={[604.594, -16.491, 1239.111]}>
            <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cliff1_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[40.4, 857.373, -21.784]}
              />
            </RigidBody>
            </group>
            <group
              position={[2434.29, -22.7, 216.135]}
              rotation={[0, -1.534, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cliff2_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[-50.908, 378.276, 100.072]}
              />
              </RigidBody>
            </group>
            <group position={[412.634, -40.715, -1386.892]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cliff3_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[157.587, 446.014, 296.763]}
              />
              </RigidBody>
            </group>
            <group position={[2355.036, 593.315, 457.503]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar1_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[-12.704, 772.295, -1.596]}
              />
              </RigidBody>
            </group>
            <group
              position={[1288.797, -291.774, -1666.079]}
              rotation={[-Math.PI, 1.054, -Math.PI]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar1_1_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[-19.729, 1199.375, -2.48]}
              />
              </RigidBody>
            </group>
            <group
              position={[1505.523, 2079.271, 466.267]}
              rotation={[0, 1.225, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar2_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[41.782, -226.06, -58.313]}
              />
              </RigidBody>
            </group>
            <group
              position={[-149.145, 2079.271, 466.267]}
              rotation={[0, -0.725, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar2_1_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[48.677, -263.36, -67.934]}
              />
              </RigidBody>
            </group>
            <group
              position={[293.503, 654.936, -756.371]}
              rotation={[0, 1.083, 0]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar3_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[28.785, 262.283, 24.955]}
              />
              </RigidBody>
            </group>
            <group position={[1875.088, 2076.131, 387.544]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar4_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[9.331, -173.206, -7.015]}
              />
              </RigidBody>
            </group>
            <group position={[1611.022, 2076.131, -1145.341]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar4_1_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[9.331, -173.206, -7.013]}
              />
              </RigidBody>
            </group>
            <group position={[2668.994, 2149.673, 584.026]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar5_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[38.68, -64.926, -10.328]}
              />
              </RigidBody>
            </group>
            <group position={[1092.73, 1.781, -578.568]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar6_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[15.65, 249.572, -30.119]}
              />
              </RigidBody>
            </group>
            <group position={[1361.784, 2086.638, 832.231]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar7_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[19.637, -101.801, 5.202]}
              />
              </RigidBody>
            </group>
            <group position={[1167.307, 1924.035, 786.71]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pilar8_pilars_0001.geometry}
                material={materials["pilars.001"]}
                position={[13.733, -102.474, -6.609]}
              />
              </RigidBody>
            </group>
            <group position={[1934.657, -22.21, -430.613]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrock1_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[-2.257, 4.589, 9.059]}
              />
              </RigidBody>
            </group>
            <group
              position={[1905.385, -31.004, -289.97]}
              rotation={[0.004, -0.42, 0.056]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrock2_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[-1.769, 1.201, 3.413]}
              />
              </RigidBody>
            </group>
            <group
              position={[2051.407, -26.377, -600.119]}
              rotation={[0.055, -0.06, 0.041]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrock3_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[1.284, 1.005, 6.591]}
              />
              </RigidBody>
            </group>
            <group position={[1799.56, -27.103, -534.508]}>
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrock4_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[4.524, 0.125, 4.935]}
              />
              </RigidBody>  
            </group>
            <group
              position={[522.013, 815.173, -173.729]}
              rotation={[-1.971, -1.349, -1.936]}
            >
              <RigidBody colliders="trimesh" type="fixed">
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrock5_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[-11.315, 10.519, -7.913]}
              />
              </RigidBody>
            </group>
            <group position={[923.371, 20.037, 580.348]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.smallrockcluster_cliffs_0001.geometry}
                material={materials["cliffs.001"]}
                position={[1.828, -17.659, -40.335]}
              />
            </group>
          </group>
        </group>
      </group>
      <group
        position={[1.053, -2.481, -2.705]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={2}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-0.532, 1.294, 1.389]}
            rotation={[Math.PI, -0.738, Math.PI]}
            scale={[0.01, 0.009, 0.01]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials["saltLamp_mtl.001"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.defaultMaterial002.geometry}
              material={materials["saltLamp_mtl.001"]}
              position={[0, 3.401, 0]}
              rotation={[-Math.PI, 0.754, -Math.PI]}
              scale={[0.991, 1.127, 0.991]}
            />
          </group>
        </group>
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BonesDecoration_lambert1_0.geometry}
        material={materials.lambert1}
      />
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base_lambert1_0.geometry}
        material={materials.lambert1}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WalkableFloor_lambert1_0.geometry}
        material={materials.lambert1}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GroundUnder_lambert1_0.geometry}
        material={materials.lambert1}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rocks_lambert1_0.geometry}
        material={materials.lambert1}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_1_Room_Boss_11lambert52_0.geometry}
        material={materials.Room_Boss_11lambert52}
        position={[0.338, -0.032, -15.168]}
        rotation={[Math.PI, -0.028, Math.PI]}
        scale={2.728}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_10_lambert1_0.geometry}
        material={materials.lambert1}
        position={[15.371, 0.576, -3.786]}
        rotation={[0, -0.941, 0]}
        scale={0.021}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_11_lambert1_0.geometry}
        material={materials.lambert1}
        position={[15.691, 0.068, -2.048]}
        rotation={[-0.165, -0.98, -0.293]}
        scale={0.021}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_12_lambert1_0.geometry}
        material={materials.lambert1}
        position={[16.37, -0.159, -2.108]}
        rotation={[-1.912, -0.696, -2.876]}
        scale={0.021}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_13_lambert1_0.geometry}
        material={materials.lambert1}
        position={[18.086, -0.077, -1.908]}
        rotation={[-2.376, -1.028, -2.94]}
        scale={0.017}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_14_lambert1_0.geometry}
        material={materials.lambert1}
        position={[19.17, -0.253, -2.225]}
        rotation={[-2.079, -0.921, -2.864]}
        scale={0.017}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_15_lambert1_0.geometry}
        material={materials.lambert1}
        position={[18.589, 0.543, 3.256]}
        rotation={[-2.492, -0.502, -3.023]}
        scale={0.017}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_16_lambert1_0.geometry}
        material={materials.lambert1}
        position={[16.963, 0.433, 3.069]}
        rotation={[-2.8, -0.207, -2.902]}
        scale={0.021}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_17_lambert1_0.geometry}
        material={materials.lambert1}
        position={[15.419, 0.092, 3.453]}
        rotation={[Math.PI, -1.173, Math.PI]}
        scale={0.021}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11LeftRock_18_Room_Boss_11lambert52_0.geometry
        }
        material={materials.Room_Boss_11lambert52}
        position={[14.075, -0.485, 5.391]}
        rotation={[-0.028, 0.775, 0.085]}
        scale={3.709}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11LeftRock_19_Room_Boss_11lambert49_0.geometry
        }
        material={materials.Room_Boss_11lambert49}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_2_Room_Boss_11lambert54_0.geometry}
        material={materials.Room_Boss_11lambert54}
        position={[3.78, 0.919, -15.817]}
        rotation={[-1.802, -0.003, -2.953]}
        scale={[0.043, 0.023, 0.023]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11LeftRock_20_Room_Boss_11lambert51_0.geometry
        }
        material={materials.Room_Boss_11lambert51}
        position={[-0.057, 0, -0.161]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11LeftRock_21_Room_Boss_11lambert52_0.geometry
        }
        material={materials.Room_Boss_11lambert52}
        position={[8.139, -0.09, 10.939]}
        rotation={[0, 0.827, 0]}
        scale={4.169}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11LeftRock_22_Room_Boss_11lambert57_0.geometry
        }
        material={materials.Room_Boss_11lambert57}
        position={[5.87, -0.029, 14.499]}
        rotation={[-0.021, 1.032, 0.025]}
        scale={3.858}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_3_Room_Boss_11lambert55_0.geometry}
        material={materials.Room_Boss_11lambert55}
        position={[26.021, 0.104, -23.724]}
        rotation={[0.032, 0.522, 0.043]}
        scale={0.876}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_4_Room_Boss_11lambert48_0.geometry}
        material={materials.Room_Boss_11lambert48}
        position={[5.189, -0.019, -14.896]}
        rotation={[0, -1.345, 0]}
        scale={2.788}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_5_Room_Boss_11lambert48_0.geometry}
        material={materials.Room_Boss_11lambert48}
        position={[5.661, -0.206, -13.006]}
        rotation={[-0.55, -1.031, -0.467]}
        scale={2.871}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_6_Room_Boss_11lambert49_0.geometry}
        material={materials.Room_Boss_11lambert49}
        position={[-0.035, 0, -0.037]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_7_Room_Boss_11lambert51_0.geometry}
        material={materials.Room_Boss_11lambert51}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_8_Room_Boss_11lambert52_0.geometry}
        material={materials.Room_Boss_11lambert52}
        position={[11.868, -0.126, -7.028]}
        rotation={[-Math.PI, 0.712, -Math.PI]}
        scale={3.175}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Room_Boss_11LeftRock_9_Room_Boss_11lambert55_0.geometry}
        material={materials.Room_Boss_11lambert55}
        position={[52.801, -0.717, -13.256]}
        rotation={[0.051, 0.356, 0.021]}
        scale={[1.491, 1.454, 1.491]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_1_Room_Boss_11lambert48_0.geometry
        }
        material={materials.Room_Boss_11lambert48}
        position={[-6.428, -0.039, 12.1]}
        rotation={[-0.171, -1.261, -0.192]}
        scale={3.9}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_10_Room_Boss_11lambert52_0.geometry
        }
        material={materials.Room_Boss_11lambert52}
        position={[-13.842, -0.266, -5.321]}
        rotation={[2.922, -0.634, 2.995]}
        scale={3.776}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">  
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_11_Room_Boss_11lambert48_0.geometry
        }
        material={materials.Room_Boss_11lambert48}
        position={[-11.042, -0.164, -7.695]}
        rotation={[2.958, -0.765, 3.032]}
        scale={3.066}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_12_Room_Boss_11lambert50_0.geometry
        }
        material={materials.Room_Boss_11lambert50}
        position={[-0.11, 0, -0.038]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_15_Room_Boss_11lambert53_0.geometry
        }
        material={materials.Room_Boss_11lambert53}
        position={[0.006, 0, -0.042]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_16_Room_Boss_11lambert50_0.geometry
        }
        material={materials.Room_Boss_11lambert50}
        position={[0.236, 0, 0.198]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_17_Room_Boss_11lambert49_0.geometry
        }
        material={materials.Room_Boss_11lambert49}
        position={[-0.032, 0, -0.064]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_18_Room_Boss_11lambert51_0.geometry
        }
        material={materials.Room_Boss_11lambert51}
        position={[-0.147, 0, 0.082]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_2_Room_Boss_11lambert58_0.geometry
        }
        material={materials.Room_Boss_11lambert58}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_3_Room_Boss_11lambert52_0.geometry
        }
        material={materials.Room_Boss_11lambert52}
        position={[-9.569, -0.225, 9.264]}
        rotation={[0, -0.751, 0]}
        scale={2.856}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_4_Room_Boss_11lambert54_0.geometry
        }
        material={materials.Room_Boss_11lambert54}
        position={[-13.802, 1.333, 6.636]}
        rotation={[-1.403, -0.159, -0.576]}
        scale={[0.076, 0.041, 0.041]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_5_Room_Boss_11lambert55_0.geometry
        }
        material={materials.Room_Boss_11lambert55}
        position={[-58.985, -4.292, 16.242]}
        rotation={[3.106, -0.381, 3.096]}
        scale={1.752}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_6_Room_Boss_11lambert49_0.geometry
        }
        material={materials.Room_Boss_11lambert49}
        position={[0.048, 0, 0.056]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_7_Room_Boss_11lambert50_0.geometry
        }
        material={materials.Room_Boss_11lambert50}
        position={[-0.136, 0, 0.009]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_8_Room_Boss_11lambert51_0.geometry
        }
        material={materials.Room_Boss_11lambert51}
        position={[0.102, 0, 0.089]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11RightRock_9_Room_Boss_11lambert54_0.geometry
        }
        material={materials.Room_Boss_11lambert54}
        position={[-15.966, 0.848, -5.086]}
        rotation={[-1.564, -0.231, -1.366]}
        scale={[0.061, 0.033, 0.033]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11SpikeTrap_2_Room_Boss_11lambert39_0.geometry
        }
        material={materials.Room_Boss_11lambert39}
        position={[-6, -0.016, -6]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11SpikeTrap_3_Room_Boss_11lambert39_0.geometry
        }
        material={materials.Room_Boss_11lambert39}
        position={[-6, -0.021, 6]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11SpikeTrap_4_Room_Boss_11lambert39_0.geometry
        }
        material={materials.Room_Boss_11lambert39}
        position={[6, -0.013, -6]}
      />
      </RigidBody>
      <RigidBody colliders="trimesh" type="fixed">
      <mesh
        castShadow
        receiveShadow
        geometry={
          nodes.Room_Boss_11SpikeTrap_5_Room_Boss_11lambert39_0.geometry
        }
        material={materials.Room_Boss_11lambert39}
        position={[6, -0.027, 6]}
      />
      </RigidBody>
    </group>
  );
}

useGLTF.preload("/assets/models/world/level2.glb");
