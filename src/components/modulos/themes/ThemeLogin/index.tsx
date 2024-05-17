// import "../../../styles/global.ts";
import { ReactNode } from 'react';
// import { ThemeProvider } from "styled-components";
// import light from "../../../../styles/themes/light.ts";
// import dark from "../../../../styles/themes/dark.ts";
//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { LayoutLogin } from '../../../layouts/LayoutLogin/index.tsx';

type PropsThemeLogin = {
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
export const ThemeLogin = ({
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
}: PropsThemeLogin) => {
  return (
    <LayoutLogin
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
    </LayoutLogin>
  );
};
