import "../../../styles/global.ts"; 

import * as Lg from "./styled.ts";

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";

// import logosys from '../../../assets/pngs/logosys.png';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutLogin } from "../../layouts/LayoutLogin/index.tsx";
import { ContentLoginPg } from "./ContentLoginPg.tsx";
import { ContentTitleLogin } from "./ContentTitleLogin.tsx";

import { FormEmailPas } from "./forms/FormEmailPas.tsx";
import { FormEmailPin } from "./forms/FormEmailPin.tsx";
import { FormNamePas } from "./forms/FormNamelPas.tsx";
import { FormNamePin } from "./forms/FormNamelPin.tsx";

export const Login = () => {
 
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

  const [mdlogin] = useState(0);
  const [nmlogin] = useState('E-Mail / Password')
 
  return (
    <ThemeProvider theme={theme}>
      <LayoutLogin onclick = {goto('/')} title = {"Acesso Sistema."} onchange =   {ToggleTheme} ischeck={ischeck} >
        <ContentLoginPg>
  
            <ContentTitleLogin modotitle={nmlogin}/>
            <Lg.ContainerMainLogin>
              { mdlogin === 0 ? (
                <FormEmailPas onclick={() => alert('estou Email/Pas')} />
                ) : null 
              }  
              { mdlogin === 1 ? (
                <FormEmailPin onclick={() => alert('estou Email/Pin')} />
                ) : null 
              }
              { mdlogin === 2 ? (
                <FormNamePas onclick={() => alert('estou Nome/Pas')}/>
                ) : null 
              }
              { mdlogin === 3 ? (
                <FormNamePin onclick={() => alert('estou Nome/Pin')}/>
                ) : null 
              }

            </Lg.ContainerMainLogin>
        </ContentLoginPg>
      </LayoutLogin>
    </ThemeProvider>
  );
};


          {/* <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={recepcao} titlebtn={'Recepção.'} onclick={goto('/recepcao')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={design} titlebtn={'Designs.'} onclick={goto('/design')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={producao} titlebtn={'Produção.'} onclick={goto('/producao')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={acabamento} titlebtn={'Acabamento.'} onclick={goto('/acabamento')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={expedicao} titlebtn={'Expedição.'} onclick={goto('/expedicao')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={administra} titlebtn={'Administração.'} onclick={goto('/administracao')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={master} titlebtn={'Master.'} onclick={goto('/master')}/>
          <ContentCustonImg pxheight={'165px'} pheight={'165px'} pwidth={'165px'} img={config} titlebtn={'Config.'} onclick={goto('/config')}/> */}
