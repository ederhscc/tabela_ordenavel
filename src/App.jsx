import { useState } from "react";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";

function App() {
  const [data, setData] = useState([
    { nome: "Ana", idade: 25, cargo: "Engenheira", isHiring: true },
    { nome: "João", idade: 30, cargo: "Desenvolvedor", isHiring: true },
    { nome: "Maria", idade: 22, cargo: "Designer", isHiring: false },
    { nome: "Carlos", idade: 40, cargo: "Gerente", isHiring: false },
    { nome: "Sofia", idade: 28, cargo: "Analista", isHiring: false },{ nome: "Rafaela", idade: 18, cargo: "Enfermeira", isHiring: true },
    { nome: "Mariana", idade: 20, cargo: "Matemática", isHiring: true },
  ]);

  const [searchTerm, setSearchTerm] = useState(null)
  return (
    <div className="container">
      <h1>Tabela de Usuários</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <table>
        <TableHeader />
        <tbody>
          {data.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
