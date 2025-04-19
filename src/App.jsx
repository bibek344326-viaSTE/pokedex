import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Pokedex from './pages/Pokedex';
import About from './pages/About';

const App = () => (
  <Router>
    <nav style={{ padding: '1rem', backgroundColor: '#ffcb05', textAlign: 'center' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Pokédex</Link>
      <Link to="/about">About</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;