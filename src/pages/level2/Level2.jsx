import { Perf } from "r3f-perf";
import { ContactShadows, KeyboardControls, Loader, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World from "./world/World";
import World2 from "./world/World2";
import Controls from "./controls/Controls";
import Avatar from "./characters/avatar/Avatar";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Dragon from "./Dragon";
import Fox from "./characters/fox/Fox";
import Lamp from "./characters/lamp/Lamp";

export default function Level2() {
  const map = useMovements();
  const [count, setCount] = useState(0);
  const [audio] = useState(new Audio("./assets/sounds/RuinasAudio.mp3"));
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      setUserInteracted(true);
    };

    document.addEventListener("click", handleInteraction);

    return () => {
      document.removeEventListener("click", handleInteraction);
    };
  }, []);

  useEffect(() => {
    if (userInteracted) {
      audio.loop = true;
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [userInteracted]);

  const lampPositions = [
    [0, 2, 0],
    [0, 2, 5],
    [0, 2, -5],
    [5, 2, 0],
    [-5, 2, 0],
  ];

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas camera={{ position: [0, 1, 0] }}>
          <Lights />
          <Perf position="top-left" />
          <Suspense fallback={null}>
            <Physics debug={false}>
              <World2 />
              <Ecctrl
                camInitDis={-3}
                camMaxDis={-3}
                maxVelLimit={5}
                jumpVel={4}
                position={[0, 5, 0]}
                name="Fox"
                onCollisionEnter={(e) => onCollisionFox(e)}
              >
                <Fox />
              </Ecctrl>
            </Physics>
            <Controls />
            {lampPositions.map((position, index) => (
              <Lamp key={index} position={position} />
            ))}
            <Dragon position={[0, 0, 0]} />
          </Suspense>
        </Canvas>
        <Loader />
      </KeyboardControls>
    </>
  );
}
