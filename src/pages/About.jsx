import React from 'react';

const About = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
    <h2>About This Pokédex</h2>
    <p>
      Welcome to the Pokédex – a simple, interactive web application that allows you to browse and learn about Pokémon.
      This project was created as part of a Web Development course assignment.
    </p>

    <h3>🔧 Technologies Used</h3>
    <ul>
      <li><strong>React</strong> – For building the UI using components</li>
      <li><strong>Vite</strong> – For lightning-fast development and builds</li>
      <li><strong>React Router</strong> – For client-side routing between pages</li>
      <li><strong>PokéAPI</strong> – For retrieving real Pokémon data</li>
      <li><strong>CSS</strong> – For styling individual parts of the UI</li>
    </ul>

    <h3>💡 Features</h3>
    <ul>
      <li>Pagination for browsing Pokémon</li>
      <li>Detailed Pokémon stats and images</li>
      <li>Responsive design and themed type colors</li>
    </ul>
  </div>
);

export default About;
