
import * as Pag from "./styled";

type ContentPagesButtonType = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ContentPagesButton = ({ titbtn, img, onClick }: ContentPagesButtonType) => {
  return (
    <Pag.ContainerPagesButton>
      <Pag.ButtonPagesImg img={img} title={titbtn} onClick={onClick} />
    </Pag.ContainerPagesButton>
  );
};
export default ContentPagesButton;
