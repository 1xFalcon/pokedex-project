import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/pokemon')
      .then(res => setPokemon(res.data.results))
      .catch(err => console.error(err));
  }, []);

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />
      <ul style={styles.list}>
        {filteredPokemon.map(p => (
          <li key={p.name} style={styles.listItem}>
            <Link to={`/pokemon/${p.name}`} style={styles.link}>
              {p.name.toUpperCase()}
            </Link>
          </li>
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
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
  },
  search: {
    padding: '10px',
    fontSize: '1rem',
    width: '80%',
    maxWidth: '400px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  listItem: {
    margin: '10px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.2rem',
  },
};

export default PokemonList;