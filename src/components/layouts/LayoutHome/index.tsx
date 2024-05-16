import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderHome } from '../../headers/HearderHome';
import { ReactNode } from 'react';
import { FooterHome } from '../../footers/FooterHome';
import { BarSideMenuHome } from '../../sidebar/BarSideMenuHome';
import BarSideMenuDados from '../../sidebar/BarSideMenuDados';

type PropsLayoutHome = {
  img: string;
  titbtn: string;
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
  //onclicklog?: () => void;
  openlg3?: boolean;
};
export const LayoutHome = ({
  img, titbtn, onclick, title, children, onchange, ischeck, onLogin, openlg3}: PropsLayoutHome) => {
  return (
    <ContentPages>
      <HearderHome
        img={img}
        titbtn={titbtn}
        onclick={onclick}
        title={title}
        onchange={onchange}
        ischeck={ischeck}
        onLogin={onLogin}
      />
      <Hm.DivisionPgHztal />

      <Hm.ContainerBody>
        <Hm.ContainerPage>
          <BarSideMenuHome />
          <BarSideMenuDados openlg2={openlg3} />
          <Hm.DivisionPgHztal />
          {children}
        </Hm.ContainerPage>
      </Hm.ContainerBody>
      <Hm.DivisionPgHztal />

      <FooterHome />
    </ContentPages>
  );
};
