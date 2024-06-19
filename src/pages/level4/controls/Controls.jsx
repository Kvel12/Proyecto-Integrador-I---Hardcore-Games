import { OrbitControls, useKeyboardControls } from "@react-three/drei";
import { useFox } from "../../../context/FoxContext";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Quaternion, Vector3 } from "three";
import { materialRotation, rotate } from "three/examples/jsm/nodes/Nodes.js";

export default function Controls() {
    const { fox, setFox } = useFox();
    const [sub, get] = useKeyboardControls()
    const controlsRef = useRef()
    let walkDirection = new Vector3()
    let rotateAngle = new Vector3(0, 1, 0);
    let rotateQuaternion = new Quaternion();
    const velocity = 3;
    let cameraTarget = new Vector3();
    const desiredDistance = 2;  
    const [runSound] = useState(new Audio("/assets/sounds/run.wav"))
    const [play, setPlay] = useState(false)

    // const getDirectionOffset = (forward, backward, leftward, rightward) => {
    //     if (forward && leftward) return Math.PI / 4;
    //     if (forward && rightward) return -Math.PI / 4;
    //     if (backward && leftward) return 3 * Math.PI / 4;
    //     if (backward && rightward) return -3 * Math.PI / 4;
    //     if (forward) return 0;
    //     if (backward) return Math.PI;
    //     if (leftward) return Math.PI / 2;
    //     if (rightward) return -Math.PI / 2;
    //     return 0;
    // }

    useEffect(() => {
      const unsubscribe = sub(
        (state) => ({
          roll: state.roll,
          run: state.run,
          forward: state.forward,
          backward: state.backward,
          leftward: state.leftward,
          rightward: state.rightward
        }),
        ({ roll, run, forward, backward, leftward, rightward }) => {
          if (roll) {
            setFox({ ...fox, animation: "Rolling" });
          } else if (run) {
            setFox({ ...fox, animation: "Running" });
          } else if (forward || backward || leftward || rightward) {
            setFox({ ...fox, animation: "Walk" });
          } else {
            setFox({ ...fox, animation: "Idle" });
          }
        }
      );
      return () => unsubscribe();
    }, [fox, setFox, sub, get]);


      useEffect(()=>{
        if(play){
            runSound.currentTime = 0;
            runSound.volume = Math.random()
            runSound.play()
        }else{
            runSound.pause()
        }
      }, [play])

    useFrame((state, delta) => {
        const { forward, backward, leftward, rightward } = get()
        if (forward || backward || leftward || rightward) {
            setPlay(true)
            // const directionOffset = getDirectionOffset(forward, backward, leftward, rightward)
            // const currentTranslation = avatar.body.translation()

            // const angleYCameraDirection = Math.atan2(
            //     state.camera.position.x - currentTranslation.x,
            //     state.camera.position.z - currentTranslation.z
            // )
            // rotateQuaternion.setFromAxisAngle(
            //     rotateAngle,
            //     angleYCameraDirection + Math.PI + directionOffset
            // )

            // avatar.ref.quaternion.rotateTowards(rotateQuaternion, 0.2)

            // state.camera.getWorldDirection(walkDirection)
            // walkDirection.y = 0
            // walkDirection.normalize()
            // walkDirection.applyAxisAngle(rotateAngle, directionOffset)

            // const moveX = walkDirection.x * velocity * delta
            // const moveZ = walkDirection.z * velocity * delta

            // const newPosition = new Vector3(
            //     currentTranslation.x + moveX,
            //     currentTranslation.y,
            //     currentTranslation.z + moveZ
            // )

            // avatar.body.setTranslation({
            //     x: newPosition.x,
            //     y: newPosition.y,
            //     z: newPosition.z
            // }, true)

            // avatar.body.setRotation(new Quaternion({
            //     x:0,
            //     y:  avatar.ref.quaternion.y,
            //     z: 0,
            //     w: 1
            // }).normalize())

            // state.camera.position.add(new Vector3(moveX, 0, moveZ))
            // cameraTarget.set(
            //     newPosition.x,
            //     newPosition.y + 1,
            //     newPosition.z 
            // )
            // controlsRef.current.target = cameraTarget

            // const avatarPosition = new Vector3(newPosition.x, newPosition.y + 1, newPosition.z)
            // const cameraPosition = state.camera.position
            // const direction = cameraPosition.sub(avatarPosition).normalize()
            // const newCameraPosition = avatarPosition.add(direction.multiplyScalar(desiredDistance))
            // state.camera.position.copy(newCameraPosition)
        } else {
            // avatar.body?.sleep()
            setPlay(false)
        }

        const pressed = get().back
    })

    return (
        // <OrbitControls
        //     ref={controlsRef}
        //     target={[0, 1, -2]}
        // />
        null
    )
}