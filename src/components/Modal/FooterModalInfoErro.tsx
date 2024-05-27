import * as MD from './styles';

type TypeFooterModalInfoErro = {
  children?: React.ReactNode;
};
export const FooterModalInfoErro = ({ children }: TypeFooterModalInfoErro) => {
  return (
    <MD.ContainerCardInfoModalFooter>
      <MD.ContainerCardInfoModalFlex>{children}</MD.ContainerCardInfoModalFlex>
    </MD.ContainerCardInfoModalFooter>
  );
};
