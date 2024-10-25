import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Bienvenido a Nuestra Aplicación de Cocina</h1>
      <nav>
        <ul>
          <li>
            <Link to="/alimentos">Alimentos</Link>
          </li>
          <li>
            <Link to="/recetas">Recetas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
