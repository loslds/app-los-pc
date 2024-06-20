import React from 'react';
import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeResgate } from '../../modulos/themes/ThemeResgate';
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
import { CardHelpResgate0 } from '../../contentHelp/CardHelpResgate0.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import close from '../../../assets/svgs/close.svg';
//import resgatehlp from '../../../assets/svgs/resgatehlp.svg';
import resgatepg from '../../../assets/svgs/resgatepg.svg';
import resgatehlp from '../../../assets/svgs/resgatehlp.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Resgate = () => {
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

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  //const [nrcont, setNrCont] = React.useState(0);
  //const [nmcont, setNmCont] = React.useState('');
  //const [mdlogin, setMdLogin] = React.useState(0);
  //const [nmlogin, setNmLogin] = React.useState('');
  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const [btncontinua, setBtnContinua] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 1 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate' });
    dispatch({ type: AcessoUseActions.setModulo, payload: 'Resgate: Empresa' });
    dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
    if (state.idemp > 0) {
      dispatch({
        type: AcessoUseActions.setAplicacao,
        payload: 'Confirmação.'
      });
      setIdEmpresa(state.idemp);
      setFantEmpresa(state.nmfant);
    } else {
      dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções.' });
      dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
      dispatch({ type: AcessoUseActions.setNmFant, payload: '' });
      setIdEmpresa(0);
      setFantEmpresa('');
    }
    setStart(true);
  }, [state.idemp, dispatch]);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const DescrOpc = ['Opções:', 'JR-Bordados.', 'RB-Serviços.'];

  React.useEffect(() => {
    
    if (idempresa === 0) {
      setBtnContinua(false);
    } else {
      setFantEmpresa(DescrOpc[idempresa]);
      dispatch({ type: AcessoUseActions.setNrCont, payload: idempresa });
      dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
      dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
      setBtnContinua(true);
    }
    dispatch({ type: AcessoUseActions.setNrCont, payload: idempresa });
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  }, [idempresa, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        // imgsys={resgatepg}
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
              {idempresa === 0 ? (
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
                  isbgcolor={true}
                  titulo={'Acesso Resgate'}
                  subtitulo={'Dados Inseridos'}
                />
              )}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Abortar...'}
                onclick={goto('/')}
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
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>
          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'88%'}
              titulo={'Acesso Resgate.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate0
                imghlp={resgatehlp}
                imgcard={resgatepg}
                //imghlp={}
                //imgcard={''}
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

export default Resgate;
