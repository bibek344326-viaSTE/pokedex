import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const App = () => (
  <>
    <nav style={{ padding: '1rem', backgroundColor: '#ffcb05', textAlign: 'center' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Pokédex</Link>
      <Link to="/about">About</Link>
    </nav>
    <Outlet />
  </>
);

export default App;
