import * as Lg1 from './styled';

/*
*styled-component -> ContentSideLabelBotton 
                  -> Lg1.ContainerBtnSRigth 
                  -> Lg1.ContainerCustonBtn
* mostrar ou não Label -> isopen?: boolean;
* setar Largura desejada -> pwidth?: string;
* 
* receber conponentes filhos -> children?: ReactNode | JSX.Element;

*/

type TypeContentSideLabelBotton = {
  pxheight?: string;
  isopen?: boolean;
  title?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
};
const ContentSideLabelBotton = ({
  pxheight,
  isopen,
  title,
  img,
  titbtn,
  onclick
}: TypeContentSideLabelBotton) => {
  return (
    <Lg1.ContainerBtnSRigth>
      {isopen ? <label>{title}</label> : null}
      <Lg1.ContainerCustonBtn pxheight={pxheight}>
        <Lg1.ButtonDefaulImg img={img} title={titbtn} onClick={onclick} />
      </Lg1.ContainerCustonBtn>
    </Lg1.ContainerBtnSRigth>
  );
};

export default ContentSideLabelBotton;
