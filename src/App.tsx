// Arquivo: src/App.tsx
import { useState, useEffect } from 'react';
import { Outlet, useOutletContext } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import type { DataSet } from './types/data';
import './App.css';

// O tipo do contexto que vamos passar para as páginas filhas.
type AppContextType = { data: DataSet };

function App() {
  // Estado para armazenar os dados do JSON, com tipagem forte.
  const [data, setData] = useState<DataSet | null>(null);

  // Efeito para carregar os dados uma vez quando o componente montar.
  useEffect(() => {
    fetch('/dados.json')
      .then((res) => res.json())
      .then((jsonData: DataSet) => setData(jsonData));
  }, []);

  // Exibe uma mensagem de carregamento enquanto os dados não chegam.
  if (!data) {
    return <div>Carregando dados...</div>;
  }

  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        {/* O Outlet renderiza a página da rota atual (Animais, Livros, etc.) */}
        {/* Passamos 'data' para todas as páginas filhas via 'context' */}
        <Outlet context={{ data } satisfies AppContextType} />
      </main>
    </div>
  );
}

// Hook customizado para que as páginas filhas possam acessar os dados
// com tipagem correta e de forma simples.
export function useAppData() {
  return useOutletContext<AppContextType>();
}

export default App;