import React from 'react';
import * as MD from './styles';

type TypeCardModalTexto = {
  id?: string;
  children?: React.ReactNode;
};
export const CardModalTexto = ({ id, children }: TypeCardModalTexto) => {
  return <MD.ContainerModalTexto id={id}>{children}</MD.ContainerModalTexto>;
};
