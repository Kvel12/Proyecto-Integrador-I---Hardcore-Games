import React from 'react';

const RewardCounterDisplay = ({ rewardCounters }) => {
  return (
    <div style={{ position: 'absolute', bottom: '0', left: '0' }}>
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

