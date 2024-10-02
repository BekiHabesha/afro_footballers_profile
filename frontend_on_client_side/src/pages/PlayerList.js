import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PlayerList.css';

const PlayerList = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await axios.get('/api/players');
      setPlayers(res.data);
    };

    fetchPlayers();
  }, []);

  return (
    <div className="player-list">
      <h2>Players</h2>
      {players.map(player => (
        <div key={player._id} className="player">
          <h3>{player.name}</h3>
          <p>Position: {player.position}</p>
          <p>Club: {player.currentClub}</p>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;
