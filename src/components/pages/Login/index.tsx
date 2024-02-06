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

  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');

  //  const [idacesso, setIdAcesso] = React.useState("");
  const [idempresa, setIdEmpresa] = React.useState('');
  const [fantempresa, setFantEmpresa] = React.useState('');

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  const [isopcao, setIsOpcao] = React.useState(false);
  const [nropcao, setNrOpcao] = React.useState(0);

  const [solicitar, setSolicitar] = React.useState(false);
  const [mdsolicitar, setMdsolicitar] = React.useState(0);

  const [resgatar, setResgatar] = React.useState(false);
  const [mdresgatar, setMdResgatar] = React.useState(0);

  const [enviar, setEnviar] = React.useState(false);
  const [mdenviar, setMdEnviar] = React.useState(0);

  const [logado, setLogado] = React.useState(false);
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
  const { state, dispatch } = AcessoUseForm();

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
  };

  React.useEffect(() => {
    if (mdlogin === 0) {
      setSolicitar(false);
      setResgatar(false);
      setEnviar(false);
      setIsOpcao(false);
      setNrOpcao(0);
    } else {
      setNrOpcao(mdlogin);
      if (mdlogin >= 1 && mdlogin <= 4) {
        setSolicitar(true);
        setResgatar(false);
        setEnviar(false);
      }
      if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && !enviar) {
        setSolicitar(false);
        setResgatar(true);
        setEnviar(false);
      } else if (mdlogin >= 5 && mdlogin <= 8 && resgatar && !enviar) {
        setSolicitar(false);
        setResgatar(false);
        setEnviar(true);
      } else if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && enviar) {
        setSolicitar(false);
        setResgatar(false);
        setEnviar(false);
      }
    }
  }, [mdlogin]);

  const handlesolicitar = React.useCallback(() => {
    setNrOpcao(mdlogin);
    if (solicitar) {
      setSolicitar(false);
    }
    if (!isopcao) {
      setIsOpcao(true);
    }
  }, [solicitar, isopcao]);

  const handleresgatar = React.useCallback(() => {
    if (resgatar) {
      setResgatar(false);
    }
    setEnviar(true);
  }, [resgatar]);

  const handleenviar = React.useCallback(() => {
    if (!enviar) {
      setSolicitar(false);
    }
    if (resgatar) {
      setResgatar(false);
    }
    if (enviar) {
      setResgatar(true);
    }
    setNrOpcao(mdlogin);
  }, [enviar]);

  React.useEffect(() => {
    if (solicitar) {
    }
  }, []);

  const handlernropcao = React.useCallback(() => {
    if (enviar && mdlogin >= 5) {
      if (mdenviar == 5) {
        alert(
          'mdenviar :' +
            mdenviar +
            ', Verifica se existe Email e solicita o envio Email .'
        );
      }
      if (mdenviar == 6) {
        alert(
          'mdenviar :' +
            mdenviar +
            ', Verifica se existe o Celular e soplicita o envio por SMS.'
        );
      }
      if (mdenviar == 7) {
        alert(
          'mdenviar :' +
            mdenviar +
            ', Solicita a imagem correta e Envia acesso pelo email e SMS.'
        );
      }
      if (mdenviar == 8) {
        alert(
          'mdenviar :' +
            mdenviar +
            ', Verifica se existe dados e Grava novo Acesso.'
        );
      }
    }
  }, [enviar]);

  React.useEffect(() => {
    if (resgatar && mdenviar >= 5) {
      setEnviar(true);
      alert('envia mdenviar :' + mdenviar);
    }
  }, [mdenviar]);

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
                  {solicitar && mdlogin == 1 ? (
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
                  {solicitar && mdlogin == 2 ? (
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
                  {solicitar && mdlogin == 3 ? (
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
                  {solicitar && mdlogin == 4 ? (
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
                  {/* ////////////////////////////////// */}
                  {resgatar && mdlogin == 5 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <form name="resgmail">
                        <Lg.InputCenter>
                          <h3>Mail: </h3>
                          <input
                            type="email"
                            id="resemail"
                            name="resemail"
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
                  {resgatar && mdlogin == 6 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <form name="resgfonec">
                        <Lg.InputCenter>
                          <h3>Fone : </h3>
                          <input
                            type="text"
                            id="fonec"
                            name="fonec"
                            value={strid}
                            placeholder="99 9 9999 9999"
                            onChange={(e) => setStrId(e.target.value)}
                          />
                        </Lg.InputCenter>
                        <br />
                        <p>
                          Determine o seu Celular cadastrado para o "ENVIO" do
                          resgate.
                        </p>
                        <p>Só edite números DDD Número...</p>
                        <br />
                      </form>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {resgatar && mdlogin == 7 ? (
                    <div>
                      <p>
                        mdresgate={mdresgatar},mdenviar={mdenviar}
                      </p>
                    </div>
                  ) : null}
                  {resgatar && mdlogin == 8 ? (
                    <div>
                      <p>
                        mdresgate={mdresgatar},mdenviar={mdenviar}
                      </p>
                    </div>
                  ) : null}

                  {enviar ? <p>verdadeiro</p> : <p>falso</p>}
                  {/* ////////////////////////////////// */}
                  {enviar && mdlogin == 5 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <h2>recebe o codigo do email</h2>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {enviar && mdlogin == 6 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <h2>recebe o codigo do SMS</h2>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {enviar && mdlogin == 7 ? (
                    <h2>
                      se imagem for verdadeira, solicita nova senha de acesso e
                      altera cadastro.
                    </h2>
                  ) : null}
                  {enviar && mdlogin == 8 ? (
                    <h2>
                      solicita edição dos dados necessarios para entrar apos
                      busca não existente.
                    </h2>
                  ) : null}
                </ContentInput>
                {/* ////////////////////////////////// */}
              </ContentLoginOpc>
            </ContentFormCollunsCenter>

            {mdlogin > 0 ? <Pg.DivisionPgHztal /> : null}
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/')} />

              {solicitar ? (
                <ContentButtonTitleImg
                  title="Solicitar."
                  onClick={handlesolicitar}
                />
              ) : null}

              {resgatar ? (
                <ContentButtonTitleImg
                  title="Resgatar."
                  onClick={handleresgatar}
                />
              ) : null}
              {enviar ? (
                <ContentButtonTitleImg title="Enviar." onClick={handleenviar} />
              ) : null}
            </ContentMainButtonsLogin>

            <ContentMainButtonsLogin>
              <ContentTitleLoginOpc titleopc="respostas das ações :" />
              <Lg.ContainerAreaText onoff={true}>
                <p>
                  idempresa : {idempresa}...fa-ntempresa : {fantempresa}
                </p>
                <p>
                  modlogin : {mdlogin}...nmlogin : {nmlogin}
                </p>
                <p>currentstep : {state.currentstep}</p>

                {mdlogin === 1 && solicitar ? (
                  <p>
                    nmlogin : {nmlogin}...E-Mail : {strid}...PassW : {strpsw}
                  </p>
                ) : null}
                {mdlogin === 2 && solicitar ? (
                  <p>
                    nmlogin : {nmlogin}...E-Mail : {strid}...Pin : {strpsw}
                  </p>
                ) : null}
                {mdlogin === 3 && solicitar ? (
                  <p>
                    nmlogin : {nmlogin}...Apelido : {strid}...PassW : {strpsw}
                  </p>
                ) : null}
                {mdlogin === 4 && solicitar ? (
                  <p>
                    nmlogin : {nmlogin}...Apelido : {strid}...PIN : {strpsw}
                  </p>
                ) : null}
                {/* ////////////////////////////////////////////  */}
                {mdlogin === 5 && resgatar ? (
                  <p>
                    {' '}
                    nmlogin: {nmlogin};.E-Mail: {strid},. mdresgatar:{' '}
                    {mdresgatar}.
                  </p>
                ) : null}
                {mdlogin === 6 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.FoneC: {strid},. mdresgatar:{' '}
                    {mdresgatar}.
                  </p>
                ) : null}
                {mdlogin === 7 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.Cod.Seg: {strid},. mdresgatar:{' '}
                    {mdresgatar}.
                  </p>
                ) : null}
                {mdlogin === 8 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.Cadastro: {strid},. mdresgatar:
                    {mdresgatar}.
                  </p>
                ) : null}
                {/* ////////////////////////////////////////////  */}
                {mdlogin === 5 && enviar ? (
                  <p>
                    {' '}
                    nmlogin: {nmlogin};.E-Mail: {strid},. mdenviar: {mdenviar}.
                  </p>
                ) : null}
                {mdlogin === 6 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.FoneC: {strid},. mdenviar: {mdenviar}.
                  </p>
                ) : null}
                {mdlogin === 7 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.Cod.Seg: {strid},. mdenviar: {mdenviar}.
                  </p>
                ) : null}
                {mdlogin === 8 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.Cadastro: {strid},. mdenviar: {mdenviar}
                    .
                  </p>
                ) : null}

                {/* ////////////////////////////////////////////  */}
              </Lg.ContainerAreaText>
            </ContentMainButtonsLogin>
          </Lg.ContainerMainLogin>
        </ContentLoginPg>
      </ThemeLogin>
    </ThemeProvider>
  );
};
