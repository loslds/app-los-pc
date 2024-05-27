import * as F from '../stylesfoot';

type TypeButtonCollunImgFoot = {
  img?: string;
  title?: string;
  onClick?: () => void;
};
export const ButtonCollunImgFoot = ({
  img,
  title,
  onClick
}: TypeButtonCollunImgFoot) => {
  return (
    <F.DivAreaImgButton>
      <F.ButtonImgFoot img={img} title={title} onClick={onClick} />
    </F.DivAreaImgButton>
  );
};
