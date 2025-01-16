import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [pokemon, setPokemon] = useState(null);

const catchPokemon = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/pokemon/catch', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPokemon(response.data);
    } catch (err) {
      alert('Failed to catch Pokémon');
    }
  };

return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={catchPokemon}>Catch Pokémon</button>
      {pokemon && (
        <div>
          <h3>{pokemon.name}</h3>
          <p>URL: {pokemon.url}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;