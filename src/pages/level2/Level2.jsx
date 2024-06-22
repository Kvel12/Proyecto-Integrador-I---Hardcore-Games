import { Perf } from "r3f-perf";
import {
  ContactShadows,
  KeyboardControls,
  Loader,
  OrbitControls,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
import WelcomeText from "./abstractions/WelcomeText";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import World2 from "./world/World2";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import RewardCounterDisplay from "./characters/rewards/RewardCountDisplay";
import RewardSpawner from "./characters/rewards/rewardSpawner";
import Dragon from "./Dragon";
import Fox from "./characters/fox/Fox";
import Lamp from "./characters/lamp/Lamp";
import Level2Background from "./Level2Background";
import HealthBar from "../../components/HealthBar";
import { Fuego } from "./Fuego";
import FireFlamesSpawner from "./characters/rewards/FireFlamesSpawner";

export default function Level2() {
  const map = useMovements();
  const [count, setCount] = useState(0);
  const [audio] = useState(new Audio("./assets/sounds/RuinasAudio.mp3"));
  const [userInteracted, setUserInteracted] = useState(false);
  const [lives, setLives] = useState(5);
  const maxLives = 5;
  const [rewardCounters, setRewardCounters] = useState([]);
  const audioDerrota = new Audio("./assets/sounds/derrota.mp3");

  const handleCollect = (item) => {
    console.log(`Collected ${item.name}`);
    setRewardCounters((prevCounters) => ({
      ...prevCounters,
      [item.name]: (prevCounters[item.name] || 0) + 1
    }));
  };

  const decreaseLives = () => {
    if (lives > 0) {
      setLives((prevLives) => {
        const newLives = prevLives - 1;
        if (newLives === 0) {
          audioDerrota.play();
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        }
        return newLives;
      });
    }
  };

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
    [0, -1, 0],
    [0, -1, 5],
    [0, -1, -5],
    [5, -1, 0],

  ];

  return (
    <>
      <KeyboardControls map={map}>
        <div>
          <HealthBar lives={lives} maxLives={maxLives} />
        </div>
        <Level2Background />
        <Canvas camera={{ position: [0, 2, 0] }}>
          <Lights />
          <Suspense fallback={null}>
            <Physics debug={false}>
              <World2 />
              <Ecctrl
                camInitDis={-3}
                camMaxDis={-3}
                maxVelLimit={5}
                jumpVel={4}
                position={[0, 4, 0]}
                name="Fox"
                onCollisionEnter={({ other }) => {
                  if (
                    other.rigidBodyObject.name === "trampa" ||
                    other.rigidBodyObject.name == "dragon" ||
                    other.rigidBodyObject.name === "Fuego"
                  ) {
                    decreaseLives();
                  }
                }}
              >
                <Fox />
              </Ecctrl>
              <RewardSpawner onCollect={handleCollect} />
              <FireFlamesSpawner />
              <Dragon position={[-4, -7, 0]} />
            </Physics>
            <Controls />
            {lampPositions.map((position, index) => (
              <Lamp key={index} position={position} />
            ))}
          </Suspense>
        </Canvas>
        <Loader />
      </KeyboardControls>
      <RewardCounterDisplay rewardCounters={rewardCounters} />
    </>
  );
}
