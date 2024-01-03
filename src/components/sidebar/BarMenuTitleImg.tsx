import * as S from "./stylesSidebar";

type PropsTitleMn = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContentMenuSide = ({ onoff, children }: PropsTitleMn) => {
  return (
    <S.ContainerItensModulo open={onoff}>
      {children}
    </S.ContainerItensModulo>
  );
};

export default ContentMenuSide;