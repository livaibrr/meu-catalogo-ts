// Arquivo: src/context/FavoritesContext.tsx
import React, { createContext, useState, useContext, type ReactNode } from 'react';
import type { DataItem } from '../types/data';

// 1. A "forma" que os dados do nosso contexto terão
interface FavoritesContextType {
  favorites: DataItem[];
  addFavorite: (item: DataItem) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

// 2. Criando o contexto
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// 3. Criando o componente Provedor, que gerencia o estado
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<DataItem[]>([]);

  const addFavorite = (item: DataItem) => {
    // Adiciona o item apenas se ele já não existir
    if (!favorites.some(fav => fav.id === item.id)) {
      setFavorites(prev => [...prev, item]);
    }
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// 4. Hook customizado para facilitar o uso do contexto nos componentes
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites precisa ser usado dentro de um FavoritesProvider');
  }
  return context;
};