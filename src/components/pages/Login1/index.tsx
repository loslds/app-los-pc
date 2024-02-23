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

import { ContentLoginPg } from '../Login/ContentLoginPg.tsx';
import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from '../Login/ContentLoginCollunsCenter.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';

import { ContentInput } from '../Login/ContentInput.tsx';
import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';
import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';

import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';
import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
import { CardInfoErros } from '../../contentHelp/CardInfoErros.tsx';

import { ListAcessos } from '../../../books/ListAcessos.tsx';

/////////////////////////////////

// type PropsGetLogin = {
//   mdlogin?:number;
//   idempr?:number;
//   strid?:string;
//   strpsw?:string;
// }
export function GetLogin() {
  // if ( mdlogin === 0 || mdlogin === null || mdlogin === undefined) return false;
  // if ( idempr === 0 || idempr === null || idempr === undefined) return false;
  // if ( strid === '' || strid === null || strid === undefined) return false;
  // if ( strpsw === '' || strpsw === null || strpsw === undefined ) return false;
  //let rtn = true;
  // const ltsAcesso = ListAcessos.map( (ListaAcesso) => {
  // return ListaAcesso;
}

// const filtroacesso = idempr === id
// const [busca, setBusca] = React.useState('');
// const lowerBusca = busca.toLowerCase();
// const resultListaFiltrada = ListAcessos
// .filter((filtroacesso) => ListAcessos.toLowerCase().includes(lowerBusca));

/// EMAIL E PSW
// if (mdlogin === 1) {

// }

export const Login1 = () => {
  const [ispsw] = React.useState(true);

  const [isopcaol, setIsOpcaol] = React.useState(false);

  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  const [cont, setCont] = React.useState(4);
  const [iserrologin, setIsErroLogin] = React.useState(false);
  const [nrerrologin, setNrErroLogin] = React.useState(0);
  const [nmrerrologin, setNmErroLogin] = React.useState('');

  //const [isresgatar, setIsResgatar] = React.useState(false);
  const [continual, setContinual] = React.useState(false);

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
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 2 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login1' });
  }, [dispatch]);

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
  };

  React.useEffect(() => {
    if (mdlogin >= 1 && mdlogin <= 4) {
      setContinual(true);
      setIsOpcaol(true);
    } else {
      setIsOpcaol(false);
      setContinual(false);
    }
    ////////////////
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
  }, [mdlogin, dispatch]);

  const handlerContinuar = React.useCallback(() => {
    if (cont > 0) {
      if (  strid === '' || strpsw === '') {
        setCont(cont - 1);
        // ERRO LOGIN [1] ( strid ) ou [2] (strpsw)
        if (strid === '') {
          setNrErroLogin(1);
          setNmErroLogin('"FALTA a Edição do seu ID...');
        } else {
          setNrErroLogin(2);
          setNmErroLogin('"FALTA a Edição de seu PassWord...');
        }
        setIsErroLogin(true);
        // MENSSAGEM DE ERRO NA EDIÇÃO
      }
    } else {
      let rtn = false;
      alert('liberar botão outra maneira para acesso...');
      // retorn sim para abrir resgate ou não para voltar ao prinncipal
      if (!rtn) {
        goto('/login');
      } else {
        dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
        dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
        alert('Abre tela login resgate...');
      }
    }
  }, [cont, dispatch]);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
    dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });
  }, [dispatch]);

  // const handlernropcao = React.useCallback(() => {
  //   setContinua(true);
  // }, [continua]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentLoginPg>
          <ContentTitleLogin modotitle={'Determine o seu Acesso.'} />
          <Lg.ContainerMainLogin>
            <ContentLoginCollunsCenter isopen={ispsw}>
              <ContentLoginColluns>
                <ContentLoginOpc pwidth="200px" open={ispsw}>
                  <ContentTitleLoginOpc titleopc={nmlogin} />
                  <ContentInput>
                    <ContentRadioOpc
                      id="E-Mail/Pass"
                      name={'opcao'}
                      value={1}
                      titulo="E-Mail/Pass"
                      onclick={() => setModo(1)}
                    />
                    <ContentRadioOpc
                      id="E-Mail/PIN"
                      name={'opcao'}
                      value={2}
                      titulo="E-Mail/PIN"
                      onclick={() => setModo(2)}
                    />
                    <ContentRadioOpc
                      id="Pseud/Pass"
                      name={'opcao'}
                      value={3}
                      titulo="Pseudô/Pass"
                      onclick={() => setModo(3)}
                    />
                    <ContentRadioOpc
                      id="Pseud/PIN"
                      name={'opcao'}
                      value={4}
                      titulo="Pseudô/PIN"
                      onclick={() => setModo(4)}
                    />
                  </ContentInput>
                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>

          <Lg.DivisionPgHztalOnOff isopen={isopcaol} />
          <ContentLoginOpc pwidth={'100%'} open={isopcaol}>
            <ContentTitleLoginOpc titleopc="Aplicação :" />
            <ContentInput>
              {continual && mdlogin == 1 ? (
                <form name="emailpas">
                  <Lg.InputCenter>
                    <label>E-Mail</label>
                    <input
                      type="email"
                      id="email1"
                      name="email1"
                      value={strid}
                      placeholder="email@email.com(.br)"
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>
                  <Lg.InputCenter>
                    <label>Pass..</label>
                    <input
                      type="password"
                      id="password1"
                      name="password1"
                      value={strpsw}
                      placeholder="**********"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
              {continual && mdlogin == 2 ? (
                <form name="emailpin">
                  <Lg.InputCenter>
                    <label>E-Mail</label>
                    <input
                      type="email"
                      id="email2"
                      name="email2"
                      value={strid}
                      placeholder="email@email.com(.br)"
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>

                  <Lg.InputCenter>
                    <label>PIN...:</label>
                    <input
                      type="text"
                      id="pin1"
                      name="pin1"
                      value={strpsw}
                      placeholder="****"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
              {continual && mdlogin == 3 ? (
                <form name="namepas">
                  <Lg.InputCenter>
                    <label>Pseud.:</label>
                    <input
                      type="text"
                      id="pseud1"
                      name="pseud1"
                      value={strid}
                      placeholder="Seu pseudônimo."
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>

                  <Lg.InputCenter>
                    <label>Pass...:</label>
                    <input
                      type="password"
                      id="password2"
                      name="password2"
                      value={strpsw}
                      placeholder="**********"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
              {continual && mdlogin == 4 ? (
                <form name="namepin">
                  <Lg.InputCenter>
                    <label>Pseud.:</label>
                    <input
                      type="text"
                      id="pseud2"
                      name="pseud2"
                      value={strid}
                      placeholder="Seu pseudônimo."
                      onChange={(e) => setStrId(e.target.value)}
                    />
                  </Lg.InputCenter>

                  <Lg.InputCenter>
                    <label>PIN.....:</label>
                    <input
                      type="text"
                      id="pin2"
                      name="pin2"
                      placeholder="****"
                      onChange={(e) => setStrPsw(e.target.value)}
                    />
                  </Lg.InputCenter>
                </form>
              ) : null}
            </ContentInput>
          </ContentLoginOpc>
          <Lg.DivisionPgHztal />
          <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />

              {continual && mdlogin > 0 ? (
                <ContentButtonTitleImg
                  title="Continuar."
                  onClick={handlerContinuar}
                />
              ) : (
                <p>Você ainda tem [{cont}] tentativas de [4].</p>
              )}

              {iserrologin ? (
                <PanelModalInfoErros
                  ptop={'1%'}
                  pwidth={'65%'}
                  pheight={'auto'}
                  titulo={'ERRO em processamento...'}
                  texto={'Mais atenção, tentativa:'+ cont + '/4.'}
                  onClose={() => setIsErroLogin(false)}
                >
                  <CardInfoErros nmerro={nmrerrologin} />
                </PanelModalInfoErros>
              ) : null}
            </ContentMainButtonsLogin>
          </ContentLoginColluns>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};
