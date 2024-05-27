import * as F from '../stylesfoot';

type TypeBarProd3ColunsFoot = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
export const BarProd3ColunsFoot = ({
  pwidth,
  children
}: TypeBarProd3ColunsFoot) => {
  return <F.Area3ProdCollun pwidth={pwidth}>{children}</F.Area3ProdCollun>;
};
