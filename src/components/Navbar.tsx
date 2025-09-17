// Arquivo: src/components/Navbar.tsx
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Usamos NavLink para obter uma classe 'active' automaticamente */}
      <NavLink to="/animais">Animais</NavLink>
      <NavLink to="/livros">Livros</NavLink>
      <NavLink to="/pessoas">Pessoas</NavLink>
      <NavLink to="/favoritos">Favoritos</NavLink>
    </nav>
  );
};