import * as Lg from '../stylePage.ts';

import '../../../styles/global.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import ContentCardPage from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import ContentCardBoxMainPage from '../ContentCardBoxMainPage.tsx';
import ContentCardBoxCenterPage from '../ContentCardBoxCenterPage.tsx';
import ContentInputPage from '../ContentInputPage.tsx';
import ContentSidePagePanelBotton from '../ContentSidePagePanelBotton.tsx';
import ContentSidePageLabelBotton from '../ContentSidePageLabelBotton.tsx';
import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
import CardInfoErros from '../../contentHelp/CardInfoErros.tsx';




import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import enviaon from '../../../assets/svgs/enviaron.svg';
import enviaoff from '../../../assets/svgs/enviaroff.svg';

//import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
//import { ContentLoginCollunsCenter } from '../ContentCardCollunsCenterPage.tsx';
//import { ContentLoginCollunsOpc } from '../Login/ContentLoginCollunsOpc.tsx';
//import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
//import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
//import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
//import ContentButtonTitleImg from '../Login/ContentButtonTitleImg.tsx';
//import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
//import CardInfoErros from '../../contentHelp/CardInfoErros.tsx';
//import ContentButtonsConfirmation from '../Login/ContentButtonsConfirmation.tsx';
//import ContentButtonConfimationOnOff from '../Login/ContentButtonConfimationOnOff.tsx';

export const Login2 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);


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

  const [iseditar, setIsEditar] = React.useState(false);
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [ischeklogin, setIsChekLogin] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(state.nrcont);

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');
  const [btnenviar, setBtnEnviar] = React.useState(false);

  const [iserrologin, setIsErroLogin] = React.useState(false);
  const [nmrerrologin, setNmErroLogin] = React.useState('');

  const tituloConfirmacao = '"CONFIRMA", outra forma de Acesso';
  const [isresgatar, setIsResgatar] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login2' });

    dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Login : Selecionado Edição.'
    });

    dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });

    dispatch({ type: AcessoUseActions.setAplicacao, payload: state.nmlogin });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });

    setTentativa(state.nrcont);
    setIsEditar(true);
    setBtnContinua(true);
  }, [dispatch]);

  const handlerOnChangerStrId = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStrId(e.currentTarget.value);
      dispatch({
        type: AcessoUseActions.setIdNmUser,
        payload: e.currentTarget.value
      });
    },
    [dispatch]
  );

  const spanChangeKeyUpPasId = React.useCallback(() => {
    if (strid === '') {
      setBtnContinua(true);
    }
    if (strid !== '' && strpsw !== '') {
      setBtnEnviar(true);
      setBtnContinua(false);
      setIsChekLogin(true);
    } else {
      setBtnContinua(true);
      setIsChekLogin(false);
    }
  }, [strid, strpsw]);

  const handlerOnChangerStrPsw = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setStrPsw(e.currentTarget.value);
      dispatch({
        type: AcessoUseActions.setPswUser,
        payload: e.currentTarget.value
      });
    },
    [dispatch]
  );

  const spanChangeKeyUpPasPsw = React.useCallback(() => {
    if (strpsw === '') {
      setBtnContinua(true);
    }
    if (strid !== '' && strpsw !== '') {
      setBtnEnviar(true);
      setBtnContinua(false);
      setIsChekLogin(true);
    } else {
      setBtnContinua(true);
      setIsChekLogin(false);
    }
  }, [strid, strpsw]);

  const handlerContinuar = React.useCallback(() => {
    setNmErroLogin('');
    setTentativa(tentativa + 1);
    if (!ischeklogin || nmrerrologin !== '') {
      if (strid === '' && strpsw === '') {
        if (state.mdlogin == 1) {
          setNmErroLogin('Determine seu Email e sua Senha para Acesso...');
        } else if (state.mdlogin == 2) {
          setNmErroLogin('Determine seu Email e seu PIN para Acesso...');
        } else if (state.mdlogin == 3) {
          setNmErroLogin('Determine seu Nome e sua Senha para Acesso...');
        } else if (state.mdlogin == 4) {
          setNmErroLogin('Determine seu Nome e seu PIN para Acesso...');
        }
      } else if (strid === '') {
        if (state.mdlogin == 1 || state.mdlogin == 2) {
          setNmErroLogin('Determine seu Email para Acesso...');
        } else if (state.mdlogin == 3 || state.mdlogin == 4) {
          setNmErroLogin('Determine seu Nome para Acesso...');
        }
      } else if (strpsw === '') {
        if (state.mdlogin == 1 || state.mdlogin == 3) {
          setNmErroLogin('Determine sua Senha para Acesso...');
        } else if (state.mdlogin == 2 || state.mdlogin == 4) {
          setNmErroLogin('Determine seu PIN para Acesso...');
        }
      }
    }
  }, [strid, strpsw, tentativa]);

  React.useEffect(() => {
    if (!ischeklogin && nmrerrologin !== '') {
      if (tentativa + 1 > 4) {
        setIsEditar(false);
        setBtnContinua(false);
        setBtnEnviar(false);
        setIsResgatar(true);
        setIsErroLogin(false);
      } else {
        setIsErroLogin(true);
      }
      dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    }
    if (ischeklogin){
      setBtnEnviar(true);
    }

      // dispatch({
      //   type: AcessoUseActions.setModulo,
      //   payload: 'Login : Acesso Resgate.'
      // });
      //   setBtnContinua(true);
    
    
  }, [tentativa, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentCardPage>
          <ContentCardPageTitle pheight={'30px'}>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
          
          {iseditar ? (
            <ContentCardBoxCenterPage pwidth={'350px'} open={true}>
              <ContentCardPageTitle>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>
              <ContentInputPage>
                  {state.mdlogin === 1 ? (
                    <form name="login1">
                      <br />
                      <label>
                        Email.:
                        <input
                          type="mail"
                          name="mail1"
                          value={strid}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                      </label>
                      <br />
                      <label>
                        Senha:
                        <input
                          type="password"
                          name="pass1"
                          maxLength={10}
                          value={strpsw}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                      </label>
                      <br />
                    </form>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <form name="login2">
                      <br />
                      <label>
                        Email.:
                        <input
                          type="mail"
                          name="mail2"
                          value={strid}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                      </label>
                      <br />
                      <label>
                        PIN....:
                        <input
                          type="text"
                          name="pin1"
                          value={strpsw}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                      </label>
                      <br />
                    </form>
                  ) : null}
                  {state.mdlogin === 3 ? (
                    <form name="login3">
                      <br />
                      <label>
                        Nome.:
                        <input
                          type="text"
                          name="peseu1"
                          value={strid}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                      </label>
                      <br />
                      <label>
                        Senha:
                        <input
                          type="password"
                          name="pass2"
                          value={strpsw}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                      </label>
                      <br />
                    </form>
                  ) : null}

                  {state.mdlogin === 4 ? (
                    <form name="login4">
                      <br />
                      <label>
                        Nome.:
                        <input
                          type="text"
                          name="peseu2"
                          value={strid}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                      </label>
                      <br />
                      <label>
                        PIN.....:
                        <input
                          type="text"
                          name="pin2"
                          value={strpsw}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                      </label>
                      <br />
                    </form>
                  ) : null}

                </ContentInputPage>
              </ContentCardBoxCenterPage>
            ):null
          }
          
          
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton open={true} pwidth="100%">
            <ContentSidePageLabelBotton
              pxheight={'40px'}
              istitl={true}
              title={'Voltar.: '}
              img={setaesq}
              titbtn={'Voltar...'}
              onclick={goto('/login')}
            />
            <Lg.ContainerBoxLabelPage>
              <label>[ {4 - state.nrcont} ] tentativas. </label>
            </Lg.ContainerBoxLabelPage>

            {btncontinua && state.mdlogin > 0 && !ischeklogin ? (
              <ContentSidePageLabelBotton
                pxheight={'20px'}
                istitl={true}
                title={'Continuar.: '}
                img={setadir}
                titbtn={'Continuar...'}
                onclick={handlerContinuar}
              />
            ) : null}
            {ischeklogin ? (
              <ContentSidePageLabelBotton
                pxheight={'20px'}
                istitl={true}
                title={'Enviar.: '}
                img={setadir}
                titbtn={'Enviar...'}
                onclick={goto('/login3')}
              />
              ): null
            }
            {iserrologin ? (
              <PanelModalInfoErros
                ptop={'1%'}
                pwidth={'65%'}
                pheight={'auto'}
                titulo={'ERRO em processamento...'}
                texto={
                  'Mais atenção, tentativa: [' + (4 - tentativa) + '] de [4].'
                }
                onClose={() => setIsErroLogin(false)}
              >
                <CardInfoErros nmerro={nmrerrologin} />
              </PanelModalInfoErros>
            ) : null}



          </ContentSidePagePanelBotton>
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login2;

// <Lg.ContainerLogin>
//   <Lg.ContainerLoginFlex>
//     <ContentTitleLogin modotitle={state.modulo} />
//     <Lg.ContainerMainLogin isopen={true}>
//       <ContentLoginCollunsCenter isopen={true}>
//         <ContentLoginCollunsOpc pheight="200px" pwidth="400px">
//
//              {iseditar ? (
//             <ContentLoginOpc pwidth="100%" open={true}>
//               <ContentTitleLoginOpc titleopc={state.aplicacao} />

//           {isresgatar ? (
//             <ContentLoginOpc pwidth={'99%'} open={true}>
//               <ContentTitleLoginOpc titleopc={tituloConfirmacao} />
//               <Lg.ContainerAreaText>
//                 <form name="confResgate">
//                   <Lg.InputCenter>
//                     <h3>Confime se deseja outro modo para o acesso.</h3>
//                     <p>Caso "NÃO" , Retornarei do Início. </p>
//                   </Lg.InputCenter>
//                 </form>
//               </Lg.ContainerAreaText>
//               <ContentButtonsConfirmation>
//                 <ContentButtonConfimationOnOff
//                   title={'NÃO'}
//                   img={enviaoff}
//                   titlebtn="Inicio..."
//                   onClick={goto('/')}
//                 />
//                 <ContentButtonConfimationOnOff
//                   title={'SIM'}
//                   img={enviaon}
//                   titlebtn="Outra maneira..."
//                   onClick={goto('/login4')}
//                 />
//               </ContentButtonsConfirmation>
//             </ContentLoginOpc>
//           ) : null}
//         </ContentLoginCollunsOpc>
//       </ContentLoginCollunsCenter>
//     </Lg.ContainerMainLogin>
//     <Lg.DivisionPgHztal />
//     <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
//       <ContentMainButtonsLogin>
//         <ContentButtonTitleImg
//           title="Voltar."
//           onClick={goto('/login1')}
//         />

//         <p>Você tem [{4 - state.nrcont}] tentativas para acesso...</p>

//         {btncontinua && state.mdlogin > 0 && state.mdlogin <= 4 ? (
//           <ContentButtonTitleImg
//             title="Continuar."
//             onClick={handlerContinuar}
//           />
//         ) : null}
//         {btnenviar ? (
//           <ContentButtonTitleImg
//             title="Enviar."
//             onClick={goto('/login3')}
//           />
//         ) : null}
//       </ContentMainButtonsLogin>
//     </ContentLoginColluns>

//     {iserrologin ? (
//       <PanelModalInfoErros
//         ptop={'1%'}
//         pwidth={'65%'}
//         pheight={'auto'}
//         titulo={'ERRO em processamento...'}
//         texto={
//           'Mais atenção, tentativa: [' + (4 - tentativa) + '] de [4].'
//         }
//         onClose={() => setIsErroLogin(false)}
//       >
//         <CardInfoErros nmerro={nmrerrologin} />
//       </PanelModalInfoErros>
//     ) : null}
//   </Lg.ContainerLoginFlex>
// </Lg.ContainerLogin>

// console.log('nmrerrologin :', nmrerrologin);
// console.log('=================================', '.');
// console.log('state.mdlogin  :', state.mdlogin);
// console.log('state.nmlogin  :', state.nmlogin);

// console.log('state.idnmuser :', state.idnmuser);
// console.log('state.pswuser  :', state.pswuser);
// console.log('/////////////////////////////////', '.');
// console.log('state.nrcont   :', state.nrcont);
// console.log('tentativa :', tentativa);
// console.log('strid     :', strid);
// console.log('strpsw    :', strpsw);
// console.log('##################################', '.');
