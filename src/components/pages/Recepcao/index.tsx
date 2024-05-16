// import "../../../styles/global.ts";

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeRecep } from "../../modulos/themes/ThemeRecep";

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
      <ThemeRecep onclick = {goto('/')} onchange = {ToggleTheme} ischeck={ischeck} onLogin={ goto('/')} >
        <h1>aaa</h1>
      </ThemeRecep>
    </ThemeProvider>
  );
};
