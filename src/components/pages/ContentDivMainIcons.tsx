import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentDivIcons = {
  brd?: string;
  hght?: string;
  wdth?: string;
  label?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentDivMainIcons = ({
  brd,
  hght,
  wdth,
  label,
  children
}: TypeContentDivIcons) => {
  return (
    <Pg.ContainerDivMainIcons
      brd={brd}
      hght={hght}
      wdth={wdth}
    >
      <label>{label}</label>
      {children}
    </Pg.ContainerDivMainIcons>
  );
};
