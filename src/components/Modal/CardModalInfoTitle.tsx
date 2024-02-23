
import React from 'react';

import * as MD from './styles';
type Props = {
  
  titulo?: string;
};
const CardModalInfoTitle: React.FC<Props> = ({ titulo }) => {
  return (
    <MD.ContainerInfoErroModalTitle>
      {<h3>{titulo}</h3>}
    </MD.ContainerInfoErroModalTitle>
  );
};
export default CardModalInfoTitle;