import * as MD from '../Modal/styles';

import CardModalTexto from '../Modal/CardModalTexto';
type PropsInfoErro ={
  // nrerro?: number;
  nmerro?: string;
}


const CardInfoErros = ({nmerro}:PropsInfoErro) => {

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <br/>
        <h2>Informação de ERRO Ambiente.</h2>
        <br/>
        <label>Falta de edição :</label>
        <br/>
        <h3>{nmerro}</h3>
        <br/> 
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
export default CardInfoErros;
