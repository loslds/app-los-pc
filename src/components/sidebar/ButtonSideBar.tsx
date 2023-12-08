//import React from "react";

import * as S from "./stylesSidebar";

type PropsBtSB = {
  img?: string;
  titbtn?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonSideBar = ({ titbtn, img, onClick }: PropsBtSB) => {
  return (
    <S.ContainerSideButton>
      <S.ButtonSideBarImg img={img} title={titbtn} onClick={onClick} />
    </S.ContainerSideButton>
  );
};
export default ButtonSideBar;
