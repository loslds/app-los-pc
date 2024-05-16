import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';
import { BarSideMenuRecep } from '../../sidebar/BarSideMenuRecep.tsx';

type PropsLayoutRecep = {
  //img?: string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
}
export const LayoutRecep = ({onclick, title, children, onchange, ischeck, onLogin}:PropsLayoutRecep) => {
  
  return (
    <ContentPages>
      <HearderPage onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onLogin={onLogin}/>
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <Pg.ContainerPage>
          <BarSideMenuRecep />
          <Pg.DivisionPgHztal />
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer Recepção</h1>
    </ContentPages>
  );
}