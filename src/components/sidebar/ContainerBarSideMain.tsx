import * as S from "./stylesSidebar";

type TypeSBContainerBarSideMain = {
  children?: React.ReactNode | JSX.Element;
};

export const ContainerBarSideMain = ({ children }: TypeSBContainerBarSideMain) => {
  return <S.ContainerSPanelMain>{children}</S.ContainerSPanelMain>;
};


