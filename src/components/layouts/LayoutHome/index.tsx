import * as Hm from '../styled';

import { ContentPages } from '../ContentPages';
import { HearderHome } from '../../headers/HearderHome';
import { ReactNode } from 'react';
import { FooterHome } from '../../footers/FooterHome';
import { BarSideMenuHome } from '../../sidebar/BarSideMenuHome';
import { BarSideMenuDados } from '../../sidebar/BarSideMenuDados';

type TypeLayoutHome = {
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
export const LayoutHome = ({
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
}: TypeLayoutHome) => {
  return (
    <ContentPages>
      <HearderHome
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
      <Hm.DivisionPgHztal />
      <Hm.ContainerBody>
        <Hm.ContainerPage>
          <BarSideMenuHome />
          <BarSideMenuDados open={open} />
          <Hm.DivisionPgHztal />
          {children}
        </Hm.ContainerPage>
      </Hm.ContainerBody>
      <Hm.DivisionPgHztal />
      <FooterHome />
    </ContentPages>
  );
};
