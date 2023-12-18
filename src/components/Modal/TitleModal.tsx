import React from 'react';

import * as C from './styles';
type Props = {
  id?: string;
  titulo?: string;
};
const TitleModal: React.FC<Props> = ({ id, titulo }) => {
  return (
    <C.ContainerModalTitle id={id}>
      {<h3>{titulo}</h3>}
    </C.ContainerModalTitle>
  );
};
export default TitleModal;
