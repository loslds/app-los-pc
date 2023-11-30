import * as F from "./stylesfoot";

type PropsAgaFoot = {
  children?: React.ReactNode | JSX.Element;
};
const BarReaderItemFoot = ({ children }: PropsAgaFoot) => {
  return (
    <F.AreaReaderTesto>
      {children}
    </F.AreaReaderTesto>
  );
};
export default BarReaderItemFoot;
