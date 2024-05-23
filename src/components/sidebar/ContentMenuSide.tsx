import * as S from "./stylesSidebar";

type TypeSBContentMenuSide = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContentMenuSide = ({ onoff, children }: TypeSBContentMenuSide) => {
  return (
    <S.ContainerItensModulo open={onoff}>
      {children}
    </S.ContainerItensModulo>
  );
};

export default ContentMenuSide;
