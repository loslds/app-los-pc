import * as F from "./stylesfoot";

type PropsAgaFoot = {
  children?: React.ReactNode | JSX.Element;
};
const BarTextoFoot = ({ children }: PropsAgaFoot) => {
  return (
    <F.AreaTestoItem>
      {children}
    </F.AreaTestoItem>
  );
};
export default BarTextoFoot;
