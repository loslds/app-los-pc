import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderLogin } from '../../headers/HearderLogin';
//import { FooterLogin } from '../../footers/FooterLogin';
import { ReactNode } from 'react';

type PropsLayoutLogin = {
  onclick?: () => void;
  title?: string;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?: () => void;
};
export const LayoutLogin = ({
  onclick,
  title,
  children,
  onchange,
  ischeck
}: PropsLayoutLogin) => {
  return (
    <ContentPages>
      <HearderLogin
        onclick={onclick}
        title={title}
        onchange={onchange}
        ischeck={ischeck}
      />
      <Hm.DivisionPgHztal />
      <Hm.ContainerBody>
        <Hm.ContainerPage>{children}</Hm.ContainerPage>
      </Hm.ContainerBody>
    </ContentPages>
  );
};

{
  /* <HearderPage onclick={onclick} title={title} onchange={onchange} ischeck={ischeck} onLogin={onLogin}/>
<Hm.DivisionPgHztal />
<Hm.ContainerBody>
  <Hm.ContainerPage>
    <BarSideMenuHome />
    <Hm.DivisionPgHztal />
    {children}
  </Hm.ContainerPage>
</Hm.ContainerBody>
<Hm.DivisionPgHztal />
<FooterHome /> */
}
