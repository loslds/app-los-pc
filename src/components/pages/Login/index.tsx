//import "../../../styles/global.ts"; 

//import React from "react";
import * as Lg from "./styled.ts";
import * as Pg from "../style.ts"

import { ThemeProvider } from "styled-components";
import light from "../../../styles/themes/light.ts";
import dark from "../../../styles/themes/dark.ts";
// import logosys from '../../../assets/pngs/logosys.png';
import { ThemeLogin } from "../../modulos/themes/ThemeLogin/index.tsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//import { LayoutLogin } from "../../layouts/LayoutLogin/index.tsx";
import { ContentLoginPg } from "./ContentLoginPg.tsx";
import { ContentTitleLogin } from "./ContentTitleLogin.tsx";
import { ContentMainButtonsLogin } from "./ContentMainButtonsLogin.tsx";
import { ContentButtonTitleLogin } from "./ContentButtonTitleLogin.tsx";

import { ContentLoginColluns } from "./forms/ContentLoginColluns.tsx";
import { ContentLoginOpc } from "./forms/ContentLoginOpc.tsx";
import { ContentTitleLoginOpc } from "./ContentTitleLoginOpc.tsx";
import { ContentInput } from "./forms/ContentInput.tsx";
import { ContentRadioOpc } from "./forms/ContentRadioOpc.tsx";
import { ContentLoginCollunsCenter } from "./forms/ContentLoginCollunsCenter.tsx";
import { ContentFormCollunsCenter } from "./forms/ContentFormCollunsCenter.tsx";
import { FormEmailPas } from "./forms/FormEmailPas.tsx";
import { FormEmailPin } from "./forms/FormEmailPin.tsx";
import { FormNamePas } from "./forms/FormNamelPas.tsx";
import { FormNamePin } from "./forms/FormNamelPin.tsx";
import { FormEmail } from "./forms/FormEmail.tsx";
import { FormCelular } from "./forms/FormCelular.tsx";
import { FormCodSeguro } from "./forms/FormCodSeguro.tsx";
import { FormCadastro } from "./forms/FormCadastro.tsx";


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

  


  //const [isform,setIsForm] = useState(true);
  
  const [isopen,setIsOpen] = useState(true);
  //const [isacesso,setIsAcesso] = useState(false);
  //const [isresgate,setIsResgate] = useState(false);
  const [mdlogin,setMdLogin] = useState(0);
  const [nmlogin,setNmLogin] = useState('Selecione uma Opção.')
  
  const DescrOpc = [
   'Selecione uma Opção.',
   'E-Mail / PassWord.', 
   'E-Mail / PIN.', 
   'Pseudônino / PassWord.',
   'Pseudônino / PIN.',
   'Resgate com E-Mail.',
   'Resgate com SMS.',
   'Resgate com Segurança.',
   'Resgate Alteração de Dados.'
   ];
  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);
    if (level >= 0) {
      setIsOpen(false);
    }
  
   
  };

  //const handlerForms = React.useCallback(() => {
  //  setIsForm((oldState) => !oldState);
  //}, []);


  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick = {goto('/')} onchange = {ToggleTheme} ischeck={ischeck}>
        <ContentLoginPg >
          <ContentTitleLogin modotitle={nmlogin}/>
            <Lg.ContainerMainLogin>

              <ContentFormCollunsCenter pwidth={"100%"} isopen={true}>
                <ContentLoginOpc pwidth="100%" open={true}>
                  { mdlogin === 5 ? (<FormEmail /> ) : null }
                  { mdlogin === 6 ? (<FormCelular /> ) : null }
                  { mdlogin === 7 ? (<FormCodSeguro /> ) : null }
                  { mdlogin === 8 ? (<FormCadastro /> ) : null }
                </ContentLoginOpc>
              </ContentFormCollunsCenter>

              <ContentLoginColluns >
                <ContentLoginOpc open={isopen}>
                  <ContentTitleLoginOpc  titleopc="Acesso:"/>
                    <ContentInput>
                      <ContentRadioOpc id="E-Mail/Pass" name={'opcao'} value=   {1} titulo="E-Mail/Pass" onclick={()=> setModo(1)}/>
                      <ContentRadioOpc  id="E-Mail/PIN" name={'opcao'} value={2} titulo="E-Mail/PIN" onclick={()=> setModo(2)}/>
                      <ContentRadioOpc  id="Pseud/Pass" name={'opcao'} value={3} titulo="Pseudô/Pass" onclick={()=> setModo(3)}/>
                      <ContentRadioOpc  id="Pseud/PIN" name={'opcao'} value={4} titulo="Pseudô/PIN" onclick={()=> setModo(4)}/>
                    </ContentInput>
                  </ContentLoginOpc>
                </ContentLoginColluns>
              <ContentLoginColluns>

              <ContentLoginOpc open={true}>
                <ContentTitleLoginOpc titleopc="Resgates:"/>
                  <ContentInput>
                    <ContentRadioOpc id="E-Mail" name={'opcao'} value= {5} titulo="E-Mail" onclick={()=> setModo(5)}/>
                    <ContentRadioOpc id="S.M.S" name={'opcao'} value={6} titulo="Celular(SMS)" onclick={()=> setModo(6)}/>
                    <ContentRadioOpc id="CódSeguro" name={'opcao'} value={7} titulo="Cód. Seguro." onclick={()=> setModo(7)}/>
                    <ContentRadioOpc id="Cadastro" name={'opcao'} value={8} titulo="Cadastro." onclick={()=> setModo(8)}/>
                  </ContentInput>
                </ContentLoginOpc>
              </ContentLoginColluns>

            <ContentLoginCollunsCenter pwidth={'300px'} isopen={true}>
              <ContentLoginOpc pwidth="100%" open={true} >
                <ContentTitleLoginOpc titleopc="Aplicação :"/>
                <ContentInput>
                  { mdlogin === 1 ? (
                    <FormEmailPas onchange={() => alert('estou Email/Pass')} />
                    ) : null 
                  }  
                  { mdlogin === 2 ? (
                    <FormEmailPin  onchange={() => alert('estou Email/Pin')} />
                    ) : null 
                  }
                  { mdlogin === 3 ? (
                    <FormNamePas onchange={() => alert('estou Nome/Pas')}/>
                    ) : null 
                  } 
                  { mdlogin === 4 ? (
                    <FormNamePin onchange={() => alert('estou Nome/Pin')}/>
                    ) : null 
                  }
                </ContentInput>
              </ContentLoginOpc>
            </ContentLoginCollunsCenter>

            {/* <ContentFormCollunsCenter pwidth={'300px'} isopen={true}>
              <ContentLoginOpc pwidth="100%">
                <ContentTitleLoginOpc titleopc="Resgate :"/>
                <ContentInput>
                  { mdlogin === 5 ? (<FormEmail /> ) : null }
                  { mdlogin === 6 ? (<FormCelular /> ) : null }
                  { mdlogin === 7 ? (<FormCodSeguro /> ) : null }
                  { mdlogin === 8 ? (<FormCadastro /> ) : null }
                </ContentInput>
              </ContentLoginOpc>
            </ContentFormCollunsCenter> */}

            </Lg.ContainerMainLogin>
          <Pg.DivisionPgHztal />
          <ContentMainButtonsLogin>
              <ContentButtonTitleLogin title="Limpar." onclick={()=> alert('Limpar....')}/>
              <ContentButtonTitleLogin title="Resgatar." onclick={ () => {}}/>
              <ContentButtonTitleLogin title="Solicitar."onclick={()=> alert('Solicitar....')}/>
            </ContentMainButtonsLogin>
            {/* <FooterLogin /> */}  
        </ContentLoginPg>
    
      </ThemeLogin>
    </ThemeProvider>
  );
};





/* 
                <ContentLoginCollunsCenter pwidth={'300px'} isopen={isopen}>
                  <ContentLoginOpc pwidth="100%">
                    <ContentTitleLoginOpc titleopc="Aplicação :"/>
                    <ContentInput>
                      { mdlogin === 1 ? (
                        <FormEmailPas onchange={() => alert('estou Email/Pass')} />
                        ) : null 
                      }  
                      { mdlogin === 2 ? (
                        <FormEmailPin  onchange={() => alert('estou Email/Pin')} />
                        ) : null 
                      }
                      { mdlogin === 3 ? (
                        <FormNamePas onchange={() => alert('estou Nome/Pas')}/>
                        ) : null 
                      } 
                      { mdlogin === 4 ? (
                        <FormNamePin onchange={() => alert('estou Nome/Pin')}/>
                        ) : null 
                      }
                      { mdlogin === 5 ? (
                        <FormEmail />         
                        ) : null 
                      }
                      { mdlogin === 6 ? (
                        <FormCelular />
                        ) : null 
                      }
                      { mdlogin === 7 ? (
                        <FormCodSeguro />
                        ) : null 
                      }
                      { mdlogin === 8 ? (
                        <FormCadastro />
                        ) : null 
                      }
                    </ContentInput>
                  </ContentLoginOpc>
                </ContentLoginCollunsCenter>


             





              
                
                
              

              



                    </ContentInput>
                  </ContentLoginOpc>
                </ContentLoginCollunsCenter>
                ): null 
              }
              {isresgates? (
                
                <ContentLoginCollunsCenter pwidth={'300px'} isopen={isopen}>
                  <ContentLoginOpc pwidth="100%">
                    <ContentTitleLoginOpc titleopc="Aplicação :"/>
                    <ContentInput>
                      { mdlogin === 5 ? (
                        <FormEmail />
                        ) : null 
                      }
                      { mdlogin === 6 ? (
                        <FormCelular />
                        ) : null 
                      }
                      { mdlogin === 7 ? (
                        <FormCodSeguro />
                        ) : null 
                      }
                      { mdlogin === 8 ? (
                        <FormCadastro />
                        ) : null 
                      }
                    </ContentInput>
                  </ContentLoginOpc>
                </ContentLoginCollunsCenter>
                ): null 
              } 
*/
