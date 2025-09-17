// Arquivo: src/components/Card.tsx (versão final corrigida)

import type { DataItem, Animal, Livro, Pessoa } from '../types/data';
import './Card.css';
import { useFavorites } from '../context/FavoritesContext';

// Props do componente
interface CardProps {
  item: DataItem;
}

// Funções "Type Guard": ajudam o TypeScript a saber qual é o tipo exato do item
function isAnimal(item: DataItem): item is Animal {
  return 'especie' in item;
}
function isLivro(item: DataItem): item is Livro {
  return 'autor' in item;
}
function isPessoa(item: DataItem): item is Pessoa {
  return 'area' in item;
}

export const Card: React.FC<CardProps> = ({ item }) => {
  // Usar o hook para acessar o estado e as funções de favoritos
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  
  const favorited = isFavorite(item.id);

  // Lógica para obter a imagem e o título corretos de forma segura
  const imageUrl = isAnimal(item) ? item.imagem : isLivro(item) ? item.capa : item.foto;
  const title = isLivro(item) ? item.titulo : item.nome;

  const handleToggleFavorite = () => {
    if (favorited) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        {/* Renderização condicional usando as type guards */}
        {isAnimal(item) && <p><strong>Espécie:</strong> {item.especie}</p>}
        {isLivro(item) && <p><strong>Autor:</strong> {item.autor} ({item.ano})</p>}
        {isPessoa(item) && <p><strong>Área:</strong> {item.area}</p>}
      </div>
      <button
        onClick={handleToggleFavorite}
        className={`favorite-button ${favorited ? 'favorited' : ''}`}
      >
        {favorited ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
      </button>
    </div>
  );
};