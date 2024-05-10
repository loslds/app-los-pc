import * as S from "./stylesSidebar";

type PropsItnsLg = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContainerItensLogado = ({ onoff, children }: PropsItnsLg) => {
  return (
    <S.ContainerItensModulo open={onoff}>
      {children}
    </S.ContainerItensModulo>
  );
};

export default ContainerItensLogado;
