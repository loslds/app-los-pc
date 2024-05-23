import * as MD from '../Modal/styles';
import CardModalTexto from '../Modal/CardModalTexto';

type TypeCardImgMsg = {
  img?: string;
  txtaga?: string;
  txtlabel?: string;
  txtp?: string;
};
const CardImgMsg = ({img, txtaga, txtlabel, txtp}:TypeCardImgMsg) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={img}
        />
      </MD.ContainerHeardModalMain>
      <h2>{txtaga}</h2>
      <label>{txtlabel}</label>
      <p>{txtp}</p>
      <br />
    </CardModalTexto>
  );
};

export default CardImgMsg;
