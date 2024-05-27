import * as F from '../stylesfoot';

type TypeBarTextoFoot = {
  children?: React.ReactNode | JSX.Element;
};
export const BarTextoFoot = ({ children }: TypeBarTextoFoot) => {
  return <F.AreaTestoItem>{children}</F.AreaTestoItem>;
};
