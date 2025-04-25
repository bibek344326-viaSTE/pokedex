import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import App from './App';
import Pokedex from './pages/Pokedex';
import About from './pages/About';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // cleaner than repeating path: '/'
        element: <Pokedex />,
      },
      {
        path: 'about', // no need for leading slash in nested routes
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
