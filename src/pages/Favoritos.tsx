// Arquivo: src/pages/Favoritos.tsx
import { useFavorites } from '../context/FavoritesContext';
import { Card } from '../components/Card';
import './Page.css';

const Favoritos = () => {
  // Acessa a lista de favoritos do nosso estado global
  const { favorites } = useFavorites();

  return (
    <div className="page-container">
      <h2>Meus Itens Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você ainda não favoritou nenhum item. Clique em "Adicionar aos Favoritos" em qualquer card!</p>
      ) : (
        <div className="card-grid">
          {favorites.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favoritos;