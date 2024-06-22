import React, { useRef, useEffect, useState} from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier';
import { useFrame } from '@react-three/fiber';

export function Evil_Warrior(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('/assets/models/evil_warrior.glb')
    const { actions } = useAnimations(animations, group);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        console.log("Available Actions Evil_Warrior: ", actions);
        if(actions['Take 001']){
            actions['Take 001'].play();
        }
      }, [actions]);

      useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'p') {
            setVisible(false);
            setTimeout(() => {
              setVisible(true);
            }, 500);
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    
    return (
      <group ref={group} position={[22,13,-5]}{...props} dispose={null}>
        <RigidBody name='Evil' type='fixed'>
        <group name="Sketchfab_Scene" visible={visible}>
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="15fdb51d4b264f24933c18cf6430ddacfbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Evil_Warrior_Mesh_Base">
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials.M_Evil_Warrior}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        </RigidBody>
      </group>
    )
  }
  
  useGLTF.preload('/assets/models/evil_warrior.glb');
  

