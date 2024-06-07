import React from 'react';

const RewardCounterDisplay = ({ rewardCounters }) => {
  return (
    <div style={{ position: 'absolute', bottom: '0', left: '0', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
      <h2>Recompensas obtenidas</h2>
      {Object.entries(rewardCounters).map(([name, count]) => (
        <div key={name}>
          {name}: {count}
        </div>
      ))}
    </div>
  );
};

export default RewardCounterDisplay;