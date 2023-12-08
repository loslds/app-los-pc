import * as F from './styles';

type PropsFootColluns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const ContentFooterColluns = ({ pwidth, children }:PropsFootColluns) => {
  return (
    <F.ContainerFooterColluns pwidth={pwidth }>
      <F.ContainerFooterCollunsFlex>
        {children}
      </F.ContainerFooterCollunsFlex>
    </F.ContainerFooterColluns>
  );
};
export default ContentFooterColluns;
