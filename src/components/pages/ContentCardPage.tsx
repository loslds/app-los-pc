import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardPage = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentCardPage = ({ pwidth, children }: TypeContentCardPage) => {
  return (
    <Pg.ContainerCardPage>
      <Pg.ContainerCardPageFlex pwidth={pwidth}>
        {children}
      </Pg.ContainerCardPageFlex>
    </Pg.ContainerCardPage>
  );
};

