// import "../../../styles/global.ts";

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeRecep } from "../../modulos/themes/ThemeRecep";
//import { LayoutRecep } from "../../layouts/LayoutRecep/index.tsx";
//import { ContentItensBody } from "../ContentItensBody.tsx";
//import { DivisionPgHztal } from "../../layouts/styled.ts";
//import { MenuRecep }  from "../../menus/MenuMain.tsx";

export const Recepcao = () => {
 
  const [theme,setTheme] = useState(dark);
  const [ischeck,setIscheck] = useState(false);
  const ToggleTheme = () => {
    if (theme.name === 'dark'){
      setTheme(light);
      setIscheck(true);    
    } else {
      setTheme(dark);
      setIscheck(false);    
    }
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
 

  

  return (

    <ThemeProvider theme={theme}>
      <ThemeRecep onclick = {goto('/')} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
        <h1>aaa</h1>
      </ThemeRecep>
    </ThemeProvider>
  );
};

{/* <LayoutRecep onclick = {goto('/')} title = {"Recepção."} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
{/* <ContentItensBody> */}
  // <h1>Conteudo da Pagina</h1>
{/* </ContentItensBody> */}
// </LayoutRecep> 