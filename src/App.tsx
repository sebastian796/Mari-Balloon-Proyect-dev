import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import { MainLayout } from "@/layouts/index.ts";

import { Home, Nosotros, Galeria, Contacto, Servicios, Login } from "@/pages";

import * as React from 'react'; 

import AdminDashboard from "./pages/Admin/Dashboard"; 


const REPO_NAME = '/Mari-Balloon-Proyect-dev'; 

interface ProtectedRouteProps {
    element: React.ReactNode;
    allowedRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, allowedRoles }) => {
    
    const isAuthenticated = true; 
    const userRole = 'ADMIN';     

    if (!isAuthenticated) {
        return <Navigate to={`${REPO_NAME}/login`} replace />;
    }
    
    if (allowedRoles && !allowedRoles.includes(userRole)) {
        return <Navigate to={REPO_NAME} replace />; 
    }
    
    return element;
};


const App = () => {
  return (
    <BrowserRouter basename={REPO_NAME}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} /> 
        </Route>

        <Route 
            path="/admin/dashboard" 
            element={
                <ProtectedRoute 
                    element={<AdminDashboard />} 
                    allowedRoles={['ADMIN']} 
                />
            } 
        />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
