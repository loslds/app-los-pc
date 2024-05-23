//import React from "react";

import * as S from "./stylesSidebar";

type TypeSBButtonSideOnOffBar = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonSideOnOffBar = ({ titbtn, img, onClick }: TypeSBButtonSideOnOffBar) => {
  return (
    <S.ContainerSideOnOffButton>
      
      <S.ButtonOnOffImg img={img} title={titbtn} onClick={onClick} />
    </S.ContainerSideOnOffButton>
  );
};

export default ButtonSideOnOffBar;
