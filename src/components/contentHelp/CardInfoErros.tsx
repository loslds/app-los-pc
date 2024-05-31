import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
type TypeCardInfoErros = {
  nmerro?: string;
  imgcard?: string;
  children?: React.ReactNode | JSX.Element;
};
export const CardInfoErros = ({
  imgcard,
  nmerro,
  children
}: TypeCardInfoErros) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={imgcard}
        />
      </MD.ContainerHeardModalMain>
      <h2>Informação de ERRO Ambiente.</h2>
      <br />
      <label>Falha na Edição :</label>
      <br />
      <h3>{nmerro}</h3>
      <br />
      {children}
    </CardModalTexto>
  );
};
