import * as S from "./stylesSidebar";

import left from "../../assets/svgs/left.svg";
import higth from "../../assets/svgs/higth.svg";

type TypeSBContentButtonTitleMenu ={
  title?: string;
  isimg?: boolean;
  onclick?: () => void;
}
export const ContentButtonTitleMenu = ({isimg,title, onclick }:TypeSBContentButtonTitleMenu) => {
  return (
    <S.ContainerBtnMnSRigth>
      <label>{title}</label>
      <S.ContainerSideOnOffButton>
        {isimg ? (
          <S.ButtonOnOffImg img={left} title={'FECHA...'} onClick={onclick}/>
          ):(
          <S.ButtonOnOffImg img={higth} title={'ABRE...'} onClick={onclick}/>
          )
        }
      </S.ContainerSideOnOffButton>
    </S.ContainerBtnMnSRigth>
  );
}