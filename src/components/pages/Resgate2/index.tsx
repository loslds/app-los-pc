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
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
import { ContentInputCenter } from '../ContentInputCenter.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

export function isEmailValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
export function CheckFone(str: string) {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}
export function CheckCPF(str: string): boolean {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}
export function CheckResp(str: string): boolean {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}
export function Conexao() {
  return true;
}
export function FindAcesso() {
  return true;
}
export function FindUsers() {
  return true;
}

interface FormState {
  email: string;
  sms: string;
  zap: string;
  cpf: string;
}
export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();
  const [snhmaster, setSnhMaster] = React.useState('');
  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');
  const [inputstrid, setInputStrId] = React.useState('');
  const [isvalidado, setIsValidado] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  //const [ischeckedicao, setIsCheckEdicao] = React.useState(false);
  //const [isconfirmar, setIsConfirmar] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  const [iscontinuar, setIsContinuar] = React.useState(false);
  const [isbtncontinuar, setIsBtnContinuar] = React.useState(false);
  const [isbtnenviar, setIsBtnEnviar] = React.useState(false);
  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [form, setForm] = React.useState<FormState>({
    email: '',
    sms: '',
    zap: '',
    cpf: ''
  });

  const [erros, setErros] = React.useState<Partial<FormState>>({});

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });

    //dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    //dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    //dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    //dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });
    dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    //    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    //    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    //    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    //    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    //    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    //    dispatch({ type: AcessoUseActions.setresp3, payload: '' });
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgatar: Contato Usuário'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Contato :' + state.nmlogin + '.'
    });
    //////////////////////////////////////////////////////////////////////////
    if (state.mdlogin === 1) {
      setIsContatoEmail(true);
      setEdicao('Resgatar através do Email: ');
      setTxtAga('"ERRO" na Edição do Email');
      setTxtLabel('Email com formato na Editação com ERRO.');
      setTxtP('Verifique sua edição de Email.');
    } else if (state.mdlogin === 2) {
      setIsContatoSms(true);
      setEdicao('Resgatar através de SMS: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtP('Nº Celular com formato incompativel na Edição para SMS.');
      setTxtP('Verifique Nº Celular para contato com SMS.');
    } else if (state.mdlogin === 3) {
      setIsContatoZap(true);
      setEdicao('Resgatar através do Whatsapp: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
      setTxtP('Verifique Nº Celular para contato com Whatsapp.');
    } else if (state.mdlogin === 4) {
      setIsContatoCpf(true);
      setEdicao('Resgatar através do C.P.F.: ');
      setTxtAga('"ERRO" na Edição do C.P.F');
      setTxtLabel('Não foi Editado o Nº C.P.F. corretamente.');
      setTxtP('Verifique Nº C.P.F. para identificar Perguntas.');
    }
    setSnhMaster(criasmstr);
    setIsValidado(true);
    setIsEditar(true);

    setIsBtnContinuar(true);
    setIsContinuar(false);
    setIsBtnEnviar(false);
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

  const handlerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputStrId(e.target.value);
    console.log('inputstrid', inputstrid);
    setForm({ ...form, email: inputstrid });
    console.log('form.email', form.email);
    setIsContinuar(false);
    setIsValidado(true);
    const novosErros: Partial<FormState> = {};
    if (inputstrid === '') {
      novosErros.email = 'Por favor, digite o seu Email.';
    } else {
      if (!isEmailValid(inputstrid)) {
        setErros({ ...erros, email: 'Email inválido' });
      } else {
        setErros({ ...erros, email: '' });
      }
      console.log('setErros', erros);
    }
    setIsBtnEnviar(false);
  };

  const handlerContinuar = React.useCallback(() => {
    if (inputstrid !== '') {
      setIsEditar(false);
      setIsBtnContinuar(false);
      setIsBtnEnviar(true);
    } else {
      setIsValidado(false);
    }
  }, [iseditar, isbtncontinuar, isbtnenviar, isvalidado]);

  React.useEffect(() => {
    if (isbtnenviar && !iseditar && !isbtncontinuar) {
      if (iscontatoemail) {
        dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });
      }
      if (iscontatosms || iscontatozap) {
        dispatch({ type: AcessoUseActions.setFoneC, payload: inputstrid });
      }
      if (iscontatocpf) {
        dispatch({ type: AcessoUseActions.setCpf, payload: inputstrid });
      }
    }
  }, [isbtnenviar, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg3}
        titbtnsys="Home..."
        onclicksys={goto('/')}
        titlepg="Acesso Resgate."
        imghpg={help}
        titbtnhpg="Ajuda..."
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen="help Ajuda..."
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <div>
          <p>Senha MASTER.: {snhmaster}</p>
          <p>State idemp.......: {state.idemp ? state.idemp : 'vasio'}</p>
          <p>State nmfant......: {state.nmfant ? state.nmfant : 'vasio'}</p>
          <p>State.mdlogin.....: {state.mdlogin ? state.mdlogin : '0'}</p>
          <p>State nmlogin.....: {state.nmlogin ? state.nmlogin : 'vasio'}</p>
          <p>State.modulo......: {state.modulo}</p>
          <p>State.aplicacao...: {state.aplicacao}</p>
          <p>Stado para Contato.: </p>
          <p>Painel Edição......: {iseditar ? 'verdadeiro' : 'falso'}</p>
          <p>
            Dados InputStrId.: {inputstrid ? inputstrid : 'vasio'}
          </p>
          <p>
             State IsValidado..: {isvalidado ? 'verdadeiro' : 'falso'}
          </p>
          <p>Stado para Botão.: </p>
          <p>
            IsBtnContinuar.: {isbtncontinuar ? 'verdadeiro' : 'falso'}
          </p>
          <p>
            IsBtnEnviar......: {isbtnenviar ? 'verdadeiro' : 'falso'}
          </p>
        </div>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {iseditar ? <h4>{state.aplicacao}</h4> : null}
                {isbtnenviar ? <h4>Para Processamento.</h4> : null}
              </ContentCardPageTitle>

              <ContentInputCenter open={iseditar}>
                {iscontatoemail ? (
                  <form name="mail">
                    <br />
                    <input
                      type="email"
                      //name="mail"
                      value={inputstrid}
                      size={25}
                      autoFocus={true}
                      onChange={handlerEmailChange}
                    />
                    {erros.email && <span>{erros.email}</span>}
                    <br />
                  </form>
                ) : null}
                {iscontatosms ? (
                  <ContentInputPage>
                    <form name="sms">
                      <br />
                      <label>TeleFone.:</label>
                      <input
                        type="text"
                        name="sms"
                        value={inputstrid}
                        size={11}
                        autoFocus={true}
                        onChange={() => {}}
                      />
                      <br />
                    </form>
                  </ContentInputPage>
                ) : null}
                {iscontatozap ? (
                  <ContentInputPage>
                    <form name="zap">
                      <br />
                      <label>Whatsapp.:</label>
                      <input
                        type="text"
                        name="zap"
                        value={inputstrid}
                        size={11}
                        autoFocus={true}
                        onChange={() => {}}
                      />
                      <br />
                    </form>
                  </ContentInputPage>
                ) : null}
                {iscontatocpf ? (
                  <ContentInputPage>
                    <form name="cpf">
                      <br />
                      <label>C.P.F. .:</label>
                      <input
                        type="text"
                        name="cpf"
                        value={inputstrid}
                        size={11}
                        autoFocus={true}
                        onChange={() => {}}
                      />
                      <br />
                    </form>
                  </ContentInputPage>
                ) : null}
              </ContentInputCenter>

              {!iseditar && !isbtncontinuar && isbtnenviar ? (
                <PanelConfResgateYellow
                  isbgcolor={isbtnenviar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Informados :'}
                >
                  <p>&emsp;&emsp;Já temos em mãos :</p>
                  <label>
                    &emsp;&emsp;&emsp;# - ID Empresa....:{state.idemp}
                    <span>{state.idemp}</span>
                  </label>
                  <label>
                    &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
                    <span>{state.nmfant}</span>
                  </label>
                  {iscontatoemail ? (
                    <label>
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{inputstrid}</span>
                    </label>
                  ) : null}
                  {iscontatosms || iscontatozap ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{inputstrid}</span>
                    </label>
                  ) : null}
                  {iscontatocpf ? (
                    <label>
                      &emsp;&emsp;&emsp;# - C.P.F. :{' '}
                      <span>+85{inputstrid}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                    Esquerda...
                  </p>
                  <p>
                    &emsp;&emsp;Caso deseja " Continuar.:", clique na Seta à
                    Direita...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          {!isvalidado ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setIsValidado(true)}
            >
              <CardImgMsg
                img={notedicao}
                txtaga={txtaga}
                txtlabel={txtlabel}
                txtp={txtp}
              />
            </PageModal>
          ) : null}

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            {inputstrid !== '' ? (
              <ContentCardPageTitle>
                <h3>Informado : {inputstrid}</h3>
              </ContentCardPageTitle>
            ) : null}
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight="40px"
                img={setaesq}
                titbtn="Voltar..."
                onclick={goto('/resgate1')}
              />
            </ContentSidePageBottonLabel>

            {iseditar && isbtncontinuar && !isbtnenviar ? (
              <ContentSidePageBottonLabel
                istitl={isbtncontinuar}
                title="Confirmar.: "
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Confirmar..."
                  onclick={handlerContinuar}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {isbtnenviar && !iseditar && !isbtncontinuar ? (
              <ContentSidePageBottonLabel
                istitl={isbtnenviar}
                title="Continuar.: "
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Continuar..."
                  onclick={goto('/resgate3')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop="1%"
              pwidth="50%"
              pheight="6%"
              titulo="Acesso Resgate."
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate1
                imghlp={resgatehlp3}
                imgcard={resgatepg3}
                imgbm={close}
                titbm="Fechar..."
                onclose={() => setHelpPg(false)}
              />
            </PageModal>
          ) : null}

          {onpanel ? (
            <PageModal
              ptop="1%"
              pwidth="65%"
              pheight="95%"
              titulo="DADOS Context Login."
              imgbm={close}
              titbm="Fechar..."
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

// {isbtnenviar ? (
//   <PanelConfResgateYellow
//     isbgcolor={isbtnenviar}
//     titulo={'Resgate para seu Acesso.'}
//     subtitulo={'Dados Fornecidos :'}
//   >
//     <p>&emsp;&emsp;Já temos em mãos :</p>
//     <label>
//       &emsp;&emsp;&emsp;# - ID Empresa....:{state.idemp}
//       <span>{state.idemp}</span>
//     </label>
//     <label>
//       &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
//       <span>{state.nmfant}</span>
//     </label>
//     {iscontatoemail ? (
//       <label>
//         &emsp;&emsp;&emsp;# - E-MAIL : <span>{state.mail}</span>
//       </label>
//     ) : null}
//     {iscontatosms || iscontatozap ? (
//       <label>
//         &emsp;&emsp;&emsp;# - Celular : <span>{state.fonec}</span>
//       </label>
//     ) : null}
//     {iscontatocpf ? (
//       <label>
//         &emsp;&emsp;&emsp;# - C.P.F. : <span>+85{state.cpf}</span>
//       </label>
//     ) : null}
//     <br />
//     <h5>Obs:.</h5>
//     <p>
//       &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
//       Esquerda...
//     </p>
//     <p>
//       &emsp;&emsp;Caso deseja " Continuar.:", clique na Seta à
//       Direita...
//     </p>
//     <br />
//   </PanelConfResgateYellow>
// ) : null}
