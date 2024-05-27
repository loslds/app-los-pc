import * as MD from './styles';

type TypeHeaderModalInfoErro = {
  children?: React.ReactNode;
};
export const HeaderModalInfoErro = ({ children }: TypeHeaderModalInfoErro) => {
  return (
    <MD.ContainerCardInfoModalHeader>
      <MD.ContainerCardInfoModalFlex>{children}</MD.ContainerCardInfoModalFlex>
    </MD.ContainerCardInfoModalHeader>
  );
};
