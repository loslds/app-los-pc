import * as S from "./stylesSidebar";

type PropsItnsMd = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContainerItensMenu = ({ onoff, children }: PropsItnsMd) => {
  return (
    <S.ContainerItensModulo open={onoff}>{children}</S.ContainerItensModulo>
  );
};

export default ContainerItensMenu;
