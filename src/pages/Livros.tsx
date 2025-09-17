// Arquivo: src/pages/Animais.tsx
import { useAppData } from '../App';
import { Card } from '../components/Card';
import './Page.css';

const Livros = () => {
  const { data } = useAppData(); // Pega os dados do contexto do Router

  return (
    <div className="page-container">
      <h2>Livros</h2>
      <div className="card-grid">
        {data.livros.map((livro) => (
          <Card key={livro.id} item={livro} />
        ))}
      </div>
    </div>
  );
};

export default Livros;