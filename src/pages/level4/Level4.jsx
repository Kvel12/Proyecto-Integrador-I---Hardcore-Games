import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect, useRef } from "react";
import Fox from "./characters/fox/Fox";
import Player1 from "./characters/player1/Player1";
import Player2 from "./characters/player2/Player2";
import WelcomeText from "./abstractions/WelcomeText";
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
import App from "./App";

export default function Level4() {
    const map = useMovements();
    const audioRef = useRef(new Audio("./assets/sounds/mundoDuendes.mp3"));
    const [userInteracted, setUserInteracted] = useState(false);
    const [rewardCounters, setRewardCounters] = useState([]);
    const [lives, setLives] = useState(5);
    const maxLives = 5;
    const [showGlow, setShowGlow] = useState(false);
    const navigate = useNavigate();
    const {setIsInvisible} = useFox();
    const audioDerrota = new Audio("./assets/sounds/derrota.mp3");
    const [volume, setVolume] = useState(0.5);
    const [showPlatform5, setShowPlatform5] = useState(false);
    const [showRest, setShowRest] = useState(false);
    


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
      if(e.rigidBodyObject.name === 'key1'){
        setShowPlatform5(true);
      }
      if(e.rigidBodyObject.name === 'key2'){
        setShowRest(true);
      }
    }

    useEffect(() => {
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = volume;
        
        if (userInteracted && audio.paused){
            audio.play();
        }

        return () => {
            audio.pause();
            audio.currentTime = 0;
        }
    }, [userInteracted, volume]);

    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const playAudio = () => {
        setUserInteracted(true);
    }

    const muteAudio = () => {
        setUserInteracted(false);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
    }

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
                    <World showPlatform5={showPlatform5} showRest={showRest}/>
                    <Player1 onCollisionEnter={handleCollision} />
                    <Player2 onCollisionEnter={handleCollision} />
                    <RewardSpawner onCollect={handleCollect}/>
                </Physics>
                <WelcomeText position={[1.2, 1.5, -38]}/>
                <Controls/>
                </Suspense>
                </Canvas>   
            </KeyboardControls>
            <RewardCounterDisplay rewardCounters={rewardCounters}/>
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
        </>
    )
}





