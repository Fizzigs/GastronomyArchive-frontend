import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlimentos } from "../services/api";

function Alimentos() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    const fetchAlimentos = async () => {
      try {
        const data = await getAlimentos();
        setAlimentos(data);
      } catch (error) {
        console.error("Error fetching alimentos:", error);
      }
    };

    fetchAlimentos();
  }, []);

  return (
    <div>
      <h1>Alimentos</h1>
      <p>Aquí encontrarás información sobre diferentes alimentos.</p>
      <ul>
        {alimentos.map((alimento) => (
          <li key={alimento.id}>{alimento.nombre}</li>
        ))}
      </ul>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Alimentos;
