import * as F from "./stylesfoot";

type PropsFootColuuns = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const BarContac3ColunsFoot = ({ pwidth, children }: PropsFootColuuns) => {
  return <F.Area3EmpCollun pwidth={pwidth}>{children}</F.Area3EmpCollun>;
};
export default BarContac3ColunsFoot;
