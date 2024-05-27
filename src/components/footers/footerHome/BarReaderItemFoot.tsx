import * as F from '../stylesfoot';

type TypeBarReaderItemFoot = {
  children?: React.ReactNode | JSX.Element;
};
export const BarReaderItemFoot = ({ children }: TypeBarReaderItemFoot) => {
  return <F.AreaReaderTesto>{children}</F.AreaReaderTesto>;
};
