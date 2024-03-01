import React from 'react';
import * as MD from './styles';

type CardModalTextoType = {
  children?: React.ReactNode;
};

const CardModalTexto: React.FC<CardModalTextoType> = ({ children }) => {
  return (
    <MD.ContainerModalTexto>
      {children}
    </MD.ContainerModalTexto>
  );
};

export default CardModalTexto;
