import React from 'react';
import * as MD from './styles';

type TypeCardModalTextoModulos = {
  
  children?: React.ReactNode | JSX.Element;
};
export const CardModalTextoModulos = ({ children }: TypeCardModalTextoModulos) => {
  return <MD.ContentTextoModulos>{children}</MD.ContentTextoModulos>;
};
