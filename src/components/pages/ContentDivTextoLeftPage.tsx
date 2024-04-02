import { ReactNode } from 'react';

import * as Pg from './stylePage.ts';

type TypeContentDivTextoLeftPage = {
  isborda: boolean;
  label?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivTextoLeftPage = ({
  isborda,
  label,
  children
}: TypeContentDivTextoLeftPage) => {
  return (
    <Pg.ContainerTextoLeftPage isborda={true}>
      <label>{label}</label>
      {children}
    </Pg.ContainerTextoLeftPage>
  );
};

export default ContentDivTextoLeftPage;
