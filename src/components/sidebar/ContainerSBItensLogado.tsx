import * as S from './stylesSidebar';

type TypeContainerSBItensLogado = {
  disp?: boolean;
  children?: React.ReactNode | JSX.Element;
};
export const ContainerSBItensLogado = ({
  disp,
  children
}: TypeContainerSBItensLogado) => {
  return <S.ContainerItensLogon disp={disp}>{children}</S.ContainerItensLogon>;
};
