//import "../../../styles/global.ts";

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";

import logosys from '../../../assets/pngs/logosys.png';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutProdu } from '../../layouts/LayoutProdu/index.tsx';
import { ContentItensBody } from "../ContentItensBody.tsx";


export const Producao = () => {
 
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
      <LayoutProdu img = {logosys} onclick = {goto('/')} title = {"Produção."} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
      <ContentItensBody>
      <h1>Conteudo da Pagina</h1>
      </ContentItensBody>
      </LayoutProdu>
    </ThemeProvider>
  );
};
