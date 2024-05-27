
import * as MD from './styles';

type TypeContainerCenterImgDiv = {
  img?: string;
  // title?: string;
  // description?: string;
  // selected?: boolean;
  // onClick?: () => {};
  //  children?: React.ReactNode;
};

export const ContainerCenterImgDiv = ({
  img
  // title,
  // description,
  // selected,
  // onClick
//  children,
}:TypeContainerCenterImgDiv) => {
  return (
    <MD.ContainerCenterImgDiv img={img} />
  )
};

