import { Link } from "react-router-dom";

function Recetas() {
  return (
    <div>
      <h1>Recetas</h1>
      <p>Descubre nuestras deliciosas recetas.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}

export default Recetas;
