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

import {IEmps,ListEmps, FindEmpsID } from '../../../books/ListEmps.tsx';

import {
  isValidarEmail,
  MasckedEmail,
  isNumber,
  MaskNumberZero,

  isFoneCValid,
  MasckedFoneC,
  isFoneZValid,
  MasckedFoneZ,
  isCpfValid,
  isExistsCPF,
  MasckedCpf,
  MaskSNumber,
  
  MaskSString,
  MaskSEmail,
  MaskSFoneC,
  MaskSFoneZ,
  MaskSCPF
} from '../../../funcs/ErroEdicao.tsx';

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();
  // const [snhmaster, setSnhMaster] = React.useState('');
  const [edicao, setEdicao] = React.useState('');
  const [inputstrid, setInputStrId] = React.useState('');

  const [erroedt, setErroEdt] = React.useState('');
  const [errodb, setErroDb] = React.useState(false);
  const [titleagadb, setTitelAgaDb] = React.useState('');
  const [stitlelabeldb, setSTitleLabelDb] = React.useState('');
  const [testoerrodb, setTestoErroDb] = React.useState('');
  const [msgerrodbemps, setMsgErroDbEmps] = React.useState('');
  const [msgerrodbusers, setMsgErroDbUsers] = React.useState('');
  const [msgerrodbfones, setMsgErroDbFones] = React.useState('');
  const [msgerrodbacessos,setMsgErroDbAcessos] = React.useState('');

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false); // painel edição
  const [isvalidelst, setIsValideLst] = React.useState(false);

  const [btncontinuar, setBtnContinuar] = React.useState(false);
  const [btnconfirmation, setBtnConfirmation] = React.useState(false);

  const [btncomparar, setBtnComparar] = React.useState(false);
  const [btnreceives, setBtnReceives] = React.useState(false);
  const [btnresgatar, setBtnResgatar] = React.useState(false);
  const [btnenviar, setBtnEnviar] = React.useState(false);

  const [labelbtn, setLabelBtn] = React.useState('');

  const [statusbtn, setStatusBtn] = React.useState('');
  const [ispnlfooter, setIsPnlFooter] = React.useState(false);

  const [maskedidemp, setMaskedIdEmp] = React.useState('');
  const [maskednmfant, setMaskedNmFant] = React.useState('');

  const [idpseudonimo, setIdPseudonimo] = React.useState('');
  const [pswusuario, setPswUsuario] = React.useState('');
  const [maskedidnmuser, setMaskedIdNmUser] = React.useState('');
  const [maskedpswuser, setMaskedPswUser] = React.useState('');
  const [maskedemail, setMaskedEmail] = React.useState('');
  const [maskedfonec, setMaskedFoneC] = React.useState('');
  const [maskedfonez, setMaskedFoneZ] = React.useState('');
  const [maskedcpf, setMaskedCpf] = React.useState('');

  const [masksidemp, setMaskSIdEmp] = React.useState('');
  const [masksnmemp, setMaskSNmEmp] = React.useState('');
  const [masksnmiduser, setMaskSIdUser] = React.useState('');
  const [maskspswuser, setMaskSPswUser] = React.useState('');
  const [masksemail, setMaskSEmail] = React.useState('');
  const [masksfonec, setMaskSFoneC] = React.useState('');
  const [masksfonez, setMaskSFoneZ] = React.useState('');
  const [maskscpf, setMaskSCpf] = React.useState('');

  const [empsDetails, setEmpsDetails] = React.useState<Omit<IEmps, 'id'>[]>([]);

  const [bperg1, setBPerg1] = React.useState(false);
  const [bperg2, setBPerg2] = React.useState(false);
  const [bperg3, setBPerg3] = React.useState(false);
  const [resp1, setRerp1] = React.useState('');
  const [resp2, setRerp2] = React.useState('');
  const [resp3, setRerp3] = React.useState('');
  const [dbperg1, setDBPerg1] = React.useState('');
  const [dbperg2, setDBPerg2] = React.useState('');
  const [dbperg3, setDBPerg3] = React.useState('');
  const [dbsresp1, setDbRerp1] = React.useState('');
  const [dbsresp2, setDbRerp2] = React.useState('');
  const [dbsresp3, setDbRerp3] = React.useState('');

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
    dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });
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
      setLabelBtn('EMAIl');
    } else if (state.mdlogin === 2) {
      setErroEdt('Edite nº p/ SMS...');
      setEdicao('Através de : SMS.');
      setLabelBtn('SMS');
    } else if (state.mdlogin === 3) {
      setErroEdt('Edite nº p/ Whatsapp...');
      setEdicao('Através de : Whatsapp.');
      setLabelBtn('WhatsApp');
    } else if (state.mdlogin === 4) {
      setErroEdt('Edite nº p/ CPF...');
      setEdicao('Através de : Perguntas.');
      setLabelBtn('C.P.F');
    }
    //    setSnhMaster(criasmstr);

    setIsEditar(true);
    //setIsContinuar(false);
    setBtnContinuar(false);

    setBtnConfirmation(false);
    setBtnReceives(false);
    setBtnComparar(false);
    setBtnResgatar(false);
    setBtnEnviar(false);

    setIsPnlFooter(false);
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
      setIdPseudonimo('');
      setIsValideLst(false);
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
          setIsValideLst(true);
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
          setIsValideLst(true);
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
          setIsValideLst(true);
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
          setIsValideLst(true);
        }
      }
      if (erro !== '') {
        if ( isvalidelst ) {
          setIdPseudonimo(valorInput);
        }
      }
    },
    [state.mdlogin]
  );

  const handlerBtnIsvalideLst = React.useCallback(() => {
    setStatusBtn('CONTINUAR ?...');
    setIsEditar(false);
    setIsValideLst(false);
    setBtnContinuar(true);
  }, [btncontinuar]);

  const handlerBtnContinuar = React.useCallback(() => {
    setErroDb(false);
    setTitelAgaDb('ERRO ao verificar DataCenter ');
    setSTitleLabelDb('Dados não encontrados ou Corrompidos');
    setTestoErroDb('');
    setMsgErroDbEmps('');
    setMsgErroDbUsers('');
    setMsgErroDbFones('');
    setMsgErroDbAcessos('');
    
    
    



    /* Busca por dados Empresa */
    const resultemp = FindEmpsID(state.idemp);
    if (!resultemp) {
      setMsgErroDbEmps('"EMPRESA" não encontrada !');
    } else {
      setEmpsDetails([...empsDetails, resultemp]);
      const foundEmpsDetails = ListEmps.filter(emp => emp.id === state.idemp && emp.fant === state.nmfant)
      .map(emp => ({
          id: emp.id,
          fant: emp.fant
      }));
      if (foundEmpsDetails.length === 0) {
        setMsgErroDbEmps('"EMPRESA" não consta Nome Fantasia ou Dados Corrompidos!');        
      }
    };
    if (!errodb){
      if (msgerrodbemps !== '') {
        setTestoErroDb((prevState) => prevState + '<p>' + msgerrodbemps + '</p>');
      }
    }





    if (!errodb){
      if (msgerrodbusers !== '') {
        setTestoErroDb((prevState) => prevState + '<p>' + msgerrodbusers + '</p>');
      }
    }

    /* Busca por dados Empresa */
    if (state.mdlogin === 1) {}
    if (state.mdlogin === 2) {}
    if (state.mdlogin === 3) {}
    if (state.mdlogin === 4) {}




    if ()    



    setStatusBtn('CONFIRMAR ?...');    
    setBtnConfirmation(true);
  }, [btnconfirmation]);

  // const handlerBtnConfirmation = React.useCallback(() => {
  //   setStatusBtn('COMPARAR ?...');
  //   setBtnConfirmation(false);
  //   //
  //   if (state.idemp !== 0) {
  //     let masknr = MaskNumberZero(5, state.idemp);
  //     setMaskedIdEmp(masknr);
  //   }
  //   if (state.nmfant !== '') {
  //     let mskstr = MaskSString(state.nmfant);
  //     setMaskedNmFant(mskstr);
  //     mskstr = MsskdString(inputstrid);
  //     setMaskedIdNmUser(mskstr);

  //   let masckes = '';
  //   if (state.mdlogin === 1) {
  //     masckes = MaskSEmail(maskedemail);
  //     setMaskSEmail(masckes);
  //     setBtnComparar(true);
  //   } else if (state.mdlogin === 2) {
  //     masckes = MaskSFoneC(maskedfonec);
  //     setMaskSFoneC(masckes);
  //     setBtnComparar(true);
  //   } else if (state.mdlogin === 3) {
  //     masckes = MaskSFoneZ(maskedfonez);
  //     setMaskSFoneZ(masckes);
  //     setBtnComparar(true);
  //   } else if (state.mdlogin === 4) {
  //     masckes = MaskSCPF(maskedcpf);
  //     setMaskSCpf(masckes);
  //     setBtnComparar(true);
  //   }
  // }, [btncomparar]);

  // const handlerBtnComparar = React.useCallback(() => {
  //   setStatusBtn('RESGATAR ?...');
  //   setBtnComparar(false);
  //   setBtnReceives(true);
  // }, [btnreceives]);

  // const handlerBtnResgatar = React.useCallback(() => {
  //   setStatusBtn('ENVIAR ?...');
  //   setIsPnlFooter(false);
  //   setBtnReceives(false);
  //   setBtnResgatar(true);
  // }, [btnresgatar]);

  // React.useEffect(() => {
  //   if (btncomparar) {
  //     if (state.mdlogin === 1) { dispatch({ type: AcessoUseActions.setMail, payload: inputstrid });}
  //     else if (state.mdlogin === 2) { dispatch({ type: AcessoUseActions.setFoneC, payload: inputstrid });}
  //     else if (state.mdlogin === 3) { dispatch({ type: AcessoUseActions.setFoneZ, payload: inputstrid });}
  //     else if (state.mdlogin === 4) { dispatch({ type: AcessoUseActions.setCpf, payload: inputstrid });}
  //   }, [btncomparar, state.mdlogin, inputstrid])}

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
            {iseditar && (
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
            )}

            {btncontinuar ? (
              <ContentCardBoxCenterPage pwidth="100%">
                <ContentCardPageTitle>
                  <h4>{btncontinuar}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={btncontinuar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados editados :'}
                >
                  
                  <p>&emsp;&emsp;Já temos em mãos : <span>{edicao}</span></p>
                  <label>
                    &emsp;&emsp# - ID Empresa....: <span>{state.idemp}</span>
                  </label>
                  <label>
                    &emsp;&emsp# - Nome Fantasia: <span>{state.nmfant}</span>
                  </label>
                  {state.mdlogin === 1 ? (
                    <label>
                      &emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;&emsp;# - Celular : <span>{maskedfonec}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 3 ? (
                    <label>
                      &emsp;&emsp;# - Whatsapp : <span>{maskedfonez}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 4 ? (
                    <label>
                      &emsp;&emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;Caso deseja " Continuar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            ): null}

            {btnconfirmation && (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={btnconfirmation}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados Confirmados...:'}
                >
                  <h4>{edicao}</h4>
                  <p>&emsp;&emsp;Já temos em mãos :</p>
                  <label>
                    &emsp;# - ID Empresa....: <span>{maskedidemp}</span>
                  </label>
                  <label>
                    &emsp;# - Nome Fantasia: <span>{maskednmfant}</span>
                  </label>
                  {state.mdlogin === 1 ? (
                    <label>
                      &emsp;# - E-MAIL : <span>{maskedemail}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 2 ? (
                    <label>
                      &emsp;# - Celular : <span>{maskedfonec}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 3 ? (
                    <label>
                      &emsp;# - Whatsapp : <span>{maskedfonez}</span>
                    </label>
                  ) : null}
                  {state.mdlogin === 4 ? (
                    <label>
                      &emsp;# - C.P.F. : <span>{maskedcpf}</span>
                    </label>
                  ) : null}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            )}

            {btnreceives && (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={btnreceives}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Resgatando Dados para Comparação...:'}
                >
                  <h3>Resgate de Dados "DATA BASE" :</h3>
                  <label>
                    &emsp;BD- ID Empresa....: : <span>{masksemail}</span>
                  </label>
                  <label>
                    &emsp;DB- Nome Fantasia: <span>{maskednmfant}</span>
                  </label>
                  <label>
                    &emsp;# - Nome Fantasia: <span>{maskednmfant}</span>
                  </label>
                  {state.mdlogin === 1 && (
                    <div>
                      <label>
                        &emsp;BD- E-MAIL : <span>{masksemail}</span>
                      </label>
                      <label>
                        &emsp;# - E-MAIL : <span>{maskedemail}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 2 && (
                    <div>
                      <label>
                        &emsp;BD- Celular : <span>{masksfonec}</span>
                      </label>
                      <label>
                        &emsp;# - Celular : <span>{maskedfonec}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 3 && (
                    <div>
                      <label>
                        &emsp;BD- Whatsapp : <span>{masksfonez}</span>
                      </label>
                      <label>
                        &emsp;# - Whatsapp : <span>{maskedfonez}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 4 && (
                    <div>
                      <label>
                        &emsp;BD- C.P.F. : <span>{maskscpf}</span>
                      </label>
                      <label>
                        &emsp;# - C.P.F. : <span>{maskedcpf}</span>
                      </label>
                    </div>
                  )}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            )}

            {btncomparar && (
              <ContentCardBoxCenterPage pwidth="200px">
                <ContentCardPageTitle>
                  <h4>{edicao}</h4>
                </ContentCardPageTitle>
                <PanelConfResgateYellow
                  isbgcolor={btncomparar}
                  titulo={'Resgate para seu Acesso.'}
                  subtitulo={'Dados para Comparação...:'}
                >
                  <h3>Comparando Informações com Dados "DATA BASE" :</h3>
                  <label>
                    &emsp;BD- ID Empresa....: : <span>{masksemail}</span>
                  </label>
                  <label>
                    &emsp;# - ID Empresa....: <span>{maskedidemp}</span>
                  </label>
                  <label>
                    &emsp;DB- Nome Fantasia: <span>{maskednmfant}</span>
                  </label>
                  <label>
                    &emsp;# - Nome Fantasia: <span>{maskednmfant}</span>
                  </label>
                  {state.mdlogin === 1 && (
                    <div>
                      <label>
                        &emsp;BD- E-MAIL : <span>{masksemail}</span>
                      </label>
                      <label>
                        &emsp;# - E-MAIL : <span>{maskedemail}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 2 && (
                    <div>
                      <label>
                        &emsp;BD- Celular : <span>{masksfonec}</span>
                      </label>
                      <label>
                        &emsp;# - Celular : <span>{maskedfonec}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 3 && (
                    <div>
                      <label>
                        &emsp;BD- Whatsapp : <span>{masksfonez}</span>
                      </label>
                      <label>
                        &emsp;# - Whatsapp : <span>{maskedfonez}</span>
                      </label>
                    </div>
                  )}
                  {state.mdlogin === 4 && (
                    <div>
                      <label>
                        &emsp;BD- C.P.F. : <span>{maskscpf}</span>
                      </label>
                      <label>
                        &emsp;# - C.P.F. : <span>{maskedcpf}</span>
                      </label>
                    </div>
                  )}
                  <br />
                  <h5>Obs:.</h5>
                  <div>
                    <p>
                      &emsp;Caso queira " Voltar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;Caso deseja " Confirmar.:", clique na Seta à
                      Direita...
                    </p>
                  </div>
                </PanelConfResgateYellow>
              </ContentCardBoxCenterPage>
            )}
          </ContentCardBoxMainPage>

          <Pg.DivisionPgHztalPage />

          {btnenviar ? (
            <ContentSidePagePanelBotton
              bordas="3px"
              open={btnenviar}
              pwidth="100%"
            >
              <ContentSidePageBottonLabel
                istitl={btnresgatar}
                title={'Abortar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Volta...'}
                  onclick={goto('/')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage label={statusbtn} />
              <ContentSidePageBottonLabel
                istitl={btnresgatar}
                title={'Prosseguir ? '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Prosseguir...'}
                  onclick={goto('/')}
                />
              </ContentSidePageBottonLabel>
            </ContentSidePagePanelBotton>
          ) : (
            <ContentSidePageBottonLabel
              istitl={ispnlfooter}
              title={'Voltar.: '}
            >
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Volta...'}
                onclick={goto('/resgate1')}
              />
              <ContentBoxLabelPage label={statusbtn} />


              {isvalidelst &&  (
                <ContentSidePageBottonLabel
                  istitl={isvalidelst}
                  title={'Concluida ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Concluida...'}
                    onclick={handlerBtnIsvalideLst}
                  />
                </ContentSidePageBottonLabel>
              )}

              {btncontinuar && (
                <ContentSidePageBottonLabel
                  istitl={btncontinuar}
                  title={'Continua ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Continuar...'}
                    onclick={handlerBtnContinuar}
                  />
                </ContentSidePageBottonLabel>
              ) }
{/*   perguntas */}
              {btnconfirmation ? (
                <ContentSidePageBottonLabel
                  istitl={btnconfirmation}
                  title={'Confirmar ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Confirmar...'}
                    onclick={() => {}}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {btncomparar ? (
                <ContentSidePageBottonLabel
                  istitl={btncomparar}
                  title={'Comparar ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Comparar...'}
                    onclick={() => {}}
                  />
                </ContentSidePageBottonLabel>
              ) : null}

              {btnresgatar ? (
                <ContentSidePageBottonLabel
                  istitl={btnresgatar}
                  title={'Resgatar ? '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Resgatar...'}
                    onclick={() => {}}
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

/* ///////// mostra cx footer dos botões ////////////////////// */

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
