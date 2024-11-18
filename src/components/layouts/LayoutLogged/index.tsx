import * as Lgd from '../styled';
import { ReactNode } from 'react';
import { ContentPages } from '../ContentPages';
import { HearderLogged } from '../../headers/HearderLogged';

import { FooterHome } from '../../footers/FooterHome';
import { BarSideMenuHome } from '../../sidebar/BarSideMenuHome';
import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

type TypeLayoutLogged = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  imghpg?: string;
  titbtnhpg?: string;
  onclickhpg?: () => void;

  imgopen?: string;
  titbtnopen?: string;
  onclickopen?: () => void;

  imgreg?: string;
  titbtnreg?: string;
  onclickreg?: () => void;

  onchange: () => void;
  ischeck?: boolean;
  children?: ReactNode | JSX.Element;
  open?: boolean;
};

export const LayoutLogged = ({
  imgsys,
  titbtnsys,
  onclicksys,

  titlepg,

  imghpg,
  titbtnhpg,
  onclickhpg,

  imgopen,
  titbtnopen,
  onclickopen,

  imgreg,
  titbtnreg,
  onclickreg,

  onchange,
  ischeck,
  
  children,
  open
}: TypeLayoutLogged) => {
  return (
    <ContentPages>
      <HearderLogged
        imgsys={imgsys}
        titbtnsys={titbtnsys}
        onclicksys={onclicksys}
        titlepg={titlepg}
        imghpg={imghpg}
        titbtnhpg={titbtnhpg}
        onclickhpg={onclickhpg}
        imgopen={imgopen}
        titbtnopen={titbtnopen}
        onclickopen={onclickopen}
        imgreg={imgreg}
        titbtnreg={titbtnreg}
        onclickreg={onclickreg}
        onchange={onchange}
        ischeck={ischeck}
      />
      <Lgd.DivisionPgHztal />
      <Lgd.ContainerBody>
        <Lgd.ContainerPage>
          <BarSideMenuHome />
          <BarSideMenuDados open={open} />
          <Lgd.DivisionPgHztal />
          {children}
        </Lgd.ContainerPage>
      </Lgd.ContainerBody>
      <Lgd.DivisionPgHztal />
      <FooterHome />
    </ContentPages>
  );
};