import * as S from "./stylesSidebar";

type TypeSBContainerItensModMn = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContainerItensModMn = ({ onoff, children }: TypeSBContainerItensModMn) => {
  return (
    <S.ContainerItensModBntMn open={onoff}>
      {children}
    </S.ContainerItensModBntMn>
  );
};

export default ContainerItensModMn;
