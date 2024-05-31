import React from 'react';

import * as Lg from '../stylePage.ts';
import '../../../styles/global.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin2 } from '../../modulos/themes/ThemeLogin2';
import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
import { ContentCardPage } from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import { ContentCardBoxMainPage } from '../ContentCardBoxMainPage.tsx';
import { ContentCardBoxCenterPage } from '../ContentCardBoxCenterPage.tsx';
import { ContentInputMainPage } from '../ContentInputMainPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PanelModalInfoErros } from '../../Modal/PanelModalInfoErros.tsx';
import { CardInfoErros } from '../../contentHelp/CardInfoErros.tsx';
import { ContentCardCollunsCenterPage } from '../ContentCardCollunsCenterPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { CardHelpLogin2 } from '../../contentHelp/CardHelpLogin2.tsx';

import close from '../../../assets/svgs/close.svg';
import enviaron from '../../../assets/svgs/enviaron.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import login2hlp from '../../../assets/svgs/login2hlp.svg';
import loginpg2 from '../../../assets/svgs/loginpg2.svg';

import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';

export const Login2 = () => {
  const { state, dispatch } = AcessoUseForm();

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

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [formopcao, setFormOpcao] = React.useState(false);
  const [iseditar, setIsEditar] = React.useState(false);
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [ischeklogin, setIsChekLogin] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(state.nrcont);

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');
  const [btnenviar, setBtnEnviar] = React.useState(false);
  const [btnresgatar, setBtnResgatar] = React.useState(false);
  const [iserrologin, setIsErroLogin] = React.useState(false);
  const [nmrerrologin, setNmErroLogin] = React.useState('');

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login2' });
    if (tentativa != state.nrcont) {
      dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    } else {
      setTentativa(state.nrcont);
    }

    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Login : Selecionar Opção Edição.'
    });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: state.nmlogin });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
    //    setTentativa(state.nrcont);
    setStart(true);
    setFormOpcao(true);
    setIsEditar(true);
    setIsChekLogin(false);
    setBtnContinua(true);
    setBtnResgatar(false)
    
  }, [tentativa, formopcao, dispatch]);

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
      setIsChekLogin(false);
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
      setIsChekLogin(false);
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
    if (!ischeklogin || nmrerrologin !== '') {
      if (strid === '' && strpsw === '') {
        if (state.mdlogin === 1) {
          setNmErroLogin('Determine seu Email e sua Senha para Acesso...');
        } else if (state.mdlogin === 2) {
          setNmErroLogin('Determine seu Email e seu PIN para Acesso...');
        } else if (state.mdlogin === 3) {
          setNmErroLogin('Determine seu Nome e sua Senha para Acesso...');
        } else if (state.mdlogin === 4) {
          setNmErroLogin('Determine seu Nome e seu PIN para Acesso...');
        }
      } else {
        setTentativa(tentativa + 1);
        if (strid === '') {
          if (state.mdlogin === 1 || state.mdlogin === 2) {
            setNmErroLogin('Determine seu Email para Acesso...');
          } else if (state.mdlogin === 3 || state.mdlogin === 4) {
            setNmErroLogin('Determine seu Nome para Acesso...');
          }
        } else if (strpsw === '') {
          if (state.mdlogin === 1 || state.mdlogin === 3) {
            setNmErroLogin('Determine sua Senha para Acesso...');
          } else if (state.mdlogin === 2 || state.mdlogin === 4) {
            setNmErroLogin('Determine seu PIN para Acesso...');
          }
        }
      }
    } else {
      setTentativa(tentativa + 1);
    }
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [strid, strpsw, tentativa, dispatch]);

  React.useEffect(() => {
    if (ischeklogin) {
      setIsEditar(true);
      setBtnEnviar(true);
    } else {
      if (nmrerrologin !== '') {
        setIsErroLogin(true);
        if (tentativa === 3) {
          setIsEditar(false);
          setBtnContinua(false);
          setBtnEnviar(false);
          setBtnResgatar(true);
        } else {
          setIsEditar(true);
          setBtnContinua(true);
          setBtnEnviar(false);
          setBtnResgatar(false);
        }
      }
    }

    // if (!ischeklogin && nmrerrologin !== '') {
    //   if (tentativa >= 3) {
    //     setIsEditar(false);
    //     setBtnContinua(false);
    //     setBtnEnviar(false);
    //     setIsErroLogin(false);
    //     setBtnResgatar(true);
    //   } else {
    //     setIsErroLogin(true);
    //   }
    // } else if (ischeklogin) {
    // }

    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [tentativa, dispatch]);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin2
        imgsys={loginpg2}
        titbtnsys={'Acesso Logo-on...'}
        onclicksys={() => {}}
        titlepg={'Acesso Sistema.'}
        imghpg={help}
        titbtnhpg={'Ajuda...'}
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen={'states contexto'}
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            {iseditar ? (
              <ContentCardBoxCenterPage>
                <ContentCardPageTitle>
                  <h4>{state.aplicacao}</h4>
                </ContentCardPageTitle>
                <ContentCardCollunsCenterPage
                  openccp={formopcao}
                  pwidth={'180px'}
                >
                  <ContentInputMainPage>
                    {state.mdlogin === 1 ? (
                      <form name="login1">
                        <br />
                        <label>Email.:</label>
                        <input
                          type="mail"
                          name="mail1"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                        <br />
                        <label>Senha: </label>
                        <input
                          type="password"
                          name="pass1"
                          maxLength={10}
                          value={strpsw}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                        <br />
                      </form>
                    ) : null}
                    {state.mdlogin === 2 ? (
                      <form name="login2">
                        <br />
                        <label>Email.:</label>
                        <input
                          type="mail"
                          name="mail2"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                        <br />
                        <label>PIN....:</label>
                        <input
                          type="text"
                          name="pin1"
                          value={strpsw}
                          maxLength={10}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                        <br />
                      </form>
                    ) : null}
                    {state.mdlogin === 3 ? (
                      <form name="login3">
                        <br />
                        <label>Nome.:</label>
                        <input
                          type="text"
                          name="peseu1"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                        <br />
                        <label>Senha:</label>
                        <input
                          type="password"
                          name="pass2"
                          value={strpsw}
                          maxLength={10}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                        <br />
                      </form>
                    ) : null}
                    {state.mdlogin === 4 ? (
                      <form name="login4">
                        <br />
                        <label>Nome.:</label>
                        <input
                          type="text"
                          name="peseu2"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={handlerOnChangerStrId}
                          onKeyUp={spanChangeKeyUpPasId}
                        />
                        <br />
                        <label>PIN.....:</label>
                        <input
                          type="text"
                          name="pin2"
                          value={strpsw}
                          maxLength={10}
                          onChange={handlerOnChangerStrPsw}
                          onKeyUp={spanChangeKeyUpPasPsw}
                        />
                        <br />
                      </form>
                    ) : null}
                  </ContentInputMainPage>
                </ContentCardCollunsCenterPage>
              </ContentCardBoxCenterPage>
            ) : null}
          </ContentCardBoxMainPage>
          <Lg.DivisionPgHztalPage />





          <ContentSidePagePanelBotton open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/login1')}
              />
            </ContentSidePageBottonLabel>
            <Lg.ContainerBoxLabelPage>
              <label>[ {3 - state.nrcont} ] tentativas. </label>
            </Lg.ContainerBoxLabelPage>

            {btnenviar && ischeklogin ? (
              <ContentSidePageBottonLabel
                istitl={btnenviar}
                title={'Enviar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Enviar...'}
                  onclick={goto('/login3')}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {btnresgatar ? (
              <ContentSidePageBottonLabel
                istitl={btnresgatar}
                title={'Resgatar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Resgatar...'}
                  onclick={goto('/login4')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
  
            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={handlerContinuar}
                />
              </ContentSidePageBottonLabel>
            ) : null}

          </ContentSidePagePanelBotton>
          
          {iserrologin ? (
            <PanelModalInfoErros
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'auto'}
              titulo={'ERRO em Processamento...'}
              texto={'Mais atenção! Na [' + state.nrcont + 'º] tentativa.'}
              imgbm={enviaron}
              titbm={'Voltar...'}
              onClose={() => setIsErroLogin(false)}
            >
              <CardInfoErros imgcard={''} nmerro={nmrerrologin} />
            </PanelModalInfoErros>
          ) : null}

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'55%'}
              pheight={'60%'}
              titulo={'Acesso Edição de Solicitação.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin2
                imghlp={login2hlp}
                imgcard={loginpg2}
                imgbm={close}
                titbm={'Fechar...'}
                onclose={() => setHelpPg(false)}
              />
            </PageModal>
          ) : null}

          {onpanel ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'70%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}
        </ContentCardPage>
      </ThemeLogin2>
    </ThemeProvider>
  );
};
