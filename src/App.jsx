import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import Contact from "./pages/Contact";
import "./index.css";
import Whychooseus from "./pages/Whychooseus";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vehicles" element={<Vehicles />} />
      
      <Route path="/whychooseus" element={<Whychooseus />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
