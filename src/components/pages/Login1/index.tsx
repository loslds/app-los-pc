import * as Lg from '../../../styles/styledLogin.ts';

//import enviaon from '../../../assets/svgs/enviaron.svg';
//import enviaoff from '../../../assets/svgs/enviaroff.svg';

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

import { ContentLoginPg } from '../Login/ContentLoginPg.tsx';
import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from '../Login/ContentLoginCollunsCenter.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';

import { ContentInput } from '../Login/ContentInput.tsx';
import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';
import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';
import { ContentInputOpc } from '../Login/ContentInputOpc.tsx';

import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';
import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
import { CardInfoErros } from '../../contentHelp/CardInfoErros.tsx';
import { ContentButtonsConfirmation } from '../Login/ContentButtonsConfirmation.tsx';
import { ContentButtonConfimationOnOff } from '../Login/ContentButtonConfimationOnOff.tsx';

//import { ListAcessos } from '../../../books/ListAcessos.tsx';

/////////////////////////////////
export function TestaInput(stri: string, strp: string) {
  // testa o id
  let nrleni = stri.length;
  let nrlenp = strp.length;

  if (nrleni === 0 && nrlenp === 0) {
    return 1;
  } else if (nrleni === 0) {
    return 2;
  } else if (nrlenp === 0) {
    return 3;
  } else if (nrlenp > 0 && nrlenp < 4) {
    return 4;
  } else {
    return 0;
  }
}
export const Login1 = () => {
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');

  const [panelselect, setPanelSelect] = React.useState(false);
  const [panelinputselecao, setPanelInputSelecao] = React.useState(false);
  const [btncontinua, setBtnContinua] = React.useState(false);

  const [cont] = React.useState(0);
  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  //const [iserrologin, setIsErroLogin] = React.useState(false);
  //const [nmrerrologin, setNmErroLogin] = React.useState('');

  //const [iscontinua, setIsContinua] = React.useState(false);
  //const [ismostraInput, setIsMostraInput] = React.useState(false);
  //const [isconfirmainput, setIsConfirmaInput] = React.useState(false);

  //const [isresgatar, setIsResgatar] = React.useState(false);
  //const [isconfirmaresgatar, setIsConfirmaResgatar] = React.useState(false);

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
  const { dispatch } = AcessoUseForm();

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });
    setPanelSelect(true);
  }, [dispatch]);

  const DescrOpc = [
    'Opções:',
    'E-Mail / PassWord.',
    'E-Mail / PIN.',
    'Pseudônino / PassWord.',
    'Pseudônino / PIN.'
  ];

  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);

    if (mdlogin === 0) {
      setPanelInputSelecao(false);
      setBtnContinua(false);
      console.log('A :', 2);
    }

    // if (mdlogin > 0 && mdlogin <= 4) {
    //   setPanelInputSelecao(true);
    //   setBtnContinua(true);
    //   console.log('B :',1);
    // }
    console.log('C :', 3);
  };

  React.useEffect(() => {
    if (mdlogin > 0 && mdlogin <= 4) {
      setPanelInputSelecao(true);
      setBtnContinua(true);
      console.log('B :', 1);
    }
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
    console.log('mdl :', mdlogin);
  }, [mdlogin, dispatch]);

  const handlerOnChangerStrId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrId(e.currentTarget.value);
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
  };
  const handlerOnChangerStrPsw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrPsw(e.currentTarget.value);
    dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });
  };

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
        <ContentLoginPg>
          <ContentTitleLogin modotitle={'Determine o seu Acesso.'} />

          {/** Painel Select */}
          <Lg.ContainerMainLogin>
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
                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>

          {/** mostra Painel Input Select */}

          <Lg.DivisionPgHztalOnOff isopen={panelinputselecao} />
          <Lg.ContainerMainLogin>
            <ContentLoginCollunsCenter
              isopen={panelinputselecao}
              pwidth={'100%'}
            >
              <ContentLoginColluns pwidth={'100%'}>
                <ContentLoginOpc pwidth={'100%'} open={panelinputselecao}>
                  <ContentTitleLoginOpc titleopc={'Aplicação :'} />

                  {mdlogin == 1 ? (
                    <form name="mdlogin1">
                      <ContentInputOpc
                        titulo="E-Mail.:"
                        id="email"
                        type="email"
                        name="opcemail"
                        value={strid}
                        placeholder="email@email.com(.br)"
                        onchange={() => handlerOnChangerStrId}
                      />
                      <ContentInputOpc
                        titulo="Pass...:"
                        id="passw"
                        type="password"
                        name="opcpassword"
                        value={strpsw}
                        maxlength={10}
                        placeholder="**********"
                        onchange={() => handlerOnChangerStrPsw}
                      />
                    </form>
                  ) : null}
                  {mdlogin == 2 ? <form name="mdlogin2"></form> : null}
                  {mdlogin == 3 ? <form name="mdlogin3"></form> : null}
                  {mdlogin == 4 ? <form name="mdlogin4"></form> : null}
                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>

          {/* <ContentLoginOpc pwidth={'100%'} open={panelinputselecao}>

              </ContentLoginOpc> */}

          <ContentLoginOpc pwidth={'100%'} open={true}>
            <ContentTitleLoginOpc titleopc="Aplicação :" />
            <ContentInput>
              {/* {mdlogin == 1 ? (
                <form name="mdlogin1">
                  <Lg.InputCenter>
                    <label>E-Mail</label>
                    <Lg.InputPage
                      type="email"
                      id="email1"
                      name="email1"
                      value={strid}
                      placeholder="email@email.com(.br)"
                      onChange={handlerOnChangerStrId}
                    />
                  </Lg.InputCenter>
                  <Lg.InputCenter>
                    <label>Pass..</label>
                    <Lg.InputPage
                      type="password"
                      id="password1"
                      name="password1"
                      value={strpsw}
                      placeholder="**********"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
 */}
              {mdlogin == 2 ? (
                <form name="mdlogin2">
                  <Lg.InputCenter>
                    <label>E-Mail</label>
                    <input
                      type="email"
                      id="email2"
                      name="email2"
                      value={strid}
                      placeholder="email@email.com(.br)"
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>

                  <Lg.InputCenter>
                    <label>PIN...:</label>
                    <input
                      type="text"
                      id="pin1"
                      name="pin1"
                      value={strpsw}
                      placeholder="****"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}

              {mdlogin == 3 ? (
                <form name="mdlogin3">
                  <Lg.InputCenter>
                    <label>Pseud.:</label>
                    <input
                      type="text"
                      id="pseud1"
                      name="pseud1"
                      value={strid}
                      placeholder="Seu pseudônimo."
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>

                  <Lg.InputCenter>
                    <label>Pass...:</label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      value={strpsw}
                      placeholder="**********"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}

              {mdlogin == 4 ? (
                <form name="mdlogin4">
                  <Lg.InputCenter>
                    <label>Pseud.:</label>
                    <input
                      type="text"
                      id="pseud2"
                      name="pseud2"
                      value={strid}
                      placeholder="Seu pseudônimo."
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>
                  <Lg.InputCenter>
                    <label>PIN.....:</label>
                    <input
                      type="text"
                      id="pin2"
                      name="pin2"
                      placeholder="****"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
            </ContentInput>
          </ContentLoginOpc>

          {/* 
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
 */}

          {/* 
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
 */}

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
              ) : (
                <p>Você tem [{cont}] tentativas para acesso...</p>
              )}

              {/* 
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
*/}
            </ContentMainButtonsLogin>
          </ContentLoginColluns>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};

/*
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
