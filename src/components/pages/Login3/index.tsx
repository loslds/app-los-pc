import * as Lg from '../../../styles/styledLogin.ts';
// import * as Pg from '../../pages/style.ts';

import semimg from '../../../assets/svgs/semimg.svg';

import '../../../styles/global.ts';
import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from '../Login/ContentLoginCollunsCenter.tsx';
import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';

import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
import ContentCardMdLoginViewYellow from '../Login/ContentCardMdLoginViewYellow.tsx';
import ContentCardMdLoginViewRed from '../Login/ContentCardMdLoginViewRed.tsx';
import  ContentDivManYellow  from '../ContentDivManYellow.tsx';
import  ContentDivManRed  from '../ContentDivManRed.tsx';

// import { VscEye, VscEyeClosed } from 'react-icons/vsc';

import olhoon from '../../../assets/svgs/olhoon.svg';
import olhooff from '../../../assets/svgs/olhooff.svg';

//import enviaon from '../../../assets/svgs/enviaron.svg';
//import enviaoff from '../../../assets/svgs/enviaroff.svg';

import styled from 'styled-components';

//import semimg from '../../assets/svgs/semimg.svg';
////////////////////////////////////////////
////////////////////////////////////////////
// const ContainerDivMan = styled.div`
//   border: 1px solid;
//   border-radius: 10px;
//   border-color: ${(props) => props.theme.colors.textColor};
//   padding: 0px 0px 0px 0px;
//   margin: 5px 10px 5px 10px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   size: 16px;
//   line-height: 16px;
//   color: ${(props) => props.theme.colors.textColor};
//   background: ${(props) => props.theme.colors.backgroundColor};
//   &:hover {
//     border-color: yellow;
//   }
// `;
////////////////////////////////////////////////
///////////////////////////////////////////////

// const ContainerCardDivMainCenter = styled.div`
//   border: 1px dashed;
//   border-color: ${(props) => props.theme.colors.textColor};
//   padding: 0px 0px 0px 0px;
//   margin: 5px 10px 5px 10px;
//   min-height: 50px;
//   max-width: 100%;
//   background: ${(props) => props.theme.colors.backgroundColor};
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: ${(props) => props.theme.colors.textColor};
//   size: 16px;
//   line-height: 16px;
// `;

// const ContainerDivManRed = styled.div`
//   border: 1px solid;
//   border-radius: 10px;
//   border-color: ${(props) => props.theme.colors.textColor};
//   padding: 0px 0px 0px 0px;
//   margin: 5px 10px 5px 10px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   size: 16px;
//   line-height: 16px;
//   color: ${(props) => props.theme.colors.textColor};
//   background: ${(props) => props.theme.colors.backgroundColor};
//   &:hover {
//     border-color: red;
//     label {
//       color: red;
//     }
//   }
// `;

const ContainerCardDivMainLeft = styled.div`
  border: none;
  //border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;


const ContainerCardDivMainLeftRed = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;

const ContainerCardDivMainEnd = styled.div`
  border: 1px dashed;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;

// const ContainerButtonDefault = styled.div`
//   border: 1px;
//   border-radius: 5px;
//   padding: 0px 0px 0px 0px;
//   margin: 2px 2px;
//   background: transparent;
//   min-height: 40px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color:  ${props => props.theme.colors.textColor};
//   &:hover {
//     background: #3aff35;
//    }
// `;

// const ContainerBtnRigth = styled.div`
//   padding: 0px 0px 0px 0px;
//   margin: 2px 5px 2px 5px;
//   background: transparent;
//   display: flex;
//   flex-flow: row;
//   flex-wrap: wrap;
//   justify-content: right;
//   align-items: center;
//   align-content: center;
//   color:  ${props => props.theme.colors.textColor};
// `;

const ContainerButtonOn = styled.div`
  border: 1px;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px;
  background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    background: #3aff35;
  }
`;

const ContainerButtonOff = styled.div`
  border: 1px;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px;
  background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  &:hover {
    background: #ff3737;
  }
`;

type ButtonOnOffImgType = {
  img?: string;
};
const ButtonDefaulOnOffImg = styled.button<ButtonOnOffImgType>`
  border: 2px;
  border-radius: 3px;
  margin: 2px 5px 2px 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  height: 30px;
  min-width: 30px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

// onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
const Login3 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const inputRef = React.useRef('password');
  const [isonoff, setIsOnOff] = React.useState(false);

  const ToggleTheme = () => {
    if (theme.name === 'dark') {
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

  const { state, dispatch } = AcessoUseForm();

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login3' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Logar : "CONFIRMAÇÃO" de seu Acesso.'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Acessando Sistena'
    });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
  }, [dispatch]);

  const togleShow = () => {
    if (inputRef.current === 'password') {
      setVisibled(true);
      inputRef.current = 'text';
    } else {
      setVisibled(false);
      inputRef.current = 'password';
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <Lg.ContainerLogin>
          <Lg.ContainerLoginFlex>
            <ContentTitleLogin modotitle={state.modulo} />
            <Lg.ContainerMainLogin isopen={true}>
              <ContentLoginCollunsCenter isopen={true}>
                <ContentLoginColluns pheight="200px" pwidth="450px">
                  <ContentLoginOpc pwidth="100%" open={true}>
                    <ContentTitleLoginOpc titleopc={state.aplicacao} />

                    <ContentDivManYellow>
                      <ContainerCardDivMainLeft>
                        <label>Empresa:</label>
                        <h3>{state.nmfant}</h3>
                      </ContainerCardDivMainLeft>
                    </ContentDivManYellow>
                    
                    {state.mdlogin === 1 ? (
                      <ContentCardMdLoginViewYellow label={'Email :'} statedata={state.idnmuser} />
              
                       
                       
                      <ContentDivManRed label={'Senha :'} statedata={state.pswuser} />
                      <ContainerCardDivMainEnd>
                      
                      {!isonoff ? (
                        <ContainerButtonOff>
                          <ButtonDefaulOnOffImg
                            img={olhooff}
                            onClick={togleShow}
                          />
                        </ContainerButtonOff>
                      ):(  
                        <ContainerButtonOn>
                          <ButtonDefaulOnOffImg
                            img={olhoon}
                            onClick={togleShow}
                          />
                        </ContainerButtonOn>
                      )}  
                      </ContainerCardDivMainEnd>


): null
                    }
                   
                    {state.mdlogin === 2 ? (
                      <ContentDivManRed>
                        <ContainerCardDivMainLeftRed>
                          <label>PIN... :</label>
                          <h3>{state.pswuser}</h3>
                        </ContainerCardDivMainLeftRed>
                      </ContentDivManRed>
                      ): null
                    }

                    {state.mdlogin === 3 || state.mdlogin === 4 ? (
                      <ContentDivManYellow>
                        <ContainerCardDivMainLeft>
                          <label>Nome.. :</label>
                          <h3>{state.idnmuser}</h3>
                        </ContainerCardDivMainLeft>
                      </ContentDivManYellow> 
                      ): null
                    }

                    {state.mdlogin === 3 ? (
                      <ContentDivManRed>
                        <ContainerCardDivMainLeftRed>
                          <label>Senha :</label>
                          <h3>{state.pswuser}</h3>
                        </ContainerCardDivMainLeftRed>
                      </ContentDivManRed>
                      ): null
                    }
                   
                    {state.mdlogin === 4 ? (
                      <ContentDivManRed>
                        <ContainerCardDivMainLeftRed>
                          <label>PIN... :</label>
                          <h3>{state.pswuser}</h3>
                        </ContainerCardDivMainLeftRed>
                      </ContentDivManRed>
                      ): null
                    }
 


                      
                      <ContainerCardDivMainEnd>
                      {!isonoff ? (
                        <ContainerButtonOff>
                          <ButtonDefaulOnOffImg
                            img={olhooff}
                            onClick={togleShow}
                          />
                        </ContainerButtonOff>
                      ):(  
                        <ContainerButtonOn>
                          <ButtonDefaulOnOffImg
                            img={olhoon}
                            onClick={togleShow}
                          />
                        </ContainerButtonOn>
                      )}  
                      </ContainerCardDivMainEnd>

                    </ContentDivManRed>
                  </ContentLoginOpc>

                </ContentLoginColluns>
              </ContentLoginCollunsCenter>
            </Lg.ContainerMainLogin>
          </Lg.ContainerLoginFlex>
        </Lg.ContainerLogin>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login3;

{
  /* 
                     state.mdlogin === 1 ? (
                      <Lg.ContainerFormColl>
                        <label>Email : state.idnmuser}</label>
                      </Lg.ContainerFormColl> 
                      // <Lg.ContainerFormColl>
                      //   <label>Senha :
                      //   state.pswuser}</label>
                      // </Lg.ContainerFormColl>
                    ):null}

                    <Pg.ContainerCustonButton pxheight={'35px'}>
                      <form>
                        <Pg.ButtonCustonImg
                          pheight={'35px'}
                          pwidth={'35px'}
                          onClick=togleShow}
                        >
                        //{visibled ? <VscEyeClosed /> : <VscEye />}  
                        </Pg.ButtonCustonImg>
                      </form>
                    </Pg.ContainerCustonButton>
                     */
}

/*

//import { ContentInput } from '../Login/ContentInput.tsx';
//import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';
////import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
//import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';
//import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
//import { CardInfoErros } from '../../contentHelp/CardInfoErros.tsx';
//import { ContentButtonsConfirmation } from '../Login/ContentButtonsConfirmation.tsx';
//import { ContentButtonConfimationOnOff } from '../Login/ContentButtonConfimationOnOff.tsx';
//import { ListAcessos } from '../../../books/ListAcessos.tsx';

// type PropsGetLogin = {
//   mdlogin?:number;
//   idempr?:number;
//   strid?:string;
//   strpsw?:string;
// }
//export function GetLogin() {
// if ( mdlogin === 0 || mdlogin === null || mdlogin === undefined) return false;
// if ( idempr === 0 || idempr === null || idempr === undefined) return false;
// if ( strid === '' || strid === null || strid === undefined) return false;
// if ( strpsw === '' || strpsw === null || strpsw === undefined ) return false;
//let rtn = true;
// const ltsAcesso = ListAcessos.map( (ListaAcesso) => {
// return ListaAcesso;
//}

// const filtroacesso = idempr === id
// const [busca, setBusca] = React.useState('');
// const lowerBusca = busca.toLowerCase();
// const resultListaFiltrada = ListAcessos
// .filter((filtroacesso) => ListAcessos.toLowerCase().includes(lowerBusca));

/// EMAIL E PSW
// if (mdlogin === 1) {

// }

  // const DescrOpc = [
  //   'Opções:',
  //   'Resgate com E-Mail.',
  //   'Resgate com SMS.',
  //   'Resgate com Segurança.',
  //   'Cadastro Acesso.'
  // ];

  // const setModo = (level: number) => {
  //   setMdLogin(level);
  //   setNmLogin(DescrOpc[level]);
  //   if (mdlogin >= 1) {
  //     setIsContinua(true);
  //     setIsMostraInput(true);
  //   } else {
  //     setIsContinua(false);
  //     setIsMostraInput(false);
  //   }
  //   setIsConfirmaInput(false);
  // };

  // React.useEffect(() => {
  //   dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
  //   dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
  // }, [mdlogin, dispatch]);

  // const handlerContinuar = React.useCallback(() => {
  //   setNmErroLogin('');
  //   if (mdlogin >= 1){
  //     setCont(cont + 1);
  //     let rtn = 0;
  //     let str = '';
  //     rtn = TestaInput(strid, strpsw);
  //     if (rtn == 1 ){ str = 'Determine seu ID e Password para Acesso...';
  //     }
  //     if (rtn === 2 ){ str = 'Determine a Edição do seu ID...';
  //     }
  //     if (rtn === 3 ){ str = 'Determine a Edição do seu PassWord...';
  //     }
  //     if (rtn === 4 ){ str = 'Sua "PASSWORD" deve conter mais de (4) Caracteres...';
  //     }
  //     if (cont >= 5 && rtn === 0) {
  //       rtn = 5;
  //       str = '"ACABARAM" suas Tentativas...';
  //       setIsContinua(false);
  //       setIsResgatar(true);
  //       setIsConfirmaInput(false);
  //     }
  //     if ( rtn >= 1){
  //       setNmErroLogin(str);
  //       setIsErroLogin(true);
  //     } else {
  //      setIsErroLogin(false);
  //     }
  //   }
  // }, [cont]);

  // React.useEffect(() => {
  //   dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
  //   dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });
  // }, [dispatch]);

  // const handlerEnviar = React.useCallback(() => {
  //   if (!isconfirmainput) {
  //     setIsConfirmaInput(true);
  //   }
  // }, [isconfirmainput]);

  // React.useEffect(() => {
  //   if (iscontinua) {
  //     setIsContinua(false);
  //   }
  //   if (ismostraInput) {
  //     setIsMostraInput(false);
  //   }
  // }, [iscontinua, ismostraInput]);

  // const handlerResgatar = React.useCallback(() => {
  //   if (!isconfirmaresgatar) {
  //     setIsConfirmaResgatar(true);
  //   }
  // }, [isconfirmaresgatar]);

  // React.useEffect(() => {
  //   if (isconfirmainput) {
  //     setIsConfirmaInput(false);
  //   }
  // }, [isconfirmainput]);

<Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
          <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
            <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
            <Lg.ContainerAreaText>
              <label>Empresa :</label>
              <p>{state.idemp}...</p>

              <label>Nome Empresa :</label>
              <p>{state.nmfant}...</p>

              <label>Acesso Login:</label>
              <p>{nmlogin}</p>
            </Lg.ContainerAreaText>
             <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Enviar..."
                onClick={ handlerEnvia }
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Recusar..."
                onClick={ handlerRetorna }
              /> 
            </ContentButtonsConfirmation>
          </ContentLoginOpc>

          <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
          <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
            <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
            <Lg.ContainerAreaText>
              <p>
                Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
              </p>
              <label>Acesso Login:</label>
              <p>
                {mdlogin}...nmlogin : {nmlogin}
              </p>
            </Lg.ContainerAreaText>
            
            <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Aceitar..."
                onClick={handlerEnviar}
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Retornar..."
                onClick={()=>{}}
              />
            </ContentButtonsConfirmation>
            
          </ContentLoginOpc>




          /* <Lg.DivisionPgHztalOnOff isopen={isconfirmacao} />
          <ContentLoginOpc pwidth={'100%'} open={isconfirmacao}>
            <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
            <Lg.ContainerAreaText>
              <p>
                Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
              </p>
              <label>Acesso Login:</label>
              <p>
                {mdlogin}...nmlogin : {nmlogin}
              </p>
            </Lg.ContainerAreaText>

            <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Aceitar..."
                onClick={handleresgatar}
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Retornar..."
                onClick={goto('/')}
              />
            </ContentButtonsConfirmation>
          </ContentLoginOpc> 



          {confirmacao ? (
            <Lg.DivisionPgHztalOnOff isopen={confirmacao} />
            <ContentLoginOpc pwidth={'100%'} open={confirmacao}>
              <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
              <Lg.ContainerAreaText onoff={confirmacao}>
                <ContentTitlePanel title={' " CONFIRMA ENVIO DOS DADOS...? " '} />
                  <p>
                    idempresa : {idempresa}...fa-ntempresa : {fantempresa}
                  </p>
                  <p>
                    mdlogin : {mdlogin}...nmlogin : {nmlogin}
                  </p>
                </Lg.ContainerAreaText>
                <ContentButtonsConfirmation>
                  <ContentButtonConfimationOn
                    title={'SIM'}
                    img={enviaron}
                    titlebtn="Aceitar..."
                    onClick={handlernropcao}
                  />
                  <ContentButtonConfimationOff
                    title={'NÃO'}
                    img={enviaroff}
                    titlebtn="Retornar..."
                    onClick={goto('/')}
                  />
                </ContentButtonsConfirmation>
              </ContentFormCollunsCenter>
            ) : null} 
*/
