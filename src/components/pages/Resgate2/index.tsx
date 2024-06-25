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
import { ContentCardCollunsCenterPage } from '../ContentCardCollunsCenterPage.tsx';
import { ContentInputMainPage } from '../ContentInputMainPage.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
//import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgtepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
//import satelite from '../../../assets/svgs/satelite.svg';
//import sateliteon from '../../../assets/svgs/sateliteon.svg';
import sateliteoff from '../../../assets/svgs/sateliteoff.svg';
//import nuvenfind from '../../../assets/svgs/nuvenfind.svg';
//import nuvenfindon from '../../../assets/svgs/nuvenfindon.svg';
import nuvenfindoff from '../../../assets/svgs/nuvenfindoff.svg';
//import login from '../../../assets/svgs/login.svg';
//import logoon from '../../../assets/svgs/logoon.svg';
//import logooff from '../../../assets/svgs/logooff.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

export const ListImg = [sateliteoff, nuvenfindoff, notedicao];

export function CheckEmail(str: string) {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}

export function CheckFone(str: string) {
  if (str === '') {
    return false;
  } else {
    return true;
  }
}
export function CheckCPF(str: string) {
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

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();

  //const [idempresa, setIdEmpresa] = React.useState(0);
  //const [fantempresa, setFantEmpresa] = React.useState('');

  const [snhmaster, setSnhMaster] = React.useState('');

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  //const [mdlogin, setMdLogin] = React.useState(0);
  //const [nmlogin, setNmLogin] = React.useState('Opções :');

  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [isconfcpf, setIsConfCpf] = React.useState(false);

  const [isstrvalue, setIsStrValue] = React.useState(false);
  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  const [ischekedicao, setIsChekEdicao] = React.useState(false);
  const [isconfedicao, setIsConfEdicao] = React.useState(false);

  const [imgmsg, setImgMsg] = React.useState('');
  const [isacesso, setIsAcesso] = React.useState(false);
  const [iserromsg, setIsErroMsg] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  const [isconexao, setIsConexao] = React.useState(false);
  const [isconectedoff, setIsConectedoff] = React.useState(false);
  const [isfindacces, setIsFindAcces] = React.useState(false);
  const [isfindingoff, setIsFindingoff] = React.useState(false);
  const [isusers, setIsUsers] = React.useState(false);

  const [isloggedoff, setIsLoggedoff] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');

  const [ispergunta, setIsPergunta] = React.useState(false);
  const [isresposta, setIsResposta] = React.useState(false);
  const [pergunta1, setPergunta1] = React.useState('');
  const [resposta1, setResposta1] = React.useState('');
  const [pergunta2, setPergunta2] = React.useState('');
  const [resposta2, setResposta2] = React.useState('');
  const [pergunta3, setPergunta3] = React.useState('');
  const [resposta3, setResposta3] = React.useState('');
  const [isstrresp, setIsStrResp] = React.useState(false);
  const [strresp1, setStrResp1] = React.useState('');
  const [strresp2, setStrResp2] = React.useState('');
  const [strresp3, setStrResp3] = React.useState('');

  const [btncontinua, setBtnContinua] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });

    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });

    dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });

    if (state.mdlogin === 1) {
      setIsContatoEmail(true);
      //   setIsContatoSms(false);
      //   setIsContatoZap(false);
      //   setIsContatoCpf(false);
      //   setIsPergunta(false);
    } else if (state.mdlogin === 2) {
      // setIsContatoEmail(false);
      setIsContatoSms(true);
      // setIsContatoZap(false);
      // setIsContatoCpf(false);
      // setIsPergunta(false);
    } else if (state.mdlogin === 3) {
      // setIsContatoEmail(false);
      // setIsContatoSms(false);
      setIsContatoZap(true);
      // setIsContatoCpf(false);
      // setIsPergunta(false);
    } else if (state.mdlogin === 4) {
      // setIsContatoEmail(false);
      // setIsContatoSms(false);
      // setIsContatoZap(false);
      setIsContatoCpf(true);
      //setIsPergunta(false);
    }
    setIsEditar(true);
    setEdicao('Através de : ');
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgate: Contato Usuário'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Contato :' + state.mdlogin + '.'
    });

    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
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

  const handlerCheckEdicao = () => {
    setBtnContinua(false);
    if (iscontatoemail) {
      setIsChekEdicao(CheckEmail(strid));
      setEdicao('Resgatar através do Email: ');
    } else if (iscontatosms) {
      setIsChekEdicao(CheckFone(strid));
      setEdicao('Resgatar através do Celular: ');
    } else if (iscontatozap) {
      setIsChekEdicao(CheckFone(strid));
      setEdicao('Resgatar através do Celular: ');
    } else if (iscontatocpf) {
      setIsChekEdicao(CheckCPF(strid));
    }
    // if (ischekedicao) {
    //   setIsEditar(false);
    //   setIsConfEdicao(true);
    //   setIsErroMsg(false);
    //   setBtnContinua(true);
    // }
  };

  React.useEffect(() => {
    setIsPergunta(false);
    if (!ischekedicao) {
      
    } else {
      if (!iserromsg) {
        setIsEditar(true);
        setIsErroMsg(true);
        if (iscontatoemail) {
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição do Email');
          setTxtLabel('Não foi Editado o EMAIL.');
          setTxtP('Verifique sua edição de Email.');
        } else if (iscontatosms) {
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição do Telefone');
          setTxtLabel('Não foi Editado o Nº Celular para SMS.');
          setTxtP('Verifique sua edição do Celular para SMS.');
        } else if (iscontatozap) {
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição do Telefone');
          setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
          setTxtP('Verifique sua edição do Celular para Whatsapp.');
        } else if (iscontatocpf) {
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição do C.P.F');
          setTxtLabel('Não foi Editado o Nº C.P.F.');
          setTxtP('Verifique sua edição do C.P.F.');
        }
      }
    }
    

    if (isconfedicao && iserromsg) {
      setIsEditar(true);
      setIsConfEdicao(false);
    }
    if (ischekedicao && !iserromsg) {
      setIsEditar(false);
      setIsConfEdicao(true);
    }
  }, [
    ischekedicao,
    iserromsg,
    isconfedicao,
    iseditar,
    iscontatoemail,
    iscontatosms,
    iscontatozap,
    iscontatocpf
  ]);

  const handlerCheckDados = () => {
    setBtnContinua(false);
    if (iscontatoemail || iscontatosms || iscontatozap ){
      setBtnContinua(true);  
    } else if (iscontatocpf && ispergunta){
      if ()
    } 

    ){
      if (strid === state.mail){
        setBtnContinua(true);  
      }
    } else if (iscontatosms){
      if (strid === state.fonec){
        setBtnContinua(true);  
      } 
    } else if (iscontatozap){
      if (strid === state.fonec){
        setBtnContinua(true);  
    }
  }
    } else if (iscontatocpf) {
      setImgMsg(ListImg[2]);
      setTxtAga('"ERRO" na Edição do C.P.F');
      setTxtLabel('Não foi Editado o Nº C.P.F.');
      setTxtP('Verifique sua edição do C.P.F.');
    }

    if (isconfedicao) {
      setBtnContinua(true);
    } else {
      setBtnContinua(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg3}
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
          <label>Senha MASTER.......: {snhmaster}</label>
          <label>State mdlogin......: {state.nmlogin}</label>
          <label>State idemp........: {state.idemp}</label>
          <label>State nmfant.......: {state.nmfant}</label>
          <label>State ischekedicao.: {ischekedicao}</label>
          <label>State strid........: {strid}</label>
          <label>State isconfEdicao.: {isconfedicao}</label>
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

              <ContentCardCollunsCenterPage openccp={iseditar} pwidth={'180px'}>
                <ContentInputMainPage>
                  {iscontatoemail ? (
                    <ContentInputPage>
                      <form name="email">
                        <br />
                        <label>Email.:</label>
                        <input
                          type="mail"
                          name="mail"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                  ) : null}
                  {iscontatosms ? (
                    <ContentInputPage>
                      <form name="telefone">
                        <br />
                        <label>TeleFone.:</label>
                        <input
                          type="text"
                          name="telefone"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                  ) : null}
                  {iscontatozap ? (
                    <ContentInputPage>
                      <form name="whatsapp">
                        <br />
                        <label>Whatsapp.:</label>
                        <input
                          type="text"
                          name="whatsapp"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                  ) : null}
                  {iscontatocpf && !ispergunta ? (
                    <ContentInputPage>
                      <form name="cpf">
                        <br />
                        <label>C.P.F. .:</label>
                        <input
                          type="text"
                          name="cpf"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                  ) : null}
                  {iscontatocpf && ispergunta ? (
                    <ContentInputPage>
                      <label>
                        C.P.F. : <span>{strid}</span>
                      </label>
                      <form name="perguntas">
                        <br />
                        <label>{pergunta1} ?</label>
                        <input
                          type="text"
                          name="perg1"
                          value={strresp1}
                          size={25}
                          autoFocus={true}
                          onChange={(e) => setStrResp1(e.currentTarget.value)}
                        />
                        <br />
                        <label>{pergunta2} ?</label>
                        <input
                          type="text"
                          name="perg2"
                          value={strresp2}
                          maxLength={25}
                          onChange={(e) => setStrResp2(e.currentTarget.value)}
                        />
                        <br />
                        <label>{pergunta3} ?</label>
                        <input
                          type="text"
                          name="perg3"
                          value={strresp3}
                          maxLength={25}
                          onChange={(e) => setStrResp3(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                  ) : null}
                </ContentInputMainPage>
              </ContentCardCollunsCenterPage>

              {iserromsg ? (
                <PageModal
                  ptop={'1%'}
                  pwidth={'30%'}
                  pheight={'50%'}
                  titulo={'ERRO na Edição de Informação.'}
                  imgbm={close}
                  titbm={'Fechar...'}
                  onclose={() => setIsErroMsg(false)}
                >
                  <CardImgMsg
                    img={imgmsg}
                    txtaga={txtaga}
                    txtlabel={txtlabel}
                    txtp={txtp}
                  />
                </PageModal>
              ) : null}

              {isconfedicao &&
              (iscontatoemail || iscontatosms || iscontatozap) &&
              !iserromsg &&
              !iscontatocpf ? (
                <PanelConfResgateYellow
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Requeridos :'}
                >
                  <p>&emsp;&emsp;Já temos em mãos :</p>
                  <label>
                    &emsp;&emsp;&emsp;# - ID Empresa....:{' '}
                    <span>{state.idemp}</span>
                  </label>
                  <label>
                    &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
                    <span>{state.nmfant}</span>
                  </label>
                  <p>&emsp;Você optou por:</p>
                  <label>
                    &emsp;&emsp;&emsp;# - Resgatar com :{' '}
                    <span>{state.nmlogin}</span>
                  </label>
                  <br />
                  <h4>Sua Edição:</h4>
                  <label>
                    &emsp;{edicao} <span>{strid}</span>
                  </label>
                  <br />
                  <p>
                    &emsp;&emsp;Precisamos que você confirme se deseja
                    continuar...
                  </p>
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira mudar, click em "VOLTAR" na seta à
                    esquerda "Voltar"...
                  </p>
                  <p>
                    &emsp;&emsp;Caso "CONTINUAR", clique na Seta a Direita
                    "Continuar"...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/resgate1')}
              />
            </ContentSidePageBottonLabel>

            {iscontatoemail || iscontatosms || iscontatozap || iscontatocpf ? (
              // Mostra a rotina para resgatar.
              <ContentBoxLabelPage
                label={'Contato: [ ' + state.nmlogin + ' ]'}
              />
            ) : null}

            {!ischekedicao ? (
              // Conferir se existe edição e se esta correta.
              <ContentSidePageBottonLabel
                istitl={iseditar}
                title={'Checar...: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Checar Edição...'}
                  onclick={handlerCheckEdicao}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {ischekedicao && iscontatocpf && ispergunta ? (
              <ContentSidePageBottonLabel
                istitl={ischekedicao}
                title={'Checar Dados...: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Checar Dados...'}
                  onclick={handlerCheckDados}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {ischekedicao && btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={ischekedicao}
                title={'Enviar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Enviar Dados...'}
                  onclick={goto('/resgate3')}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {/* {iserromsg ? (
            <PanelModalInfoErros
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'auto'}
              titulo={'ERRO em Processamento...'}
              texto={'Mais atenção! Edição obrigatória.'}
              imgbm={enviaron}
              titbm={'Voltar...'}
              onClose={() => setIsErroLogin(false)}
            >
              <CardInfoErros imgcard={''} nmerro={nmrerrologin} />
            </PanelModalInfoErros>
          ) : null} */}

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'75%'}
              titulo={'Acesso Resgate.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate1
                imghlp={resgatehlp3}
                imgcard={resgatepg3}
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

{
  /* 
if (iscontatocpf) {
        if (!ispergunta) {
          setPergunta1(state.perg1);
          setPergunta2(state.perg2);
          setPergunta3(state.perg3);
          setResposta1(state.resp1);
          setResposta2(state.resp2);
          setResposta3(state.resp3);
          setIsPergunta(true);
          if (ischekedicao) {
            setIsConfEdicao(true);
            setIsErroMsg(false);
          }
          if (resposta1 === strresp1){
            setIsStrResp(true);
          } else if (resposta2 === strresp2){
            setIsStrResp(true);
          } else if (resposta3 === strresp3){
            setIsStrResp(true);
          }
          if (isstrresp){
            if (str)

          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição da 1ª Pergunta');
          setTxtLabel('Não foi Editado a 1ª Pergunta');
          setTxtP('Verifique sua edição da 1ª Pergunta');
        } else if (isstrresp2){
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição da 2ª Pergunta');
          setTxtLabel('Não foi Editado a 2ª Pergunta');
          setTxtP('Verifique sua edição da 2ª Pergunta');
        } else if (isstrresp1){
          setImgMsg(ListImg[2]);
          setTxtAga('"ERRO" na Edição da 3ª Pergunta');
          setTxtLabel('Não foi Editado a 3ª Pergunta');
          setTxtP('Verifique sua edição da 3ª Pergunta');
        }



        /////////////////////////////////////////////////////



  //   if (conferido ){
  //     if (iscontatoemail){
  //     setIsContatoEmail(false);
  //     setIsConfEmail(true);
  //     } else if (iscontatosms){
  //       setIsContatoSms(false);
  //       setIsConfSms(true);
  //     } else if (iscontatozap){
  //       setIsContatoZap(false);
  //       setIsConfZap(true);
  //     } else if (iscpf){
  //       setIsCpf(false);
  //       setIsConfCpf(true);
  //     }
  //   } else {
  //     if (iscontatoemail){
  //       setIsContatoEmail(true);
  //       setIsConfEmail(false);
  //     } else if (iscontatosms){
  //       setIsContatoSms(true);
  //       setIsConfSms(false);
  //     } else if (iscontatozap){
  //       setIsContatoZap(true);
  //       setIsConfZap(false);
  //     } else if (iscpf){
  //       setIsCpf(true);
  //       setIsConfCpf(false);
  //     }
  //   }
    
  //   dispatch({ type: AcessoUseActions.setIdNmUser, payload:  });
  //   // dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });


*/
}
