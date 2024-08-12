import React from 'react';

//import { criasmstr } from '../../util/datamomento.tsx';

import * as Pg from '../stylePage.ts';
import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeProvider } from 'styled-components';
import { ThemeResgate } from '../../modulos/themes/ThemeResgate/index.tsx';

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
  isFoneZValid,
  MasckedFoneZ,
  isCpfValid,
  isExistsCPF,
  MasckedCpf
} from '../../../funcs/ErroEdicao.tsx';

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();
  // const [snhmaster, setSnhMaster] = React.useState('');
  const [edicao, setEdicao] = React.useState('');
  const [inputstrid, setInputStrId] = React.useState('');
  const [erroedt, setErroEdt] = React.useState('');
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false); // painel edição
  const [iscontinuar, setIsContinuar] = React.useState(false);
  const [btncontinuar, setBtnContinuar] = React.useState(false);

  const [isconf, setIsConf] = React.useState(false);
  const [btnconfirmation, setBtnConfirmation] = React.useState(false);

  const [isview, setIsView] = React.useState(false);
  const [isprosseg, setIsProsseg] = React.useState(false);
  const [btnprosseguir, setBtnProsseguir] = React.useState(false);

  const [ttView, setTtView] = React.useState('');

  const [statusbtn, setStatusBtn] = React.useState('');
  const [ispnlfooter, setIsPnlFooter] = React.useState(false); // painel footer
  const [maskedemail, setMaskedEmail] = React.useState('');
  const [maskedfonec, setMaskedFoneC] = React.useState('');
  const [maskedfonez, setMaskedFoneZ] = React.useState('');
  const [maskedcpf, setMaskedCpf] = React.useState('');

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
    dispatch({ type: AcessoUseActions.setCpf, payload: '' });
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
      setTtView('EMAIl');
    } else if (state.mdlogin === 2) {
      setErroEdt('Edite nº p/ SMS...');
      setEdicao('Através de : SMS.');
      setTtView('SMS');
    } else if (state.mdlogin === 3) {
      setErroEdt('Edite nº p/ Whatsapp...');
      setEdicao('Através de : Whatsapp.');
      setTtView('WhatsApp');
    } else if (state.mdlogin === 4) {
      setErroEdt('Edite nº p/ CPF...');
      setEdicao('Através de : Perguntas.');
      setTtView('C.P.F');
    }
    //    setSnhMaster(criasmstr);

    setIsEditar(true);
    setIsContinuar(false);
    setBtnContinuar(false);

    setIsConf(false);
    setBtnConfirmation(false);

    setIsProsseg(false);
    setBtnProsseguir(false);

    setIsPnlFooter(true);

    setTtView('');
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

  const handlerEditar = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const valorInput = e.target.value;
      setInputStrId(valorInput);
      setIsContinuar(false);
      setBtnContinuar(false);
      setIsConf(false);
      setBtnConfirmation(false);
      let erro = '';
      let masck = '';
      if (valorInput === '') {
        setErroEdt('Aguardando Edição.');
      } else if (state.mdlogin === 1) {
        if (!isValidarEmail(valorInput)) {
          erro = 'Edição Incompatível.';
        } else {
          masck = MasckedEmail(valorInput);
          setMaskedEmail(masck);
          setBtnContinuar(true);
        }
      } else if (state.mdlogin === 2) {
        if (!isNumber(valorInput)) {
          erro = 'Edite somente Nº...';
        } else if (valorInput.length < 11) {
          erro = 'Continue a Edição...';
        } else if (valorInput.length > 11) {
          erro = 'Excesso de Nº na Edição...';
        } else if (!isFoneCValid(valorInput)) {
          erro = 'Edição Incompatível.';
        } else {
          masck = MasckedFoneC(valorInput);
          setMaskedFoneC(masck);
          setBtnContinuar(true);
        }
      } else if (state.mdlogin === 3) {
        if (!isNumber(valorInput)) {
          erro = 'Edite somente Nº...';
        } else if (valorInput.length < 13) {
          erro = 'Continue a Edição...';
        } else if (valorInput.length > 13) {
          erro = 'Excesso de Nº na Edição...';
        } else if (!isFoneZValid(valorInput)) {
          erro = 'Edição Incompatível.';
        } else {
          masck = MasckedFoneZ(valorInput);
          setMaskedFoneZ(masck);
          setBtnContinuar(true);
        }
      } else if (state.mdlogin === 4) {
        if (!isNumber(valorInput)) {
          erro = 'Edite somente Nº...';
        } else if (valorInput.length < 11) {
          erro = 'Continue a Edição...';
        } else if (valorInput.length > 11) {
          erro = 'Excesso de Nº na Edição...';
        } else if (!isCpfValid(valorInput)) {
          erro = 'Edição Incompatível.';
        } else if (!isExistsCPF(valorInput)) {
          erro = 'Nº de Edição Inválido.';
        } else {
          masck = MasckedCpf(valorInput);
          setMaskedCpf(masck);
          setBtnContinuar(true);
        }
      }
      setErroEdt(erro);
      if (erro === '' && !btncontinuar) {
        if (btncontinuar) {
          setStatusBtn('[ CONTINUAR ?... ]');
        }
      } else {
        setErroEdt(erro);
      }
    },
    [state.mdlogin]
  );

  const handlerBtnContinuar = React.useCallback(() => {
    setStatusBtn('CONFIRMA ?...');
    setBtnConfirmation(true);
    setIsContinuar(true);
    setIsEditar(false);
  }, [btnconfirmation]);
  
  const handlerBtnProsseguir = React.useCallback(() => {
    setStatusBtn('PROSSEGUI ?...');
    setBtnProsseguir(true);
    setIsConf(false);
    setBtnConfirmation(false);
    setIsEditar(false);
  }, [btnprosseguir]);

  

  React.useEffect(() => {
    if ( btnconfirmation && !iscontinuar) {
      if (!iscontinuar)
        setIsContinuar(true);
        setBtnProsseguir
      }
      setIsEditar(false);
      setBtnContinuar(false);
      setIsConf(true);
    }
  }, [btncontinuar]);

React.useEffect(() => {
    if ( btncontinuar && !btnconfirmation) {
      setBtnConfirmation(true);
      setBtnContinuar(false);
    }
  }, [btnconfirmation]);


  


  // setIsConf(false);
  // setMaskedEmail('');
  // setMaskedFoneC('');
  // setMaskedFoneZ('');
  // setMaskedCpf('');
  // setStatusBtn('[ EDIÇÃO... ]');
  // let masck = '';
  // if (state.mdlogin === 1) {
  //   setErroEdt('Aguardando Edição.');
  //   if (inputstrid === '') {
  //     setErroEdt('Edite o seu Email.');
  //   } else if (!isValidarEmail(inputstrid)) {
  //     setErroEdt('Edição Incompatível.');
  //   } else {
  //     masck = MasckedEmail(inputstrid);
  //     setMaskedEmail(masck);
  //     setErroEdt('Possível Edição.');
  //     setStatusBtn('[ CONTINUAR... ]');
  //     setIsConf(true);
  //   }
  // }
  // //////////////////////////
  // if (state.mdlogin === 2) {
  //   setErroEdt('Aguardando Edição.');
  //   if (inputstrid === '') {
  //     setErroEdt('Edite nº Celular.');
  //   } else if (!isNumber(inputstrid)) {
  //     setErroEdt('Edite somente Nº...');
  //   } else if (inputstrid.length < 11) {
  //     setErroEdt('Continue a Edição...');
  //   } else if (inputstrid.length > 11) {
  //     setErroEdt('Excesso de Nº na Edição...');
  //   } else if (!isFoneCValid(inputstrid)) {
  //     setErroEdt('Edição Incompatível.');
  //   } else {
  //     masck = MasckedFoneC(inputstrid);
  //     setMaskedFoneC(masck);
  //     setErroEdt('Possível Edição.');
  //     setStatusBtn('[ CONFIRMAÇÃO... ]');
  //     setIsConf(true);
  //   }
  // }
  // //////////////////////////
  // if (state.mdlogin === 3) {
  //   setErroEdt('Aguardando Edição.');
  //   if (inputstrid === '') {
  //     setErroEdt('Edite nº Celular.');
  //   } else if (!isNumber(inputstrid)) {
  //     setErroEdt('Edite somente Nº...');
  //   } else if (inputstrid.length < 13) {
  //     setErroEdt('Continue a Edição...');
  //   } else if (inputstrid.length > 13) {
  //     setErroEdt('Excesso de Nº na Edição...');
  //   } else if (!isFoneZValid(inputstrid)) {
  //     setErroEdt('Edição Incompatível.');
  //   } else {
  //     masck = MasckedFoneZ(inputstrid);
  //     setMaskedFoneZ(masck);
  //     setErroEdt('Possível Edição.');
  //     setStatusBtn('[ CONFIRMAÇÃO... ]');
  //     setIsConf(true);
  //   }
  // }
  // ////////////////////////////
  // if (state.mdlogin === 4) {
  //   setErroEdt('Aguardando Edição.');
  //   if (inputstrid === '') {
  //     setErroEdt('Edite nº Doc. CPF.');
  //   } else if (!isNumber(inputstrid)) {
  //     setErroEdt('Edite somente Nº...');
  //   } else if (inputstrid.length < 11) {
  //     setErroEdt('Continue a Edição...');
  //   } else if (inputstrid.length > 11) {
  //     setErroEdt('Excesso de Nº na Edição...');
  //   } else if (!isCpfValid(inputstrid)) {
  //     setErroEdt('Edição Incompatível.');
  //   } else if (!isExistsCPF(inputstrid)) {
  //     setErroEdt('Nº de Edição Inválido.');
  //   } else {
  //     masck = MasckedCpf(inputstrid);
  //     setMaskedCpf(masck);
  //     setErroEdt('Possível Edição.');
  //     setStatusBtn('[ CONFIRMAÇÃO... ]');
  //     setIsConf(true);
  //   }
  //   if (isconf) {
  //     setIsEditar(false);
  //     setBtnContinuar(isconf);
  //     //setIsView(false);
  //     //setBtnConfirmation(false);
  //   }
  // }
  //}, [isconf]);

  //  const handlerContinuar = React.useEffect(() => {
  //setIsEditar(false);
  //    setBtnContinuar(false);
  //    setIsView(true);
  //    setBtnConfirmation(true);
  //  }, []);

  ///////////////////////////////////////////////
  //const handlerConfirmation = React.useEffect(() => {
    // setBtnConfirmation(false);
    // setIsConf(false);
    // setIsView(true);
    // setIsProsseg(true);
    // setBtnProsseguir(true);
  //}, []);
  // React.useEffect(() => {
  //   if (!btnconfirmation) {
  //     setBtnConfirmation(true);
  //     if (!isview) {
  //       setIsView(true);
  //     }
  //     if (isconf) {
  //       setIsConf(false);
  //     }
  //   }
  //   // }
  // }, [isview, btnconfirmation]);

  // React.useEffect(() => {
  //   // if (btncontinuar) {
  //   //   if (state.mdlogin === 1) {
  //   //     dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });
  //   //   } else if (state.mdlogin === 2) {
  //   //     dispatch({ type: AcessoUseActions.setFoneC, payload: inputstrid });
  //   //   } else if (state.mdlogin === 3) {
  //   //     dispatch({ type: AcessoUseActions.setFoneZ, payload: inputstrid });
  //   //   } else if (state.mdlogin === 4) {
  //   //     dispatch({ type: AcessoUseActions.setCpf, payload: inputstrid });
  //   //   }
  //   // }
  // }, [btncontinuar, state.mdlogin, inputstrid]);

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
                        name="mail"
                        maxLength={125}
                        value={inputstrid}
                        autoFocus={true}
                        onChange={handlerEditar}
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
                        maxLength={11}
                        value={inputstrid}
                        autoFocus={true}
                        onChange={handlerEditar}
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
                        maxLength={13}
                        value={inputstrid}
                        autoFocus={true}
                        onChange={handlerEditar}
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
                        maxLength={11}
                        value={inputstrid}
                        autoFocus={true}
                        onChange={handlerEditar}
                      />
                      {erroedt !== '' ? <span>{erroedt}</span> : null}
                      <br />
                    </form>
                  </ContentInputPage>
                ) : null}
              </ContentCardBoxCenterPage>
            ) : null}

            {iscontinuar && (
              <ContentCardBoxCenterPage pwidth="100%">
                <ContentCardPageTitle>
                  <h4>{iscontinuar}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={iscontinuar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados par Informação SMS :'}
                >
                  <p>&emsp;&emsp;Já temos em mãos :</p>

                  {state.mdlogin === 1 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{maskedfonec}</span>
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
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            )}

            {isview && (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={isview}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados á Confirmar...:'}
                >
                  <h4>Dados em mãos :</h4>

                  <label>
                    &emsp;&emsp;&emsp;# - ID Empresa....:{' '}
                    <span>{state.idemp}</span>
                  </label>
                  <label>
                    &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
                    <span>{state.nmfant}</span>
                  </label>

                  <h4>Dados Transcritos para "C O N F I R M A Ç Ã O".</h4>

                  {state.mdlogin === 1 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{maskedfonec}</span>
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
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            )}
          </ContentCardBoxMainPage>

          <Pg.DivisionPgHztalPage />

          {btnprosseguir ? (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={ispnlfooter}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel istitl={true} title={'Abortar.: '}>
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Volta...'}
                  onclick={goto('/')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage label={statusbtn} />
              <ContentSidePageBottonLabel istitl={true} title={'Prosseguir ? '}>
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Prosseguir...'}
                  onclick={goto('/')}
                />
              </ContentSidePageBottonLabel>
            </ContentSidePagePanelBotton>
          ) : (

            <ContentSidePageBottonLabel istitl={true} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Volta...'}
                onclick={goto('/resgate1')}
              />
              <ContentBoxLabelPage label={statusbtn} />

              {btncontinuar ? (
                <ContentSidePageBottonLabel
                  istitl={true}
                  title={'Continuar ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Continuar...'}
                    onclick={handlerBtnContinuar}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {btnconfirmation ? (
                <ContentSidePageBottonLabel
                  istitl={true}
                  title={'Confirmar ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Confirmar...'}
                    onclick={() => {
                      alert('btn confirmation');
                    }}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
            </ContentSidePageBottonLabel>
          )}

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
  
                 {isprosseg ? (
                  <PanelConfResgateYellow
                    isbgcolor={isprosseg}
                    titulo={'Resgate para seu Acesso.'}
                    subtitulo={'Dados á Confirmados :'}
                  >
                    <h4>DADOS EM MÃOS :</h4>
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
                        &emsp;&emsp;&emsp;# - E-MAIL : <span>{state.mail}</span>
                      </label>
                    ) : null}
                    {state.mdlogin === 2 ? (
                      <label>
                        &emsp;&emsp;&emsp;# - Celular :{' '}
                        <span>{state.fonec}</span>
                      </label>
                    ) : null}
                    {state.mdlogin === 3 ? (
                      <label>
                        &emsp;&emsp;&emsp;# - Whatsapp :{' '}
                        <span>{state.fonez}</span>
                      </label>
                    ) : null}
                    {state.mdlogin === 4 ? (
                      <label>
                        &emsp;&emsp;&emsp;# - C.P.F. : <span>{state.cpf}</span>
                      </label>
                    ) : null}
                    <br />
                    <h5>Obs:.</h5>
                    <div>
                      <p>
                        &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                        Esquerda...
                      </p>
                      <p>
                        &emsp;&emsp;Caso deseja " Prosseguir.:", clique na Seta
                        à Direita...
                      </p>
                    </div>
                  </PanelConfResgateYellow>
                ) : null}
  








              {btnconfirmation ? (
                <PanelConfResgateYellow
                  isbgcolor={btnconfirmation}
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
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{maskedfonec}</span>
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
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {iseditar && isview ? (
                <PanelConfResgateYellow
                  isbgcolor={isview}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Confirmados :'}
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
                      &emsp;&emsp;&emsp;# - E-MAIL : <span>{state.mail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Celular : <span>{state.fonec}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 3 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - Whatsapp :{' '}
                      <span>{state.fonez}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 4 ? (
                    <label>
                      &emsp;&emsp;&emsp;# - C.P.F. : <span>{state.cpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Continuar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              ) : null}
*/
}

{
  /* ///////// mostra cx footer dos botões ////////////////////// */
}
{
  /*            
            <ContentSidePagePanelBotton
              bordas="3px"
              open={ispnlfooter}
              pwidth="100%"
            >
              {isconf ? (
                <ContentSidePageBottonLabel istitl={isconf} title={'Voltar.: '}>
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setaesq}
                    titbtn={'Volta...'}
                    onclick={goto('/resgate1')}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              <ContentCardPageTitle>
                <h3>{statusbtn}</h3>
              </ContentCardPageTitle>

              {isconf ? (
                <ContentSidePageBottonLabel
                  istitl={isconf}
                  title={'Confirma ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Confirmar...'}
                    onclick={handlerConfirmation}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {isview ? (
                <ContentSidePageBottonLabel
                  istitl={isview}
                  title={'Proceguir.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Prosseguir...'}
                    onclick={handlerContinuar}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {btncontinuar ? (
                <ContentSidePageBottonLabel
                  istitl={isview}
                  title={'Proceguir.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Prosseguir...'}
                    onclick={goto('/resgate3')}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
            </ContentSidePagePanelBotton>
          </ContentCardBoxMainPage> */
}
