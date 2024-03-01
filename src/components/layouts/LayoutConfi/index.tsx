import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';

type PropsLayoutConfi = {
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?: () => void;
};
export const LayoutConfi = ({
  onclick,
  title,
  children,
  onchange,
  ischeck,
  onLogin
}: PropsLayoutConfi) => {
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
        <h1>Menu Config </h1>
        <Pg.ContainerPage>{children}</Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer Config</h1>
    </ContentPages>
  );
};
