import * as MD from '../Modal/styles';

import CardModalTexto from '../Modal/CardModalTexto';
type PropsInfoErro ={
  nrerro?: number;
  nmerro?: string;
}


export const CardInfoErros = ({nrerro, nmerro}:PropsInfoErro) => {

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <h2>Informação de ERRO Ambiente.</h2>
        {nrerro ===1 ? <h3>{nmerro}</h3> : null} 
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
