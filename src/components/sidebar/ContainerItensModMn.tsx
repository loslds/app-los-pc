import * as S from "./stylesSidebar";

type PropsItnsMdMn = {
  children?: React.ReactNode | JSX.Element;
  onoff: boolean;
};

const ContainerItensModMn = ({ onoff, children }: PropsItnsMdMn) => {
  return (
    <S.ContainerItensModBntMn open={onoff}>
      {children}
    </S.ContainerItensModBntMn>
  );
};

export default ContainerItensModMn;
