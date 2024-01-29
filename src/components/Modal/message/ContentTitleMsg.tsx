import React from 'react';

import * as Msg from './styled-msg';
type PropsAcaoMsg = {
  nrstracao?: string;
};
export const ContentTitleMsg = ({ nrstracao }:PropsAcaoMsg) => {
  
  const [strtitle, setStrTitle] = React.useState('');
  
  if (nrstracao === '0' || nrstracao === null) {
    setStrTitle('Sem "Titulo Ação" !...');
  } else {
    if (nrstracao === '1') {
      setStrTitle('"Sucesso" !...');
    }
    else if (nrstracao === '2') {
      setStrTitle('"A T E N Ç Ã O" !...');
    }
    else if (nrstracao === '3') {
      setStrTitle('"CORREU UM ERRO" !...');
    }
  }

  return (
    <Msg.ContainerTitleMsg>
      {strtitle}
    </Msg.ContainerTitleMsg>
  );
};
