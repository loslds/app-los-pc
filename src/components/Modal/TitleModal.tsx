import React from 'react';

import * as C from './styles';
type Props = {
  id?: string;
  titulo?: string;
  children?: React.ReactNode;
};
const TitleModal: React.FC<Props> = ({ id, titulo, children }) => {
  return (
    <C.ContainerModalTitle id={id}>
      {<h4>{titulo}</h4>}
    </C.ContainerModalTitle>
  );
};
export default TitleModal;
