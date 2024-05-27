import React from 'react';
import * as Pag from '../layouts/styled';

type TypeContentFooterMain = {
  children?: React.ReactNode | JSX.Element;
};
export const ContentFooterMain = ({ children }: TypeContentFooterMain) => {
  return <Pag.ContainerFooter>{children}</Pag.ContainerFooter>;
};
