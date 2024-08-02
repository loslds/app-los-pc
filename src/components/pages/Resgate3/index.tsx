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

import { ContentLabelTesto } from '../ContentLabelTesto.tsx';
import { ContentLabelButtonOnOff } from '../ContentLabelButtonOnOff.tsx';

// import { ContentDivSinaleiro } from '../ContentDivSinaleiro.tsx';
//import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
//import { ContentInputCenter } from '../ContentInputCenter.tsx';
import { CardSwuitHelpResgate } from '../../contentHelp/CardSwuitHelpResgate.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
//import setadir from '../../../assets/svgs/setadir.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

import { IAcessos, AcessosIndexById } from '../../../books/ListAcessos.tsx';
import { IUsers, UsersIndexById } from '../../../books/ListUsers.tsx';
import { IFones, FonesIndexById } from '../../../books/ListFones.tsx';
import { IEmps, EmpsIndexById } from '../../../books/ListEmps.tsx';

import botaoverde from '../../../assets/svgs/botaoverde.svg';
import botaoverme from '../../../assets/svgs/botaoverme.svg';

export interface HelpGetItem {
  nmpnl?: string;
  nmlst?: string;
  sinal?: boolean;
}

export const Resgate3 = () => {
  //* dispado do uso do contexto *//
  const { state, dispatch } = AcessoUseForm();
  //* construção dos States necessários *//
  //* State Senha Master do Controle de Acesso sobre a Pg. *//
  const [snhmaster, setSnhMaster] = React.useState('');
  //* State para titulo em Pg. Helps. *//
  const [edicao, setEdicao] = React.useState('');
  //* State para as listas de trabalho local na Pg. *//
  //* State para as listas de LstAcessos.(Acessos) *//
  const [listaacessos, setListaAcessos] = React.useState([]);
  //* State para as listas de LstUsers.(Usuários) *//
  const [listausers, setListaUsers] = React.useState([]);
  //* State para as listas de LstFones.(Telefones) *//
  const [listafones, setListaFones] = React.useState([]);
  //* State para as listas de LstEmps.(Empresas) *//
  const [listaemps, setListaEmps] = React.useState([]);

  //* State para uso do Botão Helps na Pg. CASO CONEXÃO */////////////////////////
  //* State Abrir/Fechar Help através do Botão em Pg. *//
  const [helpconexao, setHelpConexao] = React.useState(false);
  //* State guardar Nome do Painel aberto na Pg.  sobre ListAcessos *//
  const [helplstacessonmpnl, setHelpLstAcessoNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstacessonmlst, setHelpLstAcessoNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstacessovalid, setHelpLstAcessoValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListUsers *//
  const [helplstusersnmpnl, setHelpLstUsersNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstusersnmlst, setHelpLstUsersNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstusersvalid, setHelpLstUsersValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListFones *//
  const [helplstfonesnmpnl, setHelpLstFonesNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstfonesnmlst, setHelpLstFonesNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstfonesvalid, setHelpLstFonesValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListEmprs *//
  const [helplstempsnmpnl, setHelpLstEmpsNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstempsnmlst, setHelpLstEmpsNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstempsvalid, setHelpLstEmpsValid] = React.useState(false);

  //* State Semáfaro da Existencia dentro o controle do useEffect. *//
  const [isconected, setIsConected] = React.useState(false);
  //* State Semáfaro da Validacao dentro do Procedimento de avaliação. *//
  const [isvadid, setIsValid] = React.useState(false);
  //* State das condições de visualização do Painel Aberto/Fechado e controle do
  //  Botão no Painel de Botões para Chamada do Procedimento de Verificação da
  //  existência da Lista. *//
  const [isconexao, setIsConexao] = React.useState(false);
  //* State para guardar os parametros da função da chamada do Help para ser
  //  utilizado no component CardSwitHelpResgate = ({ nmpnl, nmlst, sinal} :
  // TypeCardSwitHelpResgate) *//
  const [gethelplstacessnmpnl, setGetHelpLstAcessNmPnl] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstacessnmlst, setGetHelpLstAcessNmLst] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstacessvalid, setGetHelpLstAcessValid] = React.useState<
    HelpGetItem[]
  >([]);

  const [gethelplstusersnmpnl, setGetHelpLstUsersNmPnl] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstusersnmlst, setGetHelpLstUsersNmLst] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstusersvalid, setGetHelpLstUsersValid] = React.useState<
    HelpGetItem[]
  >([]);

  const [gethelplstfonesnmpnl, setGetHelpLstFonesNmPnl] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstfonesnmlst, setGetHelpLstFonesNmLst] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstfonesvalid, setGetHelpLstFonesValid] = React.useState<
    HelpGetItem[]
  >([]);

  const [gethelplstempsnmpnl, setGetHelpLstEmpsNmPnl] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstempsnmlst, setGetHelpLstEmpsNmLst] = React.useState<
    HelpGetItem[]
  >([]);
  const [gethelplstempsvalid, setGetHelpLstEmpsValid] = React.useState<
    HelpGetItem[]
  >([]);
  ////////////////////////////////////////////////////////////////////////////////

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  //////////////////////////////////////////////////////////////////////////////

  const [isdownload, setIsDownload] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate3' });
    if (state.mdlogin === 1) {
      // dispatch({ type: AcessoUseActions.setMail, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
      dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    }
    if (state.mdlogin === 2) {
      dispatch({ type: AcessoUseActions.setMail, payload: '' });
      // dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
      dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    }
    if (state.mdlogin === 3) {
      dispatch({ type: AcessoUseActions.setMail, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
      // dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
      dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    }
    if (state.mdlogin === 4) {
      dispatch({ type: AcessoUseActions.setMail, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
      // dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    }
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgatar: Contato Usuário'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Contato :' + state.nmlogin + '.'
    });

    // atraves da busca dos DBs
    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPin, payload: '' });

    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });
    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });
    /////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
    setIsConected(false);
    setIsValid(false);
    setIsConexao(true);
    setIsDownload(false);
    setEdicao('C O N E C Ã O')
    setHelpConexao(false);
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

  // Função de callback
  const handlerConexao = React.useCallback(() => {
    setIsConected(isconexao);
    if (isconected) {
      setHelpLstAcessoNmPnl('Conexao');
      setHelpLstAcessoNmLst('ListAcessos');
      setHelpLstAcessoValid(false);
      setIsValid(false);
      // Criar lista USUARIOS com INDEX ID
      const Lstacessos = AcessosIndexById();
      // Verificar se a lista de Acessos vasia ou corrompida ou existente
      if (Object.keys(Lstacessos).length > 0) {
        setIsValid(true);
      }
      setHelpLstAcessoValid(isvadid);
      /////////////////////////
      setHelpLstUsersNmPnl('Conexao');
      setHelpLstUsersNmLst('ListUsers');
      setHelpLstUsersValid(false);
      setIsValid(false);
      // Criar lista USUARIOS com INDEX ID
      const Lstusuarios = UsersIndexById();
      // Verificar se a lista de usuários vasia ou corrompida ou existente
      if (Object.keys(Lstusuarios).length > 0) {
        setIsValid(true);
      }
      setHelpLstUsersValid(true);
      /////////////////////////
      setHelpLstFonesNmPnl('Conexao');
      setHelpLstFonesNmLst('ListFones');
      setHelpLstFonesValid(false);
      setIsValid(false);
      // Criar lista FONES com INDEX ID
      const Lstfones = FonesIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(Lstfones).length > 0) {
        setIsValid(true);
      }
      setHelpLstFonesValid(isvadid);
      //////////////////////////
      setHelpLstEmpsNmPnl('Conexao');
      setHelpLstEmpsNmLst('ListFones');
      setHelpLstEmpsValid(false);
      setIsValid(false);
      // Criar lista EMPRESAS com INDEX ID
      const LstEmps = EmpsIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(LstEmps).length > 0) {
        setIsValid(true);
      }
      setHelpLstEmpsValid(isvadid);
    }
  }, []);

  React.useEffect(() => {
    if (isconected) {
      setGetHelpLstAcessNmPnl([
        {
          nmpnl: helplstacessonmpnl,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);

      setGetHelpLstUsersNmPnl([
        {
          nmpnl: helplstusersnmpnl,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);

      setGetHelpLstFonesNmPnl([
        {
          nmpnl: helplstfonesnmpnl,
          nmlst: helplstfonesnmlst,
          sinal: helplstacessovalid
        }
      ]);

      setGetHelpLstEmpsNmPnl([
        {
          nmpnl: helplstempsnmpnl,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      if (!isdownload) {
        setIsDownload(true);
      }
      setEdicao('D O W N L O A D')
    }
    setIsConected(false);
    if (isconexao) {
      setIsConexao(false);
    }
  }, [
    isconected,
    isconexao,
    isdownload
  ]);

  const handlerDownload = React.useCallback(() => {
    setIsConected(isdownload);
    if (isconected) {
      setHelpLstAcessoNmPnl('Download');
      setHelpLstAcessoNmLst('ListAcessos');
      setHelpLstAcessoValid(false);
      setIsValid(false);
      // Criar lista USUARIOS com INDEX ID
      const Lstacessos = AcessosIndexById();
      // Verificar se a lista de Acessos vasia ou corrompida ou existente
      if (Object.keys(Lstacessos).length > 0) {
        setIsValid(true);
      }
      setHelpLstAcessoValid(isvadid);
      /////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerHelpConexao = (str: string) => {
    setHelpConexao(false);
    switch (str) {
      case 'Acessos':
        setHelpConexao(true);
        break;
      case 'Usuarios':
        setHelpConexao(true);
        break;
      case 'Telefones':
        setHelpConexao(true);
        break;
      case 'Empresas':
        setHelpConexao(true);
        break;
      default:
        break;
    }
  };
  const handlerHelpDownload = (str: string) => {
    setHelpConexao(false);
    switch (str) {
      case 'Acessos':
        setHelpConexao(true);
        break;
      case 'Usuarios':
        setHelpConexao(true);
        break;
      case 'Telefones':
        setHelpConexao(true);
        break;
      case 'Empresas':
        setHelpConexao(true);
        break;
      default:
        break;
    }
  };


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
            {isconexao ? <h2>Conexão com DataCenter</h2> : null}
            {isdownload ? <h2>DonwLoad em Data Center.</h2> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isconexao ? <h4>Conectar com DataCenter.</h4> : null}
                {isdownload ? <h4>DonwLoad Informações.</h4> : null}
              </ContentCardPageTitle>
              {/* /////// mostra painel Conectar /////////////////////////// */}

              {isconexao ? (
                <PanelConfResgateYellow
                  isbgcolor={true}
                  titulo={'Conexão com Banco de Dados.'}
                  subtitulo={'Existência de Data Center.'}
                >
                  <h4>&emsp;&emsp;Busca pelos Data Center :</h4>
                  <div>
                    <ContentLabelTesto testo={'Acesso....:'}>
                      <ContentLabelButtonOnOff
                        sinal={helplstacessovalid}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpConexao('Acessos')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Usuário...:'}>
                      <ContentLabelButtonOnOff
                        sinal={helplstusersvalid}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpConexao('Usuarios')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Telefones.:'}>
                      <ContentLabelButtonOnOff
                        sinal={helplstfonesvalid}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpConexao('Teçefones')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Empresas:'}>
                      <ContentLabelButtonOnOff
                        sinal={helplstempsvalid}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpConexao('Empresas')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Conectar.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {/* /////// mostra painel Download /////////////////////////// */}
              {isdownload ? (
                <PanelConfResgateYellow
                  isbgcolor={!isconected}
                  titulo={'Downloads dos Data Center.'}
                  subtitulo={'Informações de Resgate:'}
                >
                  <h4>&emsp;&emsp;Resgatar Informaões em Data Center :</h4>
                  <div>
                    <ContentLabelTesto testo={'Acesso....:'}>
                      <ContentLabelButtonOnOff
                        sinal={islistacess}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpDownload('Acessos')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Usuário...:'}>
                      <ContentLabelButtonOnOff
                        sinal={islistusers}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpDownload('Usuarios')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Telefones.:'}>
                      <ContentLabelButtonOnOff
                        sinal={islistusers}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpDownload('Telefones')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Empresas:'}>
                      <ContentLabelButtonOnOff
                        sinal={islistemps}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={() => handlerHelpDownload('Empresas')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Proceguir.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {/* ////////////////////////////////////////////////////////// */}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>
          {/* ////// Botão Modal Para Help Conexao ///////////////////////// */}
          {helpconexao ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpConexao(false)}
            >
              <CardSwuitHelpResgate
                hndpnl={gethelpnmlstconexao}
                nmlst={gethelpnmlstconexao}
                open={gethelpvalidconexao}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão Modal Para Help Download //////////////////////// */}
          {helpdownload ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpDownload(false)}
            >
              <CardSwuitHelpResgate
                hndpnl={gethelpnmlstdownload}
                nmlst={gethelpnmlstdownload}
                open={gethelpvaliddownload}
              />
            </PageModal>
          ) : null}
          {/* ////////////////////////////////////////////////////////////// */}

          <Pg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Abortar...'}
                onclick={goto('/')}
              />
            </ContentSidePageBottonLabel>

            {isconexao ? (
              <ContentCardPageTitle>
                <h3>Informação: [ CONEXÃO...]</h3>
              </ContentCardPageTitle>
            ) : null}

            {isdownloaddc ? (
              <ContentCardPageTitle>
                <h3>DonwLoad : [ Data Center! ]</h3>
              </ContentCardPageTitle>
            ) : null}
            {/* //////////////////////// mostra botão Conectar //////////////////////////// */}
            {isconexao ? (
              <ContentSidePageBottonLabel istitl={start} title={'Conectar.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Conectar..."
                  onclick={handlerConexao}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {/* //////////////////////// mostra botão DownloadDC //////////////////////////// */}
            {isdownloaddc ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Prosseguir.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Prosseguir..."
                  onclick={() => {}}
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
