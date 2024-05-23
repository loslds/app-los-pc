import * as S from './stylesSidebar';

type TypeSBContainerItensLogado = {
  openlg?: boolean;
  children?: React.ReactNode | JSX.Element;
};
const ContainerItensLogado = ({ openlg, children }: TypeSBContainerItensLogado) => {
  return (
    <S.ContainerItensLogon openlg={openlg}>{children}</S.ContainerItensLogon>
  );
};

export default ContainerItensLogado;
