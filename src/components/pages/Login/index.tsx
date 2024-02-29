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

import { ContentLoginPg } from './ContentLoginPg.tsx';
import { ContentTitleLogin } from './ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from './ContentLoginCollunsCenter.tsx';
import { ContentLoginOpc } from './ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from './ContentTitleLoginOpc.tsx';
import { ContentInput } from './ContentInput.tsx';
import { ContentLoginColluns } from './ContentLoginColluns.tsx';
import { ContentMainButtonsLogin } from './ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from './ContentButtonTitleImg.tsx';

// export const Login = () => {
const Login = () => {  
  const [isopen, setIsOpen] = React.useState(false);
  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const [continua, setContinua] = React.useState(false);

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
    dispatch({ type: AcessoUseActions.setLogado, payload: '' });
    setIsOpen(true);
  }, [dispatch]);

  React.useEffect(() => {
    if (idempresa > 0) {
      if (idempresa === 1) {
        setFantEmpresa('JR.Bordados.');
      } else if (idempresa === 2) {
        setFantEmpresa('RB.Serviços.');
      }
      setContinua(true);
    } else {
      setFantEmpresa('');
      setContinua(false);
    }
    ////////////////
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  }, [idempresa, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentLoginPg>
          <ContentTitleLogin modotitle={'Selecione uma Empresa.'} />
          <Lg.ContainerMainLogin>
            <ContentLoginCollunsCenter isopen={isopen}>
              <ContentLoginOpc pwidth="200px" open={isopen}>
                <ContentTitleLoginOpc titleopc="Empresa:" />
                <ContentInput>
                  <select
                    name="empresa"
                    defaultValue={idempresa}
                    onChange={(e) => setIdEmpresa(parseInt(e.target.value))}
                  >
                    <option value={'0'}>Opções : </option>
                    <option value={'1'}>JR.Bordados.</option>
                    <option value={'2'}>BR.Serviços.</option>
                  </select>
                </ContentInput>
              </ContentLoginOpc>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>
          <Lg.DivisionPgHztal />
          <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/')} />
              {continua && idempresa > 0 ? (
                <ContentButtonTitleImg
                  title="Continuar."
                  onClick={goto('/login1')}
                />
              ) : null}
            </ContentMainButtonsLogin>
          </ContentLoginColluns>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login;
