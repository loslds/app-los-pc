import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';

type PropsLayoutExped = {
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?: () => void;
};
export const LayoutExped = ({
  onclick,
  title,
  children,
  onchange,
  ischeck,
  onLogin
}: PropsLayoutExped) => {
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
        <h1>Menu Expedição </h1>
        <Pg.ContainerPage>{children}</Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer Expedição</h1>
    </ContentPages>
  );
};
