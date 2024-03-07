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

const Login1 = () => {
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

  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [tentativa] = React.useState(0);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Login : Opções Acesso'
    });
    dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
    dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
  }, [dispatch]);

  const setModo = (level: number) => {
    setMdLogin(level);
  };

  React.useEffect(() => {
    const DescrOpc = [
      'Opções:',
      'E-Mail / PassWord.',
      'E-Mail / PIN.',
      'Pseudônino / PassWord.',
      'Pseudônino / PIN.'
    ];

    setNmLogin(DescrOpc[mdlogin]);

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

    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [tentativa, mdlogin, nmlogin, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <Lg.ContainerLogin>
          <Lg.ContainerLoginFlex>
            <ContentTitleLogin modotitle={state.modulo} />
            <Lg.ContainerMainLogin isopen={true}>
              <ContentLoginCollunsCenter isopen={true}>
                <ContentLoginColluns>
                  <ContentLoginOpc pwidth="200px" open={true}>
                    <ContentTitleLoginOpc titleopc={state.aplicacao} />
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
                  />
                ) : null}
              </ContentMainButtonsLogin>
            </ContentLoginColluns>
          </Lg.ContainerLoginFlex>
        </Lg.ContainerLogin>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login1;
