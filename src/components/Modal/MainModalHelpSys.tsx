import React from 'react';
import * as MD from './styles';

type Props = {
  id?: string;
  children?: React.ReactNode;
};

const MainModalHelSys: React.FC<Props> = ({ id, children }) => {
  return (
    <MD.ContainerModalImgModulo id={id}>
      {children}
    </MD.ContainerModalImgModulo>
  );
};

export default MainModalHelSys;
