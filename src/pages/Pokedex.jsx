import React, { useEffect, useState } from 'react';
import PokemonCard from '../components/PokemonCard';
import PokemonModal from '../components/PokemonModal';

const POKEMONS_PER_PAGE = 25;

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${POKEMONS_PER_PAGE}`);
        if (!response.ok) throw new Error('Failed to fetch Pokémon');
        const data = await response.json();
        setPokemonList(data.results);
        setCount(data.count);
      } catch (err) {
        console.error('Error fetching data:', err);
        setHasError(true);
        setPokemonList([]);
        setCount(0);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, [offset]);

  const handlePrevious = () => {
    if (offset > 0) setOffset(prev => prev - POKEMONS_PER_PAGE);
  };

  const handleNext = () => {
    if (offset < count - POKEMONS_PER_PAGE) setOffset(prev => prev + POKEMONS_PER_PAGE);
  };

  const currentPage = Math.floor(offset / POKEMONS_PER_PAGE) + 1;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>✨ Pokédex</h1>

      {isLoading ? (
        <p style={styles.message}>Loading Pokémon...</p>
      ) : hasError ? (
        <p style={{ ...styles.message, color: 'red' }}>Failed to load Pokémon. Please try again later.</p>
      ) : (
        <>
          <div style={styles.grid}>
            {pokemonList.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                url={pokemon.url}
                onClick={setSelectedPokemon}
              />
            ))}
          </div>

          <div style={styles.pagination}>
            <button
              onClick={handlePrevious}
              disabled={offset === 0}
              style={navButtonStyle(offset === 0)}
            >
              ⬅️ Previous
            </button>

            <span style={styles.pageInfo}>Page {currentPage}</span>

            <button
              onClick={handleNext}
              disabled={offset >= count - POKEMONS_PER_PAGE}
              style={navButtonStyle(offset >= count - POKEMONS_PER_PAGE)}
            >
              Next ➡️
            </button>
          </div>
        </>
      )}

      {selectedPokemon && (
        <PokemonModal url={selectedPokemon} onClose={() => setSelectedPokemon(null)} />
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    background: 'linear-gradient(to bottom, #f0f4f8, #d9e2ec)',
    minHeight: '100vh',
    fontFamily: 'Segoe UI, sans-serif',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1.5rem',
    color: '#2b2d42',
    textShadow: '1px 1px 2px #aaa',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
    gap: '1.5rem',
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  pagination: {
    marginTop: '2rem',
  },
  pageInfo: {
    margin: '0 1rem',
    fontSize: '1.1rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    marginTop: '2rem',
  }
};

const navButtonStyle = (disabled) => ({
  backgroundColor: disabled ? '#ccc' : '#6c63ff',
  color: '#fff',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  transition: 'background-color 0.3s',
  margin: '0 0.5rem',
});

export default Pokedex;
