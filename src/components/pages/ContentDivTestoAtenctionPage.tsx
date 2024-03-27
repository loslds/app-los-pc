//import { ReactNode } from "react";

import { ReactNode } from 'react';

import * as Lg from './stylePage';

type TypeContentDivTestoAtenctionPage = {
  pxwidth?: string;
  titulo?: string;
  label?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivTestoAtenctionPage = ({
  pxwidth,
  label,
  titulo,
  children
}: TypeContentDivTestoAtenctionPage) => {
  return (
    <Lg.ContainerDivTestoAtenctionPage pxwidth={pxwidth}>
      <h3>{titulo}</h3>
      <label>{label}</label>
      {children}
    </Lg.ContainerDivTestoAtenctionPage>
  );
};

export default ContentDivTestoAtenctionPage;
