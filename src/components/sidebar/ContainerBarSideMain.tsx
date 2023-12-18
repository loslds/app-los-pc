import * as S from "./stylesSidebar";

type PropsSideBar = {
  children?: React.ReactNode | JSX.Element;
};

export const ContainerBarSideMain = ({ children }: PropsSideBar) => {
  return <S.ContainerSPanelMain>{children}</S.ContainerSPanelMain>;
};


