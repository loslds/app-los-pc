import * as Lg from '../../../styles/styledLogin.ts';

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
import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
import { ContentInput } from '../Login/ContentInput.tsx';
import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';

import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';
//import { ContentButtonsConfirmation } from '../Login/ContentButtonsConfirmation.tsx';
//import { ContentButtonConfimationOnOff } from '../Login/ContentButtonConfimationOnOff.tsx';
//import enviaon from '../../../assets/svgs/enviaron.svg';
//import enviaoff from '../../../assets/svgs/enviaroff.svg';

/////////////////////////////////
//export function TestaInput(stri: string, strp: string) {
// testa o id
//  let nrleni = stri.length;
//  let nrlenp = strp.length;

//  if (nrleni === 0 && nrlenp === 0) {
//    return 1;
//  } else if (nrleni === 0) {
//    return 2;
//  } else if (nrlenp === 0) {
//    return 3;
//  } else if (nrlenp > 0 && nrlenp < 4) {
//    return 4;
//  } else {
//    return 0;
//  }
//}

const Login1 = () => {
  //  const [panelselect, setPanelSelect] = React.useState(false);
  //  const [inputselecao, setInputSelecao] = React.useState(false);

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

  // const [isopen, setIsOpen] = React.useState(false);
  //  const [isedit, setIsEdit] = React.useState(false);
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [tentativa] = React.useState(0);
  //  const [btnconfirmar, setBtnConfirmar] = React.useState(false);
  //const [isconfirma, setIsConfirma] = React.useState(false);
  //  const [strid, setStrId] = React.useState('');
  //  const [strpsw, setStrPsw] = React.useState('');

  //const [nrerro, setNrErro] = React.useState(0);
  //const [strrerro, setStrErro] = React.useState('');
  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });
    // setIsOpen(true);
  }, [dispatch]);

  const setModo = (level: number) => {
    setMdLogin(level);
    // setNmLogin(DescrOpc[level]);
    // setTentativa(tentativa + 1);
  };

  React.useEffect(() => {
    const DescrOpc = [
      'Opções:',
      'E-Mail / PassWord.',
      'E-Mail / PIN.',
      'Pseudônino / PassWord.',
      'Pseudônino / PIN.'
    ];
    
    if (mdlogin === 0) {
      setBtnContinua(false);
    } else {
      if (tentativa >= 5) {
        alert('tentativa === 5');
        setBtnContinua(false);
      } else {
        setBtnContinua(true);
      }
    }
    setNmLogin(DescrOpc[mdlogin]);
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [tentativa, mdlogin, nmlogin, dispatch]);
      // if (mdlogin > 0) {
      //   if (isedit) {
      //     setBtnContinua(false);
      //     setBtnConfirmar(true);
      //   }
      //   if (isconfirma ){
      //     setBtnConfirmar(false);
      //     setIsConfirma(true);
      //   }
      // }

    // console.log('mdlogin1 :', state.mdlogin);
    // console.log('nmlogin1 :', state.nmlogin);
    // console.log('tentativa1 :', state.nrcont);

    // dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    // dispatch({ type: AcessoUseActions.setMdLogin, payload: nmlogin });
    // dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });

    // if (mdlogin !== state.mdlogin) {
    //   dispatch({ type: AcessoUseActions.setMdLogin, payload: nmlogin });
    // }
    // if (nmlogin !== state.nmlogin) {
    //   dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    // }
    // if (tentativa !== state.nrcont) {
    //   dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    // }

    //   dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
    //   dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });


  // React.useEffect(() => {
  //   setNmLogin(DescrOpc[mdlogin]);
  //   if (mdlogin == 1) { dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
  //   dispatch({ type: AcessoUseActions.setMdLogin, payload: nmlogin });
  //   dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  // }, [dispatch]);

  // console.log('mdlogin0 :', mdlogin);
  // console.log('nmlogin0 :', nmlogin);
  // console.log('tentativa0 :', tentativa);
  // console.log('=============', '==============');

  console.log('state.mdlogin :', state.mdlogin);
  console.log('state.nmlogin :', state.nmlogin);
  console.log('state.nrcont  :', state.nrcont);
  console.log('#############', '###############');

  // const handlerOnChangerStrId = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStrId(e.currentTarget.value);
  // };
  // const handlerOnChangerStrPsw = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setStrPsw(e.currentTarget.value);
  // };

  // React.useEffect(() => {
  //   if (mdlogin > 0) {

  //     if {}
  //     setBtnContinua(false);
  //   } else {
  //   }
  // },[]};

  // const handlerContinuar = React.useCallback(() => {
  //   if (btncontinua) {
  //     setBtnContinua(false);
  //   }
  //   if (!btnconfirmar) {
  //     setBtnConfirmar(true);
  //   }
  // }, [btncontinua, isedit, btnconfirmar]);

  // const handlerConfirmar = () => {
  //   setBtnConfirmar(false);
  //   setIsEdit(false);
  //   setIsConfirma(true);
  // };

  // const handlerRetornar = () => {
  //   setStrId('');
  //   setStrPsw('');
  //   dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
  //   dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });
  // };

  // console.log('isedit :', isedit);
  // console.log('btncontinua :', btncontinua);
  // console.log('isedit :', isedit);
  // console.log('btnconfirmar :', btnconfirmar);
  // console.log('strid :', strid);
  // console.log('strpsw ;', strpsw);

  // const handlerContinuar = React.useCallback(() => {
  //   setNmErroLogin('');
  //   if (mdlogin >= 1) {

  //     setCont(cont + 1);
  //     let rtn = 0;
  //     let str = '';
  //     rtn = TestaInput(strid, strpsw);
  //     if (rtn == 1) {
  //       str = 'Determine seu ID e Password para Acesso...';
  //     }
  //     if (rtn === 2) {
  //       str = 'Determine a Edição do seu ID...';
  //     }
  //     if (rtn === 3) {
  //       str = 'Determine a Edição do seu PassWord...';
  //     }
  //     if (rtn === 4) {
  //       str = 'Sua "PASSWORD" deve conter mais de (4) Caracteres...';
  //     }
  //     if (cont >= 5 && rtn === 0) {
  //       rtn = 5;
  //       str = '"ACABARAM" suas Tentativas...';
  //       setIsContinua(false);
  //       setIsResgatar(true);
  //       setIsConfirmaInput(false);
  //       console.log('5 :',4);
  //     }
  //     if (rtn >= 1) {
  //       setNmErroLogin(str);
  //       setIsErroLogin(true);
  //       console.log('4 :',5);
  //     } else {
  //       setIsErroLogin(false);
  //       console.log('3 :',6);
  //     }
  //     console.log('2 :',7);
  //   }
  //   console.log('1 :',8);
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
  //   // if (iscontinua) {
  //   //   setIsContinua(false);
  //   // }
  //   if (ismostraInput) {
  //     setIsMostraInput(false);
  //   }
  // }, [ismostraInput]);

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

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        {/* {isopen ? ( */}
        <Lg.ContainerLogin>
          <Lg.ContainerLoginFlex>
            <ContentTitleLogin
              modotitle={'Determine a Maneira do seu Acesso.'}
            />
            <Lg.ContainerMainLogin isopen={true}>
              <ContentLoginCollunsCenter isopen={true}>
                <ContentLoginColluns>
                  <ContentLoginOpc pwidth="200px" open={true}>
                    <ContentTitleLoginOpc titleopc={nmlogin} />
                    <ContentInput>
                      <ContentRadioOpc
                        id="E-Mail/Pass"
                        name="opcao"
                        value={1}
                        titulo="E-Mail/Pass"
                        onclick={() => setModo(1)}
                      />
                      <ContentRadioOpc
                        id="E-Mail/PIN"
                        name="opcao"
                        value={2}
                        titulo="E-Mail/PIN"
                        onclick={() => setModo(2)}
                      />
                      <ContentRadioOpc
                        id="Pseud/Pass"
                        name="opcao"
                        value={3}
                        titulo="Pseudô/Pass"
                        onclick={() => setModo(3)}
                      />
                      <ContentRadioOpc
                        id="Pseud/PIN"
                        name="opcao"
                        value={4}
                        titulo="Pseudô/PIN"
                        onclick={() => setModo(4)}
                      />
                    </ContentInput>
                  </ContentLoginOpc>
                </ContentLoginColluns>
              </ContentLoginCollunsCenter>
            </Lg.ContainerMainLogin>

            <Lg.DivisionPgHztal />

            <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
              <ContentMainButtonsLogin>
                <ContentButtonTitleImg
                  title="Voltar."
                  onClick={goto('/login')}
                />
                <p>Você tem [{4 - state.nrcont}] tentativas para acesso...</p>
                {btncontinua && mdlogin > 0 && mdlogin < 5 ? (
                  <ContentButtonTitleImg
                    title="Continuar."
                    onClick={goto('/login2')}
                    // onClick={() => setIsEdit(true)}
                  />
                ) : null}
              </ContentMainButtonsLogin>
            </ContentLoginColluns>
          </Lg.ContainerLoginFlex>
        </Lg.ContainerLogin>
        {/* ) : null} */}
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login1;

{
  /* {isedit ? (
          <Lg.ContainerLogin>
            <Lg.ContainerLoginFlex>
              <ContentTitleLogin modotitle={'Edição :' + nmlogin} />
              <Lg.ContainerMainLogin isopen={isedit}>
                <ContentLoginCollunsCenter isopen={isedit}>
                  <ContentLoginColluns pwidth="400px">
                    <ContentLoginOpc open={isedit}>
                      
                      {mdlogin === 1 ? (
                        <form name="login1">
                          <br />
                          <label>
                            E-Mail...... :
                            <input
                              
                              type="mail"
                              name="mail1"
                              value={strid}
                              onChange={handlerOnChangerStrId}
                            />
                          </label>
                          <br />
                          <label>
                            PassWord :
                            <input
                              type="password"
                              name="pass1"
                              value={strpsw}
                              onChange={handlerOnChangerStrPsw}
                            />
                          </label>
                          <br />
                          
                        </form>
                      ) : null}
                      {mdlogin === 2 ? (
                        <form name="login2">
                          <br />
                          <label>
                            E-Mail...... :
                            <input
                              type="mail"
                              name="mail2"
                              value={strid}
                              onChange={handlerOnChangerStrId}
                            />
                          </label>
                          <br />
                          <label>
                            PIN......... :
                            <input
                              type="text"
                              name="pin1"
                              value={strpsw}
                              onChange={handlerOnChangerStrPsw}
                            />
                          </label>
                          <br />
                        </form>
                      ) : null}
                      {mdlogin === 3 ? (
                        <form name="login3">
                          <br />
                          <label>
                            Pseudônimo.. :
                            <input
                              type="text"
                              name="peseu1"
                              value={strid}
                              onChange={handlerOnChangerStrId}
                            />
                          </label>
                          <br />
                          <label>
                            PassWord.... :
                            <input
                              type="password"
                              name="pass2"
                              value={strpsw}
                              onChange={handlerOnChangerStrPsw}
                            />
                          </label>
                          <br />
                        </form>
                      ) : null}
                      {mdlogin === 4 ? (
                        <form name="login4">
                          <br />
                          <label>
                            Pseudônimo.. :
                            <input
                              type="text"
                              name="peseu2"
                              value={strid}
                              onChange={handlerOnChangerStrId}
                            />
                          </label>
                          <br />
                          <label>
                            PIN......... :
                            <input
                              type="text"
                              name="pin2"
                              value={strpsw}
                              onChange={handlerOnChangerStrPsw}
                            />
                          </label>
                          <br />
                        </form>
                      ) : null}
                    </ContentLoginOpc>
                  </ContentLoginColluns>
                </ContentLoginCollunsCenter>
              </Lg.ContainerMainLogin>
            </Lg.ContainerLoginFlex>
          </Lg.ContainerLogin>
        ) : null}
        {isconfirma ? (
          <Lg.ContainerLogin>
            <Lg.ContainerLoginFlex>
              <Lg.ContainerMainLogin>
                <ContentTitleLogin
                  modotitle={'"CONFIRMAÇÃO de Envio dos Dados..."'}
                />
                <ContentLoginOpc pwidth={'100%'} open={isconfirma}>
                  <Lg.ContainerAreaText>
                    <form name="confResgate">
                      <Lg.InputCenter>
                        <h3>Confime se deseja enviar confime!</h3>
                        <p>Caso "NÃO", confirme Retornarei do Início. </p>
                      </Lg.InputCenter>
                    </form>
                  </Lg.ContainerAreaText>
                  <ContentButtonsConfirmation>
                    <ContentButtonConfimationOnOff
                      title={'SIM'}
                      img={enviaon}
                      titlebtn="Enviar..."
                      onClick={ () => {alert('sim')} }
                    />
                    <ContentButtonConfimationOnOff
                      title={'NÃO'}
                      img={enviaoff}
                      titlebtn="Inicio..."
                      onClick={() => handlerRetornar}
                    />
                  </ContentButtonsConfirmation>
                </ContentLoginOpc>
              </Lg.ContainerMainLogin>
            </Lg.ContainerLoginFlex>
          </Lg.ContainerLogin>
        ) : null} 

        <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
          <ContentMainButtonsLogin>
            <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />
            <p>Você tem [{4 - state.nrcont}] tentativas para acesso...</p>
            {btncontinua && mdlogin > 0 && mdlogin < 5 ? (
              <ContentButtonTitleImg
                title="Continuar."
                onClick={goto('/login2')}
                // onClick={() => setIsEdit(true)}
              />
            ) : null}
            {/* {btnconfirmar ? (
              <ContentButtonTitleImg
                title="Confirmar."
                onClick={() => setIsConfirma(true) }
              />
            ) : null} 
          </ContentMainButtonsLogin>
        </ContentLoginColluns>
        {/* </ContentLoginPg> */
}
/* 
          




          
            <ContentLoginCollunsCenter isopen={panelselect}>
              <ContentLoginColluns>

                <ContentLoginOpc pwidth="200px" open={panelselect}>
                  <ContentTitleLoginOpc titleopc={nmlogin} />
                  <ContentInput>
                    <ContentRadioOpc
                      id="E-Mail/Pass"
                      name="opcao"
                      value={1}
                      titulo="E-Mail/Pass"
                      onclick={() => setModo(1)}
                    />
                    <ContentRadioOpc
                      id="E-Mail/PIN"
                      name="opcao"
                      value={2}
                      titulo="E-Mail/PIN"
                      onclick={() => setModo(2)}
                    />
                    <ContentRadioOpc
                      id="Pseud/Pass"
                      name="opcao"
                      value={3}
                      titulo="Pseudô/Pass"
                      onclick={() => setModo(3)}
                    />
                    <ContentRadioOpc
                      id="Pseud/PIN"
                      name="opcao"
                      value={4}
                      titulo="Pseudô/PIN"
                      onclick={() => setModo(4)}
                    />
                  </ContentInput>


                  {mdlogin == 1 ? (
                    <form name="mdlogin1">
                      <ContentInputOpc
                        titulo="E-Mail.:"
                        id="email1"
                        type="email"
                        name="opcemail1"
                        value={strid}
                        placeholder="email@email.com(.br)"
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="Password.:"
                        id="passw1"
                        type="password"
                        name="opcpassword1"
                        value={strpsw}
                        maxlength={10}
                        placeholder="**********"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                  {mdlogin == 2 ? (
                    <form name="mdlogin2">
                      <ContentInputOpc
                        titulo="E-Mail.:"
                        id="email2"
                        type="email"
                        name="opcemail2"
                        value={strid}
                        placeholder="email@email.com(.br)"
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="PIN...:"
                        id="pin1"
                        type="text"
                        name="opcpin1"
                        value={strpsw}
                        maxlength={4}
                        placeholder="9999"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}

                  {mdlogin == 3 ? (
                    <form name="mdlogin3">
                      <ContentInputOpc
                        titulo="Pseudônimo.:"
                        id="pseud2"
                        type="text"
                        name="opcpseud2"
                        value={strid}
                        placeholder="Pseudônimo..."
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="Password.:"
                        id="passw2"
                        type="password"
                        name="opcpassword2"
                        value={strpsw}
                        maxlength={10}
                        placeholder="**********"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                  {mdlogin == 4 ? (
                    <form name="mdlogin4">
                      <ContentInputOpc
                        titulo="Pseudônimo.:"
                        id="pseud2"
                        type="text"
                        name="opcpseud2"
                        value={strid}
                        placeholder="Pseudônimo..."
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="PIN...:"
                        id="pin2"
                        type="text"
                        name="opcpin2"
                        value={strpsw}
                        maxlength={4}
                        placeholder="9999"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}


                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>

 
          <Lg.DivisionPgHztalOnOff isopen={inputselecao} />

          <Lg.ContainerMainLogin  isopen={inputselecao}>
            <ContentLoginCollunsCenter isopen={inputselecao}>
               <ContentLoginColluns pheight="150px" pwidth="265px">
                <ContentLoginOpc open={inputselecao}>
                  <ContentTitleLoginOpc titleopc={'Aplicação : Edição'} />
                  {mdlogin == 1 ? (
                    <form name="mdlogin1">
                      <ContentInputOpc
                        titulo="E-Mail.:"
                        id="email1"
                        type="email"
                        name="opcemail1"
                        value={strid}
                        placeholder="email@email.com(.br)"
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="Password.:"
                        id="passw1"
                        type="password"
                        name="opcpassword1"
                        value={strpsw}
                        maxlength={10}
                        placeholder="**********"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                  {mdlogin == 2 ? (
                    <form name="mdlogin2">
                      <ContentInputOpc
                        titulo="E-Mail.:"
                        id="email2"
                        type="email"
                        name="opcemail2"
                        value={strid}
                        placeholder="email@email.com(.br)"
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="PIN...:"
                        id="pin1"
                        type="text"
                        name="opcpin1"
                        value={strpsw}
                        maxlength={4}
                        placeholder="9999"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}

                  {mdlogin == 3 ? (
                    <form name="mdlogin3">
                      <ContentInputOpc
                        titulo="Pseudônimo.:"
                        id="pseud2"
                        type="text"
                        name="opcpseud2"
                        value={strid}
                        placeholder="Pseudônimo..."
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="Password.:"
                        id="passw2"
                        type="password"
                        name="opcpassword2"
                        value={strpsw}
                        maxlength={10}
                        placeholder="**********"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                  {mdlogin == 4 ? (
                    <form name="mdlogin4">
                      <ContentInputOpc
                        titulo="Pseudônimo.:"
                        id="pseud2"
                        type="text"
                        name="opcpseud2"
                        value={strid}
                        placeholder="Pseudônimo..."
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="PIN...:"
                        id="pin2"
                        type="text"
                        name="opcpin2"
                        value={strpsw}
                        maxlength={4}
                        placeholder="9999"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                </ContentLoginOpc>
              </ContentLoginColluns> 
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>
 
          <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />

          <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
            <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
            <Lg.ContainerAreaText>
              
                  <h3>mostrar Acesso.</h3>
              
            </Lg.ContainerAreaText>
            <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Enviar..."
                onClick={() => goto('/login4')}
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Retornar..."
                onClick={() => {
                  alert('retoma a edição...');
                }}
              />
            </ContentButtonsConfirmation>
          </ContentLoginOpc>
          
 
          <Lg.DivisionPgHztalOnOff isopen={isconfirmaresgatar} />
          <ContentLoginOpc pwidth={'100%'} open={isconfirmaresgatar}>
            <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO da MUDANÇA de Dados...' />
            <Lg.ContainerAreaText>
              <form name="confResgate">
                <Lg.InputCenter>
                  <h3>Confime se deseja outro modo para o acesso.</h3>
                  <p>Caso "NÃO" confirme Retornarei do Início. </p>
                </Lg.InputCenter>
              </form>
            </Lg.ContainerAreaText>
            <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Outra maneira..."
                onClick={goto('/login2')}
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Inicio..."
                onClick={goto('/')}
              />
            </ContentButtonsConfirmation>
          </ContentLoginOpc>



          <Lg.DivisionPgHztal />
          <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />

              {btncontinua && mdlogin > 0 ? (
                <ContentButtonTitleImg
                  title="Continuar."
                  onClick={() => {
                    alert('btncontinua');
                  }}
                />
              ) : null}
               (
                <p>Você tem [{cont}] tentativas para acesso...</p>
              )}

  
              {ismostraInput ? (
                <ContentButtonTitleImg title="Enviar" onClick={handlerEnviar} />
              ) : null}

              {isresgatar ? (
                <ContentButtonTitleImg
                  title="Resgatar"
                  onClick={handlerResgatar}
                />
              ) : null}

              {iserrologin ? (
                <PanelModalInfoErros
                  ptop={'1%'}
                  pwidth={'65%'}
                  pheight={'auto'}
                  titulo={'ERRO em processamento...'}
                  texto={
                    'Mais atenção, tentativa: [' + (5 - cont) + '] de [5].'
                  }
                  onClose={() => setIsErroLogin(false)}
                >
                  <CardInfoErros nmerro={nmrerrologin} />
                </PanelModalInfoErros>
              ) : null}
            </ContentMainButtonsLogin>
          </ContentLoginColluns>
        </ContentLoginPg>





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

/* 

            <ContentLoginCollunsCenter isopen={isopen}>
              <ContentLoginColluns>
                <ContentLoginOpc pwidth="200px" open={isopen}>
                  <ContentTitleLoginOpc titleopc={nmlogin} />
                  <ContentInput>
                    <ContentRadioOpc
                      id="E-Mail/Pass"
                      name="opcao"
                      value={1}
                      titulo="E-Mail/Pass"
                      onclick={() => setModo(1)}
                    />
                    <ContentRadioOpc
                      id="E-Mail/PIN"
                      name="opcao"
                      value={2}
                      titulo="E-Mail/PIN"
                      onclick={() => setModo(2)}
                    />
                    <ContentRadioOpc
                      id="Pseud/Pass"
                      name="opcao"
                      value={3}
                      titulo="Pseudô/Pass"
                      onclick={() => setModo(3)}
                    />
                    <ContentRadioOpc
                      id="Pseud/PIN"
                      name="opcao"
                      value={4}
                      titulo="Pseudô/PIN"
                      onclick={() => setModo(4)}
                    />
                  </ContentInput>
                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>

                </Lg.ContainerMainLogin>
              </Lg.ContainerLogin>
            <Lg.DivisionPgHztal />
           */
