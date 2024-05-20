// import "../../../styles/global.ts";
import { ReactNode } from 'react';
import { LayoutLogin1 } from '../../../layouts/LayoutLogin1';

type PropsThemeLogin1 = {
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
  ischeck: boolean;
  onchange: () => void;
  children?: ReactNode | JSX.Element;
};
export const ThemeLogin1 = ({
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
  ischeck,
  onchange,
  children,
}: PropsThemeLogin1) => {
  return (
    <LayoutLogin1
      imgsys={imgsys}
      titbtnsys={titbtnsys}
      onclicksys={onclicksys}
      titlepg={titlepg}
      imghpg={imghpg}
      titbtnhpg={titbtnhpg}
      onclickhpg={onclickhpg}
      imgopen={imgopen}
      titbtnopen={titbtnopen}
      ischeck={ischeck}
      onchange={onchange}
      onclickopen={onclickopen}
    >
      {children}
    </LayoutLogin1>
  );
};
