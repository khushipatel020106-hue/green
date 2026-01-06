import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import "./index.css";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/Whychooseus";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/WhyChooseUs" element={<WhyChooseUs />} />
      <Route path="/Contact" element={<Contact />} />
     </Routes>
  );
}     

export default App;
