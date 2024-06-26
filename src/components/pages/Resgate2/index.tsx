import React from 'react';

//import { ListEmps } from '../../../books/ListEmps.tsx';
//import { ListUser } from '../../../books/ListUsers .tsx';

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
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
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
export function CheckResp(str: string) {
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
  //const [isconfcpf, setIsConfCpf] = React.useState(false);

  //const [isstrvalue, setIsStrValue] = React.useState(false);
  const [strid, setStrId] = React.useState('');
  //const [strpsw, setStrPsw] = React.useState('');

  const [ischekedicao, setIsChekEdicao] = React.useState(false);
  const [isconfedicao, setIsConfEdicao] = React.useState(false);

  const [imgmsg, setImgMsg] = React.useState('');
  //const [isacesso, setIsAcesso] = React.useState(false);
  const [iserromsg, setIsErroMsg] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  //const [isconexao, setIsConexao] = React.useState(false);
  //const [isconectedoff, setIsConectedoff] = React.useState(false);
  //const [isfindacces, setIsFindAcces] = React.useState(false);
  //const [isfindingoff, setIsFindingoff] = React.useState(false);
  //const [isusers, setIsUsers] = React.useState(false);

  //const [isloggedoff, setIsLoggedoff] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');

  //const [ispergunta, setIsPergunta] = React.useState(false);
  //const [isresposta, setIsResposta] = React.useState(false);
  const [pergunta1, setPergunta1] = React.useState('');
  const [resposta1, setResposta1] = React.useState('');
  const [pergunta2, setPergunta2] = React.useState('');
  const [resposta2, setResposta2] = React.useState('');
  const [pergunta3, setPergunta3] = React.useState('');
  const [resposta3, setResposta3] = React.useState('');
  //const [isstrresp, setIsStrResp] = React.useState(false);
  const [strresp1, setStrResp1] = React.useState('');
  const [erroresp1, setErroResp1] = React.useState(false);
  const [strresp2, setStrResp2] = React.useState('');
  const [erroresp2, setErroResp2] = React.useState(false);
  const [strresp3, setStrResp3] = React.useState('');
  const [erroresp3, setErroResp3] = React.useState(false);

  const [btnchekedicao, setBtnCheckEdicao] = React.useState(false);
  const [btnchekdados, setBtnCheckDados] = React.useState(false);
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

    setEdicao('');
    if (state.mdlogin === 1) {
      setIsContatoEmail(true);
      setEdicao('Resgatar através do Email: ');
      //   setIsContatoSms(false);
      //   setIsContatoZap(false);
      //   setIsContatoCpf(false);
      //   setIsPergunta(false);
    } else if (state.mdlogin === 2) {
      // setIsContatoEmail(false);
      setIsContatoSms(true);
      setEdicao('Resgatar através de SMS: ');
      // setIsContatoZap(false);
      // setIsContatoCpf(false);
      // setIsPergunta(false);
    } else if (state.mdlogin === 3) {
      // setIsContatoEmail(false);
      // setIsContatoSms(false);
      setIsContatoZap(true);
      setEdicao('Resgatar através do Whatsapp: ');
      // setIsContatoCpf(false);
      // setIsPergunta(false);
    } else if (state.mdlogin === 4) {
      // setIsContatoEmail(false);
      // setIsContatoSms(false);
      // setIsContatoZap(false);
      setIsContatoCpf(true);
      setEdicao('Resgatar através do C.P.F.: ');
      //setIsPergunta(false);
    }
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
    setEdicao('');
    setIsEditar(true);
    setStart(true);
    setBtnCheckEdicao(true);
    setBtnCheckDados(false);
    setBtnContinua(false);
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
    if (iscontatoemail) {
      setIsChekEdicao(CheckEmail(strid));
    } else if (iscontatosms) {
      setIsChekEdicao(CheckFone(strid));
    } else if (iscontatozap) {
      setIsChekEdicao(CheckFone(strid));
    } else {
      if (iscontatocpf) {
        let rtn = CheckCPF(strid);
        if (!rtn) {
          setIsChekEdicao(false);
        } else {
          setErroResp1(true);
          rtn = CheckResp(strresp1);
          if (!rtn) {
            setIsChekEdicao(false);
            setErroResp1(false);
          } else {
            setErroResp2(true);
            rtn = CheckResp(strresp2);
            if (!rtn) {
              setIsChekEdicao(false);
              setErroResp2(false);
            } else {
              setErroResp3(true);
              rtn = CheckResp(strresp3);
              if (!rtn) {
                setErroResp3(false);
                setIsChekEdicao(false);
              }
            }
          }
        }
      }
    }
  };

  React.useEffect(() => {
    if (!ischekedicao && !erroresp1 && !erroresp2 && !erroresp3) {
      if (!iseditar) {
        setIsEditar(true);
      }
      if (!btnchekedicao) {
        setBtnCheckEdicao(true);
      }
      if (btnchekdados) {
        setBtnCheckDados(false);
      }
      if (btncontinua) {
        setBtnContinua(false);
      }
      setImgMsg(ListImg[2]);
      if (iscontatoemail) {
        setTxtAga('"ERRO" na Edição do Email');
        setTxtLabel('Não foi Editado o EMAIL.');
        setTxtP('Verifique sua edição de Email.');
      } else if (iscontatosms) {
        setTxtAga('"ERRO" na Edição do Telefone');
        setTxtLabel('Não foi Editado o Nº Celular para SMS.');
        setTxtP('Verifique sua edição do Celular para SMS.');
      } else if (iscontatozap) {
        setTxtAga('"ERRO" na Edição do Telefone');
        setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
        setTxtP('Verifique sua edição do Celular para Whatsapp.');
      } else {
        if (iscontatocpf) {
          setTxtAga('"ERRO" na Edição do C.P.F');
          setTxtLabel('Não foi Editado o Nº C.P.F.');
          setTxtP('Verifique sua edição do C.P.F.');
        } else {
          setTxtAga('"ERRO" na Edição em Resposta.');
          if (erroresp1) {
            setTxtLabel('Não foi Editado a 1º Resposta');
            setTxtP('Verifique sua edição da 1º Resposta.');
          } else if (erroresp2) {
            setTxtLabel('Não foi Editado a 2º Resposta');
            setTxtP('Verifique sua edição da 2º Resposta.');
          } else if (erroresp3) {
            setTxtLabel('Não foi Editado a 3º Resposta');
            setTxtP('Verifique sua edição da 3º Resposta.');
          }
        }
      }
    } else {
      if (iseditar) {
        setIsEditar(false);
      }
      if (!isconfedicao) {
        setIsConfEdicao(true);
      }
      if (btnchekedicao) {
        setBtnCheckEdicao(false);
      }
      if (!btnchekdados) {
        setBtnCheckDados(true);
      }
      if (btncontinua) {
        setBtnContinua(false);
      }
    }
  }, [
    ischekedicao,
    iseditar,
    erroresp1,
    erroresp2,
    erroresp3,
    btnchekedicao,
    btnchekdados,
    btncontinua,
    isconfedicao,
    iscontatoemail,
    iscontatosms,
    iscontatozap,
    iscontatocpf
  ]);

  const handlerCheckDados = () => {
    setBtnContinua(false);
    //   if (iscontatoemail || iscontatosms || iscontatozap ){
    //     setBtnContinua(true);
    //   } else if (iscontatocpf && ispergunta){
    //     if ()
    //   }

    //   ){
    //     if (strid === state.mail){
    //       setBtnContinua(true);
    //     }
    //   } else if (iscontatosms){
    //     if (strid === state.fonec){
    //       setBtnContinua(true);
    //     }
    //   } else if (iscontatozap){
    //     if (strid === state.fonec){
    //       setBtnContinua(true);
    //   }
    // }
    //   } else if (iscontatocpf) {
    //     setImgMsg(ListImg[2]);
    //     setTxtAga('"ERRO" na Edição do C.P.F');
    //     setTxtLabel('Não foi Editado o Nº C.P.F.');
    //     setTxtP('Verifique sua edição do C.P.F.');
    //   }

    //   if (isconfedicao) {
    //     setBtnContinua(true);
    //   } else {
    //     setBtnContinua(false);
    //   }
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

              {/* // Após a edição concluida sem faltas das mesmas*/}
              <ContentCardCollunsCenterPage
                openccp={isconfedicao}
                pwidth={'180px'}
              >
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
                  <br />
                  <h4>&emsp;{edicao} </h4>

                  {iscontatocpf ? (
                    <div>
                      <label>&emsp;&emsp;# - {strid}</label>
                      <h4>&emsp;{state.perg1}</h4>
                      <label>&emsp;# - {strresp1}</label>
                      <h4>&emsp;{state.perg2}</h4>
                      <label>&emsp;# - {strresp1}</label>
                      <h4>&emsp;{state.perg3}</h4>
                      <label>&emsp;# - {strresp3}</label>
                    </div>
                  ) : (
                    <div>
                      <label>&emsp;# - {strid}</label>
                    </div>
                  )}
                  <br />
                  <p>
                    &emsp;&emsp;Precisamos que você confirme se deseja
                    continuar...
                  </p>
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira mudar, click em " Voltar.: " na seta
                    à esquerda para " Voltar Pagina Anterior "...
                  </p>
                  <p>
                    &emsp;&emsp;Caso " Checar.: ", clique na Seta a Direita "
                    Checar a Edição "...
                  </p>
                  <br />
                </PanelConfResgateYellow>
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
            <ContentBoxLabelPage label={'Contato: [ ' + state.nmlogin + ' ]'} />

            {btnchekedicao || iseditar ? (
              // Conferir se existe edição e se esta correta.
              <ContentSidePageBottonLabel
                istitl={btnchekedicao ? btnchekedicao : iseditar}
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

            {btnchekdados ? (
              // Confirma Dados ou não Confirma.
              <ContentSidePageBottonLabel
                istitl={btnchekdados}
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

            {btncontinua ? (
              // Confirma Dados ou não Confirma.
              <ContentSidePageBottonLabel
                istitl={btncontinua}
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
