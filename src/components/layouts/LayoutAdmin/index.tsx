import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';

type PropsLayoutAdmin = {
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?: () => void;
};
export const LayoutAdmin = ({
  onclick,
  title,
  children,
  onchange,
  ischeck,
  onLogin
}: PropsLayoutAdmin) => {
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
        <h1>Menu Administração </h1>
        <Pg.ContainerPage>{children}</Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer Administração</h1>
    </ContentPages>
  );
};
