import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AcessoUseForm } from '../contexts/ContextAcesso';

export const PrivateRoute: React.FC = () => {
  const { state } = AcessoUseForm();

  return state.logado ? <Outlet /> : <Navigate to="/" />;
};
