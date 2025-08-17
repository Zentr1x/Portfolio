import { Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Game from "./pages/Game";
import RPS from "./pages/RPS"
import ReflectionHome from "./pages/ReflectionHome"
import Reflection1 from "./pages/reflections/Reflection1"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/rps" element={<RPS />} />
        <Route path="/reflection-home" element={<ReflectionHome />} />
        <Route path="/reflection-1" element={<Reflection1/>} />
      </Routes>

    </div>
  );
}

export default App;
