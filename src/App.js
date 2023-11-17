import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllPokemons from "./pages/AllPokemons";

// Import css
import HeaderScss from "./partials/Header.scss";
import NavScss from "./partials/Nav.scss";
import MainScss from "./partials/Main.scss";
import FooterScss from "./partials/Footer.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<AllPokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
