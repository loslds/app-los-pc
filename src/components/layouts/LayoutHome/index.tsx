import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/headerPage/HearderPages';
import { ReactNode } from 'react';
import { FooterHome } from '../../footers/FooterHome';

type PropsLayoutHome = {
  img?:string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
}
export const LayoutHome = ({img, onclick, title, children, onchange, ischeck, onLogin}:PropsLayoutHome) => {
  return (
    <ContentPages>
      <HearderPage img={img} onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onLogin={onLogin}/>
      <Hm.DivisionPgHztal />
      <Hm.ContainerBody>
        <Hm.ContainerPage>
          {children}
        </Hm.ContainerPage>
      </Hm.ContainerBody>
      <Hm.DivisionPgHztal />
      <FooterHome />
    </ContentPages>
  );
}