import React, { useState } from 'react';
import axios from 'axios';

//Definindo componente dashboard
const Dashboard = () => {
  const [pokemon, setPokemon] = useState(null);

//Função que aciona quando o usuário clica no botão
const catchPokemon = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get('http://localhost:5000/pokemon/catch')
      setPokemon(response.data);
    } catch (err) {
      alert('Falha ao capturar Pokemon');
    }
  };

return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={catchPokemon}>Catch Pokémon</button>
    </div>
  );
};

export default Dashboard;