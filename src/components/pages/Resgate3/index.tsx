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

import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate3 } from '../../contentHelp/CardHelpResgate3.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardSwitHelpResgate } from '../../contentHelp/CardSwitHelpResgate.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';
//import notedicao from '../../../assets/svgs/notedicao.svg';
//import botaoverde from '../../../assets/svgs/botaoverde.svg';
//import botaoverme from '../../../assets/svgs/botaoverme.svg';

import { IAcessos, AcessosIndexById } from '../../../books/ListAcessos.tsx';
import { IUsers, UsersIndexById } from '../../../books/ListUsers.tsx';
import { IFones, FonesIndexById } from '../../../books/ListFones.tsx';
import { IEmps, EmpsIndexById } from '../../../books/ListEmps.tsx';

export interface HelpGetItem {
  nmpnl?: string;
  nmlst?: string;
  sinal?: boolean;
}

export interface HelpGetItemConect {
  painel?: string;
  lista: [nmlst?: string, valid?: boolean];
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
  const [helpupdate, setHelpUpdate] = React.useState(false);
  const [helpverify, setHelpVerify] = React.useState(false);
  const [helpconclusion, setHelpConclusion] = React.useState(false);

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

  //* State das condições de visualização do Painel Aberto/Fechado e controle do
  //  Botão no Painel de Botões para Chamada do Procedimento de Verificação da
  //  existência da Lista. *//
  const [isconexao, setIsConexao] = React.useState(false);
  //* State Semáfaro da Existencia dentro o controle do useEffect. *//
  const [isconected, setIsConected] = React.useState(false);
  ////////////////////////////////
  const [isdownload, setIsDownload] = React.useState(false);
  const [isdownloaded, setIsDownloaded] = React.useState(false);
  const [isupdate, setIsUpDate] = React.useState(false);
  const [isupdated, setIsUpDated] = React.useState(false);
  const [isverify, setIsVerify] = React.useState(false);
  const [isverified, setIsVerified] = React.useState(false);
  const [isconclusion, setIsConclusion] = React.useState(false);
  const [isconcluded, setIsConcluded] = React.useState(false);
  const [ishome, setIsHome] = React.useState(false);
  ///////////////////////
  //* State Semáfaro da Validacao dentro do Procedimento de avaliação. *//
  const [isvadid, setIsValid] = React.useState(false);
  //* State para guardar os parametros da função da chamada do Help para ser
  //  utilizado no component CardSwitHelpResgate = ({ nmpnl, nmlst, sinal} :
  // TypeCardSwitHelpResgate) *//
  const [gethelplstacess, setGetHelpLstAcess] = React.useState<HelpGetItem[]>(
    []
  );
  const [gethelplstusers, setGetHelpLstUsers] = React.useState<HelpGetItem[]>(
    []
  );
  const [gethelplstfones, setGetHelpLstFones] = React.useState<HelpGetItem[]>(
    []
  );
  const [gethelplstemps, setGetHelpLstEmps] = React.useState<HelpGetItem[]>([]);
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensconexao, setGetHelpItensConexao] = React.useState([
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
  ]);
  const [gethelpitensdownload, setGetHelpItensDownload] = React.useState([
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
  ]);
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensupdate, setGetHelpItensUpDate] = React.useState([
    {
      painel: 'Up-Date',
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
  ]);
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensverify, setGetHelpItensVerify] = React.useState([
    {
      painel: 'Verify',
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
  ]);
  ////////////////////////////////////////////////////////////////////////////////
  const [gethelpitensconclusion, setGetHelpItensConclusion] = React.useState([
    {
      painel: 'Conclusion',
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
  ]);
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
    setHelpNomePainel('Conexao');
    setHelpLstAcessoNmLst('ListAcessos');
    setHelpLstAcessoValid(false);

    setIsDownload(false);
    setIsDownloaded(false);
    setIsUpDate(false);
    setIsUpDated(false);
    setIsVerify(false);
    setIsVerified(false);
    setIsConclusion(false);
    setIsConcluded(false);
    setIsHome(false);

    setEdicao('C O N E C Ã O');
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

      setGetHelpItensConexao((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstacessonmlst
                    ? {
                        ...item,
                        valid: helplstacessovalid
                      }
                    : item
                )
              }
            : p
        )
      );
      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensConexao((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstusersnmlst
                    ? {
                        ...item,
                        valid: helplstusersvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensConexao((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstfonesnmlst
                    ? {
                        ...item,
                        valid: helplstfonesvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensConexao((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstempsnmlst
                    ? {
                        ...item,
                        valid: helplstempsvalid
                      }
                    : item
                )
              }
            : p
        )
      );
      if (!isdownload) {
        setIsDownload(true);
      }
    }
    setEdicao('D O W N L O A D');
    setIsConected(false);
    if (isconexao) {
      setIsConexao(false);
    }
  }, [isconected, isconexao, isdownload]);
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
      setGetHelpItensDownload((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstacessonmlst
                    ? {
                        ...item,
                        valid: helplstacessovalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensDownload((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstusersnmlst
                    ? {
                        ...item,
                        valid: helplstusersvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensDownload((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstfonesnmlst
                    ? {
                        ...item,
                        valid: helplstfonesvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensDownload((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstempsnmlst
                    ? {
                        ...item,
                        valid: helplstempsvalid
                      }
                    : item
                )
              }
            : p
        )
      );
      if (!isupdate) {
        setIsUpDate(true);
      }
    }
    setEdicao('U P - D A T E');
    setIsDownloaded(false);
    if (isdownload) {
      setIsDownload(false);
    }
  }, [isdownloaded, isdownload, isupdate]);
  /////////////////////////
  const handlerUpdate = React.useCallback(() => {
    setIsUpDated(isupdate);
    if (isupdated) {
      setHelpNomePainel('Up-Date');
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
    if (isupdated) {
      setGetHelpLstAcess([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);
      setGetHelpItensUpDate((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstacessonmlst
                    ? {
                        ...item,
                        valid: helplstacessovalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensUpDate((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstusersnmlst
                    ? {
                        ...item,
                        valid: helplstusersvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensUpDate((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstfonesnmlst
                    ? {
                        ...item,
                        valid: helplstfonesvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensUpDate((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstempsnmlst
                    ? {
                        ...item,
                        valid: helplstempsvalid
                      }
                    : item
                )
              }
            : p
        )
      );
      if (!isverify) {
        setIsVerify(true);
      }
    }
    setEdicao('V E R I F I C A Ç Õ E S');
    setIsUpDated(false);
    if (isupdate) {
      setIsUpDate(false);
    }
  }, [isupdated, isupdate, isverify]);
  /////////////////////////
  const handlerVerify = React.useCallback(() => {
    setIsVerified(isverify);
    if (isverified) {
      setHelpNomePainel('Verify');
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
    if (isverified) {
      setGetHelpLstAcess([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);
      setGetHelpItensVerify((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstacessonmlst
                    ? {
                        ...item,
                        valid: helplstacessovalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensVerify((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstusersnmlst
                    ? {
                        ...item,
                        valid: helplstusersvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensVerify((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstfonesnmlst
                    ? {
                        ...item,
                        valid: helplstfonesvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensVerify((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstempsnmlst
                    ? {
                        ...item,
                        valid: helplstempsvalid
                      }
                    : item
                )
              }
            : p
        )
      );
      if (!isconclusion) {
        setIsConclusion(true);
      }
    }
    setEdicao('C O N C L U S Ã O');
    setIsVerified(false);
    if (isverify) {
      setIsVerify(false);
    }
  }, [isverified, isverify, isconclusion]);
  /////////////////////////
  const handlerConclusion = React.useCallback(() => {
    setIsConcluded(isconclusion);
    if (isconcluded) {
      setHelpNomePainel('Conclusion');
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
    if (isconclusion) {
      setGetHelpLstAcess([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstacessonmlst,
          sinal: helplstacessovalid
        }
      ]);
      setGetHelpItensConclusion((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstacessonmlst
                    ? {
                        ...item,
                        valid: helplstacessovalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstUsers([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstusersnmlst,
          sinal: helplstusersvalid
        }
      ]);
      setGetHelpItensConclusion((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstusersnmlst
                    ? {
                        ...item,
                        valid: helplstusersvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstFones([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstfonesnmlst,
          sinal: helplstfonesvalid
        }
      ]);
      setGetHelpItensVerify((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstfonesnmlst
                    ? {
                        ...item,
                        valid: helplstfonesvalid
                      }
                    : item
                )
              }
            : p
        )
      );

      setGetHelpLstEmps([
        {
          nmpnl: helpnomepainel,
          nmlst: helplstempsnmlst,
          sinal: helplstempsvalid
        }
      ]);
      setGetHelpItensConclusion((prevState) =>
        prevState.map((p) =>
          p.painel === helpnomepainel
            ? {
                ...p,
                lista: p.lista.map((item) =>
                  item.nmlst === helplstempsnmlst
                    ? {
                        ...item,
                        valid: helplstempsvalid
                      }
                    : item
                )
              }
            : p
        )
      );
      if (!ishome) {
        setIsHome(true);
      }
    }
    setEdicao('RESGATE CONCLUIDO');
    setIsConcluded(false);
    if (isconclusion) {
      setIsConclusion(false);
    }
  }, [isconcluded, isconclusion, ishome]);

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
    setHelpUpdate((oldState) => !oldState);
  }, []);

  const handlerHelpVerify = React.useCallback(() => {
    setHelpVerify((oldState) => !oldState);
  }, []);

  const handlerHelpConclusion = React.useCallback(() => {
    setHelpConclusion((oldState) => !oldState);
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
            {isupdate ? <h4>UpDate em DataCenter.</h4> : null}
            {isverify ? <h4>Checando Informações.</h4> : null}
            {isconclusion ? <h4>Informações Adquiridas.</h4> : null}
            {ishome ? <h4>Resgate para Acesso ao Sistema.</h4> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isconexao ? <h4>Conectar com DataCenter.</h4> : null}
                {isdownload ? <h4>DonwLoad das Informações.</h4> : null}
                {isupdate ? <h4>Coletando as Informações.</h4> : null}
                {isverify ? <h4>Verificação das Informações.</h4> : null}
                {isconclusion ? <h4>Informações Coletadas.</h4> : null}
                {ishome ? <h4>Resgate Concluido.</h4> : null}
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
                    {gethelpitensconexao[0].lista[0].nmlst === 'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconexao[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={() => handlerHelpConexao}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>

                  <div>
                    {gethelpitensconexao[0].lista[0].nmlst === 'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconexao[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConexao}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconexao[0].lista[0].nmlst === 'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconexao[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConexao}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconexao[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconexao[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConexao}
                        />
                      </ContentLabelTesto>
                    ) : null}
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
                  subtitulo={'Busca pelos Dados dos Datas Center:'}
                >
                  <h4>&emsp;&emsp;Resgatar Informaões em Data Center :</h4>
                  <div>
                    {gethelpitensdownload[0].lista[0].nmlst ===
                    'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensdownload[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpDownload}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensdownload[0].lista[0].nmlst === 'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensdownload[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpDownload}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensdownload[0].lista[0].nmlst === 'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensdownload[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpDownload}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensdownload[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensdownload[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpDownload}
                        />
                      </ContentLabelTesto>
                    ) : null}
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
              {/* /////// mostra painel Update /////////////////////////// */}
              {isupdate ? (
                <PanelConfResgateYellow
                  isbgcolor={isupdate}
                  titulo={'Coletando informações dos Bancos de Dados.'}
                  subtitulo={'Existência das Informações.'}
                >
                  <h4>&emsp;&emsp; mostrar se foram coletadas.</h4>
                  <h3>&emsp;&emsp; conforme filtro.</h3>

                  <div>
                    {gethelpitensupdate[0].lista[0].nmlst === 'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensupdate[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpUpdate}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensupdate[0].lista[0].nmlst === 'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensupdate[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpUpdate}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensupdate[0].lista[0].nmlst === 'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensupdate[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpUpdate}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensupdate[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensupdate[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpUpdate}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>

                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Checar.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}
              {/* /////// mostra painel Verify /////////////////////////// */}
              {isverify ? (
                <PanelConfResgateYellow
                  isbgcolor={isverify}
                  titulo={'Comparando informações ADIQUIRIDAS.'}
                  subtitulo={'Existência das Informações.'}
                >
                  <h4>&emsp;&emsp; mostrar se foram conclusivas ou não.</h4>
                  <h3>&emsp;&emsp; conforme informações adiquiridas.</h3>

                  <div>
                    {gethelpitensverify[0].lista[0].nmlst === 'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensverify[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpVerify}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensverify[0].lista[0].nmlst === 'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensverify[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpVerify}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensverify[0].lista[0].nmlst === 'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensverify[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpVerify}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensverify[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensverify[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpVerify}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>

                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Checar.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {isconclusion ? (
                <PanelConfResgateYellow
                  isbgcolor={isconclusion}
                  titulo={'Comparando informações ADIQUIRIDAS.'}
                  subtitulo={'Existência das Informações.'}
                >
                  <h4>&emsp;&emsp; mostrar se foram conclusivas ou não.</h4>
                  <h3>&emsp;&emsp; conforme informações adiquiridas.</h3>

                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>

                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Concluir.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {ishome ? (
                <PanelConfResgateYellow
                  isbgcolor={ishome}
                  titulo={'Dados para RESGATE.'}
                  subtitulo={'Apresentação do Dados Resgate.'}
                >
                  <h4>&emsp;&emsp; mostrar se foram conclusivas ou não.</h4>
                  <h3>&emsp;&emsp; conforme informações adiquiridas.</h3>

                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListAcessos' ? (
                      <ContentLabelTesto testo={'Acesso....:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListUsers' ? (
                      <ContentLabelTesto testo={'Usuário...:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst ===
                    'ListFones' ? (
                      <ContentLabelTesto testo={'Telefones.:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>
                  <div>
                    {gethelpitensconclusion[0].lista[0].nmlst === 'ListEmps' ? (
                      <ContentLabelTesto testo={'Empresas:'}>
                        <ContentLabelButtonOnOff
                          sinal={gethelpitensconclusion[0].lista[0].valid}
                          pxheight="18px"
                          pxwidth="140px"
                          pxhght="16px"
                          pxwdth="16px"
                          onClick={handlerHelpConclusion}
                        />
                      </ContentLabelTesto>
                    ) : null}
                  </div>

                  <div>
                    <br />
                    <h5>Obs:.</h5>
                    <p>
                      &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                      Esquerda...
                    </p>
                    <p>
                      &emsp;&emsp;Caso deseja " Home.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              {/* ////////////////////////////////////////////////////////// */}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>
          {/* ////// Botão na imagem do Painel para Help Conexao /////////// */}
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
              <CardSwitHelpResgate
                painel={gethelpitensconexao[0].painel}
                lista={gethelpitensconexao[0].lista[0].nmlst}
                sinal={gethelpitensconexao[0].lista[0].valid}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão na imagem do Painel para Help Download ////////// */}
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
              <CardSwitHelpResgate
                painel={gethelpitensdownload[0].painel}
                lista={gethelpitensdownload[0].lista[0].nmlst}
                sinal={gethelpitensdownload[0].lista[0].valid}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão na imagem do Painel para Help Up-Date /////////// */}
          {helpupdate ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpUpdate(false)}
            >
              <CardSwitHelpResgate
                painel={gethelpitensupdate[0].painel}
                lista={gethelpitensupdate[0].lista[0].nmlst}
                sinal={gethelpitensupdate[0].lista[0].valid}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão na imagem do Painel para Help Verify //////////// */}
          {helpverify ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpVerify(false)}
            >
              <CardSwitHelpResgate
                painel={gethelpitensverify[0].painel}
                lista={gethelpitensverify[0].lista[0].nmlst}
                sinal={gethelpitensverify[0].lista[0].valid}
              />
            </PageModal>
          ) : null}
          {/* ////// Botão na imagem do Painel para Help Conlusion //////////// */}
          {helpconclusion ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpConclusion(false)}
            >
              <CardSwitHelpResgate
                painel={gethelpitensconclusion[0].painel}
                lista={gethelpitensconclusion[0].lista[0].nmlst}
                sinal={gethelpitensconclusion[0].lista[0].valid}
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

            {isconclusion ? (
              <ContentCardPageTitle>
                <h3>Checar : [ Conclusão! ]</h3>
              </ContentCardPageTitle>
            ) : null}

            {/* //////////////////////// mostra botão Conectar //////////////////////////// */}
            {isconexao ? (
              <ContentSidePageBottonLabel istitl={start} title={'Conectar.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Conectar..."
                  onclick={handlerConexao}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {/* //////////////////////// mostra botão DownloadDC //////////////////////////// */}
            {isdownload ? (
              <ContentSidePageBottonLabel istitl={start} title={'Download.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Download..."
                  onclick={handlerDownload}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isupdate ? (
              <ContentSidePageBottonLabel istitl={start} title={'Up-Date.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Up-Date..."
                  onclick={handlerUpdate}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isverify ? (
              <ContentSidePageBottonLabel istitl={start} title={'Verificar.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Verificar..."
                  onclick={handlerVerify}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isconclusion ? (
              <ContentSidePageBottonLabel istitl={start} title={'Concluir.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Concluir..."
                  onclick={handlerConclusion}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {ishome ? (
              <ContentSidePageBottonLabel istitl={start} title={'Concluir.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Concluir..."
                  onclick={goto('/')}
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
              <CardHelpResgate3
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
