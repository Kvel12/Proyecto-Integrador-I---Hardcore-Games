import React, { useState, useEffect } from "react";
import RewardIcons from "./RewardIcons";

const BoardSize = 30; // Tamaño del tablero

const RewardSpawner = ({ onCollect }) => {
  const [spawnedItems, setSpawnedItems] = useState([]);

  useEffect(() => {
    const loadModels = async () => {
      const spawnIcon = () => {
        const randomIndex = Math.floor(Math.random() * RewardIcons.length);
        const reward = RewardIcons[randomIndex];
        const id = Math.random().toString(36).substr(2, 9);
        const position = getRandomPosition();
  
        setSpawnedItems((prevItems) => [
          ...prevItems,
          { id, Component: reward.component, name: reward.name, position }
        ]);
  
        setTimeout(() => {
          setSpawnedItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
          );
        }, 4000); // Tiempo para que desaparezca automáticamente después de 4 segundos
      };
  
      const intervalId = setInterval(spawnIcon, getRandomInterval());
  
      // Cargar un ícono adicional después de 3 segundos
      setTimeout(spawnIcon, 3000);
  
      return () => clearInterval(intervalId);
    };
  
    loadModels();
  }, []);
  
  const collectItem = (item) => {
    onCollect(item);
    setSpawnedItems((prevItems) =>
      prevItems.filter((spawnedItem) => spawnedItem.id !== item.id)
    );
  };

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 10000) + 8000;
  };

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada x dentro del rango [-15, 15]
    const y = 1; // Altura fija sobre el tablero
    const z = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada z dentro del rango [-15, 15]
    return [x, y, z];
  };

  return (
    <group>
      {spawnedItems.map((item) => (
        <item.Component
          key={item.id}
          position={item.position} /* item.position */
          scale={[0.5, 0.5, 0.5]}
          onClick={() => collectItem(item)}
        />
      ))}
    </group>
  );
};

export default RewardSpawner;