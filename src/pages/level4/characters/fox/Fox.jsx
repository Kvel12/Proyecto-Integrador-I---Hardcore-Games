import React, { useRef, useEffect, useState } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { useFox } from '../../../../context/FoxContext';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { socket } from "../../../../socket/socket-manager";
import Ecctrl from "ecctrl";
const poweredUpColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Colores para el poder

const createGradientTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 1;

  const context = canvas.getContext('2d');
  const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(0.5, 'yellow');
  gradient.addColorStop(1, 'blue');

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(10, 1);

  return texture;
};

const Aura = () => {
  const auraRef = useRef();

  useFrame(() => {
    // Hacer algo con el aura, como cambiar su tamaño, posición, color, etc.
  });

  return (
    <mesh ref={auraRef} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="white"
        opacity={0.5}
        transparent
        map={createGradientTexture()}
      />
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
};

export default function Fox() {
  const foxBodyRef = useRef();
  const foxRef = useRef();
  const { fox, setFox } = useFox();
  const { nodes, materials, animations } = useGLTF('/assets/models/fox/Prueba2.glb');
  const { actions } = useAnimations(animations, foxRef);
  const [showAura, setShowAura] = useState(false);

  useEffect(() => {
    setFox({
      ref: foxRef.current,
      body: foxBodyRef.current
    });
  }, [setFox]);

  useEffect(() => {
    actions[fox.animation]?.reset().fadeIn(0.5).play();
    return () => {
      if (actions[fox.animation]) actions[fox.animation].fadeOut(0.5);
    };
  }, [actions, fox.animation]);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'p') {
        setShowAura(prev => !prev);
        setTimeout(() => {
          setShowAura(prev => !prev);
        }, 1000);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    if (fox.isPoweredUp) {
      const originalColors = [];
      // Guardar los colores originales del material del zorro
      for (let key in materials) {
        if (materials[key].color) {
          originalColors[key] = materials[key].color.getHex();
        }
      }

      // Función para cambiar los colores del zorro
      const changeColors = () => {
        let index = 0;
        const interval = setInterval(() => {
          if (index >= poweredUpColors.length) {
            clearInterval(interval);
            // Restaurar los colores originales después de que termine la animación
            for (let key in materials) {
              if (materials[key].color) {
                materials[key].color.setHex(originalColors[key]);
              }
            }
          } else {
            for (let key in materials) {
              if (materials[key].color) {
                materials[key].color.set(poweredUpColors[index]);
              }
            }
            index++;
          }
        }, 100); // Cambiar colores cada 0.3 segundos
      };

      changeColors();
    }
  }, [fox.isPoweredUp, materials]);

  useEffect(() => {
    if (fox.isInvisible) {
      nodes.Fox_Mesh.material.transparent = true;
      nodes.Fox_Mesh.material.opacity = 0.3;
    } else {
      nodes.Fox_Mesh.material.transparent = false;
      nodes.Fox_Mesh.material.opacity = 1;
    }
  }, [fox.isInvisible, nodes.Fox_Mesh.material]);

  return (
    fox.isInvisible ? (
      <group ref={foxRef} name="Scene">
        <group
          position={[0, -0.63, 0]}
          rotation={[0.094, -Math.PI / 1.7, 0.094]}
          scale={0.01}
        >
          <skinnedMesh
            name="Fox_Mesh"
            geometry={nodes.Fox_Mesh.geometry}
            material={materials.Fox}
            skeleton={nodes.Fox_Mesh.skeleton}
          />
          <primitive object={nodes.Fox_Pelvis} />
        </group>
      </group>
    ) : (
      <RigidBody ref={foxBodyRef} position={[0, 0, 0]} colliders={false} name='Fox'>
        <group ref={foxRef} name="Scene">
          {showAura && <Aura />}
          <group
            position={[0, -0.63, 0]}
            rotation={[0, -Math.PI / 1.7, 0.094]}
            scale={0.01}
          >
            <skinnedMesh
              name="Fox_Mesh"
              geometry={nodes.Fox_Mesh.geometry}
              material={materials.Fox}
              skeleton={nodes.Fox_Mesh.skeleton}
            />
            <primitive object={nodes.Fox_Pelvis} />
          </group>
        </group>
      </RigidBody>
    )
  );
}

useGLTF.preload('/assets/models/fox/Prueba2.glb');
