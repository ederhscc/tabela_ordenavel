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
    { nome: "Sofia", idade: 28, cargo: "Analista", isHiring: false },
    { nome: "Rafaela", idade: 18, cargo: "Enfermeira", isHiring: true },
    { nome: "Mariana", idade: 20, cargo: "Matemática", isHiring: true },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = [...data].sort((a, b) => {
    if (sortConfig !== null) {
      if (typeof a[sortConfig.key] === "number") {
        // Se for número
        return sortConfig.direction === "ascending"
          ? a[sortConfig.key] - b[sortConfig.key]
          : b[sortConfig.key] - a[sortConfig.key];
      } else {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
      }
    }
    return 0;
  });

  const onColumnClick = (key) => {
    let direction = "ascending";

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }

    setSortConfig({ key, direction });
  };

  const filteredData = sortedData.filter(
    (row) =>
      row.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      row.cargo.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="container">
      <h1>Tabela de Usuários</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table>
        <TableHeader onColumnClick={onColumnClick} />
        <tbody>
          {filteredData.map((row, index) => (
            <TableRow key={index} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
