// Arquivo: src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Importe os componentes das páginas
import Animais from './pages/Animais.tsx';
import Livros from './pages/Livros.tsx';
import Pessoas from './pages/Pessoas.tsx';
import Favoritos from './pages/Favoritos.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App será nosso componente de Layout
    children: [
      { path: '/', element: <h2>Escolha uma categoria no menu acima.</h2> },
      { path: '/animais', element: <Animais /> },
      { path: '/livros', element: <Livros /> },
      { path: '/pessoas', element: <Pessoas /> },
      { path: '/favoritos', element: <Favoritos /> },
    ],
  },
]);

import { FavoritesProvider } from './context/FavoritesContext'; // <-- Importe

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FavoritesProvider> {/* Envolve toda a aplicação */}
      <RouterProvider router={router} />
    </FavoritesProvider>
  </React.StrictMode>
);
