import React from 'react';

import { criasmstr } from '../../util/datamomento.tsx';

import * as Pg from '../stylePage.ts';

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

import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate2 } from '../../contentHelp/CardHelpResgate2.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import close from '../../../assets/svgs/close.svg';
import resgatepg2 from '../../../assets/svgs/resgatepg2.svg';
import resgatehlp2 from '../../../assets/svgs/resgatehlp2.svg';

import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

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
  //  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  //  const [iscontatosms, setIsContatoSms] = React.useState(false);
  //  const [iscontatozap, setIsContatoZap] = React.useState(false);
  //  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');

  const [inputstrid, setInputStrId] = React.useState('');
  //  const [txtaga, setTxtAga] = React.useState('');
  //  const [txtlabel, setTxtLabel] = React.useState('');
  //  const [txtp, setTxtP] = React.useState('');

  const [erroedt, setErroEdt] = React.useState('');

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  //  const [errohelp, setErroHelp] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false); // painel edição
  //  const [isconfirmation, setIsConfirmation] = React.useState(false);
  const [btnconfirmation, setBtnConfirmation] = React.useState(false);
  //  const [isview, setIsView] = React.useState(false);
  //  const [iscontinuar, setIsContinuar] = React.useState(false);
  const [btncontinuar, setBtnContinuar] = React.useState(false);
  const [isconf, setIsConf] = React.useState(false);

  const [statusbtn, setStatusBtn] = React.useState('');
  const [ispnlfooter, setIsPnlFooter] = React.useState(false); // painel footer

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
      setEdicao('Através de : Email.');
    } else if (state.mdlogin === 2) {
      setErroEdt('Edite nº p/ SMS...');
      setEdicao('Através de : SMS.');
    } else if (state.mdlogin === 3) {
      setErroEdt('Edite nº p/ Whatsapp...');
      setEdicao('Através de : Whatsapp.');
    } else if (state.mdlogin === 4) {
      setErroEdt('Edite nº p/ CPF...');
      setEdicao('Através de : Perguntas.');
    }
    setSnhMaster(criasmstr);
    setIsEditar(true);
    setBtnContinuar(false);
    setBtnConfirmation(false);
    setIsConf(false);
    setIsPnlFooter(true);
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
    setBtnConfirmation(false);
    setBtnContinuar(false);
    setIsConf(false);
    setStatusBtn('[ EDIÇÃO... ]');
    let masck = '';
    if (state.mdlogin === 1) {
      setErroEdt('Aguardando Edição.');
      if (inputstrid === '') {
        setErroEdt('Edite o seu Email.');
      } else if (!isValidarEmail(inputstrid)) {
        setErroEdt('Edição Incompatível.');
      } else {
        masck = MasckedEmail(inputstrid);
        setMaskedEmail(masck);
        setErroEdt('Possível Edição.');
        setStatusBtn('[ CONTINUAR... ]');
        setIsConf(true);
      }
    }
    //////////////////////////
    if (state.mdlogin === 2 || state.mdlogin === 3) {
      setErroEdt('Aguardando Edição.');
      if (inputstrid === '') {
        setErroEdt('Edite nº Celular.');
      } else if (!isNumber(inputstrid)) {
        setErroEdt('Edite somente Nº...');
      } else if (inputstrid.length < 11) {
        setErroEdt('Continue a Edição...');
      } else if (inputstrid.length > 11) {
        setErroEdt('Excesso de Nº na Edição...');
      } else if (!isFoneCValid(inputstrid)) {
        setErroEdt('Edição Incompatível.');
      } else {
        masck = MasckedFoneC(inputstrid);
        if (state.mdlogin === 2) {
          setMaskedFoneC(masck);
        }
        if (state.mdlogin === 3) {
          setMaskedFoneZ('(+55) ' + masck);
        }
        setIsConf(true);
        setErroEdt('Possível Edição.');
        setStatusBtn('[ CONFIRMAÇÃO... ]');
      }
    }
    ////////////////////////////
    if (state.mdlogin === 4) {
      setErroEdt('Aguardando Edição.');
      if (inputstrid === '') {
        setErroEdt('Edite nº Doc. CPF.');
      } else if (!isNumber(inputstrid)) {
        setErroEdt('Edite somente Nº...');
      } else if (inputstrid.length < 11) {
        setErroEdt('Continue a Edição...');
      } else if (inputstrid.length > 11) {
        setErroEdt('Excesso de Nº na Edição...');
      } else if (!isCpfValid(inputstrid)) {
        setErroEdt('Edição Incompatível.');
      } else if (!isExistsCPF(inputstrid)) {
        setErroEdt('Nº de Edição Inválido.');
      } else {
        masck = MasckedCpf(inputstrid);
        setMaskedCpf(masck);
        setErroEdt('Possível Edição.');
        setStatusBtn('[ CONFIRMAÇÃO... ]');
        setIsConf(true);
      }
    }
    setBtnConfirmation(isconf);
  }, [isconf, inputstrid, state.mdlogin]);

  const handlerConfirmation = () => {
    if (iseditar) {
      setIsEditar(false);
    }
    if (btnconfirmation) {
      setBtnConfirmation(false);
    }
    if (!btncontinuar) {
      setBtnContinuar(true);
    }
  };

  React.useEffect(() => {
    if (btncontinuar) {
      if (state.mdlogin === 1) {
        dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });
      } else if (state.mdlogin === 2) {
        dispatch({ type: AcessoUseActions.setFoneC, payload: inputstrid });
      } else if (state.mdlogin === 3) {
        dispatch({ type: AcessoUseActions.setFoneZ, payload: inputstrid });
      } else if (state.mdlogin === 4) {
        dispatch({ type: AcessoUseActions.setCpf, payload: inputstrid });
      }
    }
  }, [btncontinuar, state.mdlogin, inputstrid]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg2}
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
            {iseditar ? (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>

                {state.mdlogin === 1 ? (
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

                {state.mdlogin === 2 ? (
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

                {state.mdlogin === 3 ? (
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

                {state.mdlogin === 4 ? (
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
              </ContentCardBoxCenterPage>
            ) : (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>
                {btnconfirmation || btncontinuar ? (
                  <Pg.ContainerCardBoxMainPage>
                    <PanelConfResgateYellow
                      isbgcolor={ispnlfooter}
                      titulo={'Resgate para seu Acesso.'}
                      subtitulo={'Dados da Informação :'}
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
                      {state.mdlogin === 1 ? (
                        <label>
                          &emsp;&emsp;&emsp;# - E-MAIL :{' '}
                          <span>{maskedemail}</span>
                        </label>
                      ) : null}
                      {state.mdlogin === 2 ? (
                        <label>
                          &emsp;&emsp;&emsp;# - Celular :{' '}
                          <span>{maskedfonec}</span>
                        </label>
                      ) : null}
                      {state.mdlogin === 3 ? (
                        <label>
                          &emsp;&emsp;&emsp;# - Whatsapp :{' '}
                          <span>{maskedfonez}</span>
                        </label>
                      ) : null}
                      {state.mdlogin === 4 ? (
                        <label>
                          &emsp;&emsp;&emsp;# - C.P.F. :{' '}
                          <span>{maskedcpf}</span>
                        </label>
                      ) : null}
                      <br />
                      <h5>Obs:.</h5>
                      {btnconfirmation ? (
                        <div>
                          <p>
                            &emsp;&emsp;Caso queira " Voltar.: " clique na Seta
                            à Esquerda...
                          </p>
                          <p>
                            &emsp;&emsp;Caso deseja " Confirmar.:", clique na
                            Seta à Direita...
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p>
                            &emsp;&emsp;Caso queira " Abortar.: " clique na Seta
                            à Esquerda...
                          </p>
                          <p>
                            &emsp;&emsp;Caso deseja " Continuar.:", clique na
                            Seta à Direita...
                          </p>
                        </div>
                      )}
                      <br />
                    </PanelConfResgateYellow>
                  </Pg.ContainerCardBoxMainPage>
                ) : null}
              </ContentCardBoxCenterPage>
            )}
          </ContentCardBoxMainPage>

          <Pg.DivisionPgHztalPage />

          {iseditar && btnconfirmation ? (
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
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Voltar...'}
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>

              <ContentBoxLabelPage label={statusbtn} />

              {inputstrid !== '' ? (
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
                  titbtn={'Abortar...'}
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
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'88%'}
              titulo={'Acesso Resgate.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate2
                imghlp={resgatehlp2}
                imgcard={resgatepg2}
                imgbm={close}
                titbm={'Fechar...'}
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
