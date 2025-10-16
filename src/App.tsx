import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts/index.ts";

import { Home, Nosotros, Galeria, Contacto, Servicios, Login } from "@/pages";

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
