import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentCardTitle = {
  pheight?: string;
  children?: ReactNode;
};
export const ContentCardTitle = ({ pheight, children }: TypeContentCardTitle) => {
  return (
    <Lg.ContainerTitle pheight={pheight}>
      {children}
    </Lg.ContainerTitle>
  )
};
