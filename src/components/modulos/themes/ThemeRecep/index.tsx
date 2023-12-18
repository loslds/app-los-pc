// import "../../../styles/global.ts";
import { ReactNode } from 'react';
// import { ThemeProvider } from "styled-components";
// import light from "../../../../styles/themes/light.ts";
// import dark from "../../../../styles/themes/dark.ts";
//import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { LayoutRecep } from "../../../layouts/LayoutRecep/index.tsx";

type PropsThemeRecep = {
  onclick?: () => void;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
}
export const ThemeRecep = ({children, onclick, onchange, ischeck, onLogin }:PropsThemeRecep) => {

  return (
    <LayoutRecep onclick = {onclick} title = {"Recepção."} onchange = {onchange} ischeck={ischeck} onLogin={onLogin} >
      {children}
    </LayoutRecep>
  );
};


// const [theme,setTheme] = useState(dark);
// const [ischeck,setIscheck] = useState(false);
// const ToggleTheme = () => {
//   if (theme.name === 'dark'){
//     setTheme(light);
//     setIscheck(true);    
//   } else {
//     setTheme(dark);
//     setIscheck(false);    
//   }
// };

// const navigate = useNavigate();
// const goto = (path: string) => {
//   return () => {
//     navigate(path);
//   };
// };

// return (
//   <ThemeProvider theme={theme}>
//     <LayoutRecep onclick = {goto('/')} title = {"Recepção."} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
//       {children}
//     </LayoutRecep>
//   </ThemeProvider>
// );
