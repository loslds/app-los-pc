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
import { ContentSidePageLabelBotton } from '../ContentSidePageLabelBotton.tsx';
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

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const { state, dispatch } = AcessoUseForm();
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');
  const [btncontinua, setBtnContinua] = React.useState(false);

  const [tentativa, setTentativa] = React.useState(0);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });

    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });

    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Login : Opções Acesso'
    });
    dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });

    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });

    dispatch({ type: AcessoUseActions.setDtIni, payload: '' });
    dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
    dispatch({ type: AcessoUseActions.setTmp, payload: '' });

    if (tentativa >= state.nrcont) {
      dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    } else {
      setTentativa(state.nrcont);
    }
  }, [dispatch]);

  const DescrOpc = [
    'Opções:',
    'E-Mail / PassWord.',
    'E-Mail / PIN.',
    'Pseudônino / PassWord.',
    'Pseudônino / PIN.'
  ];

  React.useEffect(() => {
    setNmLogin(DescrOpc[mdlogin]);
    if (mdlogin === 0) {
      setBtnContinua(false);
    } else {
      console.log('tentativa : ', tentativa);
      console.log('state.nrcont : ', state.nrcont);
      if (tentativa >= 5) {
        alert('tentativa => ' + state.nrcont);
        setBtnContinua(true);
      } else {
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
          <ContentSidePagePanelBotton bordas="3px" open={true} pwidth="100%">
            <ContentSidePageLabelBotton
              pxheight={'40px'}
              istitl={true}
              title={'Voltar.: '}
              img={setaesq}
              titbtn={'Voltar...'}
              onclick={goto(state.page)}
            />
            <Lg.ContainerBoxLabelPage>
              <label>[ {3 - state.nrcont} ] tentativas. </label>
            </Lg.ContainerBoxLabelPage>
            {btncontinua && mdlogin > 0 && mdlogin <= 4 ? (
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

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'30%'}
              pheight={'37%'}
              titulo={'Acesso Opções Edição.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin1 imgcard={login1hlp} imghlp={loginpg1} />
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
