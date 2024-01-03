import * as S from "./stylesSidebar";

type PropsItnsMd = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContentMenuSide = ({ onoff, children }: PropsItnsMd) => {
  return (
    <S.ContainerItensModulo open={onoff}>
      {children}
    </S.ContainerItensModulo>
  );
};

export default ContentMenuSide;
