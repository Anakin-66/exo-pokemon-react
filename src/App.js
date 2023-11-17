import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllPokemons from "./pages/AllPokemons";

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
