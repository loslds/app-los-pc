import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderMyAccount } from '../../headers/HearderMyAccount';
import { ReactNode } from 'react';

type PropsLayoutMyAccount = {
  
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onclickhome?:  () => void;
}
export const LayoutMyAccount = ( { onclick, title, children, onchange, ischeck, onclickhome}:PropsLayoutMyAccount) => {
  return (
    <ContentPages>
      <HearderMyAccount onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onclickhome={onclickhome}/>
      <Pg.DivisionPgHztal />
      <Pg.ContainerBody>
        <h1>Minha Conta</h1>
        <Pg.ContainerPage>
{/* 
          <BarSideMenuHome />
            <BarSideMenuDados itonoff={itonoff} onclicklog={onclicklog}/>
          <Hm.DivisionPgHztal />
 */}
          {children}
        </Pg.ContainerPage>
      </Pg.ContainerBody>
      <Pg.DivisionPgHztal />
      <h1>Footer MyAccount</h1>
    </ContentPages>
  );
}