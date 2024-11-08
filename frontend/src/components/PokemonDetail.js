import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/pokemon/${name}`)
      .then(res => setPokemon(res.data))
      .catch(err => console.error(err));
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.backLink}>← Back to Pokedex</Link>
      <h1 style={styles.title}>{pokemon.name.toUpperCase()}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} style={styles.image} />
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Types:</strong></p>
      <ul style={styles.list}>
        {pokemon.types.map(t => (
          <li key={t.type.name} style={styles.listItem}>{t.type.name}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  backLink: {
    textDecoration: 'none',
    color: '#007bff',
    marginBottom: '20px',
    display: 'inline-block',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
  image: {
    width: '150px',
    height: '150px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    fontSize: '1.2rem',
  },
};

export default PokemonDetail;