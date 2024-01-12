import * as S from "../../sidebar/stylesSidebar";
import * as Lg from "./styled";
import left from "../../../assets/svgs/left.svg";
import higth from "../../../assets/svgs/higth.svg";

type BntTitleLg ={
  title?: string;
  isimg?: boolean;
  onclick?: () => void;
}
export const ContentButtonTitleLogin = ({isimg,title, onclick }:BntTitleLg) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <S.ContainerSideOnOffButton>
        {isimg ? (
          <S.ButtonOnOffImg img={left} title={'FECHA...'} onClick={onclick}/>
          ):(
          <S.ButtonOnOffImg img={higth} title={'ABRE...'} onClick={onclick}/>
          )
        }
      </S.ContainerSideOnOffButton>
    </Lg.ContainerBtnLoginSRigth>
  );
}