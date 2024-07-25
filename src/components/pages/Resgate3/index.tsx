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

export const Resgate3 = () => {
  const { state, dispatch } = AcessoUseForm();

  const [snhmaster, setSnhMaster] = React.useState('');

  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');

  const [inputstrid, setInputStrId] = React.useState('');
  
  const [ishlperror, setIsHlpError] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  //const [ischeckedicao, setIsCheckEdicao] = React.useState(false);
  //const [isconfirmar, setIsConfirmar] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);
  const [isdowndatasstate, setIsDownDatasState] = React.useState(false);

  const [verificadodb,setVerificadoDb] = React.useState(false); 
  const [btndatacenter, setBtnDataCenter] = React.useState(false);

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

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [islistacess, setIsListAcess] = React.useState(false);
  const [isbtnhlplistacess, setIsBtnHlpListAcess] = React.useState(false);

  const [islistusers, setIsListUsers] = React.useState(false);
  const [isbtnhlplistusers, setIsBtnHlpListUsers] = React.useState(false);

  const [islistfones, setIsListFones] = React.useState(false);
  const [isbtnhlplistfones, setIsBtnHlpListFones] = React.useState(false);

  const [islistemps, setIsListEmps] = React.useState(false);
  const [isbtnhlplistemps, setIsBtnHlpListEmps] = React.useState(false);

  const [acesso, setAcess] = React.useState<IAcessos | undefined>(undefined);
  const [user, setUser] = React.useState<IUsers | undefined>(undefined);
  const [fones, setFones] = React.useState<IFones | undefined>(undefined);
  const [emps, setEmps] = React.useState<IEmps | undefined>(undefined);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate3' });
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });

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
    setIsHlpError(false);
    setIsConected(false);
    setVerificadoDb(false);
    setIsDownDatasState(false);

    setBtnDataCenter(false);
///////////////////
    setIsEditar(false);
    setIsBtnPerguntas(false);
    setIsBtnEnviar(false);
    setIsBtnConferir(false);
    
    setIsBtnContinuar(false);
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

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerBtnHlpListAcess = React.useCallback(() => {
    setIsBtnHlpListAcess((oldState) => !oldState);
  }, []);

  const handlerBtnHlpListUsers = React.useCallback(() => {
    setIsBtnHlpListUsers((oldState) => !oldState);
  }, []);

  const handlerBtnHlpListFones = React.useCallback(() => {
    setIsBtnHlpListFones((oldState) => !oldState);
  }, []);

  const handlerBtnHlpListEmps = React.useCallback(() => {
    setIsBtnHlpListEmps((oldState) => !oldState);
  }, []);

  // Função de callback
  const handlerIsConectar = React.useCallback(() => {
    // Criar lista USUARIOS com INDEX ID
    setVerificadoDb(false);
    const Lstacessos = AcessosIndexById();
    // Verificar se a lista de Acessos vasia ou corrompida ou existente
    if (Object.keys(Lstacessos).length > 0) {
      setIsListAcess(true);
    } else {
      // memssagem de e alerta para o erro
      setIsListAcess(false);
      setTxtAga('"ERRO" ao acessar ACESSOS dos USUÁRIOS');
      setTxtLabel('Não foi encontrado DATA ou DADOS Acessos do Usuários.');
      setTxtP(
        'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
      );
    }
    /////////////////////////
    if (islistacess) {
      // Criar lista USUARIOS com INDEX ID
      const Lstusuarios = UsersIndexById();
      // Verificar se a lista de usuários vasia ou corrompida ou existente
      if (Object.keys(Lstusuarios).length > 0) {
        setIsListUsers(true);
      } else {
        // memssagem de e alerta para o erro
        setIsListUsers(false);
        setTxtAga('"ERRO" ao acessar USUÁRIOS');
        setTxtLabel('Não foi encontrado DATA ou DADOS Usuários.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }
      ///////////////////////////
      if (islistusers) {
        // Criar lista FONES com INDEX ID
        const Lstfones = FonesIndexById();
        // Verificar se a lista de Fones vasia ou corrompida ou existente
        if (Object.keys(Lstfones).length > 0) {
          setIsListFones(true);
        } else {
          // memssagem de e alerta para o erro
          setIsListFones(false);
          setTxtAga('"ERRO" ao acessar TELEFONES');
          setTxtLabel('Não foi encontrado DATA ou DADOS Telefones.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        //////////////////////////
        if (islistfones) {
          // Criar lista FONES com INDEX ID
          const LstEmps = EmpsIndexById();
          // Verificar se a lista de Fones vasia ou corrompida ou existente
          if (Object.keys(LstEmps).length > 0) {
            setIsListEmps(true);
          } else {
            // memssagem de e alerta para o erro
            setIsListEmps(false);
            setTxtAga('"ERRO" ao acessar TELEFONES');
            setTxtLabel('Não foi encontrado DATA ou DADOS Telefones.');
            setTxtP(
              'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
            );
          }
        }
      }
    }
  }, []);
  React.useEffect(() => {
    setVerificadoDb(false);
    if ( !islistacess || !islistusers || !islistemps || islistfones ){
      setVerificadoDb(false);
    } else {
      setVerificadoDb(true);
    }

    setIsDownDatasState(verificadodb);
  },[verificadodb, islistacess, islistusers, islistemps, islistfones]);

  // Função de callback
  const handlerDownDatasState = React.useCallback(() => {

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
            {!isconected ? <h2>Conexão com DataCenter</h2> : null}
            {!isdowndatasstate ? <h2>{'DonwLoad DataCenter.'}</h2> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {!isconected ? <h4>{'Conectar com DataCenter.'}</h4> : null}
                {!isdowndatasstate ? <h4>{'DonwLoad Datas.'}</h4> : null}
              </ContentCardPageTitle>

              { !isconected ? (
                <PanelConfResgateYellow
                  isbgcolor={!isconected}
                  titulo={'Resgate em Banco de Dados.'}
                  subtitulo={'Dados para Resgate:'}
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
                  <h4>{state.nmlogin}</h4>
                  <div>
                    <p>&emsp;&emsp;Busca pelos Dados :</p>
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
                      &emsp;&emsp;Caso deseja " Conectar.:", clique na Seta à
                      Direita...
                    </p>
                    <br />
                  </div>
                </PanelConfResgateYellow>
              ) : null}

              { !isdowndatasstate ? (
                <PanelConfResgateYellow
                  isbgcolor={!isconected}
                  titulo={'Resgate em Banco de Dados.'}
                  subtitulo={'Dados para Resgate:'}
                >
                  <p>&emsp;&emsp;Obter Dados DataBase :</p>
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
                ) : null }
{/* //////////////////////////////////////////////////////////////////// */}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          
          
          { isbtnhlplistacess ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setIsBtnHlpListAcess(false)}
            >
              <GetHelpList 
            </PageModal>
          ): null}
          
          {!isvalidado ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setIsValidado(true)}
            >
              <CardImgMsg
                img={notedicao}
                txtaga={txtaga}
                txtlabel={txtlabel}
                txtp={txtp}
              />
            </PageModal>
          ) : null}

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

            {!isconected ? (
              <ContentCardPageTitle>
                <h3>Informação: [ Desconectado! ]</h3>
              </ContentCardPageTitle>
            ) : null}
            { !isdowndatasstate ? (
              <ContentCardPageTitle>
              <h3>DonwLoad : [ Data Center! ]</h3>
            </ContentCardPageTitle>
            ) : null}

            {!isconected ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Conectar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Conectar..."
                  onclick={handlerIsConectar}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            { !isdowndatasstate ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Prosseguir.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Prosseguir..."
                  onclick={ handlerDownDatasState}
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
