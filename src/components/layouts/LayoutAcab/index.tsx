import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/headerPage/HearderPages';
import { ReactNode } from 'react';
//import { FooterHome } from '../../footers/FooterHome';


type PropsLayoutDesig = {
  img?:string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
}
export const LayoutDesig = ({img, onclick, title, children, onchange, ischeck, onLogin}:PropsLayoutDesig) => {
  return (
    <ContentPages>
      <HearderPage img={img} onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onLogin={onLogin}/>
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <h1>Menu Design</h1>
        <Pg.ContainerPage>
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>-
      <Pg.DivisionPgHztal />
      <h1>Footer Design</h1>
    </ContentPages>
  );
}