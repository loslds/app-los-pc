import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
//import negado from '../../assets/svgs/negado.svg';

type TypeCardImgNeg = {
  imgcard?: string;
};
export const CardImgNeg = ({ imgcard }: TypeCardImgNeg) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={imgcard}
        />
      </MD.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
      <br />
    </CardModalTexto>
  );
};
