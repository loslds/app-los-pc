import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderHome } from '../HearderHome';
import { ReactNode } from 'react';
type PropsLayoutHome = {
  img?:string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
}
export const LayoutHome = ({img, onclick, title, children, onchange, ischeck}:PropsLayoutHome) => {
  return (
    <ContentPages>
      <HearderHome img={img} onclick={onclick} title={title} onchange={onchange} ischeck={ischeck}/>
      <Hm.DivisionPgHztal />
      
      <Hm.ContainerBody>
        <Hm.ContainerPage>
          {children}
        </Hm.ContainerPage>
      </Hm.ContainerBody>
      <Hm.DivisionPgHztal />

      <Hm.ContainerFooter>
        Footer1
      </Hm.ContainerFooter>
    </ContentPages>
  );
}