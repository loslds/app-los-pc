import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardDesemvolver = {
  imgcard?: string;
};
export const CardDesemvolver = ({ imgcard }: TypeCardDesemvolver) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'60px'}
          pwidth={'80px'}
          img={imgcard}
        />
      </MD.ContainerHeardModalMain>
      <label>Serviço em Desemvolvimento.</label>
      <p>No momento aguardando programação de aplicativo.</p>
      <p>Desculpas pelo transtorno.</p>
    </CardModalTexto>
  );
};
