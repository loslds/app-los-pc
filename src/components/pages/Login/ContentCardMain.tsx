import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentCardMain = {
  children?: ReactNode;
};
export const ContentCardMain = ({ children }: TypeContentCardMain) => {
  return (
    <Lg.ContainerCardMain>
      {children}
    </Lg.ContainerCardMain>
  )
};
