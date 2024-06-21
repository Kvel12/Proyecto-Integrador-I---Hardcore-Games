import Ecctrl from "ecctrl";
import { useRef } from "react";
import { socket } from "../../../../socket/socket-manager";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import Fox from "./../fox/Fox";

/**
 * Player1 component controls a player character in a 3D environment.
 * It handles movement and communication with a server via WebSockets.
 *
 * @component
 * @returns {JSX.Element} The Player1 component.
 */
export default function Player1({ onCollisionEnter }) {
  // Refs for the rigid body and player mesh
  const rbPlayer1Ref = useRef();
  const player1Ref = useRef();

  // Keyboard controls
  const [sub, get] = useKeyboardControls();

  // useFrame hook to handle per-frame updates
  useFrame(() => {
    // Get current keyboard input states
    const { forward, backward, leftward, rightward } = get();

    // If any movement key is pressed, emit the player's movement data to the server
    if (forward || backward || leftward || rightward) {
      window.setTimeout(() => {
        socket.emit("player-moving", {
          translation: rbPlayer1Ref.current?.translation(),
          rotation: rbPlayer1Ref.current?.rotation(),
        });
      }, 100);
    }
  });

  return (
    <Ecctrl
      ref={rbPlayer1Ref}
      position={[0, 20, 0]}
      rotation={[0, Math.PI / 2, 0]}
      camInitDis={-5}
      camMaxDis={-5}
      maxVelLimit={4}
      jumpVel={7}
      onCollisionEnter={onCollisionEnter}
    >
      <Fox foxBodyRef={rbPlayer1Ref} foxRef={player1Ref} showAura={true} />
    </Ecctrl>
  );
}
