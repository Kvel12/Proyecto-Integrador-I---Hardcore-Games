import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls, Text } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect, useRef } from "react";
import Fox from "./characters/fox/Fox";
import Player1 from "./characters/player1/Player1";
import Player2 from "./characters/player2/Player2";
import WelcomeText from "./abstractions/WelcomeText";
import WinText from "./abstractions/WinText";
import RedMen from "./characters/redMen/RedMen";
import Lights from "./lights/Lights";
import Environments from "./staging/Environments";
import { Girl } from "./characters/girl/Girl";
import { Canvas } from "@react-three/fiber";
import Controls from "./controls/Controls";
import useMovements from "../../utils/key-movements";
import Sound from "./abstractions/Sound";
import World from "./world/World";
import RewardSpawner from "./characters/rewards/RewardSpawner";
import RewardCounterDisplay from "./characters/rewards/RewardCountDisplay";
import HealthBar from "../../components/HealthBar";
import { useFox } from "../../context/FoxContext";
import { useNavigate } from "react-router-dom";
import { socket } from "../../socket/socket-manager";
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
    const audioWin = new Audio("./assets/sounds/RollingWin.wav");
    const [volume, setVolume] = useState(0.5);
    const [showPlatform5, setShowPlatform5] = useState(false);
    const [showRest, setShowRest] = useState(false);
    const [flagTouched, setFlagTouched] = useState(false); // Nuevo estado

    useEffect(() => {
      console.log("Socket connected:", socket.connected); 
    
      if (!socket.connected) {
        socket.connect();
      }
    
      return () => {
        socket.disconnect();
      };
    }, []);

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

    const [platformStates, setPlatformStates] = useState({
      platform5: false,
      rest: false,
    });
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
    
    useEffect(() => {
      socket.on('update-game-state', (newState) => {
        console.log("Received updated game state:", newState);
        setPlatformStates(newState.platforms);
        setKeyVisibility(newState.keys);
        setAppleVisibility(newState.apples);
        setStartVisibility(newState.stars);
      });
    
      socket.on('game-state', (initialState) => {
        console.log("Received initial game state:", initialState);
        setPlatformStates(initialState.platforms);
        setKeyVisibility(initialState.keys);
        setAppleVisibility(initialState.apples);
        setStartVisibility(initialState.stars);
      });
    
      return () => {
        console.log("Cleaning up socket listeners");
        socket.off('update-game-state');
        socket.off('game-state');
      };
    }, []);


    const handleCollect = (item) => {
        console.log(`Collected ${item.name}`);
        setRewardCounters((prevCounters) => ({
          ...prevCounters,
          [item.name]: (prevCounters[item.name] || 0) + 1
        }));

        if(item.name === "GemPower"){
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
      console.log("Collision detected with:", e.rigidBodyObject.name);

      if (e.rigidBodyObject.name === "Key1" || e.rigidBodyObject.name === "Key2") {
        console.log("Emitting unlock-platform for:", e.rigidBodyObject.name);
        socket.emit('unlock-platform', e.rigidBodyObject.name);
      }
      if (e.rigidBodyObject.name === 'Evil') {
        decreaseLives();
      }
      if (e.rigidBodyObject.name === "cactus") {
        decreaseLives();
      }
      if (e.rigidBodyObject.name === "Start1" || e.rigidBodyObject.name === "Start2" || e.rigidBodyObject.name === "Start3") {
        console.log("Emitting collect-star for:", e.rigidBodyObject.name);
        activatePower();
        socket.emit('collect-star', e.rigidBodyObject.name);
        setStartVisibility(prev => ({
          ...prev,
          [e.rigidBodyObject.name]: false
        }));
      }
      if (e.rigidBodyObject.name === "apple1" || e.rigidBodyObject.name === "apple2") {
        if (lives < maxLives) {
          setLives((prevLives) => prevLives + 1);
        }
        console.log("Emitting collect-apple for:", e.rigidBodyObject.name);
        socket.emit('collect-apple', e.rigidBodyObject.name);
      }
      if (e.rigidBodyObject.name === "plano") {
        if (lives > 0) {
          setLives(0);
          audioDerrota.play();
          setTimeout(() => {
            window.location.reload();
          }, 3500);
        }
      }
      if (e.rigidBodyObject.name === "flag") {
        setFlagTouched(true);
        audioWin.play();
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
            <Suspense fallback={null}>
              <Physics debug={false}>
                <World
                  showPlatform5={platformStates.platform5}
                  showRest={platformStates.rest}
                  appleVisibility={appleVisibility}
                  keyVisibility={keyVisibility}
                  starVisibility={starVisibility}
                />
                <Player1 onCollisionEnter={handleCollision} />
                <Player2 onCollisionEnter={handleCollision} />
                <RewardSpawner onCollect={handleCollect} />
                <Evil_Warrior position={[2, 10.8, 4]} />
              </Physics>
              <WelcomeText position={[3, 13, -7]} />
              <WinText visible={flagTouched} position={[60, 14, -3]} rotation={[0, 0 , 0]} /> {/* Modificar WinText para aceptar una prop visible y rotación */}
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
        {/* Boton para las instruciones del juego */}
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
