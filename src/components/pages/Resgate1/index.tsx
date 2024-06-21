import React from 'react';

import { criasmstr } from '../../util/datamomento.tsx';

import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeResgate } from '../../modulos/themes/ThemeResgate/index.tsx';
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
//import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg from '../../../assets/svgs/resgatepg.svg';
import resgatehlp1 from '../../../assets/svgs/resgatehlp1.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Resgate1 = () => {
  const { state, dispatch } = AcessoUseForm();

  //const [idempresa, setIdEmpresa] = React.useState(0);
  //const [fantempresa, setFantEmpresa] = React.useState('');

  const [snhmaster, setSnhMaster] = React.useState('');

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções :');

  const [btncontinua, setBtnContinua] = React.useState(false);
  const [isconfirmation, setIsConfirmation] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 1 });
    //dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
    //dispatch({ type: AcessoUseActions.setPinAdm, payload: '' });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate' });

    //dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
    //dispatch({ type: AcessoUseActions.setNmFant, payload: '' });

    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });

    dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });

    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgate: Opções Resgate'
    });
    //dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });

    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
    setStart(true);
  }, [dispatch]);

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

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const DescrOpc = ['Opções :', 'E-Mail.', 'SMS.', 'Whatsapp.', 'Perguntas.'];
  React.useEffect(() => {
    setNmLogin(DescrOpc[mdlogin]);
    if (mdlogin === 0) {
      setIsConfirmation(false);
      setBtnContinua(false);
    } else {
      setIsConfirmation(true);
      setBtnContinua(true);
    }
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
  }, [mdlogin, nmlogin, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Acesso Resgate.'}
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
          <label>Senha MASTER.....: {snhmaster}</label>
          <label>State idemp......: {state.idemp}</label>
          <label>State nmfant.....: {state.nmfant}</label>
          <label>Const mdlogin....: {mdlogin}</label>
          <label>Const nmlogin....: {nmlogin}</label>
          <label>State mdlogin....: {state.mdlogin}</label>
          <label>State nmlogin....: {state.nmlogin}</label>
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
              {mdlogin === 0 ? (
                <ContentInputPage>
                  <ContentInputPage>
                    <select
                      name="opcão"
                      defaultValue={mdlogin}
                      onChange={(e) => setMdLogin(parseInt(e.target.value))}
                    >
                      <option value={'0'}>Opções : </option>
                      <option value={'1'}>E-Mail.</option>
                      <option value={'2'}>SMS.</option>
                      <option value={'3'}>Whatsapp.</option>
                      <option value={'4'}>Perguntas.</option>
                    </select>
                  </ContentInputPage>
                </ContentInputPage>
              ) : null}
              {isconfirmation ? (
                <PanelConfResgateYellow
                  isbgcolor={start}
                  titulo={'Acesso Resgate'}
                  subtitulo={'Dados Inseridos'}
                >
                  <p>&emsp;&emsp;Já temos "EMPRESA".</p>
                  <label>
                    &emsp;&emsp;&emsp;ID Empresa....: <span>{state.idemp}</span>
                  </label>
                  <label>
                    &emsp;Nome Fantasia: <span>{state.nmfant}</span>
                  </label>
                  <p>&emsp;No momento você inseriu a optou por:</p>
                  <label>
                    &emsp;Através de : <span>{nmlogin}</span>
                  </label>
                  <br />
                  <p>
                    &emsp;&emsp;Precisamos que você confirme se deseja continuar...
                  </p>
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira mudar, click em "VOLTAR" na seta à
                    esquerda "Voltar"...
                  </p>
                  <p>
                    &emsp;&emsp;Caso "CONTINUAR", clique na Seta a Direita
                    "Continuar"...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/resgate')}
              />
            </ContentSidePageBottonLabel>
            {/* <ContentBoxLabelPage
              label={'" Processo : RESGATAR "'}
            /> */}
            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/resgate2')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'75%'}
              titulo={'Acesso Resgate.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate1
                imghlp={resgatehlp1}
                imgcard={resgatepg}
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
              pheight={'95%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}
        </ContentCardPage>
      </ThemeResgate>
    </ThemeProvider>
  );
};