import * as Lg from '../../../styles/styledLogin.ts';
import * as Pg from '../style.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
import React from 'react';

import enviaroff from '../../../assets/svgs/enviaroff.svg';
import enviaron from '../../../assets/svgs/enviaron.svg';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import { ContentLoginPg } from '../Login/ContentCardPage.tsx';
import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';

import { ContentLoginColluns } from '../Login/ContentLoginCollunsOpc.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
import { ContentInput } from '../Login/ContentInput.tsx';
import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';
import { ContentFormCollunsCenter } from '../Login/ContentFormCollunsCenter.tsx';
import { ContentTitlePanel } from '../Login/ContentTitlePanel.tsx';
import { ContentButtonsConfirmation } from '../Login/ContentButtonsConfirmation.tsx';
import { ContentButtonConfimationOn } from '../Login/ContentButtonConfimationOnOff.tsx';
import { ContentButtonConfimationOff } from '../Login/ContentButtonConfimationOff.tsx';
//import { ContentImagem } from '../ContentImagem.tsx';
//import { ContentCustonImagem } from '../ContentCustonImagem.tsx';

export const Loginx = () => {
  const [isopen, setIsOpen] = React.useState(false);
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');

  const [idempresa, setIdEmpresa] = React.useState('');
  const [fantempresa, setFantEmpresa] = React.useState('');

  const [isopcao, setIsOpcao] = React.useState(false);

  // const [strid, setStrId] = React.useState('');
  // const [strpsw, setStrPsw] = React.useState('');

  //const [isopcao, setIsOpcao] = React.useState(false);
  //const [nropcao, setNrOpcao] = React.useState(0);

  //const [solicitar, setSolicitar] = React.useState(false);
  // const [mdsolicitar, setMdSolicitar] = React.useState(0);

  //const [resgatar, setResgatar] = React.useState(false);
  //const [mdresgatar, setMdResgatar] = React.useState(0);

  //const [enviar, setEnviar] = React.useState(false);
  //const [mdenviar, setMdEnviar] = React.useState(0);

  //const [linkuser, setLinkUser] = React.useState('');
  //const [logado, setLogado] = React.useState(false);

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

  ///////////////////////////////
  setLogado(false);
  ///////////////////////////////

  React.useEffect(() => {
    dispatch({
      type: AcessoUseActions.setCurrentStep,
      payload: 1
    });
  }, [dispatch]);

  React.useEffect(() => {
    if (idempresa === '1') {
      setFantEmpresa('JR.Bordados.');
    } else if (idempresa === '2') {
      setFantEmpresa('RB.Serviços.');
    } else {
      setIdEmpresa('0');
      setFantEmpresa('');
    }
  }, [idempresa, fantempresa]);

  const DescrOpc = [
    'Opções:',
    'E-Mail / PassWord.',
    'E-Mail / PIN.',
    'Pseudônino / PassWord.',
    'Pseudônino / PIN.',
    'Resgate com E-Mail.',
    'Resgate com SMS.',
    'Resgate com Segurança.',
    'Cadastro Acesso.'
  ];

  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);
    setLogado(false);
  };
  React.useEffect(() => {
    if (mdlogin === 0) {
      setIsOpen(false);
      setIsOpcao(false);
    } else {
    }
  }, [solicitar, isopcao]);

  // React.useEffect(() => {
  //   if (mdlogin === 0) {
  //     setIsOpen(false);
  //     setSolicitar(false);
  //     setResgatar(false);
  //     setEnviar(false);
  //     setIsOpcao(false);
  //   } else {
  //     setIsOpen(false);
  //     if (mdlogin >= 1 && mdlogin <= 4) {
  //       setSolicitar(true);
  //     }
  //     if (mdlogin >= 5 && mdlogin <= 8) {
  //       setResgatar(true);
  //     }
  //   }
  // }, [mdlogin]);

  // const handlesolicitar = React.useCallback(() => {
  //   if (solicitar) {
  //     setSolicitar(false);
  //   }
  //   if (!isopcao) {
  //     setIsOpcao(true);
  //   }
  //   setIsOpcao(true);
  // }, []);
  // React.useEffect(() => {
  //   if (solicitar) {
  //     setSolicitar(false);
  //   }
  //   if (!isopcao) {
  //     setIsOpcao(true);
  //   }
  // }, [solicitar, isopcao]);

  // const handleresgatar = React.useCallback(() => {
  //   if (resgatar) {
  //     setResgatar(false);
  //   }
  //   if (!enviar) {
  //     setEnviar(true);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   if (resgatar) {
  //     setResgatar(false);
  //   }
  //   if (!enviar) {
  //     setEnviar(true);
  //   }
  // }, [resgatar, enviar]);

  // const handleenviar = React.useCallback(() => {
  //   if (enviar) {
  //     setEnviar(false);
  //   }
  //   if (!isopcao) {
  //     setIsOpcao(true);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   if (enviar) {
  //     setEnviar(false);
  //   }
  //   if (!isopcao) {
  //     setIsOpcao(true);
  //   }
  // }, [enviar, isopcao]);

  const handlernropcao = React.useCallback(() => {
    if (isopcao) {
      alert('handlernropcao mdlogin :' + mdlogin);
    } else {
      alert('OPÇÃO... desativada. mdlogin :' + mdlogin);
    }
  }, [isopcao, mdlogin]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentLoginPg>
          <ContentTitleLogin modotitle={nmlogin} />
          <Lg.ContainerMainLogin>
            <ContentLoginColluns>
              <ContentLoginOpc pwidth="200px" open={true}>
                <ContentTitleLoginOpc titleopc="Empresa:" />
                <ContentInput>
                  <select
                    name="empresa"
                    defaultValue={idempresa}
                    onChange={(e) => setIdEmpresa(e.target.value)}
                  >
                    <option value={'0'}>Opções : </option>
                    <option value={'1'}>JR.Bordados.</option>
                    <option value={'2'}>BR.Serviços.</option>
                  </select>
                </ContentInput>

                {/* MODO OPCAO */}
                {isopcao ? (
                  <Lg.ContainerAreaText onoff={isopen}>
                    <ContentTitlePanel
                      title={' " CONFIRMA ENVIO DOS DADOS...? " '}
                    />
                    <p>
                      idempresa : {idempresa}...fa-ntempresa : {fantempresa}
                    </p>
                    <p>
                      mdlogin : {mdlogin}...nmlogin : {nmlogin}
                    </p>
                    <ContentButtonsConfirmation>
                      <ContentButtonConfimationOn
                        title={'SIM'}
                        img={enviaron}
                        titlebtn="Aceitar..."
                        onClick={handlernropcao}
                      />
                      <ContentButtonConfimationOff
                        title={'NÃO'}
                        img={enviaroff}
                        titlebtn="Retornar..."
                        onClick={goto('/')}
                      />
                    </ContentButtonsConfirmation>
                  </Lg.ContainerAreaText>
                ) : null}
              </ContentLoginOpc>
            </ContentLoginColluns>
          </Lg.ContainerMainLogin>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};
