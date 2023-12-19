import "../../../styles/global.ts"; 

import * as Lg from "./styled.ts";
import * as Pg from "../style.ts"

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";

// import logosys from '../../../assets/pngs/logosys.png';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { LayoutLogin } from "../../layouts/LayoutLogin/index.tsx";
import { ContentLoginPg } from "./ContentLoginPg.tsx";
import { ContentTitleLogin } from "./ContentTitleLogin.tsx";


import { FormEmailPas } from "./forms/FormEmailPas.tsx";
import { FormEmailPin } from "./forms/FormEmailPin.tsx";
import { FormNamePas } from "./forms/FormNamelPas.tsx";
import { FormNamePin } from "./forms/FormNamelPin.tsx";
import { ThemeLogin } from "../../modulos/themes/ThemeLogin/index.tsx";
import { ContentLoginOpc } from "./forms/ContentLoginOpc.tsx";
import { ContentInput } from "./forms/ContentInput.tsx";
import { ContentRadioOpc } from "./forms/ContentRadioOpc.tsx";

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

  const [mdlogin,setMdLogin] = useState(0);
  const [nmlogin,setNmLogin] = useState('Selecione uma Opção.')
  const DescrOpc = ['Selecione uma Opção.', 'E-Mail / PassWord.', 'E-Mail / PIN.', 'Pseudônino / PassWord.','Pseudônino / PIN.'];
  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);
  };



  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick = {goto('/')} onchange = {ToggleTheme} ischeck={ischeck}>

        <ContentLoginPg pwidth="80%">
          <ContentTitleLogin modotitle={nmlogin}/>
          <Lg.ContainerMainLogin>
            <ContentLoginOpc pwidth="45%" titleopc="Acesso:">
              <ContentInput>
                <ContentRadioOpc id="E-Mail/Pass" name={'opcao'} value={1} titulo="E-Mail/Pass" onclick={()=> setModo(1)}/>
                <ContentRadioOpc id="E-Mail/PIN" name={'opcao'} value={2} titulo="E-Mail/PIN" onclick={()=> setModo(2)}/>
                <ContentRadioOpc id="Pseud/Pass" name={'opcao'} value={3} titulo="Pseudô/Pass" onclick={()=> setModo(3)}/>
                <ContentRadioOpc id="Pseud/PIN" name={'opcao'} value={3} titulo="Pseudô/PIN" onclick={()=> setModo(4)}/>
              </ContentInput>
            </ContentLoginOpc>
              

          { mdlogin === 1 ? (
            <FormEmailPas onclick={() => alert('estou Email/Pas')} />
            ) : null 
          }  
          
          { mdlogin === 2 ? (
            <FormEmailPin onclick={() => alert('estou Email/Pin')} />
            ) : null 
          }
          
          { mdlogin === 3 ? (
            <FormNamePas onclick={() => alert('estou Nome/Pas')}/>
            ) : null 
          }
          
          { mdlogin === 4 ? (
            <FormNamePin onclick={() => alert('estou Nome/Pin')}/>
            ) : null 
          }
          </Lg.ContainerMainLogin>
          <Pg.DivisionPgHztal />
           <h4>criar botãoes aqui</h4>
            {/* <FooterLogin /> */}
          
        </ContentLoginPg>
    
      </ThemeLogin>
    </ThemeProvider>
  );
};
