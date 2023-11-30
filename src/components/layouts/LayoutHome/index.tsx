import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderHome } from '../HearderHome';
import { ReactNode } from 'react';
type PropsLayoutHome = {
  img?:string;
  onclick?: () => void;
  title?:string;
  children?: ReactNode | JSX.Element;
  toggleTheme(): void;
}
export const LayoutHome = ({img, onclick, title, children, toggleTheme}:PropsLayoutHome) => {
  return (
    <ContentPages>
      <HearderHome img={img} onclick={onclick} title={title} toggleTheme={toggleTheme}/>
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