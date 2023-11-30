import * as F from "./stylesfoot";

type PropsFootColuuns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const BarProd3ColunsFoot = ({ pwidth, children }: PropsFootColuuns) => {
  return <F.Area3ProdCollun pwidth={pwidth}>{children}</F.Area3ProdCollun>;
};
export default BarProd3ColunsFoot;
