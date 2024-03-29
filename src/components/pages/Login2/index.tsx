import * as Lg from '../../../styles/styledLogin.ts';
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

import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from '../Login/ContentLoginCollunsCenter.tsx';
import { ContentLoginCollunsOpc } from '../Login/ContentLoginCollunsOpc.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';
import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
import CardInfoErros from '../../contentHelp/CardInfoErros.tsx';
import ContentButtonsConfirmation from '../Login/ContentButtonsConfirmation.tsx';
import ContentButtonConfimationOnOff from '../Login/ContentButtonConfimationOnOff.tsx';

import enviaon from '../../../assets/svgs/enviaron.svg';
import enviaoff from '../../../assets/svgs/enviaroff.svg';

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
  const [ischekd, setIsChekd] = React.useState(false);
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
      setIsChekd(true);
    } else {
      setBtnContinua(true);
      setIsChekd(false);
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
      setIsChekd(true);
    } else {
      setBtnContinua(true);
      setIsChekd(false);
    }
  }, [strid, strpsw]);

  const handlerContinuar = React.useCallback(() => {
    setNmErroLogin('');
    setTentativa(tentativa + 1);
    if (!ischekd || nmrerrologin !== '') {
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
    if (!ischekd && nmrerrologin !== '') {
      if (tentativa + 1 > 4) {
        setIsEditar(false);
        setBtnContinua(false);
        setBtnEnviar(false);
        setIsResgatar(true);
        setIsErroLogin(false);
      } else {
        setIsErroLogin(true);
      }
    }
    // else{
    //   setBtnContinua(true);
    // }
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [tentativa, dispatch]);

  console.log('nmrerrologin :', nmrerrologin);
  console.log('=================================', '.');
  console.log('state.mdlogin  :', state.mdlogin);
  console.log('state.nmlogin  :', state.nmlogin);

  console.log('state.idnmuser :', state.idnmuser);
  console.log('state.pswuser  :', state.pswuser);
  console.log('/////////////////////////////////', '.');
  console.log('state.nrcont   :', state.nrcont);
  console.log('tentativa :', tentativa);
  console.log('strid     :', strid);
  console.log('strpsw    :', strpsw);
  console.log('##################################', '.');

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <Lg.ContainerLogin>
          <Lg.ContainerLoginFlex>
            <ContentTitleLogin modotitle={state.modulo} />
            <Lg.ContainerMainLogin isopen={true}>
              <ContentLoginCollunsCenter isopen={true}>
                <ContentLoginCollunsOpc pheight="200px" pwidth="400px">
                  {iseditar ? (
                    <ContentLoginOpc pwidth="100%" open={true}>
                      <ContentTitleLoginOpc titleopc={state.aplicacao} />
                      {state.mdlogin === 1 ? (
                        <form name="login1">
                          <br />
                          <label>
                            E-Mail:
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
                            E-Mail:
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
                    </ContentLoginOpc>
                  ) : null}

                  {isresgatar ? (
                    <ContentLoginOpc pwidth={'99%'} open={true}>
                      <ContentTitleLoginOpc titleopc={tituloConfirmacao} />
                      <Lg.ContainerAreaText>
                        <form name="confResgate">
                          <Lg.InputCenter>
                            <h3>Confime se deseja outro modo para o acesso.</h3>
                            <p>Caso "NÃO" , Retornarei do Início. </p>
                          </Lg.InputCenter>
                        </form>
                      </Lg.ContainerAreaText>
                      <ContentButtonsConfirmation>
                        <ContentButtonConfimationOnOff
                          title={'NÃO'}
                          img={enviaoff}
                          titlebtn="Inicio..."
                          onClick={goto('/')}
                        />
                        <ContentButtonConfimationOnOff
                          title={'SIM'}
                          img={enviaon}
                          titlebtn="Outra maneira..."
                          onClick={goto('/login4')}
                        />
                      </ContentButtonsConfirmation>
                    </ContentLoginOpc>
                  ) : null}
                </ContentLoginCollunsOpc>
              </ContentLoginCollunsCenter>
            </Lg.ContainerMainLogin>
            <Lg.DivisionPgHztal />
            <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
              <ContentMainButtonsLogin>
                <ContentButtonTitleImg
                  title="Voltar."
                  onClick={goto('/login1')}
                />

                <p>Você tem [{4 - state.nrcont}] tentativas para acesso...</p>

                {btncontinua && state.mdlogin > 0 && state.mdlogin <= 4 ? (
                  <ContentButtonTitleImg
                    title="Continuar."
                    onClick={handlerContinuar}
                  />
                ) : null}
                {btnenviar ? (
                  <ContentButtonTitleImg
                    title="Enviar."
                    onClick={goto('/login3')}
                  />
                ) : null}
              </ContentMainButtonsLogin>
            </ContentLoginColluns>

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
          </Lg.ContainerLoginFlex>
        </Lg.ContainerLogin>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login2;

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

// const handlerContinuar = React.useCallback(() => {
//     setNmErroLogin('');
//     if (mdlogin >= 1) {

//       setCont(cont + 1);
//       let rtn = 0;
//       let str = '';
//       rtn = TestaInput(strid, strpsw);
//       if (rtn == 1) {
//         str = 'Determine seu ID e Password para Acesso...';
//       }
//       if (rtn === 2) {
//         str = 'Determine a Edição do seu ID...';
//       }
//       if (rtn === 3) {
//         str = 'Determine a Edição do seu PassWord...';
//       }
//       if (rtn === 4) {
//         str = 'Sua "PASSWORD" deve conter mais de (4) Caracteres...';
//       }
//       if (cont >= 5 && rtn === 0) {
//         rtn = 5;
//         str = '"ACABARAM" suas Tentativas...';
//         setIsContinua(false);
//         setIsResgatar(true);
//         setIsConfirmaInput(false);
//         console.log('5 :',4);
//       }
//       if (rtn >= 1) {
//         setNmErroLogin(str);
//         setIsErroLogin(true);
//         console.log('4 :',5);
//       } else {
//         setIsErroLogin(false);
//         console.log('3 :',6);
//       }
//       console.log('2 :',7);
//     }
//     console.log('1 :',8);
//   }, [cont]);

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
//   setTentativa(tentativa + 1);
// };

// React.useEffect(() => {
//   console.log('tentativa1 : ', tentativa);
//   console.log('state.nrCont1 : ', state.nrcont);
//   ////////////////////////////
//   if (state.mdlogin >= 1 && mdlogin <= 4) {
//     setBtnContinua(true);
//     if (tentativa < state.nrcont) {
//       dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
//     }
//   } else if (mdlogin === 0) {
//     setBtnContinua(false);
//   }
// }, [mdlogin, tentativa, dispatch]);

//  <Lg.ContainerMainLogin>
//             <h3>LOGIN2</h3>
//             <ContentLoginCollunsCenter isopen={ispsw}>
//               <ContentLoginColluns>

//                 <ContentLoginOpc pwidth="200px" open={ispsw}>
//                   <ContentTitleLoginOpc titleopc={nmlogin} />

//                   <ContentInput>
//                     <ContentRadioOpc
//                       id="E-Mail/Pass"
//                       name={'opcao'}
//                       value={1}
//                       titulo="E-Mail/Pass"
//                       onclick={() => setModo(1)}
//                     />
//                     <ContentRadioOpc
//                       id="E-Mail/PIN"
//                       name={'opcao'}
//                       value={2}
//                       titulo="E-Mail/PIN"
//                       onclick={() => setModo(2)}
//                     />
//                     <ContentRadioOpc
//                       id="Pseud/Pass"
//                       name={'opcao'}
//                       value={3}
//                       titulo="Pseudô/Pass"
//                       onclick={() => setModo(3)}
//                     />
//                     <ContentRadioOpc
//                       id="Pseud/PIN"
//                       name={'opcao'}
//                       value={4}
//                       titulo="Pseudô/PIN"
//                       onclick={() => setModo(4)}
//                     />
//                   </ContentInput>
//                 </ContentLoginOpc>

//               </ContentLoginColluns>
//             </ContentLoginCollunsCenter>

//             </Lg.ContainerMainLogin>
//           <Lg.DivisionPgHztalOnOff isopen={iscontinua} />
//           <ContentLoginOpc pwidth={'100%'} open={iscontinua}>
//             <ContentTitleLoginOpc titleopc="Aplicação :" />
//             <ContentInput>
//               {iscontinua && mdlogin == 1 ? (
//                 <form name="emailpas">
//                   <Lg.InputCenter>
//                     <label>E-Mail</label>
//                     <input
//                       type="email"
//                       id="email1"
//                       name="email1"
//                       value={strid}
//                       placeholder="email@email.com(.br)"
//                       onChange={(e) => setStrId(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                   <Lg.InputCenter>
//                     <label>Pass..</label>
//                     <input
//                       type="password"
//                       id="password1"
//                       name="password1"
//                       value={strpsw}
//                       placeholder="**********"
//                       onChange={(e) => setStrPsw(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                 </form>
//               ) : null}
//               {iscontinua && mdlogin == 2 ? (
//                 <form name="emailpin">
//                   <Lg.InputCenter>
//                     <label>E-Mail</label>
//                     <input
//                       type="email"
//                       id="email2"
//                       name="email2"
//                       value={strid}
//                       placeholder="email@email.com(.br)"
//                       onChange={(e) => setStrId(e.target.value)}
//                     />
//                   </Lg.InputCenter>

//                   <Lg.InputCenter>
//                     <label>PIN...:</label>
//                     <input
//                       type="text"
//                       id="pin1"
//                       name="pin1"
//                       value={strpsw}
//                       placeholder="****"
//                       onChange={(e) => setStrPsw(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                 </form>
//               ) : null}
//               {iscontinua && mdlogin == 3 ? (
//                 <form name="namepas">
//                   <Lg.InputCenter>
//                     <label>Pseud.:</label>
//                     <input
//                       type="text"
//                       id="pseud1"
//                       name="pseud1"
//                       value={strid}
//                       placeholder="Seu pseudônimo."
//                       onChange={(e) => setStrId(e.target.value)}
//                     />
//                   </Lg.InputCenter>

//                   <Lg.InputCenter>
//                     <label>Pass...:</label>
//                     <input
//                       type="password"
//                       id="password2"
//                       name="password2"
//                       value={strpsw}
//                       placeholder="**********"
//                       onChange={(e) => setStrPsw(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                 </form>
//               ) : null}
//               {iscontinua && mdlogin == 4 ? (
//                 <form name="namepin">
//                   <Lg.InputCenter>
//                     <label>Pseud.:</label>
//                     <input
//                       type="text"
//                       id="pseud2"
//                       name="pseud2"
//                       value={strid}
//                       placeholder="Seu pseudônimo."
//                       onChange={(e) => setStrId(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                   <Lg.InputCenter>
//                     <label>PIN.....:</label>
//                     <input
//                       type="text"
//                       id="pin2"
//                       name="pin2"
//                       placeholder="****"
//                       onChange={(e) => setStrPsw(e.target.value)}
//                     />
//                   </Lg.InputCenter>
//                 </form>
//               ) : null}
//             </ContentInput>
//           </ContentLoginOpc>

//           <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />

//           <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//             <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
//             <Lg.ContainerAreaText>
//               <form name="confInput">
//                 <Lg.InputPage>
//                   <h3>mostrar inputs para verificação do acesso.</h3>
//                   {iscontinua && mdlogin == 1 ? (
//                     <>
//                       <label>E-Mail</label>
//                       <input
//                         type="1email"
//                         id="1email1"
//                         name="1email1"
//                         value={state.mail}
//                         placeholder="email@email.com(.br)"
//                       />
//                       <label>Pass..</label>
//                       <input
//                         type="1password"
//                         id="1password1"
//                         name="1password1"
//                         value={state.pswuser}
//                         placeholder="**********"
//                         disabled
//                       />
//                     </>
//                   ) : null}
//                 </Lg.InputPage>
//               </form>
//             </Lg.ContainerAreaText>
//             <ContentButtonsConfirmation>
//               <ContentButtonConfimationOnOff
//                 title={'SIM'}
//                 img={enviaon}
//                 titlebtn="Enviar..."
//                 onClick={() => goto('/login4')}
//               />
//               <ContentButtonConfimationOnOff
//                 title={'NÃO'}
//                 img={enviaoff}
//                 titlebtn="Retornar..."
//                 onClick={() => {
//                   alert('retoma a edição...');
//                 }}
//               />
//             </ContentButtonsConfirmation>
//           </ContentLoginOpc>

//           <Lg.DivisionPgHztalOnOff isopen={isconfirmaresgatar} />
//

//<ContentLoginOpc pwidth={'100%'} open={isconfirmaresgatar}>
//             <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO da MUDANÇA de Dados...' />
//             <Lg.ContainerAreaText>
//               <form name="confResgate">
//                 <Lg.InputCenter>
//                   <h3>Confime se deseja outro modo para o acesso.</h3>
//                   <p>Caso "NÃO" confirme Retornarei do Início. </p>
//                 </Lg.InputCenter>
//               </form>
//             </Lg.ContainerAreaText>
//             <ContentButtonsConfirmation>
//               <ContentButtonConfimationOnOff
//                 title={'SIM'}
//                 img={enviaon}
//                 titlebtn="Outra maneira..."
//                 onClick={goto('/login2')}
//               />
//               <ContentButtonConfimationOnOff
//                 title={'NÃO'}
//                 img={enviaoff}
//                 titlebtn="Inicio..."
//                 onClick={goto('/')}
//               />
//             </ContentButtonsConfirmation>
//           </ContentLoginOpc> */}

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

// <Lg.DivisionPgHztal />
// <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
//   <ContentMainButtonsLogin>
//     <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />

//     {iscontinua && mdlogin > 0 ? (
//       <ContentButtonTitleImg
//         title="Continuar."
//         onClick={handlerContinuar}
//       />
//     ) : (
//       <p>Você tem [{cont}] tentativas para acesso...</p>
//     )}

//     {ismostraInput ? (
//       <ContentButtonTitleImg title="Enviar" onClick={handlerEnviar} />
//     ) : null}

//     {isresgatar ? (
//       <ContentButtonTitleImg
//         title="Resgatar"
//         onClick={handlerResgatar}
//       />
//     ) : null}

//     {iserrologin ? (
//       <PanelModalInfoErros
//         ptop={'1%'}
//         pwidth={'65%'}
//         pheight={'auto'}
//         titulo={'ERRO em processamento...'}
//         texto={
//           'Mais atenção, tentativa: [' + (5 - cont) + '] de [5].'
//         }
//         onClose={() => setIsErroLogin(false)}
//       >
//         <CardInfoErros nmerro={nmrerrologin} />
//       </PanelModalInfoErros>
//     ) : null}

// <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//   <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
//   <Lg.ContainerAreaText>
//     <label>Empresa :</label>
//     <p>{state.idemp}...</p>

//     <label>Nome Empresa :</label>
//     <p>{state.nmfant}...</p>

//     <label>Acesso Login:</label>
//     <p>{nmlogin}</p>
//   </Lg.ContainerAreaText>
//    <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Enviar..."
//       onClick={ handlerEnvia }
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Recusar..."
//       onClick={ handlerRetorna }
//     />
//   </ContentButtonsConfirmation>
// </ContentLoginOpc>

// <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//   <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
//   <Lg.ContainerAreaText>
//     <p>
//       Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
//     </p>
//     <label>Acesso Login:</label>
//     <p>
//       {mdlogin}...nmlogin : {nmlogin}
//     </p>
//   </Lg.ContainerAreaText>

//   <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Aceitar..."
//       onClick={handlerEnviar}
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Retornar..."
//       onClick={()=>{}}
//     />
//   </ContentButtonsConfirmation>

// </ContentLoginOpc>

// /* <Lg.DivisionPgHztalOnOff isopen={isconfirmacao} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmacao}>
//   <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
//   <Lg.ContainerAreaText>
//     <p>
//       Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
//     </p>
//     <label>Acesso Login:</label>
//     <p>
//       {mdlogin}...nmlogin : {nmlogin}
//     </p>
//   </Lg.ContainerAreaText>

//   <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Aceitar..."
//       onClick={handleresgatar}
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Retornar..."
//       onClick={goto('/')}
//     />
//   </ContentButtonsConfirmation>
// </ContentLoginOpc>

// {confirmacao ? (
//   <Lg.DivisionPgHztalOnOff isopen={confirmacao} />
//   <ContentLoginOpc pwidth={'100%'} open={confirmacao}>
//     <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
//     <Lg.ContainerAreaText onoff={confirmacao}>
//       <ContentTitlePanel title={' " CONFIRMA ENVIO DOS DADOS...? " '} />
//         <p>
//           idempresa : {idempresa}...fa-ntempresa : {fantempresa}
//         </p>
//         <p>
//           mdlogin : {mdlogin}...nmlogin : {nmlogin}
//         </p>
//       </Lg.ContainerAreaText>
//       <ContentButtonsConfirmation>
//         <ContentButtonConfimationOn
//           title={'SIM'}
//           img={enviaron}
//           titlebtn="Aceitar..."
//           onClick={handlernropcao}
//         />
//         <ContentButtonConfimationOff
//           title={'NÃO'}
//           img={enviaroff}
//           titlebtn="Retornar..."
//           onClick={goto('/')}
//         />
//       </ContentButtonsConfirmation>
//     </ContentFormCollunsCenter>
//   ) : null}

// mdlogin == 1 ? (
//   <form name='aaa'
//     <Lg.InputPage
//       name="mdlogin1"
//       disabled={true}
// //                        titulo="E-Mail.:"
//       id="email1"
//       type="email"
//       name="opcemail1"
//       value={strid}
//       placeholder="email@email.com(.br)"
//       onChange={() => handlerOnChangerStrId}
//       />
//   </form>

//                       <.InputPage
//                         disabled={false}
// //                        titulo="Password.:"
//                         id="passw1"
//                         type="password"
//                         name="opcpassword1"
//                         value={strpsw}
//                         maxlength={10}
//                         placeholder="**********"
//                         onChange={() => handlerOnChangerStrPsw}

//import { ContentInput } from '../Login/ContentInput.tsx';
//import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';
//import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';

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
