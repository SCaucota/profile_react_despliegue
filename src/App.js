import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./components/Inicio";
import Hobbies from "./components/Hobbies";
import Contacto from "./components/Contacto";
import AcercaDe from "./components/AcercaDe";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/acercaDe" element={<AcercaDe />} />

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
