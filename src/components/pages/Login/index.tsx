import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
// import logosys from '../../../assets/pngs/logosys.png';
import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
//import { LayoutLogin } from "../../layouts/LayoutLogin/index.tsx";
import { ContentLoginPg } from './ContentLoginPg.tsx';
import { ContentTitleLogin } from './ContentTitleLogin.tsx';
import { ContentMainButtonsLogin } from './ContentMainButtonsLogin.tsx';
import ContentButtonTitleImg from './ContentButtonTitleImg.tsx';

import { ContentLoginColluns } from './forms/ContentLoginColluns.tsx';
import { ContentLoginOpc } from './forms/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from './ContentTitleLoginOpc.tsx';
import { ContentInput } from './forms/ContentInput.tsx';
import { ContentRadioOpc } from './forms/ContentRadioOpc.tsx';
import { ContentFormCollunsCenter } from './forms/ContentFormCollunsCenter.tsx';

//import { ListEmps } from "../../../books/ListEmps.tsx";

import * as Lg from './styled.ts';
import * as Pg from '../style.ts';

// export function ErroEdicao(nrerro: number, stredt: string) {
//   // const [isrtn, setIsRtn] = React.useState(true);
//   if (nrerro === 1) {
//     if (stredt === ''){
//       alert('Determine edição do Email/Passord...');
//       return false;
//     }
//   else if (nrerro === 2) {
//     if (stredt === ''){
//       alert('Determine edição do Email/PIN...');
//       return false;
//     }
//   -
//   }
//   return true;
// }

export const Login = () => {
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

  const [isopcao, setIsOpcao] = React.useState(false);
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');

  //  const [idacesso, setIdAcesso] = React.useState("");
  const [idempresa, setIdEmpresa] = React.useState('');
  const [fantempresa, setFantEmpresa] = React.useState('');

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  const [resgatar, setResgatar] = React.useState(false);
  const [mdresgate, setMdResgate] = React.useState(0);

  const [solicitar, setSolicitar] = React.useState(false);
  const [mdsolicitar, setMdSolicitar] = React.useState(0);

  // const [mailusuario, setMailUsuario] = React.useState('');
  // const [pswusuario, setPswUsuario] = React.useState('');
  // const [ismailpass, setIsMailPass] = React.useState(false);
  // const [mailpassusuario, setMailPassUsuario] = React.useState('');

  //  const [nmusuario, setNmUsuario] = React.useState("");
  //  const [iduser, setIdUser] = React.useState("");
  //  const [mailusuario, setMailUsuario] = React.useState("");

  //const [issolicitar, setIsSolicitar] = React.useState(false);
  //const [isresgatar, setIsResgatar] = React.useState(false);

  // const [isonmsg, setIsOnMsg] = React.useState(false);

  // const handlerOnMsg = React.useCallback(() => {
  //   setIsOnMsg((oldState) => !oldState);
  // }, []);

  //  const handlerChangeNmEmp = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //    setSelectNmEmp(e.target.value);
  //  };
  const { dispatch } = AcessoUseForm();

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
    'Alteração de Dados.'
  ];

  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);
  };

  // const handleresgatar = (rst: number) => {
  //   if (rst > 0) {
  //     setSolicitar(Rtrue);
  //     setResgatar(0);
  //   } else {
  //     setSolicitarR(false);
  //   }
  // };

  React.useEffect(() => {
    if (mdlogin === 0) {
      setIsOpcao(false);
      setSolicitar(false);
      setMdSolicitar(0);
      setResgatar(false);
      setMdResgate(0);
    } else if (mdlogin > 0) {
      setIsOpcao(true);
    }

    if (mdlogin <= 4) {
      setSolicitar(true);
      setResgatar(false);
    }
    if (mdlogin >= 5) {
      setSolicitar(false);
      setResgatar(true);
    }
    if (mdresgate >= 5) {
      setSolicitar(true);
      setResgatar(false);
    }
  }, [mdlogin, mdresgate]);

  React.useEffect(() => {
    if (mdsolicitar === 1) {
      alert('solicita mdlogin = 1');
    }
    if (mdsolicitar === 2) {
      alert('solicita mdlogin = 2');
    }
    if (mdsolicitar === 3) {
      alert('solicita mdlogin = 3');
    }
    if (mdsolicitar === 4) {
      alert('solicita mdsolicitar = 4');
    }
    if (mdsolicitar === 5) {
      alert('solicita mdlogin = 5');
    }
    if (mdsolicitar === 6) {
      alert('solicita mdlogin = 6');
    }
    if (mdsolicitar === 7) {
      alert('solicita mdlogin = 7');
    }
    if (mdsolicitar === 8) {
      alert('solicita mdlogin = 8');
    }
  }, [mdsolicitar]);
  
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
              </ContentLoginOpc>
            </ContentLoginColluns>

            <ContentLoginColluns>
              <ContentLoginOpc open={true}>
                <ContentTitleLoginOpc titleopc="Acesso:" />
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

            <ContentLoginColluns>
              <ContentLoginOpc open={true}>
                <ContentTitleLoginOpc titleopc="Resgates:" />
                <ContentInput>
                  <ContentRadioOpc
                    id="E-Mail"
                    name={'opcao'}
                    value={5}
                    titulo="E-Mail"
                    onclick={() => setModo(5)}
                  />
                  <ContentRadioOpc
                    id="S.M.S"
                    name={'opcao'}
                    value={6}
                    titulo="Celular(SMS)"
                    onclick={() => setModo(6)}
                  />
                  <ContentRadioOpc
                    id="CódSeguro"
                    name={'opcao'}
                    value={7}
                    titulo="Cód. Seguro."
                    onclick={() => setModo(7)}
                  />
                  <ContentRadioOpc
                    id="Cadastro"
                    name={'opcao'}
                    value={8}
                    titulo="Cadastro."
                    onclick={() => setModo(8)}
                  />
                </ContentInput>
              </ContentLoginOpc>
            </ContentLoginColluns>

            <Pg.DivisionPgHztal />

            <ContentFormCollunsCenter pwidth={'100%'} isopen={isopcao}>
              <ContentLoginOpc pwidth={'100%'} open={isopcao}>
                <ContentTitleLoginOpc titleopc="Aplicação :" />
                <ContentInput>
                  {solicitar && mdlogin === 1 ? (
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
                  {solicitar && mdlogin === 2 ? (
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
                  {solicitar && mdlogin === 3 ? (
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
                  {solicitar && mdlogin === 4 ? (
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
                  {resgatar && mdlogin === 5 ? (
                    <p>solicitar && mdresgate === 5</p>
                  ) : null}
                  {/* ///////////////////////////////////////////////////////////// */}

                  {resgatar && mdlogin >= 5 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <form name="resgmail">
                        <Lg.InputCenter>
                          <h3>Mail : </h3>
                          <input
                            type="email"
                            id="email3"
                            name="email3"
                            value={strid}
                            placeholder="email@email.com(.br)"
                            onChange={(e) => setStrId(e.target.value)}
                          />
                        </Lg.InputCenter>
                        <br />
                        <p>
                          Determine o seu Email cadastrado para o "ENVIO" do
                          resgate.
                        </p>
                        <p>
                          Caso não emcontre na sua caixa de Entrada do email,
                          procure na caixa SPAN...
                        </p>
                        <br />
                      </form>
                    </Lg.ContainerAreaText>
                  ) : null}

                  {resgatar && mdlogin >= 6 ? <div> mdlogin === 6</div> : null}
                  {resgatar && mdlogin >= 6 ? <div> mdlogin === 7</div> : null}
                  {resgatar && mdlogin == 8 ? <div> mdlogin === 8</div> : null}
                </ContentInput>
              </ContentLoginOpc>
            </ContentFormCollunsCenter>

            {mdlogin > 0 ? <Pg.DivisionPgHztal /> : null}
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/')} />

              {solicitar && mdlogin >= 1 ? (
                <ContentButtonTitleImg
                  title="Solicitar."
                  onClick={() => setMdSolicitar(mdlogin)}
                />
              ) : null}

              {resgatar && mdlogin >= 5 && mdresgate === 0 ? (
                <ContentButtonTitleImg
                  title="Resgatar."
                  onClick={() => setMdResgate(mdlogin)}
                />
              ) : null}
              {resgatar && mdresgate >= 5 ? (
                <ContentButtonTitleImg
                  title="Solicitar."
                  onClick={() => alert('solicitar resgate....')}
                />
              ) : null}
            </ContentMainButtonsLogin>

            <ContentMainButtonsLogin>
              <ContentTitleLoginOpc titleopc="respostas das ações :" />
              <Lg.ContainerAreaText onoff={true}>
                <p>
                  idempresa : {idempresa}...fantempresa : {fantempresa}...
                </p>
                <p>
                  modlogin : {mdlogin}...nmlogin : {nmlogin}...
                </p>
                {mdlogin === 1 ? (
                  <p>
                    nmlogin : {nmlogin}...E-Mail : {strid}...PassW : {strpsw}
                    ...
                  </p>
                ) : null}
                {mdlogin === 2 ? (
                  <p>
                    nmlogin : {nmlogin}...E-Mail : {strid}...Pin : {strpsw}
                    ...
                  </p>
                ) : null}
                {mdlogin === 3 ? (
                  <p>
                    nmlogin : {nmlogin}...Apelido : {strid}...PassW : {strpsw}
                    ...
                  </p>
                ) : null}
                {mdlogin === 3 ? (
                  <p>
                    nmlogin : {nmlogin}...Apelido : {strid}...PIN : {strpsw}
                    ...
                  </p>
                ) : null}
              </Lg.ContainerAreaText>
            </ContentMainButtonsLogin>
          </Lg.ContainerMainLogin>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};
