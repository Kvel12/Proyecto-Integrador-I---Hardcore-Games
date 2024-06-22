import React, { useState, useEffect, useContext } from "react";
import RewardIcons from "./RewardIcons";

const BoardSize = 80; // Tamaño del tablero

const RewardSpawner = ({ onCollect }) => {
  const [spawnedItems, setSpawnedItems] = useState([]);
  const [rewardCounters, setRewardCounters] = useState({});

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
        }, 6000); // Tiempo para que desaparezca automáticamente después de 4 segundos
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

    setRewardCounters((prevCounters) => ({
      ...prevCounters,
      [item.name]: (prevCounters[item.name] || 0) + 1
    }));

  };

  const getRandomInterval = () => {
    return Math.floor(Math.random() * 2000) + 2000;
  };

  const getRandomPosition = () => {
    const x = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada x dentro del rango [-15, 15]
    const y = 25; // Altura fija sobre el tablero
    const z = Math.floor(Math.random() * BoardSize) - BoardSize / 2; // Coordenada z dentro del rango [-15, 15]
    return [x, y, z];
  };

  return (
    <group>
      {spawnedItems.map((item) => {
        const RewardComponent = item.Component;
        return (
          <RewardComponent
            key={item.id}
            position={item.position} /*item.position */
            scale={[0.5, 0.5, 0.5]}
            onClick={() => collectItem(item)}
          />
        );
      })}
    </group>
  );
};

export default RewardSpawner;