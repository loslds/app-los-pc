// import "../../../styles/global.ts";
import { ReactNode } from 'react';

import { LayoutHome } from '../../../layouts/LayoutHome/index.tsx';

type PropsThemeHome = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;
  titlepg?: string;
  imghpg?: string;
  titbtnhpg?: string;
  onclickhpg: () => void;
  imgopen?: string;
  titbtnopen?: string;
  onclickopen?: () => void;
  onchange: () => void;
  ischeck: boolean;
  children?: ReactNode | JSX.Element;
  disp?: boolean;
};
export const ThemeHome = ({
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
  onchange,
  ischeck,
  children,
  disp
}: PropsThemeHome) => {
  return (
    <LayoutHome
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
      onchange={onchange}
      ischeck={ischeck}
      disp={disp}
    >
      {children}
    </LayoutHome>
  );
};
