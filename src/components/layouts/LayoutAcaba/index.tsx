import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';
//import { FooterHome } from '../../footers/FooterHome';

type PropsLayoutAcaba = {
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?: () => void;
};
export const LayoutAcaba = ({
  onclick,
  title,
  children,
  onchange,
  ischeck,
  onLogin
}: PropsLayoutAcaba) => {
  return (
    <ContentPages>
      <HearderPage
        onclick={onclick}
        title={title}
        onchange={onchange}
        ischeck={ischeck}
        onLogin={onLogin}
      />
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <h1>Menu Acabamento </h1>
        <Pg.ContainerPage>{children}</Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer Acabamento</h1>
    </ContentPages>
  );
};
