import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '../PrivateRoute';

import { Home } from '../pages/Home'; // Página de login
import { Logged } from '../pages/Logged'; // Página inicial após login
import { Finalizado } from '../pages/Finalizado'; // Página finalizada

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Rotas públicas */}
      <Route path='/' element={<Home />} />

      {/* Rotas privadas */}
      <Route path='/privateroute' element={<PrivateRoute />}>
        <Route index element={<Logged />} />
      </Route>
      <Route path='/finalizado' element={<PrivateRoute />}>
        <Route index element={<Finalizado />} />
      </Route>

      {/* Redirecionamento padrão */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
