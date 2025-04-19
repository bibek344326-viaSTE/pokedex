// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import Pokedex from './pages/Pokedex';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Pokedex /> },
      { path: '/pokemon/:name', element: <Pokedex /> }, // optional
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
