// Arquivo: src/pages/Animais.tsx
import { useAppData } from '../App';
import { Card } from '../components/Card';
import './Page.css';

const Pessoas = () => {
  const { data } = useAppData(); // Pega os dados do contexto do Router

  return (
    <div className="page-container">
      <h2>Pessoas</h2>
      <div className="card-grid">
        {data.pessoas.map((pessoa) => (
          <Card key={pessoa.id} item={pessoa} />
        ))}
      </div>
    </div>
  );
};

export default Pessoas;