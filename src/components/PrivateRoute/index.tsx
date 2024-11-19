
import { Navigate, Outlet } from 'react-router-dom';
import { AcessoUseForm } from '../contexts/ContextAcesso';

export const PrivateRoute = () => {
  const { state } = AcessoUseForm();

  return state.logado ? <Outlet /> : <Navigate to="/" />;
};
