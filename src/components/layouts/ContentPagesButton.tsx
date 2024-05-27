
import * as Pag from "./styled";

type ContentPagesButtonType = {
  imgbtn?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentPagesButton = ({ imgbtn, titbtn, onClick }: ContentPagesButtonType) => {
  return (
    <Pag.ContainerPagesButton>
      <Pag.ButtonPagesImg img={imgbtn} title={titbtn} onClick={onClick} />
    </Pag.ContainerPagesButton>
  );
};

