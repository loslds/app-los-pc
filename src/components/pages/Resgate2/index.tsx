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
//import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
import { ContentInputCenter } from '../ContentInputCenter.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

import {
  isEmailValid,
  isFoneCValid,
  isCpfValid
} from '../../../funcs/ErroEdicao.tsx';

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();

  const [snhmaster, setSnhMaster] = React.useState('');
  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');
  const [inputstrid, setInputStrId] = React.useState('');
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  const [erroedt, setErroEdt] = React.useState('');

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  const [errohelp, setErroHelp] = React.useState(false);

  const [isedicao, setIsEdicao] = React.useState(false); // painel edição
  const [ispnlfooter, setIsPnlFooter] = React.useState(false); // painel footer

  const [statusbtn, setStatusBtn] = React.useState('');
  const [isbtnconfedicao, setIsBtnConfEdicao] = React.useState(false);
  const [isbtnvalidaredicao, setIsBtnValidarEdicao] = React.useState(false);
  const [isbtncontinuar, setIsBtnContinuar] = React.useState(false);

  const [maskedemail, setMaskedEmail] = React.useState('');
  const [maskedfonec, setMaskedFoneC] = React.useState('');
  const [maskedfonez, setMaskedFoneZ] = React.useState('');
  const [maskedcpf, setMaskedCpf] = React.useState('');

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });

    //dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    //dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    //dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    //dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
    // dispatch({ type: AcessoUseActions.setAvatar, payload: '' });
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
    setStatusBtn('[ EDIÇÃO... ]');
    if (state.mdlogin === 1) {
      setErroEdt('Edite o seu Email.');
      setIsContatoEmail(true);
      setEdicao('Resgatar através do Email: ');
      setTxtAga('"ERRO" na Edição do Email');
      setTxtLabel('Email com formato na Editação com ERRO.');
      setTxtP('Verifique sua edição de Email.');
    } else if (state.mdlogin === 2) {
      setErroEdt('Edição de nº SMS...');
      setIsContatoSms(true);
      setEdicao('Resgatar através de SMS: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtP('Nº Celular com formato incompativel na Edição para SMS.');
      setTxtP('Verifique Nº Celular para contato com SMS.');
    } else if (state.mdlogin === 3) {
      setErroEdt('Edição de nº Whatsapp...');
      setIsContatoZap(true);
      setEdicao('Resgatar através do Whatsapp: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
      setTxtP('Verifique Nº Celular para contato com Whatsapp.');
    } else if (state.mdlogin === 4) {
      setErroEdt('Edição de nº Doc. CPF...');
      setIsContatoCpf(true);
      setEdicao('Resgatar através do C.P.F.: ');
      setTxtAga('"ERRO" na Edição do C.P.F');
      setTxtLabel('Não foi Editado o Nº C.P.F. corretamente.');
      setTxtP('Verifique Nº C.P.F. para identificar Perguntas.');
    }
    setSnhMaster(criasmstr);
    setIsPnlFooter(true);
    setIsBtnValidarEdicao(false);
    setIsBtnConfEdicao(true);
    setIsEdicao(true);
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

  const handlerConfirmarEdicao = () => {
    setMaskedEmail('');
    setMaskedFoneC('');
    setMaskedFoneZ('');
    setMaskedCpf('');
    const [isvalido, setIsValido] = React.useState(false);
    if (iscontatoemail) {
      if (inputstrid.length === 0) {
        setErroEdt('Edite o seu Email.');
      } else {
        const masck = isEmailValid(inputstrid);
        if (masck === '') {
          setErroEdt('Edição Email INCOMPATIVEL.');
        } else {
          setMaskedEmail(inputstrid.toLocaleLowerCase());
          setInputStrId(maskedemail);
          setIsValido(true);
        }
      }
    } else if (iscontatosms || iscontatozap) {
      if (inputstrid.length === 0) {
        setErroEdt('Edite nº Celular.');
      } else {
        const masked = isFoneCValid(inputstrid);
        if (masked === '') {
          setErroEdt('Edição de Nº INCOMPATIVEL.');
        } else {
          if (iscontatosms) {
            setMaskedFoneC(masked);
            setIsValido(true);
          } else {
            if (iscontatosms) {
              setMaskedFoneZ('(+55) ' + masked);
              setIsValido(true);
            }
          }
        }
      }
    } else if (iscontatocpf) {
      if (inputstrid.length === 0) {
        setErroEdt('Edite nº Doc. CPF.');
      } else {
        const masked = isCpfValid(inputstrid);
        if (masked === '') {
          setErroEdt('Edição de Nº DOC. INCOMPATIVEL.');
        } else {
          setMaskedCpf(masked);
          setIsValido(true);
        }
      }
    }
    if (isvalido) {
      setIsEdicao(false);
      setErroHelp(false);
      setIsBtnConfEdicao(false);
      setStatusBtn('[ VALIDAÇÃO... ]');
      setIsBtnValidarEdicao(true);
    } else {
      setIsEdicao(true);
      setIsBtnConfEdicao(true);
      setIsBtnValidarEdicao(false);
    }
    setIsBtnContinuar(false);
  };

  const handlerValidarEdicao = React.useCallback(() => {
    if (iscontatoemail) {
      dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });
    } else if (iscontatosms) {
      dispatch({ type: AcessoUseActions.setFoneC, payload: maskedfonec });
    } else if (iscontatozap) {
      dispatch({ type: AcessoUseActions.setFoneZ, payload: maskedfonez });
    } else if (iscontatocpf) {
      dispatch({ type: AcessoUseActions.setCpf, payload: maskedcpf });
    }
    setIsEdicao(false);
    setErroHelp(false);
    setIsBtnConfEdicao(false);
    setStatusBtn('[ AVALIADO... ]');
    setIsBtnValidarEdicao(false);
    setIsBtnContinuar(true);
  }, [dispatch]);
  ////////////////////

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
        {/* 
        <div>
          <p>Senha MASTER.: {snhmaster}</p>
          <p>State idemp.......: {state.idemp ? state.idemp : 'vasio'}</p>
          <p>State nmfant......: {state.nmfant ? state.nmfant : 'vasio'}</p>
          <p>State.mdlogin.....: {state.mdlogin ? state.mdlogin : '0'}</p>
          <p>State nmlogin.....: {state.nmlogin ? state.nmlogin : 'vasio'}</p>
          <p>State.modulo......: {state.modulo}</p>
          <p>State.aplicacao...: {state.aplicacao}</p>
          <p>Stado para Contato.: </p>
          <p>Painel Edição......: {isedicao ? 'verdadeiro' : 'falso'}</p>
          <p>Dados InputStrId.: {inputstrid ? inputstrid : 'vasio'}</p>
          <p>State IsEdição...: {isedicao ? 'verdadeiro' : 'falso'}</p>
          <p>State IsChecar...: {ischecaedicao ? 'verdadeiro' : 'falso'}</p>
          <p>Painel Footer....: {ispnlfooter ? 'verdadeiro' : 'falso'}</p>
          <p>Stado Ação Botão.: </p>
          <p>IsBtnEdição......: {isbtnedicao ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnChecaEdição.: {ischecaedicao ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnContinuar...: {isbtncontinuar ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnEnviar......: {isbtnenviar ? 'verdadeiro' : 'falso'}</p>
        </div>
  */}
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>

          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isbtnconfedicao ? <h4>{state.aplicacao}</h4> : null}
                {isbtnvalidaredicao ? <h4>Validar Edição.</h4> : null}
                {isbtncontinuar ? <h4>Edição Validada.</h4> : null}
              </ContentCardPageTitle>

              <ContentInputCenter open={isbtnconfedicao}>
                {iscontatoemail ? (
                  <ContentInputPage>
                    <form name="mail">
                      <br />
                      <input
                        type="email"
                        //name="mail"
                        value={inputstrid}
                        size={25}
                        autoFocus={true}
                        onChange={(e) => setInputStrId(e.target.value)}
                      />
                      {erroedt !== '' ? <span>{erroedt}</span> : null}
                      <br />
                    </form>
                  </ContentInputPage>
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
                        onChange={(e) => setInputStrId(e.target.value)}
                      />
                      {erroedt !== '' ? <span>{erroedt}</span> : null}
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
                        onChange={(e) => setInputStrId(e.target.value)}
                      />
                      {erroedt !== '' ? <span>{erroedt}</span> : null}
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
                        onChange={(e) => setInputStrId(e.target.value)}
                      />
                      {erroedt !== '' ? <span>{erroedt}</span> : null}
                      <br />
                    </form>
                  </ContentInputPage>
                ) : null}
              </ContentInputCenter>

              <ContentInputCenter open={isbtnconfedicao}>
                <PanelConfResgateYellow
                  isbgcolor={isbtnvalidaredicao}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Validar Dados Informados :'}
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
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {iscontatosms ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{maskedfonec}</span>
                    </label>
                  ) : null}
                  {iscontatozap ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Whatsapp :{' '}
                      <span>{maskedfonez}</span>
                    </label>
                  ) : null}
                  {iscontatocpf ? (
                    <label>
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                    Esquerda...
                  </p>
                  <p>
                    &emsp;&emsp;Caso deseja " Validar.:", clique na Seta à
                    Direita...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              </ContentInputCenter>

              <ContentInputCenter open={isbtncontinuar}>
                <PanelConfResgateYellow
                  isbgcolor={isbtncontinuar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Validados :'}
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
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{state.mail}</span>
                    </label>
                  ) : null}
                  {iscontatosms || iscontatozap ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{state.fonec}</span>
                    </label>
                  ) : null}
                  {iscontatocpf ? (
                    <label>
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{state.cpf}</span>
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
              </ContentInputCenter>
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          {errohelp ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setErroHelp(false)}
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

          {isbtncontinuar ? (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={isbtncontinuar}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel
                istitl={isbtncontinuar}
                title={'Voltar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Voltar..."
                  onclick={goto('/resgate')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage label={statusbtn} />
              <ContentSidePageBottonLabel
                istitl={isbtncontinuar}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn=" Continuar..."
                  onclick={goto('/resgate3')}
                />
              </ContentSidePageBottonLabel>
            </ContentSidePagePanelBotton>
          ) : (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={ispnlfooter}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel
                istitl={ispnlfooter}
                title={'Voltar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Voltar..."
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>

              {isbtnconfedicao && inputstrid === '' ? (
                <ContentBoxLabelPage label={'[ E D I Ç Ã O ]'} />
              ) : null}

              {isbtnconfedicao && inputstrid !== '' ? (
                <ContentBoxLabelPage label={statusbtn} />
              ) : null}

              {isbtnvalidaredicao ? (
                <ContentBoxLabelPage label={statusbtn} />
              ) : null}

              {isbtnconfedicao && inputstrid !== '' ? (
                <ContentSidePageBottonLabel
                  istitl={isbtnconfedicao}
                  title={'Confirmar.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight="40px"
                    img={setadir}
                    titbtn=" Confirmar..."
                    onclick={handlerConfirmarEdicao}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {isbtnvalidaredicao ? (
                <ContentSidePageBottonLabel
                  istitl={isbtnvalidaredicao}
                  title={'Confirmar.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight="40px"
                    img={setadir}
                    titbtn=" Confirmar..."
                    onclick={handlerValidarEdicao}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
            </ContentSidePagePanelBotton>
          )}

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
