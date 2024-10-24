
import * as Hed from "./styledHeader";

type ContentHeaderButtonType = {
  imgbtn?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentHeaderButton = ({ imgbtn, titbtn, onClick }: ContentHeaderButtonType) => {
  return (
    <Hed.ContainerHeaderButton>
      <Hed.ButtonHeaderImg img={imgbtn} title={titbtn} onClick={onClick} />
    </Hed.ContainerHeaderButton>
  );
};

