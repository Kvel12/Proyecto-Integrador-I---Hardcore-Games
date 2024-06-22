import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls, Text } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect, useRef } from "react";
import Fox from "./characters/fox/Fox";
import WelcomeText from "./abstractions/WelcomeText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import Sound from "./abstractions/Sound";
import World from "./world/World";
import RewardSpawner from "./characters/rewards/RewardSpawner";
import RewardCounterDisplay from "./characters/rewards/RewardCountDisplay";
import HealthBar from "../../components/HealthBar";
import { useFox } from "../../context/FoxContext";
import { useNavigate } from "react-router-dom";
import { Evil_Warrior } from "./evilWarrior";

export default function Level4() {

  const [showInstructions, setShowInstructions] = useState(false);
  const map = useMovements();
  const audioRef = useRef(new Audio("./assets/sounds/mundoDuendes.mp3"));
  const [userInteracted, setUserInteracted] = useState(false);
  const [rewardCounters, setRewardCounters] = useState([]);
  const [lives, setLives] = useState(5);
  const maxLives = 5;
  const [showGlow, setShowGlow] = useState(false);
  const navigate = useNavigate();
  const { setIsInvisible, activatePower } = useFox();
  const audioDerrota = new Audio("./assets/sounds/derrota.mp3");
  const [volume, setVolume] = useState(0.5);
  const [showPlatform5, setShowPlatform5] = useState(false);
  const [showRest, setShowRest] = useState(false);
  const [appleVisibility, setAppleVisibility] = useState({
    apple1: true,
    apple2: true,
  });
  const [keyVisibility, setKeyVisibility] = useState({
    Key1: true,
    Key2: true,
  });
  const [starVisibility, setStartVisibility] = useState({
    Start1: true,
    Start2: true,
    Start3: true,
  });

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

  const handleCollect = (item) => {
    console.log(`Collected ${item.name}`);
    setRewardCounters((prevCounters) => ({
      ...prevCounters,
      [item.name]: (prevCounters[item.name] || 0) + 1,
    }));

    if (item.name === "GemPower") {
      console.log("¡El zorro ha obtenido el poder de la gema!");
      setIsInvisible(true); // Activar el vuelo del zorro

      // Desactivar el poder después de un segundo
      setTimeout(() => {
        setIsInvisible(false);
        console.log("El poder de la gema se ha desactivado.");
      }, 3000);
    }
  };

  const handleCollision = (e) => {
    if (e.rigidBodyObject.name === "Key1") {
      setShowPlatform5(true);
      setKeyVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if(e.rigidBodyObject.name === 'Evil'){
      decreaseLives();
    }
    if (e.rigidBodyObject.name === "Key2") {
      setShowRest(true);
      setKeyVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if (e.rigidBodyObject.name === "cactus") {
      decreaseLives();
    }
    if (e.rigidBodyObject.name === "Start1") {
      activatePower();
      setStartVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if (e.rigidBodyObject.name === "Start2") {
      activatePower();
      setStartVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if (e.rigidBodyObject.name === "Start3") {
      activatePower();
      setStartVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if (
      e.rigidBodyObject.name === "apple1" ||
      e.rigidBodyObject.name === "apple2"
    ) {
      if (lives < maxLives) {
        setLives((prevLives) => prevLives + 1);
      }
      setAppleVisibility((prevVisibility) => ({
        ...prevVisibility,
        [e.rigidBodyObject.name]: false,
      }));
    }
    if (e.rigidBodyObject.name === "plano") {
      if (lives > 0) {
        setLives((prevLives) => {
          const newLives = prevLives - prevLives;
          if (newLives === 0) {
            audioDerrota.play();
            setTimeout(() => {
              window.location.reload();
            }, 3500);
          }
        });
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume;

    if (userInteracted && audio.paused) {
      audio.play();
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [userInteracted, volume]);

  const handleVolumeChange = (event) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const playAudio = () => {
    setUserInteracted(true);
  };

  const muteAudio = () => {
    setUserInteracted(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <>
      <KeyboardControls map={map}>
        <div>
          <HealthBar lives={lives} maxLives={maxLives} />
        </div>

        <Canvas camera={{ position: [0, 2, 0] }}>
          <Lights />
          <Environments />
          <Perf position="top-left" />
          <Suspense fallback={null}>
            <Physics debug={false}>
              <World
                showPlatform5={showPlatform5}
                showRest={showRest}
                appleVisibility={appleVisibility}
                keyVisibility={keyVisibility}
                starVisibility={starVisibility}
              />
              <Ecctrl
                camInitDis={-5}
                camMaxDis={-5}
                maxVelLimit={4}
                jumpVel={7}
                position={[0, 20, 0]}
                rotation={[0, Math.PI / 2, 0]}
                name="Fox"
                onCollisionEnter={handleCollision}
              >
                <Fox />
              </Ecctrl>
              <RewardSpawner onCollect={handleCollect} />
              <Evil_Warrior rotation={[0, Math.PI/2, 0]}/>
              <Evil_Warrior position={[2,10.8,4]}/>
            </Physics>
            <WelcomeText position={[3, 13, -7]} />

            <Text
              position={[3, 12, -5]}
              fontSize={0.5}
              color="black"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.05}
              outlineColor="white"
              depthOffset={1}
              
            >
              Necesitas la ayuda de otro jugador {"\n"}
              para llegar hasta el final del{"\n"}
              juego
            </Text>

            <Controls />
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <RewardCounterDisplay rewardCounters={rewardCounters} />
      {/* Control de volumen */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          zIndex: "9999",
        }}
      >
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          disabled={!userInteracted}
        />
      </div>
      {/* Boton para iniciar la reprodución del audio */}
      <button
        onClick={playAudio}
        style={{
          position: "absolute",
          top: "50px",
          right: "10px",
          zIndex: "9999",
        }}
        disabled={userInteracted}
      >
        Reproducir audio
      </button>

      {/* Boton para detener la reproducción del audio */}
      <button
        onClick={muteAudio}
        style={{
          position: "absolute",
          top: "80px",
          right: "10px",
          zIndex: "9999",
        }}
      >
        Detener audio
      </button>
       {/* Boton para  las instruciones del juego   */}
      <button
  onClick={() => setShowInstructions(true)}
  style={{
    position: "absolute",
    top: "110px",
    right: "10px",
    zIndex: "9999",
  }}
>
  Mostrar Instrucciones
</button>
 {/* Cuadro de instrucciones */}

{showInstructions && (
  <div
    style={{
      position: "absolute",
      top: "20%",
      left: "50%",
      transform: "translate(-50%, -20%)",
      padding: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
      zIndex: "10000",
      width: "300px",
      textAlign: "center",
    }}
  >
    <h2>Instrucciones del Juego</h2>
    <p>
      1. Utiliza las teclas de flechas o WASD para moverte.
    </p>
    <p>
      2. Recoge objetos para obtener poderes especiales.
    </p>
    <p>
      3. Evita los obstáculos y enemigos.
    </p>
    <p>
      4. ¡Colabora con otro jugador para completar el nivel!
    </p>
    <button onClick={() => setShowInstructions(false)}>Cerrar</button>
  </div>
)}
    </>
  );
}
