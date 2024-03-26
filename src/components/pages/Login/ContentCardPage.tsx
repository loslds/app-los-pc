import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentCardPage = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
const ContentCardPage = ({ pwidth, children }: TypeContentCardPage) => {
  return (
    <Lg.ContainerCardPage>
      <Lg.ContainerCardPageFlex pwidth={pwidth}>{children}</Lg.ContainerCardPageFlex>
    </Lg.ContainerCardPage>
  );
};

export default ContentCardPage;