import * as F from './stylesfoot';

type PropsFootColuuns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const Bar3ColunsFoot = ({ pwidth, children }:PropsFootColuuns) => {
  return (
    <F.Area3Collun pwidth={pwidth }>
      {children}
    </F.Area3Collun>
  );
};
export default Bar3ColunsFoot;
