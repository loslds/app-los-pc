import * as S from './stylesSidebar';

type PropsItensLogado = {
  openlg1?: boolean;
  children?: React.ReactNode | JSX.Element;
};
const ContainerItensLogado = ({ openlg1, children }: PropsItensLogado) => {
  return (
    <S.ContainerItensLogon openlg={openlg1}>{children}</S.ContainerItensLogon>
  );
};

export default ContainerItensLogado;
