// App.jsx
import React, { useState, useEffect } from 'react';
import { io } from "socket.io-client";
import Player1 from "./characters/player1/Player1";
import Player2 from "./characters/player2/Player2";

const socket = io("http://localhost:8080");  // Conectarse al servidor de sockets

function App() {
  const [playerId, setPlayerId] = useState(null);

  useEffect(() => {
    // Escuchar el evento "assign-id" del servidor para recibir el ID del jugador
    socket.on('assign-id', (id) => {
      setPlayerId(id);
    });

    // Limpiar el evento al desmontar el componente
    return () => {
      socket.disconnect();
    };
  }, []);

  if (playerId === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {playerId === 'player1' && <Player1 playerId={playerId} />}
      {playerId === 'player2' && <Player2 playerId={playerId} />}
    </div>
  );
}

export default App;
