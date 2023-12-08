import * as S from "./stylesSidebar";

type PropsSideBar = {
  children?: React.ReactNode | JSX.Element;
};

const ContainerBarSideMain = ({ children }: PropsSideBar) => {
  return <S.ContainerSPanelMain>{children}</S.ContainerSPanelMain>;
};

export default ContainerBarSideMain;
