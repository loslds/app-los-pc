import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';
import negado from '../../assets/svgs/negado.svg';

export const CardDesemvolver = () => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'60px'}
          pwidth={'80px'}
          img={negado}
        />
      </MD.ContainerHeardModalMain>
      <label>Serviço em Desemvolvimento.</label>
      <p>No momento aguardando programação de aplicativo.</p>
      <p>Desculpas pelo transtorno.</p>
    </CardModalTexto>
  );
};
