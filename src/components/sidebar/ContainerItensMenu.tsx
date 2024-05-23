import * as S from "./stylesSidebar";

type TypeSBContainerItensMenu = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContainerItensMenu = ({ onoff, children }: TypeSBContainerItensMenu) => {
  return (
    <S.ContainerItensModulo open={onoff}>
      {children}
    </S.ContainerItensModulo>
  );
};

export default ContainerItensMenu;
