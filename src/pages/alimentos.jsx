import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlimentos, createAlimento, deleteAlimento } from "../services/api";

function Alimentos() {
  const [alimentos, setAlimentos] = useState([]);
  const [nuevoAlimento, setNuevoAlimento] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchAlimentos = async () => {
      try {
        const data = await getAlimentos();
        setAlimentos(data);
      } catch (error) {
        console.error("Error fetching alimentos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlimentos();
  }, []);

  const handleAddAlimento = async () => {
    if (!nuevoAlimento.trim()) {
      setErrorMessage("El nombre del alimento no puede estar vacío.");
      return;
    }
    try {
      const alimento = await createAlimento({ nombre: nuevoAlimento.trim() });
      setAlimentos((prevAlimentos) => {
        return [...prevAlimentos, alimento];
      });
      setNuevoAlimento("");
      setErrorMessage("");
    } catch (error) {
      console.error("Error adding alimento:", error);
      setErrorMessage("Error al añadir el alimento. Inténtalo de nuevo.");
    }
  };

  const handleDeleteAlimento = async (id) => {
    try {
      await deleteAlimento(id);
      setAlimentos((prevAlimentos) => prevAlimentos.filter((alimento) => alimento.id !== id));
    } catch (error) {
      console.error("Error deleting alimento:", error);
    }
  };

  return (
    <div>
      <h1>Alimentos</h1>
      <p>Aquí encontrarás información sobre diferentes alimentos.</p>
      {isLoading ? (
        <p>Cargando alimentos...</p>
      ) : (
        <>
          <div>
            <input
              type="text"
              value={nuevoAlimento}
              onChange={(e) => setNuevoAlimento(e.target.value)}
              placeholder="Nuevo alimento"
            />
            <button onClick={handleAddAlimento} disabled={!nuevoAlimento.trim()}>Añadir Alimento</button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
          <ul>
            {alimentos.map((alimento) => (
              <li key={alimento.id}>
                {alimento.nombre}
                <button onClick={() => handleDeleteAlimento(alimento.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        </>
      )}
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Alimentos;
