import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Alimentos from "./pages/alimentos";
import Recetas from "./pages/recetas";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/recetas" element={<Recetas />} />
      </Routes>
    </Router>
  );
}

export default App;
