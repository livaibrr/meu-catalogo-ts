// Arquivo: src/pages/Animais.tsx
import { useAppData } from '../App';
import { Card } from '../components/Card';
import './Page.css';

const Animais = () => {
  const { data } = useAppData(); // Pega os dados do contexto do Router

  return (
    <div className="page-container">
      <h2>Animais</h2>
      <div className="card-grid">
        {data.animais.map((animal) => (
          <Card key={animal.id} item={animal} />
        ))}
      </div>
    </div>
  );
};

export default Animais;