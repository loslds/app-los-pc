
import * as Hm from '../styled';

type PropsHeaderImg = {
  img?:string;
  onclick?: () => void;
}
export const ContentHeaderImgSys = ({img, onclick }:PropsHeaderImg) => {
  return (
    <Hm.ContainerImgSys img={img} onClick={onclick} />
  );
}
