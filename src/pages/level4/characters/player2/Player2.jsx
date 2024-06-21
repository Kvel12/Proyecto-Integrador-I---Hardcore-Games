import { RigidBody, quat, vec3 } from "@react-three/rapier";
import { useEffect, useRef } from "react";
import { socket } from "../../../../socket/socket-manager";

/**
 * Player2 component controls a player character in a 3D environment.
 * It handles synchronization of player movements with a server via WebSockets.
 *
 * @component
 * @returns {JSX.Element} The Player2 component.
 */
export default function Player2({ onCollisionEnter }) {
  const rbPlayer2Ref = useRef();
  const player2Ref = useRef();

  const movePlayer = (transforms) => {
    const { translation, rotation } = transforms;

    const newTranslation = vec3(translation);
    const newRotation = quat(rotation);

    rbPlayer2Ref.current?.setTranslation(newTranslation, true);
    rbPlayer2Ref.current?.setRotation(newRotation, true);
  };

  useEffect(() => {
    // Set up the WebSocket event listener for "player-moving"
    socket.on("player-moving", (transforms) => movePlayer(transforms));

    // Clean up the event listener on component unmount
    return () => {
      socket.off("player-moving", (transforms) => movePlayer(transforms));
    };
  }, []);

  return (
    <RigidBody
      ref={rbPlayer2Ref}
      position={[0, 12, -3]}
      colliders={false}
      name="Player2"
      onCollisionEnter={onCollisionEnter}
    >
      <mesh ref={player2Ref}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial color={0x960056} />
      </mesh>
    </RigidBody>
  );
}
