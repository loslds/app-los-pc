import React from 'react';
import * as MD from './styles';

type Props = {
  id?: string;

  children?: React.ReactNode;
};

const CardModalTexto: React.FC<Props> = ({ id, children }) => {
  return (
    <MD.ContainerModalTexto id={id}>
      {children}
    </MD.ContainerModalTexto>
  );
};

export default CardModalTexto;
