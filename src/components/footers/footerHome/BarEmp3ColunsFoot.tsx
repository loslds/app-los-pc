import * as F from "../stylesfoot";

type TypeBarEmp3ColunsFoot = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
export const BarEmp3ColunsFoot = ({ pwidth, children }: TypeBarEmp3ColunsFoot) => {
  return <F.Area3EmpCollun pwidth={pwidth}>{children}</F.Area3EmpCollun>;
};

