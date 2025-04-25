import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: '#ffcb05',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ margin: 0, fontSize: '1.5rem', color: '#2a75bb' }}>Pokédex</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
      </div>
    </nav>
    <Outlet />
  </>
);

const linkStyle = {
  textDecoration: 'none',
  color: '#2a75bb',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  transition: 'background-color 0.3s',
};

export default App;
