//import { ReactNode } from "react";

import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentDivTestoAtenctionPage = {
  pxwidth?: string;
  titulo?: string;
  label?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentDivTestoAtenctionPage = ({
  pxwidth,
  label,
  titulo,
  children
}: TypeContentDivTestoAtenctionPage) => {
  return (
    <Pg.ContainerDivTestoAtenctionPage pxwidth={pxwidth}>
      <h3>{titulo}</h3>
      <label>{label}</label>
      {children}
    </Pg.ContainerDivTestoAtenctionPage>
  );
};
