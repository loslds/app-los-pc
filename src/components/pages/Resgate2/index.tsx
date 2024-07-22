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
//import { ContentCardCollunsCenterPage } from '../ContentCardCollunsCenterPage.tsx';
//mport { ContentInputMainPage } from '../ContentInputMainPage.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';

import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

import {
  isValidarEmail,
  MasckedEmail,
  isNumber,
  isFoneCValid,
  MasckedFoneC,
  isCpfValid,
  isExistsCPF,
  MasckedCpf
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

  const [iseditar, setIsEditar] = React.useState(false); // painel edição
  const [isconfirmation, setIsConfirmation] = React.useState(false);
  const [btnconfirmation, setBtnConfirmation] = React.useState(false);
  const [isview, setIsView] = React.useState(false);
  const [iscontinuar, setIsContinuar] = React.useState(false);
  const [btncontinuar, setBtnContinuar] = React.useState(false);

  const [statusbtn, setStatusBtn] = React.useState('');
  //const [ispnlfooter, setIsPnlFooter] = React.useState(false); // painel footer

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
      setErroEdt('Edite seu Email.');
      setIsContatoEmail(true);
      setEdicao('Resgatar através do Email: ');
      setTxtAga('"ERRO" na Edição do Email');
      setTxtLabel('Email com formato na Editação com ERRO.');
      setTxtP('Verifique sua edição de Email.');
    } else if (state.mdlogin === 2) {
      setErroEdt('Edite nº p/ SMS...');
      setIsContatoSms(true);
      setEdicao('Resgatar através de SMS: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtP('Nº Celular com formato incompativel na Edição para SMS.');
      setTxtP('Verifique Nº Celular para contato com SMS.');
    } else if (state.mdlogin === 3) {
      setErroEdt('Edite nº p/ Whatsapp...');
      setIsContatoZap(true);
      setEdicao('Resgatar através do Whatsapp: ');
      setTxtAga('"ERRO" na Edição do Telefone');
      setTxtLabel('Não foi Editado o Nº Celular para Whatsapp.');
      setTxtP('Verifique Nº Celular para contato com Whatsapp.');
    } else if (state.mdlogin === 4) {
      setErroEdt('Edite nº p/ CPF...');
      setIsContatoCpf(true);
      setEdicao('Resgatar através do C.P.F.: ');
      setTxtAga('"ERRO" na Edição do C.P.F');
      setTxtLabel('Não foi Editado o Nº C.P.F. corretamente.');
      setTxtP('Verifique Nº C.P.F. para identificar Perguntas.');
    }
    setSnhMaster(criasmstr);
    setIsContinuar(false);
    setIsConfirmation(false);
    //setIsPnlFooter(true);
    setIsEditar(true);
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
    setMaskedEmail('');
    setMaskedFoneC('');
    setMaskedFoneZ('');
    setMaskedCpf('');
    setIsEditar(true);
    setIsConfirmation(false);
    let masck = '';
    if (iscontatocpf) {
      setErroEdt('Aguardando Edição.');
      if (inputstrid === '') {
        setIsConfirmation(false);
        setErroEdt('Edite nº Doc. CPF.');
      } else if (!isNumber(inputstrid)) {
        setErroEdt('Edite somente Nº...');
        setIsConfirmation(false);
      } else {
        if (inputstrid.length < 11) {
          setIsConfirmation(false);
          setErroEdt('Continue a Edição...');
        } else if (inputstrid.length > 11) {
          setIsConfirmation(false);
          setErroEdt('Excesso de Nº na Edição...');
        } else {
          if (inputstrid.length === 11) {
            if (!isCpfValid(inputstrid)) {
              setIsConfirmation(false);
              setErroEdt('Edição Incompatível.');
            } else {
              if (isExistsCPF(inputstrid)) {
                masck = MasckedCpf(inputstrid);
                setMaskedCpf(masck);
                setIsConfirmation(true);
                setErroEdt('Possível Edição.');
                setStatusBtn('[ CONFIRMAÇÃO... ]');
              } else {
                setIsConfirmation(false);
                setErroEdt('Nº de Edição Inválido.');
              }
            }
          }
        }
      }
    }
    //////////////////////////
    if (iscontatosms || iscontatozap) {
      if (inputstrid === '') {
        setIsConfirmation(false);
        setErroEdt('Edite nº Celular.');
      } else if (!isNumber) {
        setErroEdt('Edite somente Nº...');
        setIsConfirmation(false);
      } else if (inputstrid.length <= 10) {
        setIsConfirmation(false);
        setErroEdt('Continue a Edição...');
      } else if (inputstrid.length >= 12) {
        setIsConfirmation(false);
        setErroEdt('Ecesso de Nº na Edição...');
      } else if (isFoneCValid(inputstrid)) {
        setIsConfirmation(false);
        setErroEdt('Edição Incompatível.');
      } else {
        masck = MasckedFoneC(inputstrid);
        if (iscontatosms) {
          setMaskedFoneC(masck);
        }
        if (iscontatozap) {
          setMaskedFoneZ('(+55) ' + masck);
        }
        setIsConfirmation(true);
        setErroEdt('Possível Edição.');
        setStatusBtn('[ CONFIRMAÇÃO... ]');
      }
    }
    ////////////////////////////
    if (iscontatoemail) {
      if (inputstrid === '') {
        setIsConfirmation(false);
        setErroEdt('Edite o seu Email.');
      } else if (!isValidarEmail(inputstrid)) {
        setIsConfirmation(false);
        setErroEdt('Edição Incompatível.');
      } else {
        masck = MasckedEmail(inputstrid);
        setMaskedEmail(masck);
        setIsConfirmation(true);
        setErroEdt('Possível Edição.');
        setStatusBtn('[ CONFIRMAÇÃO... ]');
      }
    }

    setBtnConfirmation(isconfirmation);
  }, [inputstrid]);

  const handlerConfirmation = () => {
    setIsEditar(false);
    setIsView(true);
    setIsConfirmation(false);
    setBtnConfirmation(false);
    setIsContinuar(true);
    setBtnContinuar(true);
    setStatusBtn('[ CONTINUAR... ]');
  };

  React.useEffect(() => {
    if (iscontinuar && inputstrid !== '') {
      if (iscontatoemail) {
        dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });
      } else if (iscontatosms) {
        dispatch({ type: AcessoUseActions.setFoneC, payload: inputstrid });
      } else if (iscontatozap) {
        dispatch({ type: AcessoUseActions.setFoneZ, payload: inputstrid });
      } else if (iscontatocpf) {
        dispatch({ type: AcessoUseActions.setCpf, payload: inputstrid });
      }
    }
  }, [
    iscontinuar,
    inputstrid,
    iscontatoemail,
    iscontatosms,
    iscontatozap,
    iscontatocpf,
    dispatch
  ]);
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
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                <h4>{edicao}</h4>
              </ContentCardPageTitle>

              {iseditar && iscontatoemail ? (
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

              {iseditar && iscontatosms ? (
                <ContentInputPage>
                  <form name="sms">
                    <br />
                    <label>Fone.*DDD *Nº :</label>
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

              {iseditar && iscontatozap ? (
                <ContentInputPage>
                  <form name="zap">
                    <br />
                    <label>Fone.*DDD *Nº :</label>
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

              {iseditar && iscontatocpf ? (
                <ContentInputPage>
                  <form name="cpf">
                    <br />
                    <label>C.P.F. *Nº Doc.:</label>
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

              {isview && isconfirmation ? (
                <PanelConfResgateYellow
                  isbgcolor={isconfirmation}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Confirmação da Informação :'}
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
                    &emsp;&emsp;Caso deseja " Confirmar.:", clique na Seta à
                    Direita...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}

              {isview && iscontinuar ? (
                <PanelConfResgateYellow
                  isbgcolor={iscontinuar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Validados :'}
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
              ) : null}

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
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          {iseditar || btnconfirmation ? (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={iseditar}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel
                istitl={iseditar}
                title={'Abortar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Voltar...'}
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>
              {inputstrid === '' ? (
                <ContentBoxLabelPage label={'[ E D I Ç Ã O ]'} />
              ) : (
                <ContentBoxLabelPage label={statusbtn} />
              )}
              {btnconfirmation && inputstrid !== '' ? (
                <ContentSidePageBottonLabel
                  istitl={btnconfirmation}
                  title={'Confirmar.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight="40px"
                    img={setadir}
                    titbtn=" Confirmar..."
                    onclick={handlerConfirmation}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
            </ContentSidePagePanelBotton>
          ) : (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={btncontinuar}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel
                istitl={btncontinuar}
                title={'Abortar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Voltar...'}
                  onclick={goto('/resgate')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage label={statusbtn} />
              <ContentSidePageBottonLabel
                istitl={btncontinuar}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={goto('/resgate3')}
                />
              </ContentSidePageBottonLabel>
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
