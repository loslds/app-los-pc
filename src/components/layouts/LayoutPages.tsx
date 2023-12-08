import * as Pag from "./styled";
import { ReactNode } from 'react';

import { ContentPages } from './ContentPages';
import { HearderPages } from './HearderPages';
import { FooterPages } from "./FooterPages";

type PropsLayout = {
  children?: ReactNode | JSX.Element;
}
export const LayoutPages = ({children}: PropsLayout) => {
  return (
    <ContentPages>
      <HearderPages />
      <Pag.DivisionPgHztal />
      <Pag.ContainerBody>
        <Pag.ContainerPage>
          {children}
        </Pag.ContainerPage>
      </Pag.ContainerBody>
      <Pag.DivisionPgHztal />
      <FooterPages />
    </ContentPages>
  );
}