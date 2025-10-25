import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/index.ts";

import { Home, Nosotros, Galeria, Contacto, Servicios, Login } from "@/pages";

const REPO_NAME = '/Mari-Balloon-Proyect-dev';

const App = () => {
  return (
    <BrowserRouter basename={REPO_NAME} >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
