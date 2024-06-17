import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeLogin1 } from '../../modulos/themes/ThemeLogin1';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
import { ContentCardPage } from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import { ContentCardBoxMainPage } from '../ContentCardBoxMainPage.tsx';
import { ContentCardBoxCenterPage } from '../ContentCardBoxCenterPage.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { CardHelpLogin1 } from '../../contentHelp/CardHelpLogin1.tsx';

import close from '../../../assets/svgs/close.svg';
import login1hlp from '../../../assets/svgs/login1hlp.svg';
import loginpg1 from '../../../assets/svgs/loginpg1.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Login1 = () => {
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

  const { state, dispatch } = AcessoUseForm();
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [btnresgatar, setBtnResgatar] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });

    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Login : Opções Acesso'
    });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });

    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
    if (state.nrcont >= 3) {
      setTentativa(state.nrcont);
      setBtnResgatar(true);
    } else {
      if (state.nrcont > 0) {
        setTentativa(state.nrcont);
        dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
      } else {
        dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
      }
    }
  }, [state.nrcont, dispatch]);

  const DescrOpc = [
    'Opções:',
    'E-Mail / PassWord.',
    'E-Mail / PIN.',
    'Pseudônino / PassWord.',
    'Pseudônino / PIN.'
  ];

  React.useEffect(() => {
    setNmLogin(DescrOpc[mdlogin]);
    setStart(true);
    if (mdlogin === 0) {
      setBtnContinua(false);
    } else {
      if (tentativa >= 3) {
        setBtnResgatar(true);
        setBtnContinua(false);
      } else {
        setBtnResgatar(false);
        setBtnContinua(true);
      }
    }
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [tentativa, mdlogin, nmlogin, dispatch]);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin1
        imgsys={loginpg1}
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
        <div>
          <label>State idemp...: {state.idemp}</label>
          <label>State nmfant..: {state.nmfant}</label>
          <label>Const mdlogin.: {mdlogin}</label>
          <label>State mdlogin.: {state.mdlogin}</label>
          <label>Const nmlogin.: {nmlogin}</label>
          <label>State nmlogin.: {state.nmlogin}</label>
        </div>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>

          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="150px">
              <ContentCardPageTitle>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>

              <ContentInputPage>
                <select
                  name="opcão"
                  defaultValue={0}
                  onChange={(e) => setMdLogin(parseInt(e.target.value))}
                >
                  <option value={'0'}>Opções : </option>
                  <option value={'1'}>E-Mail / PassWord.</option>
                  <option value={'2'}>E-Mail / PIN.</option>
                  <option value={'3'}>Pseudônino / PassWord.</option>
                  <option value={'4'}>Pseudônino / PIN.</option>
                </select>
              </ContentInputPage>
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>
          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/login')}
              />
            </ContentSidePageBottonLabel>

            <ContentBoxLabelPage label={'Tentativa [ ' + state.nrcont + 'ª ]'} />


            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/login2')}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {btnresgatar ? (
              <ContentSidePageBottonLabel
                istitl={btnresgatar}
                title={'Resgatar...: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Resgatar...'}
                  onclick={goto('/login4')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'60%'}
              titulo={'Acesso Opções Edição.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin1
                imghlp={login1hlp}
                imgcard={loginpg1}
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
      </ThemeLogin1>
    </ThemeProvider>
  );
};

// dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
// dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
// dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
// dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
// dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
// dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
// dispatch({ type: AcessoUseActions.setLogado, payload: false });
// dispatch({ type: AcessoUseActions.setDtIni, payload: '' });
// dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
// dispatch({ type: AcessoUseActions.setTmp, payload: '' });
