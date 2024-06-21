import React from 'react';

import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeLogin } from '../../modulos/themes/ThemeLogin';
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
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpLogin0 } from '../../contentHelp/CardHelpLogin0.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import close from '../../../assets/svgs/close.svg';
import login0hlp from '../../../assets/svgs/login0hlp.svg';
import loginpg0 from '../../../assets/svgs/loginpg0.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Login = () => {
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
  const [tentativa, setTentativa] = React.useState(0);

  const [btncontinua, setBtnContinua] = React.useState(false);
  const [btnresgatar, setBtnResgatar] = React.useState(false);

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  React.useEffect(() => {
    if (state.nrcont >= 3) {
      dispatch({ type: AcessoUseActions.setCurrentStep, payload: 5 });
      dispatch({ type: AcessoUseActions.setPage, payload: '/login' });
      dispatch({ type: AcessoUseActions.setModulo, payload: 'Login: Resgate' });
      dispatch({
        type: AcessoUseActions.setAplicacao,
        payload: 'Confirmação.'
      });
      dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
      dispatch({
        type: AcessoUseActions.setNmLogin,
        payload: 'Resgate : Selecine uma Opção.'
      });
      setTentativa(state.nrcont);
      setIdEmpresa(state.idemp);
      setFantEmpresa(state.nmfant);
      setBtnResgatar(true);
    } else {
      dispatch({ type: AcessoUseActions.setCurrentStep, payload: 1 });
      dispatch({ type: AcessoUseActions.setPage, payload: '/login' });
      dispatch({ type: AcessoUseActions.setModulo, payload: 'Login: Empresa' });
      dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });
      dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
      dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
      dispatch({ type: AcessoUseActions.setNmFant, payload: '' });
    }
    setStart(true);
  }, [dispatch]);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const DescrOpc = ['Opções:', 'JR-Bordados.', 'RB-Serviços.'];

  React.useEffect(() => {
    setFantEmpresa(DescrOpc[idempresa]);
    if (idempresa === 0) {
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
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  }, [idempresa, fantempresa, btnresgatar, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin
        imgsys={loginpg0}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
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
          <label>Const idempresa..: {idempresa}</label>
          <label>State idemp......: {state.idemp}</label>
          <label>Const fantempresa: {fantempresa}</label>
          <label>State nmfant.....: {state.nmfant}</label>
        </div>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>
              {!btnresgatar ? (
                <ContentInputPage>
                  <select
                    name="opcão"
                    defaultValue={idempresa}
                    onChange={(e) => setIdEmpresa(parseInt(e.target.value))}
                  >
                    <option value={'0'}>Opções : </option>
                    <option value={'1'}>JR-Bordados.</option>
                    <option value={'2'}>RB-Serviços.</option>
                  </select>
                </ContentInputPage>
              ) : (
                <PanelConfResgateYellow
                  isbgcolor={btnresgatar}
                  titulo={'Acesso Resgate'}
                  subtitulo={'Dados Inseridos'}
                >
                  <p>
                    &emsp;&emsp;No momento você inseriu a solicitação do Resgate
                    para Acesso Empresa:
                  </p>
                  <label>
                    {' '}
                    &emsp;ID Empresa....: <span>{state.idemp}.</span>{' '}
                  </label>
                  <label>
                    {' '}
                    &emsp;Nome Fantasia: <span>{state.nmfant}.</span>{' '}
                  </label>
                  <br />
                  <p>
                    &emsp;&emsp;Precisamos que você confirme se deseja continuar
                    com o Resgate ao acesso para esta Empresa.
                  </p>
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso "ABORTAR" clique na seta à esquerda
                    "Abortar"...
                  </p>
                  <p>
                    &emsp;&emsp;Caso "CONTINUAR", abaixo clique na Seta a
                    Direita "Continuar"...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              )}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/')}
              />
            </ContentSidePageBottonLabel>

            <ContentBoxLabelPage
              label={'Tentativa [ ' + state.nrcont + 'ª ]'}
            />

            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/login1')}
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
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'40%'}
              pheight={'43%'}
              titulo={'Acesso Empresas.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin0
                imghlp={login0hlp}
                imgcard={loginpg0}
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
              pheight={'75%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}

          {/*isloading ? <Loading /> : null */}
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

// dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
// dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
// dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
// dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

// dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
// dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
// dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
// dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

// dispatch({ type: AcessoUseActions.setPin, payload: '' });
// dispatch({ type: AcessoUseActions.setMail, payload: '' });
// dispatch({ type: AcessoUseActions.setFoneC, payload: '' });

// dispatch({ type: AcessoUseActions.setMdRecep, payload: false });
// dispatch({ type: AcessoUseActions.setMdDesig, payload: false });
// dispatch({ type: AcessoUseActions.setMdProdu, payload: false });
// dispatch({ type: AcessoUseActions.setMdAcaba, payload: false });
// dispatch({ type: AcessoUseActions.setMdExped, payload: false });
// dispatch({ type: AcessoUseActions.setMdAdmin, payload: false });
// dispatch({ type: AcessoUseActions.setMdMaster, payload: false });
// dispatch({ type: AcessoUseActions.setMdConfig, payload: false });

//  {empreas.map((empresas) => {
//                   const { id, fant } = empresas;
//                   return (
//                     <select
//                       key={id}
//                       name={fant}
//                       title={'Empresas'}
//                       defaultValue={0}
//                     >
//                       <option value={empresas.id}>{empresas.fant}</option>
//                     </select>
//                   );
//                 })}

/* <select
                  name="empresa"
                  defaultValue={0}
                  onChange={(e) => setIdEmpresa(parseInt(e.target.value))}
                >
                  <option value={'0'}>Opções : </option>
                  <option value={'1'}>JR.Bordados.</option>
                  <option value={'2'}>BR.Serviços.</option>
                </select> */
