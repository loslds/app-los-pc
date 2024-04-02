import * as Lg from '../stylePage.ts';

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
import ContentCardCollunsCenterPage from '../ContentCardCollunsCenterPage.tsx';

import { ContentRadioPage } from '../ContentRadioPage.tsx';

import ContentSidePagePanelBotton from '../ContentSidePagePanelBotton.tsx';
import ContentSidePageLabelBotton from '../ContentSidePageLabelBotton.tsx';
//import ContentDivTestoAtenctionPage from '../ContentDivTestoAtenctionPage.tsx';

import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

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
        <ContentCardPage>
          <ContentCardPageTitle pheight={'30px'}>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage open={true}>
              <ContentCardPageTitle>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>
              <ContentCardCollunsCenterPage isopen={true}>
                <ContentRadioPage
                  id="E-Mail/Pass"
                  name="opcao"
                  value={1}
                  titulo="E-Mail/Pass"
                  onclick={() => setModo(1)}
                />

                <ContentRadioPage
                  id="E-Mail/PIN"
                  name="opcao"
                  value={2}
                  titulo="E-Mail/PIN"
                  onclick={() => setModo(2)}
                />

                <ContentRadioPage
                  id="Pseud/Pass"
                  name="opcao"
                  value={3}
                  titulo="Pseudô/Pass"
                  onclick={() => setModo(3)}
                />

                <ContentRadioPage
                  id="Pseud/PIN"
                  name="opcao"
                  value={4}
                  titulo="Pseudô/PIN"
                  onclick={() => setModo(4)}
                />
              </ContentCardCollunsCenterPage>
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas={true} open={true} pwidth="100%">
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

            {btncontinua && mdlogin > 0 && mdlogin < 5 ? (
              <ContentSidePageLabelBotton
                pxheight={'20px'}
                istitl={true}
                title={'Continuar.: '}
                img={setadir}
                titbtn={'Continuar...'}
                onclick={goto('/login2')}
              />
            ) : null}
          </ContentSidePagePanelBotton>
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login1;
