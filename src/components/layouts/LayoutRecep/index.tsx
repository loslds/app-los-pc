import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/headerPage/HearderPages';
import { ReactNode } from 'react';
//import { FooterHome } from '../../footers/FooterHome';


type PropsLayoutPage = {
  img?:string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
}
export const LayoutRecep = ({img, onclick, title, children, onchange, ischeck, onLogin}:PropsLayoutPage) => {
  return (
    <ContentPages>
      <HearderPage img={img} onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onLogin={onLogin}/>
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <h1>Menu Recepção</h1>
        <Pg.ContainerPage>
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>-
      <Pg.DivisionPgHztal />
      <h1>Footer Recepção</h1>
    </ContentPages>
  );
}