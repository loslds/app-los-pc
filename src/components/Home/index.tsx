import "../../styles/global";
import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light.ts";
import dark from "../../styles/themes/dark.ts";

import logosys from '../../assets/pngs/logosys.png';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutHome } from "../layouts/LayoutHome";


export const Home = () => {
  
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
    // setTheme(theme.name === 'dark' ? light : dark);
    // setIscheck  
  };


  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
 
  return (
    <ThemeProvider theme={theme}>
      <LayoutHome img = {logosys} onclick = {goto('/about')} title = {"Sistema J.R."} onchange = {ToggleTheme} ischeck={ischeck} >
        <h1>Home</h1>
      </LayoutHome>
    </ThemeProvider>
  );
};

{/* <ContentPages>
<ContentHearderMain>
<ContentHearderItens>
    <ContentHeaderImgSys img={logosys} onclick={ goto('/about') }/>
  </ContentHearderItens>
//   <ContentHearderItens>
//     <ContentHeaderTitle title="Sistema J.R." />
//   </ContentHearderItens>
//   <ContentHearderRight>
//   <h1>Botoes</h1>
//     <h1>Opa</h1>
//   </ContentHearderRight>
// </ContentHearderMain>  
// </ContentPages>*/}