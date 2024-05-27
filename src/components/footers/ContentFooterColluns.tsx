import * as F from './styles';

type TypeContentFooterColluns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
export const ContentFooterColluns = ({
  pwidth,
  children
}: TypeContentFooterColluns) => {
  return (
    <F.ContainerFooterColluns pwidth={pwidth}>
      <F.ContainerFooterCollunsFlex>{children}</F.ContainerFooterCollunsFlex>
    </F.ContainerFooterColluns>
  );
};
