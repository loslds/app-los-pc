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

import { IUsers, UsersIndexById } from '../../../books/ListUsers.tsx';
import { IAcessos, AcessosIndexById } from '../../../books/ListAcessos.tsx';
import { IFones, FonesIndexById } from '../../../books/ListFones.tsx';
import { IEmps, EmpsIndexById } from '../../../books/ListEmps.tsx';

//import botaoverde from '../../../assets/svgs/botaoverde.svg';
//import botaoverme from '../../../assets/svgs/botaoverme.svg';

export function Conexao() {
  return true;
}
export function FindAcesso() {
  return true;
}
export function FindUsers() {
  return true;
}

export interface HelpGetItem {
  nmpnl?: string;
  nmlst?: string;
  sinal?: boolean;
}

export const Resgate3 = () => {
  const {state, dispatch } = AcessoUseForm();

  const [snhmaster, setSnhMaster] = React.useState('');

  const [edicao, setEdicao] = React.useState('');
  const [inputstrid, setInputStrId] = React.useState('');

  const [ishlperror, setIsHlpError] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  const [perg1, setPerg1] = React.useState('');
  const [resp1, setResp1] = React.useState('');
  const [strresp1, setStrResp1] = React.useState('');

  const [perg2, setPerg2] = React.useState('');
  const [resp2, setResp2] = React.useState('');
  const [strresp2, setStrResp2] = React.useState('');

  const [perg3, setPerg3] = React.useState('');
  const [resp3, setResp3] = React.useState('');
  const [strresp3, setStrResp3] = React.useState('');
////////////////////////////////////////////////////////////////////////////////

  const [helpconexaopnl, setHelpConexaoPnl] = React.useState('');
  const [isconectedacess, setIsConectedAcess] = React.useState(false);
  const [isconectedusers, setIsConectedUsers] = React.useState(false);
  const [isconectedfones, setIsConectedFones] = React.useState(false);
  const [isconectedemps, setIsConectedEmps] = React.useState(false);

  const [helpconexaolstacess, setHelpConexaoLstAcess] = React.useState('');
  const [helpconexaolstusers, setHelpConexaoLstUsers] = React.useState('');
  const [helpconexaolstfones, setHelpConexaoLstFones] = React.useState('');
  const [helpconexaolstemps, setHelpConexaoLstEmps] = React.useState('');

  const [ishelpconextedacess, setIsHelpConexaoAcess] = React.useState(false);
  const [ishelpconextedemps, setIsHelpConexaoEmps] = React.useState(false);
  const [ishelpconextedusers, setIsHelpConexaoUsers] = React.useState(false);
  const [ishelpconextedfones, setIsHelpConexaoFones] = React.useState(false);

  //////////////////////////////////////////////////////////////////////////////


  //////////////////////////////////////////////////////////////////////////////
  const [acesso, setAcess] = React.useState<IAcessos | undefined>(undefined);
  const [user, setUser] = React.useState<IUsers | undefined>(undefined);
  const [fones, setFones] = React.useState<IFones | undefined>(undefined);
  const [emps, setEmps] = React.useState<IEmps | undefined>(undefined);
  //////////////////////////////////////////////////////////////////////////////
  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  //////////////////////////////////////////////////////////////////////////////

  const [helpconexao, setHelpConexao] = React.useState(false);
  const [helpconexaoNmPnl, setHelpConexaoNmPnl] = React.useState('');
  const [helpconexaoNmLst, setHelpConexaoNmLst] = React.useState('');
  const [helpconexaoValid, setHelpConexaoValid] = React.useState(false);

  const [gethlpconexaoacess, setGetHelpConexaoAcess] = React.useState<HelpGetItem[]>([]);
  const [gethlpconexaousers, setGetHelpConexaoUsers] = React.useState<HelpGetItem[]>([]);
  const [gethlpconexaofones, setGetHelpConexaoFones] = React.useState<HelpGetItem[]>([]);
  const [gethlpconexaoemps, setGetHelpConexaoEmps] = React.useState<HelpGetItem[]>([]);
  
  //////////////////////////////////////////////////////////////////////////////
  const [helpdownload, setHelpDownload] = React.useState(false);
  const [gethelpdownloadnmpnl, setGetHelpDownloadNmPnl] = React.useState<HelpGetItem[]>([]);
  const [gethelpdownloadnmlst, setGetHelpDownloadNmLst] = React.useState<HelpGetItem[]>([]);
  const [gethelpdownloadvalid, setGetHelpDownloadValid] = React.useState<HelpGetItem[]>([]);

  const [isconected, setIsConected] = React.useState(false);
  const [isconexao, setIsConexao] = React.useState(false);
  const [isdownload, setIsDownload] = React.useState(false);


  React.useEffect( () => {
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

    setPerg1('');
    setResp1('');
    setStrResp1('');
    setPerg2('');
    setResp2('');
    setStrResp2('');
    setPerg3('');
    setResp3('');
    setStrResp3('');
    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
   
    setIsConected(false);
    setIsConexao(true);
    setIsDownload(false);
    setHelpConexao(false);

    setHelpDownload(false);
    setStart(true);
  },[dispatch]);

  

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
    setHelpConexaoNmPnl('Conexao');
    setHelpConexaoNmLst('ListAcessos');
    setHelpConexaoValid(false);
    setIsConected(isconexao);
    if (isconected) {
      // Criar lista USUARIOS com INDEX ID
      const Lstacessos = AcessosIndexById();
      // Verificar se a lista de Acessos vasia ou corrompida ou existente
      if (Object.keys(Lstacessos).length > 0) {
        setGetHelpConexaoValid(true);
        setIsConectedAcess(true);
        setIsConectedAcess(true);
      } else {
        setGetHelpConexaoValid(false);
        setIsConectedAcess(false);
      }
      setGetHelpConexaoAcess(
        { nmpnl: gethelpconexaonmpnl, nmlst: gethelpconexaonmlst, sinal: gethelpconexaovalid }
      ]);


      /////////////////////////
      // Criar lista USUARIOS com INDEX ID
      const Lstusuarios = UsersIndexById();
      // Verificar se a lista de usuários vasia ou corrompida ou existente
      if (Object.keys(Lstusuarios).length > 0) {
        setGetHelpNmLstConexao('ListUsers');
        setGetHelpValidConexao(true);
        setIsConectedUsers(true);
      } else {
        setGetHelpNmLstConexao('ListUsers');
        setGetHelpValidConexao(true);
        setIsConectedUsers(false);
      }

      setGetHelpConexaoUsers(
        { nmpnl: gethelpconexaonmpnl, nmlst: gethelpconexaonmlst, sinal: gethelpconexaovalid }
      ]);
      ///////////////////////////
      // Criar lista FONES com INDEX ID
      const Lstfones = FonesIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(Lstfones).length > 0) {
        setGetHelpNmLstConexao('ListFones');
        setGetHelpValidConexao(true);
      } else {
        // memssagem de e alerta para o erro
        setGetHelpNmLstConexao('ListFones');
        setGetHelpValidConexao(false);
      }
      //////////////////////////
      // Criar lista EMPRESAS com INDEX ID
      const LstEmps = EmpsIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(LstEmps).length > 0) {
        setGetHelpNmLstConexao('ListEmps');
        setGetHelpValidConexao(true);
      } else {
        // memssagem de e alerta para o erro
        setGetHelpNmLstConexao('ListEmps');
        setGetHelpValidConexao(false);
      }
    }
  }, []);

  React.useEffect(() => {
    setIsHelpConectedAcess(islistacess);
    setIsHelpConectedEmps(islistemps);
    setIsHelpConectedUsers(islistusers);
    setIsHelpConectedFones(islistfones);
    
    setIsDownload(isconected);
  }, [isconected, islistacess, islistusers, islistemps, islistfones]);

  // Função de callback
  // const handlerDownDatasCenter = React.useCallback(() => {
  //   if (isconected) {
  //     setIsConexao(false);
  //   }
  //   setIsDownloadDC(true);
  //   setIsConected(false);
  //   if (isconected) {
  //     setGetHelpNmPg('DOWNLOADDC');
  //     // Criar lista USUARIOS com INDEX ID
  //     setGetHelpNmPnl('DownloadDC');




  //   setGetHelpNmPg('CONEXÂO');
  //   if (state.mdlogin === 1) {
  //     // downdatacenter
  //     if (isdowndatacenter) {
  //       setGetHelpNmPg('CONEXÂO');
  //       // Criar lista USUARIOS com INDEX ID
  //       setGetHelpNmPnl('Conexao');
  //       alert('isdowndatacenter: verdadeiro');
  //     }
      
  //   }
  //   -
  // }, []);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerHelpConexao = (str: string) => {
    const item: HelpGetItem = {
      nmpg: gethelpnmpg,
      nmpnl: gethelpnmpnl,
      nmlst: gethelpnmlst,
      sinal: gethelpvalid
    };
    
    switch (str) {
      case 'Acessos':
        setGetHelpModalAcess([item]);
        setHelpModal(true);
        break;
      case 'Usuarios':
        setGetHelpModalUsers([item]);
        setHelpModal(true);
        break;
      case 'Telefones':
        setGetHelpModalFones([item]);
        setHelpModal(true);
        break;
      case 'Empresas':
        setGetHelpModalEmps([item]);
        setHelpModal(true);
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
            {isdownloaddc ? <h2>DonwLoads Data Center.</h2> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isconexao ? <h4>Conectar com DataCenter.</h4> : null}
                {isdownloaddc ? <h4>DonwLoads Informações.</h4> : null}
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
                        sinal={gethelpvalidconexao}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={ () => handlerHelpConexao('Acessos')}
                      />
                    </ContentLabelTesto>
                  </div>
                  <div>
                    <ContentLabelTesto testo={'Usuário...:'}>
                      <ContentLabelButtonOnOff
                        sinal={gethelpvalidconexao}
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
                        sinal={gethelpvalidconexao}
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
                        sinal={gethelpvalidconexao}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={ () => handlerHelpConexao('Empresas') }
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
              {isdownloaddc ? (
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
                        onClick={() => {}}

                        // onClick={() => handlerHelpDownload('Acessos')}

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
                        onClick={() => {}}

                        // onClick={() => handlerHelpDownload('Usuarios')}

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
                        onClick={() => {}}

                        // onClick={() => handlerHelpDownload('Telefones')}

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
                        onClick={() => {}}

                        // onClick={() => handlerHelpDownload('Empresas')}

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

/*
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
                  <h4>{state.nmlogin}</h4> 
*/
