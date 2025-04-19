import React, { useEffect, useState } from 'react';

const PokemonModal = ({ url, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setDetails(data));
  }, [url]);

  if (!details) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 999
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '2rem',
        width: '300px',
        maxHeight: '80vh',
        overflowY: 'auto',
        textAlign: 'center'
      }}>
        <h2>{details.name.charAt(0).toUpperCase() + details.name.slice(1)}</h2>
        <img src={details.sprites.front_default} alt={details.name} />
        <p><strong>Height:</strong> {details.height}</p>
        <p><strong>Weight:</strong> {details.weight}</p>
        <p><strong>Types:</strong> {details.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Abilities:</strong> {details.abilities.map(a => a.ability.name).join(', ')}</p>
        <button onClick={onClose} style={{ marginTop: '1rem' }}>Close</button>
      </div>
    </div>
  );
};

export default PokemonModal;