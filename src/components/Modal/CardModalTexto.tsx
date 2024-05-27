import React from 'react';
import * as MD from './styles';

type TypeCardModalTexto = {
  children?: React.ReactNode;
};
export const CardModalTexto = ({ children }:TypeCardModalTexto) => {
  return <MD.ContainerModalTexto>{children}</MD.ContainerModalTexto>;
};
