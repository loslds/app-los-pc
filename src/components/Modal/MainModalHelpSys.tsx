import React from 'react';
import * as MD from './styles';

type TypeMainModalHelSys = {
  id?: string;
  children?: React.ReactNode;
};

export const MainModalHelSys = ({ id, children }: TypeMainModalHelSys) => {
  return (
    <MD.ContainerModalImgModulo id={id}>{children}</MD.ContainerModalImgModulo>
  );
};
