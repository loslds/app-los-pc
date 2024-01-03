//import React from "react";

import * as S from "./stylesSidebar";

type PropsBtOnOffSB = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonSideOnOffBar = ({ titbtn, img, onClick }: PropsBtOnOffSB) => {
  return (
    <S.ContainerSideOnOffButton>
      
      <S.ButtonOnOffImg img={img} title={titbtn} onClick={onClick} />
    </S.ContainerSideOnOffButton>
  );
};

export default ButtonSideOnOffBar;
