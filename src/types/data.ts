
export interface Animal {
    id: string;
    nome: string;
    especie: string;
    imagem: string;
  }
  
  export interface Livro {
    id: string;
    titulo: string;
    autor: string;
    ano: number;
    capa: string;
  }
  
  export interface Pessoa {
    id: string;
    nome: string;
    nascimento: string;
    area: string;
    foto: string;
  }
  
  export type DataItem = Animal | Livro | Pessoa;
  
  export interface DataSet {
    animais: Animal[];
    livros: Livro[];
    pessoas: Pessoa[];
  }