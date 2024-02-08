import * as S from "../../sidebar/stylesSidebar";
import * as Lg from "./styled";
import left from "../../../assets/svgs/left.svg";
import higth from "../../../assets/svgs/higth.svg";

type BntTitleLg ={
  title?: string;
  isimg?: boolean;
  onClick?: () => void; 
  //React.MouseEventHandler<HTMLButtonElement>;
}
export const ContentButtonTitleImg = ({title, isimg, onClick }:BntTitleLg) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <S.ContainerSideOnOffButton>
        {isimg ? (
          <S.ButtonOnOffImg img={left} title={'FECHA...'} onClick={onClick}/>
          ):(
          <S.ButtonOnOffImg img={higth} title={'ABRE...'} onClick={onClick}/>
          )
        }
      </S.ContainerSideOnOffButton>
    </Lg.ContainerBtnLoginSRigth>
  );
}
// export default ContentButtonTitleImg
// type PropsBtPg = {
//   img?: string;
//   titbtn?: string;
//   onClick?: React.MouseEventHandler<HTMLButtonElement>;
// };
// const ContentPagesButton = ({ titbtn, img, onClick }: PropsBtPg) => {
//   return (
//     <Pag.ContainerPagesButton>
//       <Pag.ButtonPagesImg img={img} title={titbtn} onClick={onClick} />
//     </Pag.ContainerPagesButton>
//   );
// };
// export default ContentPagesButton;