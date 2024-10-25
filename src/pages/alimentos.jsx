import { Link } from "react-router-dom";

function Alimentos() {
  return (
    <div>
      <h1>Alimentos</h1>
      <p>Aquí encontrarás información sobre diferentes alimentos.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Alimentos;
