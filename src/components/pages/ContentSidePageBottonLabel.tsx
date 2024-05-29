import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentSidePageBottonLabel = {
  istitl?: boolean;
  title?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentSidePageBottonLabel = ({
  istitl,
  title,
  children
}: TypeContentSidePageBottonLabel) => {
  return (
    <Pg.ContainerBtnSRigthPage>
      {istitl ? <label>{title}</label> : null}
      {children}
    </Pg.ContainerBtnSRigthPage>
  );
};
