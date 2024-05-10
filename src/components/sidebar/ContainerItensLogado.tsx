import * as S from "./stylesSidebar";

type PropsItnsLg = {
  children?: React.ReactNode | JSX.Element;
  itonoff: boolean;
};

const ContainerItensLogado = ({ itonoff, children }: PropsItnsLg) => {
  return (
    <S.ContainerItensLogon itopen={itonoff}>
      {children}
    </S.ContainerItensLogon>
  );
};

export default ContainerItensLogado;
