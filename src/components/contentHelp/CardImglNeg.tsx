
import * as MD from '../Modal/styles';
import  CardModalTexto from '../Modal/CardModalTexto';
import negado from '../../assets/images/svgs/negado.svg';

export const CardImgNeg = () => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
         ispx={true}
         pminheight={'60px'}
         pwidth={'80px'}
         img={negado} />
      </MD.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
    </CardModalTexto>
  );
};

