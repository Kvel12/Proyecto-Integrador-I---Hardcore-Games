import { Perf } from "r3f-perf";
import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense, useState, useEffect } from "react";
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
import Creature from "./characters/creature/Creature";
import World from "./world/World";
import RewardSpawner from "./characters/rewards/RewardSpawner";
import RewardCounterDisplay from "./characters/rewards/RewardCountDisplay";
import HealthBar from "../../components/HealthBar";
import FixedImage from "../../components/FixedImage";
import { useFox } from "../../context/FoxContext";
import { useNavigate } from "react-router-dom";

export default function Level3() {
    const map = useMovements();
    const [audio] = useState(new Audio("./assets/sounds/mundoDuendes.mp3"));
    const [userInteracted, setUserInteracted] = useState(false);
    const [rewardCounters, setRewardCounters] = useState([]);
    const [lives, setLives] = useState(5);
    const maxLives = 5;
    const [showGlow, setShowGlow] = useState(false);
    const navigate = useNavigate();
    const {setIsInvisible} = useFox();
    const audioDerrota = new Audio("./assets/sounds/derrota.mp3");


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

    useEffect(() => {
        const handleInteraction = () => {
            // Una vez que el usuario haya interactuado con la página,
            // establecemos el estado userInteracted a true.
            setUserInteracted(true);
        };

        // Agregamos un evento de clic para detectar la interacción del usuario.
        document.addEventListener("click", handleInteraction);

        // Limpiamos el evento al desmontar el componente.
        return () => {
            document.removeEventListener("click", handleInteraction);
        };
    }, []);

    useEffect(() => {
        // Reproducir el sonido si el usuario ha interactuado con la página.
        if (userInteracted) {
            audio.loop = true;
            audio.play();
        }

        return () => {
            // Detener el sonido cuando el componente se desmonta.
            audio.pause();
            audio.currentTime = 0;
        };
    }, [userInteracted]);

    return (
        <>
        <KeyboardControls map={map}>
            <div>
                <HealthBar lives={lives} maxLives={maxLives} />
                <FixedImage src="/assets/images/Solution.jpg" alt="Map Solution" />
            </div>
            
            <Canvas camera={{ position: [0, 2, 0] }}>
            <Lights />
            <Environments />
            <Perf position="top-left" />
            <Suspense fallback={null}>
                <Physics debug={false}>
                    <World scale={[200,200,200]}/>
                    <Ecctrl
                        camInitDis={-10}
                        camMaxDis={-10}
                        maxVelLimit={5}
                        jumpVel={4}
                        position={[0.55, 2, -38]} //Posicion de inicio es la [38,1,1] y la del arbol [2,1,1]
                        name="Fox"
                        onCollisionEnter={({other}) => {
                            if(other.rigidBodyObject.name === "Arbol"){
                                console.log("Avanza al nivel 4");
                                setShowGlow(true);
                                setTimeout(() => {
                                    setShowGlow(false);
                                    navigate("/level4"); // Navegar a Level 4
                                }, 2000);
                            }
                            if(other.rigidBodyObject.name === "Creature"){
                                decreaseLives();
                            }
                        }}
                    >
                        <Fox/>
                    </Ecctrl>
                    <Creature/>
                    <RewardSpawner onCollect={handleCollect}/>
                </Physics>
                <WelcomeText position={[1.2, 1.5, -38]}/>
                <Controls/>
                {setShowGlow && (
                    <spotLight
                        intensity={1}
                        distance={50}
                        angle={Math.PI / 6}
                        penumbra={0.5}
                        position={[0, 0, 0]}
                        castShadow
                        color={"yellow"}
                    />
                )}
                </Suspense>
                </Canvas>   
            </KeyboardControls>
            <RewardCounterDisplay rewardCounters={rewardCounters}/>
        </>
    )
}





