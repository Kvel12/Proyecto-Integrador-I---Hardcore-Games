import React, { useState, useEffect } from "react";
import RewardIcons from "./RewardIcons";

const RewardSpawner = ({ onCollect }) => {
  const [spawnedItems, setSpawnedItems] = useState([]);

  const spawnItem = () => {
    const randomIndex = Math.floor(Math.random() * RewardIcons.length);
    const randomItem = RewardIcons[randomIndex];

    const randomX = Math.floor(Math.random() * 30);
    const randomY = Math.floor(Math.random() * 30);

    console.log(randomItem, randomX, randomY);

    setSpawnedItems((prevItems) => [
      ...prevItems,
      { src: randomItem.src, name: randomItem.name, x: randomX, y: randomY },
    ]);

    setTimeout(() => {
      setSpawnedItems((prevItems) =>
        prevItems.filter((item) => item.src !== randomItem.src)
      );
    }, 5000);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      spawnItem();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const collectItem = (item) => {
    onCollect(item);
    setSpawnedItems((prevItems) =>
      prevItems.filter((spawnedItem) => spawnedItem.src !== item.src)
    );
  };

  return (
    <div style={{ position: "absolute", width: "100%", height: "100%" }}>
      {spawnedItems.map((item, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: `${(item.y / 30) * 100}%`,
            left: `${(item.x / 30) * 100}%`,
          }}
          onClick={() => collectItem(item)}
        >
          {console.log(item.src)}
          <img src={item.src} alt={item.name} style={{ width: "50px", height: "50px" }} />
        </div>
      ))}
    </div>
  );
};

export default RewardSpawner;