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
import { CardHelpResgate4 } from '../../contentHelp/CardHelpResgate4.tsx';
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

export interface HelpGetItemConect {
  painel?: string,
  lista:[nmlst?: string, valid?: boolean] 
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
  const [helpdownload, setHelpDownload] = React.useState(false);
  const [helpupdate, setHelpUpDate] = React.useState(false);
  const [helpverify, setHelpVerify] = React.useState(false);
  
  //* State guardar Nome do Painel aberto na Pg.*//
  const [helpnomepainel, setHelpNomePainel] = React.useState('');

  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstacessonmlst, setHelpLstAcessoNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstacessovalid, setHelpLstAcessoValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListUsers *//
  //const [helplstusersnmpnl, setHelpLstUsersNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstusersnmlst, setHelpLstUsersNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstusersvalid, setHelpLstUsersValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListFones *//
  //const [helplstfonesnmpnl, setHelpLstFonesNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstfonesnmlst, setHelpLstFonesNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstfonesvalid, setHelpLstFonesValid] = React.useState(false);

  //* State guardar Nome do Painel aberto na Pg.  sobre ListEmprs *//
  //const [helplstempsnmpnl, setHelpLstEmpsNmPnl] = React.useState('');
  //* State guardar Nome da Lista para verificar Existência da Mesma. *//
  const [helplstempsnmlst, setHelpLstEmpsNmLst] = React.useState('');
  //* State guardar Semáfaro da Existencia da Lista. *//
  const [helplstempsvalid, setHelpLstEmpsValid] = React.useState(false);

  //* State Semáfaro da Existencia dentro o controle do useEffect. *//
  const [isconected, setIsConected] = React.useState(false);

  const [isdownload, setIsDownload] = React.useState(false);  
  const [isdownloaded, setIsDownloaded] = React.useState(false);
  const [isupdate, setIsUpDate] = React.useState(false);
  const [isupdated, setIsUpDated] = React.useState(false);
  const [isverify, setIsVerify] = React.useState(false);
  const [isverified, setIsVerified] = React.useState(false);
  

  //* State Semáfaro da Validacao dentro do Procedimento de avaliação. *//
  const [isvadid, setIsValid] = React.useState(false);
  //* State das condições de visualização do Painel Aberto/Fechado e controle do
  //  Botão no Painel de Botões para Chamada do Procedimento de Verificação da
  //  existência da Lista. *//
  const [isconexao, setIsConexao] = React.useState(false);
  //* State para guardar os parametros da função da chamada do Help para ser
  //  utilizado no component CardSwitHelpResgate = ({ nmpnl, nmlst, sinal} :
  // TypeCardSwitHelpResgate) *//
  const [gethelplstacess, setGetHelpLstAcess] = React.useState<HelpGetItem[]>([]);
  const [gethelplstusers, setGetHelpLstUsers] = React.useState<HelpGetItem[]>([]);
  const [gethelplstfones, setGetHelpLstFones] = React.useState<HelpGetItem[]>([]);
  const [gethelplstemps, setGetHelpLstEmps] = React.useState<HelpGetItem[]>([]);
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpnItensConexao, setGetHelpItensConexao] = React.useState(
    [
      {
        painel: 'Conexao',
        lista: [
          {
            nmlst: 'LstAcessos',
            valid: false
          },
          {
            nmlst: 'LstUsers',
            valid: false
          },
          {
            nmlst: 'ListFones',
            valid: false
          },
          {
            nmlst: 'LstEmps',
            valid: false
          }
        ]
      }
    ]
  );
  const [gethelpitensdownload, setGetHelpItensDownload] = React.useState(
    [
      {
        painel: 'Download',
        lista: [
          {
            nmlst: 'LstAcessos',
            valid: false
          },
          {
            nmlst: 'LstUsers',
            valid: false
          },
          {
            nmlst: 'ListFones',
            valid: false
          },
          {
            nmlst: 'LstEmps',
            valid: false
          }
        ]
      }
    ]
  );
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensupdate, setGetHelpItensUpDate] = React.useState(
    [
      {
        painel: 'UpDate',
        lista: [
          {
            nmlst: 'LstAcessos',
            valid: false
          },
          {
            nmlst: 'LstUsers',
            valid: false
          },
          {
            nmlst: 'ListFones',
            valid: false
          },
          {
            nmlst: 'LstEmps',
            valid: false
          }
        ]
      }
    ]
  );
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensverify, setGetHelpItensVerify] = React.useState(
    [
      {
        painel: 'Conexao',
        lista: [
          {
            nmlst: 'LstAcessos',
            valid: false
          },
          {
            nmlst: 'LstUsers',
            valid: false
          },
          {
            nmlst: 'ListFones',
            valid: false
          },
          {
            nmlst: 'LstEmps',
            valid: false
          }
        ]
      }
    ]
  );
  ////////////////////////////////////////////////////////////////////////////////


  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  //////////////////////////////////////////////////////////////////////////////

  

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
    setIsDownloaded(false);
    setIsUpDate(false);
    setIsUpDated(false);

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


  // Função de callback botão 
  const handlerConexao = React.useCallback(() => {
    setIsConected(isconexao);
    if (isconected) {
      setHelpNomePainel('Conexao');
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
      setHelpLstEmpsNmLst('ListEmps');
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
      setGetHelpLstAcess([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);
      setGetHelpItensConexao(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstacessonmlst ? {
            ...item, valid: helplstacessovalid } : item
            )
          } : p
        )
      );
      
      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);

      setGetHelpItensConexao(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstusersnmlst ? { 
            ...item, valid: helplstusersvalid } : item
            )
          } : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);

      setGetHelpItensConexao(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstfonesnmlst ? { 
            ...item, valid: helplstfonesvalid } : item
            )
          } : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      
      setGetHelpItensConexao(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstempsnmlst ? {
            ...item, valid: helplstempsvalid } : item
            )
          } : p
        )
      );
      
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
///////////////////
  const handlerDownload = React.useCallback(() => {
    setIsDownloaded(isdownload);
    if (isdownloaded) {
      setHelpNomePainel('Download');
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
      setHelpLstEmpsNmLst('ListEmps');
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
    if (isdownloaded) {
      setGetHelpLstAcess([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);
      setGetHelpItensDownload(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstacessonmlst ? {
            ...item, valid: helplstacessovalid } : item
            )
          } : p
        )
      );

      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensDownload(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstusersnmlst ? { 
            ...item, valid: helplstusersvalid } : item
            )
          } : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensDownload(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstfonesnmlst ? { 
            ...item, valid: helplstfonesvalid } : item
            )
          } : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensDownload(prevState =>
        prevState.map(p => p.painel === helpnomepainel ? {
          ...p, lista: p.lista.map(item => item.nmlst === helplstempsnmlst ? {
            ...item, valid: helplstempsvalid } : item
            )
          } : p
        )
      );

      if (!isupdate) {
        setIsUpDate(true);
      }
      setEdicao('D O W N L O A D')
    }
    setIsDownloaded(false);
    if (isdownload) {
      setIsDownload(false);
    }
  }, [
    isdownloaded,
    isdownload,
    isupdate
  ]);
  /////////////////////////



  //////////////////////////////////////////////////////////////////////////////
  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerHelpConexao = React.useCallback(() => {
    setHelpConexao((oldState) => !oldState);
  }, []);

  const handlerHelpDownload = React.useCallback(() => {
    setHelpDownload((oldState) => !oldState);
  }, []);

  const handlerHelpUpdate = React.useCallback(() => {
    setHelpDownload((oldState) => !oldState);
  }, []);

  const handlerHelpVerify = React.useCallback(() => {
    setHelpDownload((oldState) => !oldState);
  }, []);
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
                        onClick={() => handlerHelpConexao}
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
                        onClick={handlerHelpConexao}
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
                        onClick={handlerHelpConexao}
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
                        onClick={handlerHelpConexao}
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
                  isbgcolor={isdownload}
                  titulo={'Downloads dos Data Center.'}
                  subtitulo={'Informações de Resgate:'}
                >
                  <h4>&emsp;&emsp;Resgatar Informaões em Data Center :</h4>
                  <div>
                    <ContentLabelTesto testo={'Acesso....:'}>
                      <ContentLabelButtonOnOff
                        sinal={helplstacessovalid}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={handlerHelpDownload}
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
                        onClick={handlerHelpDownload}
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
                        onClick={handlerHelpDownload}
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
                        onClick={handlerHelpDownload}
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
                      &emsp;&emsp;Caso deseja " Up-Date.:", clique na Seta à
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
                // hndpnl={gethelpconnect[0]}
                // nmlst={gethelpconnect[,0]}
                // open={gethelpconnect[,,0]}
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
                // hndpnl={gethelpnmlstdownload}
                // nmlst={gethelpnmlstdownload}
                // open={gethelpvaliddownload}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão Modal Para Help UpDate ////////////////////////// */}
          {helpverify? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpVerify(false)}
            >
              <CardSwuitHelpResgate
                // hndpnl={gethelpnmlstdownload}
                // nmlst={gethelpnmlstdownload}
                // open={gethelpvaliddownload}
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

            {isdownload ? (
              <ContentCardPageTitle>
                <h3>DonwLoad : [ Data Center! ]</h3>
              </ContentCardPageTitle>
            ) : null}

            {isupdate ? (
              <ContentCardPageTitle>
                <h3>UpDate : [ Informações! ]</h3>
              </ContentCardPageTitle>
            ) : null}

            {isverify ? (
              <ContentCardPageTitle>
                <h3>Checar : [ Verificação! ]</h3>
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
            {isdownload ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Up=Date.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Up-Date..."
                  onclick={handlerDownload}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isupdate ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Checar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Checar..."
                  onclick={() => {}}
                  // onclick={handlerChecar}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isverify ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Verificar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Verificar..."
                  onclick={() => {}}
                  // onclick={handlerVerificar}
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
              <CardHelpResgate2
                imghlp={resgatehlp4}
                imgcard={resgatepg4}
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
