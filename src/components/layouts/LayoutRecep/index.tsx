import * as Pg from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderPage } from '../../headers/HearderPages';
import { ReactNode } from 'react';
import { BarSideMenuRecep } from '../../sidebar/BarSideMenuRecep.tsx';

type PropsLayoutRecep = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;
  titlepg?: string;
  onchange?: ReactNode | JSX.Element;
  ischeck: boolean;
  children?: ReactNode | JSX.Element;
  imgopen?: string;
  titbtnopen?: string;
  onClickOpen?: () => void;
};
export const LayoutRecep = ({
  imgsys,
  titbtnsys,
  onclicksys,
  titlepg,
  onchange,
  ischeck,
  children,
  imghlp,
  titbtnhlp,
  onclickhlp,
  imgopen,
  titbtnopen,
  onclickopen
}: PropsLayoutRecep) => {
  return (
    <ContentPages>
      <HearderRecepcao
        img={imgsys}
        titbtn={titbtnsys}
        onclick={onclicksys}
        title={titlepg}
        onchange={onchange}
        ischeck={ischeck}
        imghlp={imghlp}
        titbtnhlp={titbtnhlp}
        onclickhlp={onclickhlp}
        imgopen={imgopen}
        titbtnopen={titbtnopen}
        onclickopen={onclickopen}
      />
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
};
