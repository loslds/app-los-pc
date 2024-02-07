import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
// import logosys from '../../../assets/pngs/logosys.png';
import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
import React from 'react';

import enviaroff from '../../../assets/svgs/enviaroff.svg';
import enviaron from '../../../assets/svgs/enviaron.svg';

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
import { ContentTitlePanel } from './ContentTitlePanel.tsx';
import { ContentButtonConfimationOn } from './ContentButtonConfimationOn.tsx';
import { ContentButtonConfimationOff } from './ContentButtonConfimationOff.tsx';

//import { ListEmps } from "../../../books/ListEmps.tsx";

import * as Lg from './styled.ts';
import * as Pg from '../style.ts';

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

  const [isopen, setIsOpen] = React.useState(false);
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
  const [mdsolicitar, setMdSolicitar] = React.useState(0);

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
  };

  React.useEffect(() => {
    if (mdlogin === 0) {
      setIsOpen(false);
      setSolicitar(false);
      setMdSolicitar(0);
      setResgatar(false);
      setMdResgatar(0);
      setEnviar(false);
      setMdEnviar(0);
      setIsOpcao(false);
      setNrOpcao(0);
    } else {
      setIsOpen(true);
      if (mdlogin >= 1 && mdlogin <= 4) {
        setSolicitar(true);
        setResgatar(false);
        setEnviar(false);
        setIsOpcao(false);
      }
      if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && !enviar) {
        setSolicitar(false);
        setResgatar(true);
        setEnviar(false);
        setIsOpcao(false);
      } else if (mdlogin >= 5 && mdlogin <= 8 && resgatar && !enviar) {
        setSolicitar(false);
        setResgatar(false);
        setEnviar(true);
        setIsOpcao(false);
      } else if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && enviar) {
        setSolicitar(false);
        setResgatar(false);
        setEnviar(false);
        setIsOpcao(true);
      }
    }
  }, [mdlogin, nropcao]);

  const handlesolicitar = React.useCallback(() => {
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
    if (!enviar) {
      setEnviar(true);
    }
  }, [resgatar, enviar]);

  const handleenviar = React.useCallback(() => {
    if (enviar) {
      setEnviar(false);
    }
    if (!isopcao) {
      setIsOpcao(true);
    }
  }, [enviar, isopcao]);

  const handlernropcao = React.useCallback(() => {
    if (isopcao) {
      if (nropcao != mdlogin) {
        setNrOpcao(mdlogin);
      }

      if (mdlogin === 5) {
        alert('handlernropcao mdlogin :' + mdlogin + ' e nropcao :' + mdlogin);
      } else if (mdlogin === 6) {
        alert('handlernropcao mdlogin :' + mdlogin + ' e nropcao :' + mdlogin);
      } else if (mdlogin === 7) {
        alert('handlernropcao mdlogin :' + mdlogin + ' e nropcao :' + mdlogin);
      } else {
        alert('handlernropcao mdlogin :' + mdlogin + ' e nropcao :' + mdlogin);
      }
    }
  }, [isopcao, nropcao]);

  // if (mdlogin == 1) {
  //   alert('handlernropcao mdlogin :' + mdlogin + 'nropcao :' + mdlogin);
  // } else if (mdlogin == 1) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // } else if (mdlogin == 2) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // } else if (mdlogin == 3) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // } else if (mdlogin == 4) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // } else if (mdlogin == 5) {
  //   alert('handlernropcao nropcao :' + mdlogin);
  // } else if (mdlogin == 6) {
  //   alert('handlernropcao nropcao :' + mdlogin);
  // } else if (mdlogin == 7) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // } else if (mdlogin == 8) {
  //   alert('handlernropcao mdlogin :' + mdlogin);
  // }

  React.useEffect(() => {
    if (mdlogin >= 1 && mdlogin <= 4) {
      if (mdsolicitar != mdlogin) {
        setMdSolicitar(mdlogin);
        setNrOpcao(mdlogin);
      }
    }
    if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && !enviar) {
      if (mdresgatar != mdlogin) {
        setMdResgatar(mdlogin);
      }
    }
    if (mdlogin >= 5 && mdlogin <= 8 && resgatar && !enviar) {
      if (mdenviar != mdlogin) {
        setMdEnviar(mdlogin);
      }
    }
    if (mdlogin >= 5 && mdlogin <= 8 && !resgatar && enviar) {
      if (mdenviar != mdlogin) {
        setNrOpcao(mdlogin);
      }
    }
    if (logado) {
      alert('mostra mensagem Logado.');
    }
  }, [mdlogin, mdsolicitar, mdresgatar, mdenviar, nropcao, logado]);

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

            <ContentFormCollunsCenter pwidth={'100%'} isopen={isopen}>
              <ContentLoginOpc pwidth={'100%'} open={isopen}>
                <ContentTitleLoginOpc titleopc="Aplicação :" />

                <ContentInput>
                  {/* MODO SOLICITAR */}
                  {solicitar && mdsolicitar == 1 ? (
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
                  {solicitar && mdsolicitar == 2 ? (
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
                  {solicitar && mdsolicitar == 3 ? (
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
                  {solicitar && mdsolicitar == 4 ? (
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

                  {/* MODO RESGATAR */}
                  {resgatar && mdresgatar == 5 ? (
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
                  {resgatar && mdresgatar == 7 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <p>
                        mdresgate={mdresgatar},mdenviar={mdenviar}
                      </p>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {resgatar && mdresgatar == 8 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <p>
                        mdresgate={mdresgatar},mdenviar={mdenviar}
                      </p>
                    </Lg.ContainerAreaText>
                  ) : null}

                  {/* MODO ENVIAR */}
                  {enviar && mdenviar == 5 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <ContentTitlePanel
                        title={' " DADOS " enviados pelo E-Mail..." '}
                      />
                      <h2>recebe o codigo do email</h2>
                      <p>Codigo para envio:</p>

                      <br />
                    </Lg.ContainerAreaText>
                  ) : null}
                  {enviar && mdenviar == 6 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <h2>recebe o codigo do SMS</h2>
                      <p>Codigo para envio:</p>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {enviar && mdenviar == 7 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <h2>
                        se imagem for verdadeira, solicita nova senha de acesso
                        e altera cadastro.
                      </h2>
                      <p>Codigo para envio:</p>
                    </Lg.ContainerAreaText>
                  ) : null}
                  {enviar && mdenviar == 8 ? (
                    <Lg.ContainerAreaText onoff={true}>
                      <h2>
                        solicita edição dos dados necessarios para entrar apos
                        busca não existente.
                      </h2>
                    </Lg.ContainerAreaText>
                  ) : null}
                </ContentInput>

                {/* MODO OPCAO */}
                {isopcao && mdlogin >= 1 ? (
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
                    <p>nropçao : {nropcao}...</p>
                    <Lg.ContainerBtnLoginSRigth>
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
                    </Lg.ContainerBtnLoginSRigth>
                  </Lg.ContainerAreaText>
                ) : null}
              </ContentLoginOpc>
            </ContentFormCollunsCenter>

            {mdlogin > 0 ? <Pg.DivisionPgHztal /> : null}

            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/')} />

              {solicitar && isopen ? (
                <ContentButtonTitleImg
                  title="Solicitar."
                  onClick={handlesolicitar}
                />
              ) : null}

              {resgatar && isopen ? (
                <ContentButtonTitleImg
                  title="Resgatar."
                  onClick={handleresgatar}
                />
              ) : null}
              {enviar && isopen ? (
                <ContentButtonTitleImg title="Enviar." onClick={handleenviar} />
              ) : null}
            </ContentMainButtonsLogin>

            <Pg.DivisionPgHztal />
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
                {mdlogin === 5 && resgatar ? (
                  <p>
                    {' '}
                    nmlogin: {nmlogin};.E-Mail: {strid}, mdresgatar:{' '}
                    {mdresgatar}.
                  </p>
                ) : null}
                {mdlogin === 6 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.FoneC: {strid}, mdresgatar: {mdresgatar}
                  </p>
                ) : null}
                {mdlogin === 7 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.Cod.Seg: {strid}, mdresgatar:{' '}
                    {mdresgatar}
                  </p>
                ) : null}
                {mdlogin === 8 && resgatar ? (
                  <p>
                    nmlogin: {nmlogin};.Cadastro: {strid}, mdresgatar:
                    {mdresgatar}
                  </p>
                ) : null}
                {mdlogin === 5 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.E-Mail: {strid}, mdenviar: {mdenviar}
                  </p>
                ) : null}
                {mdlogin === 6 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.FoneC: {strid}, mdenviar: {mdenviar}
                  </p>
                ) : null}
                {mdlogin === 7 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.Cod.Seg: {strid}, mdenviar: {mdenviar}
                  </p>
                ) : null}
                {mdlogin === 8 && enviar ? (
                  <p>
                    nmlogin: {nmlogin};.Cadastro: {strid}, mdenviar: {mdenviar}
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
