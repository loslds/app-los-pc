import * as F from '../stylesfoot';

type TypeBarContac3ColunsFoot = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
export const BarContac3ColunsFoot = ({
  pwidth,
  children
}: TypeBarContac3ColunsFoot) => {
  return <F.Area3EmpCollun pwidth={pwidth}>{children}</F.Area3EmpCollun>;
};
