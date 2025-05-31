import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Game from "./pages/Game";
import RPS from "./pages/RPS"
import Reflection from "./pages/Reflection"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>

    </div>
  );
}

export default App;
