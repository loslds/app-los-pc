import * as MD from '../Modal/styles';
import CardModalTexto from '../Modal/CardModalTexto';
import negado from '../../assets/svgs/negado.svg';

const CardImgNeg = () => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={negado}
        />
      </MD.ContainerHeardModalMain>
      <label>Acesso NEGADO.</label>
      <p>No momento seus requisitos não estão habilitados.</p>
      <br />
    </CardModalTexto>
  );
};

export default CardImgNeg;
