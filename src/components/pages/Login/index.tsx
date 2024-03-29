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

import ContentCardPage from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import ContentCardBoxMainPage from '../ContentCardBoxMainPage.tsx';
import ContentCardBoxCenterPage from '../ContentCardBoxCenterPage.tsx';
import ContentInputPage from '../ContentInputPage.tsx';
import ContentSidePanelBotton from './ContentSidePanelBotton.tsx';
import ContentSideLabelBotton from './ContentSideLabelBotton.tsx';

import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

const Login = () => {
  // const [isopen, setIsOpen] = React.useState(false);

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');
  const [btncontinua, setBtnContinua] = React.useState(false);

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

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 1 });
    dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmFant, payload: '' });
    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

    dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    //dispatch({ type: AcessoUseActions.setNmRecep, payload: '' });
    dispatch({ type: AcessoUseActions.setMdRecep, payload: false });
    //dispatch({ type: AcessoUseActions.setNmDesig, payload: '' });
    dispatch({ type: AcessoUseActions.setMdDesig, payload: false });
    //dispatch({ type: AcessoUseActions.setNmProdu, payload: '' });
    dispatch({ type: AcessoUseActions.setMdProdu, payload: false });
    //dispatch({ type: AcessoUseActions.setNmAcaba, payload: '' });
    dispatch({ type: AcessoUseActions.setMdAcaba, payload: false });
    //dispatch({ type: AcessoUseActions.setNmExped, payload: '' });
    dispatch({ type: AcessoUseActions.setMdExped, payload: false });
    //dispatch({ type: AcessoUseActions.setNmAdmin, payload: '' });
    dispatch({ type: AcessoUseActions.setMdAdmin, payload: false });
    //dispatch({ type: AcessoUseActions.setNmMaster, payload: '' });
    dispatch({ type: AcessoUseActions.setMdMaster, payload: false });
    //dispatch({ type: AcessoUseActions.setNmConfig, payload: '' });
    dispatch({ type: AcessoUseActions.setMdConfig, payload: false });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login' });

    dispatch({ type: AcessoUseActions.setModulo, payload: 'Login: Empresa' });
    dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
    dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Opções:' });

    dispatch({ type: AcessoUseActions.setLogado, payload: '' });

    // setIsOpen(true);
  }, [dispatch]);

  React.useEffect(() => {
    if (idempresa === 0) {
      setFantEmpresa('');
      setBtnContinua(false);
    }
    if (idempresa === 1) {
      setFantEmpresa('JR.Bordados.');
    }
    if (idempresa === 2) {
      setFantEmpresa('RB.Serviços.');
    }
    if (idempresa > 0) {
      setBtnContinua(true);
    }
    ////////////////
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  }, [idempresa, fantempresa, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentCardPage>
          <ContentCardPageTitle pheight={'30px'}>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px" open={true}>
              <ContentCardPageTitle pheight={'20px'}>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>
              <ContentInputPage>
                <select
                  name="empresa"
                  defaultValue={idempresa}
                  onChange={(e) => setIdEmpresa(parseInt(e.target.value))}
                >
                  <option value={'0'}>Opções : </option>
                  <option value={'1'}>JR.Bordados.</option>
                  <option value={'2'}>BR.Serviços.</option>
                </select>
              </ContentInputPage>
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>
          <Lg.DivisionPgHztal />
          <ContentSidePanelBotton open={true} pwidth="100%">
            <ContentSideLabelBotton
              pxheight={'40px'}
              isopen={true}
              title={'Voltar.: '}
              img={setaesq}
              titbtn={'Voltar...'}
              onclick={goto('/')}
            />

            {btncontinua ? (
              <ContentSideLabelBotton
                pxheight={'20px'}
                isopen={true}
                title={'Continuar.: '}
                img={setadir}
                titbtn={'Continuar...'}
                onclick={goto('/login1')}
              />
            ) : null}
          </ContentSidePanelBotton>
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login;
