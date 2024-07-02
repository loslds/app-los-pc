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
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import sateliteoff from '../../../assets/svgs/sateliteoff.svg';
import nuvenfindoff from '../../../assets/svgs/nuvenfindoff.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

//export const ListImg = [sateliteoff, nuvenfindoff, notedicao];

export function IsValidEmail(email: string): boolean {
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

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();

  //const [idempresa, setIdEmpresa] = React.useState(0);
  //const [fantempresa, setFantEmpresa] = React.useState('');

  const [snhmaster, setSnhMaster] = React.useState('');

  //const [mdlogin, setMdLogin] = React.useState(0);
  //const [nmlogin, setNmLogin] = React.useState('Opções :');

  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);

  const [edicao, setEdicao] = React.useState('');

  const [strid, setStrId] = React.useState('');

  const [nrerrochecked, setNrErroChecked] = React.useState(0);
  const [imgmsg, setImgMsg] = React.useState(notedicao);
  const [iserromsg, setIsErroMsg] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  const [iseditar, setIsEditar] = React.useState(false);
  const [ischeckedicao, setIsCheckEdicao] = React.useState(false);
  const [isconferir, setIsConferir] = React.useState(false);
  const [isconfirmar, setIsConfirmar] = React.useState(false);
  const [iscontinuar, setIsContinuar] = React.useState(false);

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

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

    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgate: Contato Usuário'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Contato :' + state.nmlogin + '.'
    });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
    setEdicao('');
    if (state.mdlogin === 1) {
      setIsContatoEmail(true);
      setEdicao('Resgatar através do Email: ');
    } else if (state.mdlogin === 2) {
      setIsContatoSms(true);
      setEdicao('Resgatar através de SMS: ');
    } else if (state.mdlogin === 3) {
      setIsContatoZap(true);
      setEdicao('Resgatar através do Whatsapp: ');
    } else if (state.mdlogin === 4) {
      setIsContatoCpf(true);
      setEdicao('Resgatar através do C.P.F.: ');
    }
    setOnPanel(false);
    setHelpPg(false);
    setIsEditar(true);
    setIsErroMsg(false);
    setNrErroChecked(0);
    setIsCheckEdicao(false);
    setIsConferir(false);
    setIsConfirmar(false);
    setIsContinuar(false);
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

  React.useEffect(() => {
    // setIsEditar(true);
    // setIsCheckEdicao(false);
    // setIsErroMsg(false);
    // setNrErroChecked(0);
    // setIsConferir(false);
    // setIsConfirmar(false);
    // setIsContinuar(false);
    if (strid === '') {
      if (ischeckedicao) {
        setIsCheckEdicao(false);
      }
    } else {
      setIsCheckEdicao(true);
    }
  }, [strid, ischeckedicao]);

  const handlerChecarEdicao = () => {
    // setIsEditar(true);
    //    setIsCheckEdicao(false);
    // setIsErroMsg(false);
    // setIsConferir(false);
    // setIsConfirmar(false);
    // setIsContinuar(false);

    setNrErroChecked(0);
    let rtn = false;
    if (iscontatoemail) {
      rtn = IsValidEmail(strid);
      if (!rtn) {
        setNrErroChecked(1);
      }
    } else if (iscontatosms) {
      rtn = CheckFone(strid);
      if (!rtn) {
        setNrErroChecked(2);
      }
    } else if (iscontatozap) {
      rtn = CheckFone(strid);
      if (!rtn) {
        setNrErroChecked(3);
      }
    } else if (iscontatocpf) {
      rtn = CheckCPF(strid);
      if (!rtn) {
        setNrErroChecked(4);
      }
    } else {
      setNrErroChecked(0);
    }
    if (nrerrochecked > 0) {
      if (nrerrochecked == 1) {
        setTxtAga('"ERRO" na Edição do Email');
        setTxtLabel('Email com formato na Editação com ERRO.');
        setTxtP('Verifique sua edição de Email.');
      } else if (nrerrochecked == 2) {
        setTxtAga('"ERRO" na Edição do Telefone');
        setTxtP('Nº Celular com formato incompativel na Edição para SMS.');
        setTxtP('Verifique Nº Celular para contato com SMS.');
      } else if (nrerrochecked == 3) {
        setTxtAga('"ERRO" na Edição do Telefone');
        setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
        setTxtP('Verifique Nº Celular para contato com Whatsapp.');
      } else if (nrerrochecked == 4) {
        setTxtAga('"ERRO" na Edição do C.P.F');
        setTxtLabel('Não foi Editado o Nº C.P.F. corretamente.');
        setTxtP('Verifique Nº C.P.F. para identificar Perguntas.');
      }
      setIsEditar(true);
      //      setIsCheckEdicao(false);
      setIsErroMsg(true);
      setIsConferir(false);
      setIsConfirmar(false);
      setIsContinuar(false);
    } else {
      setIsEditar(false);
      setNrErroChecked(0);
      setIsErroMsg(false);
      setIsConfirmar(false);
      setIsContinuar(false);
      setIsConferir(true);
    }
  };

  React.useEffect(() => {
    if (isconfirmar) {
      dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
      dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    }
  }, [isconfirmar, dispatch]);

  const handlerConfirmarEdicao = () => {
    setIsEditar(false);
    setIsCheckEdicao(false);
    setNrErroChecked(0);
    setIsErroMsg(false);
    setNrErroChecked(0);
    setIsConferir(false);
    setIsConfirmar(false);
    setIsContinuar(true);
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
          <label>State strid........: {strid}</label>
          <label>
            State iseditar.....: {iseditar ? 'verdadeiro' : 'falso'}
          </label>
          <label>
            State ischeckedicao: {ischeckedicao ? 'verdadeiro' : 'falso'}
          </label>
          <label>
            State iserromsg....: {iserromsg ? 'verdadeiro' : 'falso'}
          </label>
          <label>State nrerrochecked: {nrerrochecked}</label>
          <label>
            State isconferir...: {isconferir ? 'verdadeiro' : 'falso'}
          </label>
          <label>
            State isconfirmar..: {isconfirmar ? 'verdadeiro' : 'falso'}
          </label>
          <label>
            State iscontinuar.: {iscontinuar ? 'verdadeiro' : 'falso'}
          </label>
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

              {/* // panel edição aberto e panel confirmação fechado */}
              {iseditar ? (
                <ContentCardCollunsCenterPage
                  openccp={iseditar}
                  pwidth={'180px'}
                >
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
                    {iscontatocpf ? (
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
                  </ContentInputMainPage>
                </ContentCardCollunsCenterPage>
              ) : null}

              {/* // Após a edição concluida : panel edição fechado e panel confirmação aberto */}

              {isconferir ? (
                <ContentCardCollunsCenterPage
                  openccp={isconferir}
                  pwidth={'180px'}
                >
                  <PanelConfResgateYellow
                    isbgcolor={isconferir}
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
                    <br />
                    <h4>&emsp;{edicao} </h4>
                    <label>&emsp;# - {strid}</label>
                    <br />
                    <p>
                      &emsp;&emsp;Precisamos que você confirme se deseja
                      continuar...
                    </p>
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira mudar, click em " Voltar.: " na
                      seta à esquerda para " Voltar Pagina Anterior "...
                    </p>
                    <p>
                      &emsp;&emsp;Caso " Confirmar.: ", clique na Seta a Direita
                      " Confirmar Edição "...
                    </p>
                    <br />
                  </PanelConfResgateYellow>
                </ContentCardCollunsCenterPage>
              ) : null}

              {/* // Após a edição concluida : panel edição fechado e panel confirmação aberto */}

              {isconfirmar ? (
                <ContentCardCollunsCenterPage
                  openccp={isconfirmar}
                  pwidth={'180px'}
                >
                  <PanelConfResgateYellow
                    isbgcolor={isconfirmar}
                    titulo={'Resgate para seu Acesso.'}
                    subtitulo={'Dados Requeridos :'}
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
                        &emsp;&emsp;&emsp;# - E-MAIL : <span>{strid}</span>
                      </label>
                    ) : null}
                    {iscontatosms || iscontatozap ? (
                      <label>
                        &emsp;&emsp;&emsp;# - Celular : <span>{strid}</span>
                      </label>
                    ) : null}
                    {iscontatocpf ? (
                      <label>
                        &emsp;&emsp;&emsp;# - C.P.F. : <span>{strid}</span>
                      </label>
                    ) : null}
                    <br />
                    <p>&emsp;&emsp;Você ainda pode Voltar ou Continuar...</p>
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja prosseguir, clique na Seta a
                      Direita...
                    </p>
                    <br />
                  </PanelConfResgateYellow>
                </ContentCardCollunsCenterPage>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>
          {/* // abre pg dos Help`s */}
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
            <ContentBoxLabelPage label={'Processo de Resgate.'} />
            {iscontinuar ? (
              // Após confirmar proceguir para proxima pagina.
              <ContentSidePageBottonLabel
                istitl={iscontinuar}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/resgate3')}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {isconfirmar ? (
              // Confirma Dados ou não.
              <ContentSidePageBottonLabel
                istitl={isconfirmar}
                title={'Confirmar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Confirmar Edição...'}
                  onclick={handlerConfirmarEdicao}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {ischeckedicao ? (
              // Checa a edição se existir verifica se esta correta.
              <ContentSidePageBottonLabel
                istitl={ischeckedicao}
                title={'Checar...: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Checar Edição...'}
                  onclick={handlerChecarEdicao}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

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
