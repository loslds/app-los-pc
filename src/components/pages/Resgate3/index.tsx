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
  const { state, dispatch } = AcessoUseForm();

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

  const [isbtnperguntas, setIsBtnPerguntas] = React.useState(false);

  const [isbtnenviar, setIsBtnEnviar] = React.useState(false);
  const [isbtnconferir, setIsBtnConferir] = React.useState(false);
  const [isbtncontinuar, setIsBtnContinuar] = React.useState(false);

  const [verificadodb, setVerificadoDb] = React.useState(false);


  
  const [btndatacenter, setBtnDataCenter] = React.useState(false);

  const [islistacess, setIsListAcess] = React.useState(false);
  const [isbtnhlplistacess, setIsBtnHlpListAcess] = React.useState(false);

  const [islistusers, setIsListUsers] = React.useState(false);
  const [isbtnhlplistusers, setIsBtnHlpListUsers] = React.useState(false);

  const [islistfones, setIsListFones] = React.useState(false);
  const [isbtnhlplistfones, setIsBtnHlpListFones] = React.useState(false);

  const [islistemps, setIsListEmps] = React.useState(false);
  const [isbtnhlplistemps, setIsBtnHlpListEmps] = React.useState(false);

  const [helphndpnl, setHelpHndpnl] = React.useState('');
  const [helplstacess, setHelpLstAcess] = React.useState('');
  const [helplstemps, setHelpLstEmps] = React.useState('');
  const [helplstusers, setHelpLstUsers] = React.useState('');
  const [helplstfones, setHelpLstFones] = React.useState('');
  const [ishelpconextedacess, setIsHelpConectedAcess] = React.useState(false);
  const [ishelpconextedemps, setIsHelpConectedEmps] = React.useState(false);
  const [ishelpconextedusers, setIsHelpConectedUsers] = React.useState(false);
  const [ishelpconextedfones, setIsHelpConectedFones] = React.useState(false);

  //////////////////////////////////////////////////////////////////////////////
  const [acesso, setAcess] = React.useState<IAcessos | undefined>(undefined);
  const [user, setUser] = React.useState<IUsers | undefined>(undefined);
  const [fones, setFones] = React.useState<IFones | undefined>(undefined);
  const [emps, setEmps] = React.useState<IEmps | undefined>(undefined);
  ////////////////////////////////////////////////////////////////////////////// 
  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  const [helpmodal, setHelpModal] = React.useState(false);
  const [gethlpmodalAcess, setGetHelpModalAcess] = React.useState<HelpGetItem[]>([]);
  const [gethlpmodalUsers, setGetHelpModalUsers] = React.useState<HelpGetItem[]>([]);
  const [gethlpmodalemps, setGetHelpModalEmps] = React.useState<HelpGetItem[]>([]);
  const [gethlpmodalfones, setGetHelpModalFones] = React.useState<HelpGetItem[]>([]);

  const [gethelpnmpnl, setGetHelpNmPnl] = React.useState('');
  const [gethelpnmlst, setGetHelpNmLst] = React.useState('');
  const [gethelpvalid, setGetHelpValid] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  

  const [isconected, setIsConected] = React.useState(false);
  const [isconexao, setIsConexao] = React.useState(false);

  const [isdownloaddc, setIsDownloadDC] = React.useState(false);
  const [isdowndatacenter, setIsDownDataCenter] = React.useState(false);

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

    setIsDownloadDC(false);
    setIsDownDataCenter(false);
  
    

    //     setVerificadoDb(false);
    //     setIsDownDatasState(false);
    //     setBtnDataCenter(false);
    // ///////////////////
    //     setIsEditar(false);
    //     setIsBtnPerguntas(false);
    //     setIsBtnEnviar(false);
    //     setIsBtnConferir(false);

    //     setIsBtnContinuar(false);

    setIsConected(false);
    setIsConexao(true);
    setHelpModal(false);
    setGetHelpNmPnl('Conexao');
    setGetHelpNmLst('ListAcessos');
    setGetHelpValid(isconected);
    setGetHelpModalAcess([{ nmpnl: gethelpnmpnl, nmlst: gethelpnmlst, sinal: gethelpvalid }]);

    
    setIsDownloadDC(false);
    setIsDownDataCenter(false);
    setStart(true);
  }, [gethelpnmpnl, gethelpnmlst, gethelpvalid,dispatch]);
  
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
  
  // const handlerBtnHlpListAcess = React.useCallback(() => {
  //   setIsBtnHlpListAcess((oldState) => !oldState);
  //   setHelpNmLista('Lista Acesso');
  //   setHelpOpen(islistacess);

  // }, []);

  // const handlerBtnHlpListUsers = React.useCallback(() => {
  //   setIsBtnHlpListUsers((oldState) => !oldState);
  //   setHelpNmLista('Lista Usuário');
  //   setHelpOpen(islistusers);

  // }, []);

  // const handlerBtnHlpListFones = React.useCallback(() => {
  //   setIsBtnHlpListFones((oldState) => !oldState);
  //   setHelpNmLista('Lista Telefones');
  //   setHelpOpen(islistfones);

  // }, []);

  // const handlerBtnHlpListEmps = React.useCallback(() => {
  //   setIsBtnHlpListEmps((oldState) => !oldState);
  // }, []);

  // Função de callback
  const handlerIsConectar = React.useCallback(() => {
    setIsConected(isconexao);
    if (isconected) {
      // Criar lista USUARIOS com INDEX ID
      const Lstacessos = AcessosIndexById();
      // Verificar se a lista de Acessos vasia ou corrompida ou existente
      if (Object.keys(Lstacessos).length > 0) {
        setIsListAcess(true);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListAcessos');
        setGetHelpValid(true);
      } else {
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListAcessos');
        setGetHelpValid(false);
        // memssagem de e alerta para o erro
        setIsListAcess(false);
        setTxtAga('"ERRO" ao acessar ACESSOS dos USUÁRIOS');
        setTxtLabel('Não foi encontrado DATA ou DADOS de Acessos.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }
      
      /////////////////////////
      // Criar lista USUARIOS com INDEX ID
      const Lstusuarios = UsersIndexById();
      // Verificar se a lista de usuários vasia ou corrompida ou existente
      if (Object.keys(Lstusuarios).length > 0) {
        setIsListUsers(true);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListUsers');
        setGetHelpValid(true);
      } else {
        // memssagem de e alerta para o erro
        setIsListUsers(false);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListUsers');
        setGetHelpValid(false);
        setTxtAga('"ERRO" ao acessar USUÁRIOS');
        setTxtLabel('Não foi encontrado DATA ou DADOS de Usuários.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }

      ///////////////////////////
      // Criar lista FONES com INDEX ID
      const Lstfones = FonesIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(Lstfones).length > 0) {
        setIsListFones(true);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListFones');
        setGetHelpValid(true);
      } else {
        // memssagem de e alerta para o erro
        setIsListFones(false);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListFones');
        setGetHelpValid(false);
        setTxtAga('"ERRO" ao acessar TELEFONES');
        setTxtLabel('Não foi encontrado DATA ou DADOS de Telefones.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }
      //////////////////////////
      // Criar lista FONES com INDEX ID
      const LstEmps = EmpsIndexById();
      // Verificar se a lista de Fones vasia ou corrompida ou existente
      if (Object.keys(LstEmps).length > 0) {
        setIsListEmps(true);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListEmps');
        setGetHelpValid(true);
      } else {
        // memssagem de e alerta para o erro
        setIsListEmps(false);
        setGetHelpNmPnl('Conexao');
        setGetHelpNmLst('ListEmps');
        setGetHelpValid(false);
        setTxtAga('"ERRO" ao acessar TELEFONES');
        setTxtLabel('Não foi encontrado DATA ou DADOS de Telefones.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }
    }
  }, []);

  React.useEffect(() => {
    if (isconected) {
      setIsHelpConectedAcess(islistacess);
      setIsHelpConectedEmps(islistemps);
      setIsHelpConectedUsers(islistusers);
      setIsHelpConectedFones(islistfones);
      setIsDownDataCenter(isconected);
    }
    if (isconected){
      setIsConected(false);
    }
    setIsConexao(isconected);
  }, [isconected, islistacess, islistusers, islistemps, islistfones]);

  // Função de callback
  const handlerDownDatasCenter = React.useCallback(() => {
    setIsDownloadDC(isdowndatacenter);
    if (isdowndatacenter) {
      alert('isdowndatacenter: verdadeiro');
    }
  }, []);








  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerHelpModal = (str: string) => {
    const item: HelpGetItem = { nmpnl: gethelpnmpnl, nmlst: gethelpnmlst, sinal: gethelpvalid };

  switch (str) {
    case 'Acessos':
      setGetHelpModalAcess([item]);
      break;
    case 'Usuarios':
      setGetHelpModalUsers([item]);
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
            {isdowndatacenter ? <h2>{'DonwLoads Data Center.'}</h2> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isconexao ? <h4>{'Conectar com DataCenter.'}</h4> : null}
                {isdowndatacenter ? <h4>{'DonwLoads Informações.'}</h4> : null}
              </ContentCardPageTitle>
{/* //////////////////////// mostra painel Conectar //////////////////////////// */}
              {isconexao ? (
                <PanelConfResgateYellow
                  isbgcolor={!isconected}
                  titulo={'Conexão com Banco de Dados.'}
                  subtitulo={'Existência de Data Center.'}
                >
                  <h4>&emsp;&emsp;Busca pelos Data Center :</h4>
                  <div>
                    <ContentLabelTesto testo={'Acesso....:'}>
                      <ContentLabelButtonOnOff
                        sinal={islistacess}
                        pxheight="18px"
                        pxwidth="140px"
                        pxhght="16px"
                        pxwdth="16px"
                        onClick={ () => handlerHelpModal('Acessos')}
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
                        onClick={ () => handlerHelpModal('Empresas')}
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
                        onClick={ () => handlerHelpModal('Usuarios')}
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
                        onClick={ () => handlerHelpModal('Teçefones')}
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

{/* ///////////////// mostra painel Downloads de Dados ///////////////////// */}
              {isdowndatacenter ? (
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
                        onClick={handlerBtnHlpListAcess}
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
                        onClick={handlerBtnHlpListUsers}
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
                        onClick={handlerBtnHlpListEmps}
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
                        onClick={handlerBtnHlpListFones}
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


              {/* //////////////////////////////////////////////////////////////////// */}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          {helpmodal ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpModal(false)}
            >
              { (gethelpnmpnl === 'Conexao') ? (
              <GetCardHelpResgate 
                hndpnl={get}
                nmlst={helpnmlista}
                open={helpopen}
              />
              ): null }
            </PageModal>
          ) : null}


          {/*           
          // {!isvalidado ? (
          //   <PageModal
          //     ptop="1%"
          //     pwidth="40%"
          //     pheight="40%"
          //     titulo={edicao}
          //     imgbm={close}
          //     titbm="Fechar..."
          //     onclose={() => setIsValidado(true)}
          //   >
          //     <CardImgMsg
          //       img={notedicao}
          //       txtaga={txtaga}
          //       txtlabel={txtlabel}
          //       txtp={txtp}
          //     />
          //   </PageModal>
          // ) : null}
 */}

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

            {isconected ? (
              <ContentCardPageTitle>
                <h3>Informação: [ CONEXÃO...]</h3>
              </ContentCardPageTitle>
            ) : null}
            
            {isdowndatasstate ? (
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
                  onclick={handlerIsConectar}
                />
              </ContentSidePageBottonLabel>
            ) : null}
{/* //////////////////////// mostra botão Conectar //////////////////////////// */}
            {isdowndatacenter ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Prosseguir.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Prosseguir..."
                  onclick={handlerDownDatasCenter}
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
