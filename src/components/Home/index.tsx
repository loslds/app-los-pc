import "../../styles/global";

import { ThemeProvider } from "styled-components";
import light from "../../styles/themes/light.ts";
import dark from "../../styles/themes/dark.ts";

import logosys from '../../assets/pngs/logosys.png';

import recepcao from '../../assets/svgs/clientes.svg';
import design from '../../assets/svgs/design.svg';
import producao from '../../assets/svgs/producao.svg';
import acabamento from '../../assets/svgs/acabamento.svg';
import expedicao from '../../assets/svgs/expedicao.svg';
import administra from '../../assets/svgs/administra.svg';
import master from '../../assets/svgs/master.svg';
import config from '../../assets/svgs/config.svg';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutHome } from "../layouts/LayoutHome";
import { ContentItensBody } from "./ContentItensBody.tsx";
import { ContentCustonImg } from "./ContentCustonImg.tsx";


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
  };

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };
 
  return (
    <ThemeProvider theme={theme}>
      <LayoutHome img = {logosys} onclick = {goto('/about')} title = {"Sistema J.R."} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
        <ContentItensBody>
       
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={recepcao} titlebtn={'Recepção.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={design} titlebtn={'Designs.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={producao} titlebtn={'Produção.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={acabamento} titlebtn={'Acabamento.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={expedicao} titlebtn={'Expedição.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={administra} titlebtn={'Adiministração.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={master} titlebtn={'Master.'}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={config} titlebtn={'Config.'} onclick={goto('/about')}/>
        </ContentItensBody>
      </LayoutHome>
    </ThemeProvider>
  );
};
