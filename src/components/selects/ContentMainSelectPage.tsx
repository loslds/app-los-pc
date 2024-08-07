import { ReactNode } from 'react';
import * as Sl from './styledSelect';

type TypeContentMainSelectPage = {
  children?: ReactNode  | JSX.Element;
};
export const ContentMainSelectPage = ({
  children
}: TypeContentMainSelectPage) => {
  return (
    <Sl.ContainerSel>
      <Sl.ContainerSelFlex>{children}</Sl.ContainerSelFlex>
    </Sl.ContainerSel>
  );
};
