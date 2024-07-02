import * as Pg from '../stylePage.ts';

import '../../../styles/global.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin3 } from '../../modulos/themes/ThemeLogin3';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import { ContentCardPage } from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import { ContentCardBoxMainPage } from '../ContentCardBoxMainPage.tsx';
import { ContentDivManYellow } from '../ContentDivManYellow.tsx';
import { ContentDivMainRed } from '../ContentDivMainRed.tsx';
import { ContentDivMainBlue } from '../ContentDivMainBlue.tsx';
import { ContentDivMainOnGreen } from '../ContentDivMainOnGreen.tsx';
import { ContentDivMainOffRed } from '../ContentDivMainOffRed.tsx';
import { ContentDivButtonOff } from '../ContentDivButtonOff.tsx';
import { ContentDivButtonOn } from '../ContentDivButtonOn.tsx';
import { ContentCardCollunsCenterPage } from '../ContentCardCollunsCenterPage';

import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';

import { ContentCustonText } from '../ContentCustonText.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { CardHelpLogin3 } from '../../contentHelp/CardHelpLogin3.tsx';
import { CardHelpLogin31 } from '../../contentHelp/CardHelpLogin31.tsx';
import close from '../../../assets/svgs/close.svg';
import login3hlp from '../../../assets/svgs/login3hlp.svg';
import loginpg3 from '../../../assets/svgs/loginpg3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import olhoa from '../../../assets/svgs/olhoa.svg';
import olhof from '../../../assets/svgs/olhof.svg';
import setadir from '../../../assets/svgs/setadir.svg';
import satelite from '../../../assets/svgs/satelite.svg';
import sateliteon from '../../../assets/svgs/sateliteon.svg';
import sateliteoff from '../../../assets/svgs/sateliteoff.svg';
import nuvenfind from '../../../assets/svgs/nuvenfind.svg';
import nuvenfindon from '../../../assets/svgs/nuvenfindon.svg';
import nuvenfindoff from '../../../assets/svgs/nuvenfindoff.svg';
import login from '../../../assets/svgs/login.svg';
import logoon from '../../../assets/svgs/logoon.svg';
import logooff from '../../../assets/svgs/logooff.svg';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';

export function Conexao() {
  return true;
}
export function FindAcesso() {
  return true;
}
export function GetLogon() {
  return true;
}

export const ListImg = [sateliteoff, nuvenfindoff, logooff];

export const Login3 = () => {
  const { state, dispatch } = AcessoUseForm();

  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);

  const [helppg, setHelpPg] = React.useState(false);
  
  //const [ishelppg, setIsHelpPg] = React.useState(false);

  const [isshow, setIsShow] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(state.nrcont);

  const [ttmodulo, setTtModulo] = React.useState(
    'Logar : "VERIFICAÇÃO" da Edição de seu Acesso.'
  );
  const [isview, setIsView] = React.useState(false);

  const [isenviar, setIsEnviar] = React.useState(false);
  const [enviado, setEnviado] = React.useState(false);

  const [isconexao, setIsConexao] = React.useState(false);
  const [isconectedoff, setIsConectedoff] = React.useState(false);

  const [isfindacces, setIsFindAcces] = React.useState(false);
  const [isfindingoff, setIsFindingoff] = React.useState(false);

  const [islogin, setIsLogin] = React.useState(false);
  const [isloggedoff, setIsLoggedoff] = React.useState(false);

  const [imgmsg, setImgMsg] = React.useState('');
  
  const [isacesso, setIsAcesso] = React.useState(false);
  const [iserromsg, setIsErroMsg] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');
  const [isresgatar, setIsResgatar] = React.useState(false);

  //  const isMounted = useIsMounted()
  //  const [loading, setLoading] = React.useState(false)
  // const [accesnh, setAcceSnh] = React.useState([]);
  // const [openFilter, setOpenFilter] = React.useState(false)
  // const [filter, setFilter] = React.useState({ userEmp: 0 })

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

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login3' });
    //    dispatch({ type: AcessoUseActions.setModulo, payload: ttmodulo });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Acessando Sistena'
    });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
    setStart(true);
    setIsView(true);
    setIsEnviar(true);
    setIsConexao(false);
    setIsFindAcces(false);
    setIsLogin(false);
    setIsAcesso(false);
    setIsResgatar(false);
  }, [dispatch]);

  const handlerEnviar = React.useCallback(() => {
    setEnviado(true);
    setTtModulo('Logar : "CONEXÃO" com REDE.');
    //setIsHelpPg(false);
    setIsErroMsg(false);
    setIsView(false);
    setIsEnviar(false);
    setIsConexao(true);
    setIsFindAcces(false);
    setIsLogin(false);
    setIsAcesso(false);
    if (tentativa <= 3) {
      setIsResgatar(false);
    } else {
      setIsResgatar(true);
    }
  }, []);

  const handlerConexao = React.useCallback(() => {
    setIsErroMsg(false);
    //setIsHelpPg(false);
    setIsConexao(false);
    setIsFindAcces(true);
    setIsAcesso(false);
    //acessa conexão
    let rtncon = false;

    if (!rtncon) {
      setTentativa(tentativa + 1);
      setImgMsg(ListImg[0]);
      setTxtAga('"ERRO" na Comunicação');
      setTxtLabel('Acesso REDE.');
      setTxtP('Não foi encontrado Comunicação com Provedor.');
      setIsErroMsg(true);
      setIsConectedoff(true);
      setIsFindAcces(false);
      if (tentativa <= 3) {
        setIsResgatar(false);
      } else {
        setIsEnviar(false);
        setIsResgatar(true);
      }
    }
  }, []);

  const handlerFindAcess = React.useCallback(() => {
    setIsErroMsg(false);
    //setIsHelpPg(false);
    setIsFindAcces(false);
    setIsLogin(true);
    setIsAcesso(false);
    //acessa banco de dados
    let rtndata = false;

    if (!rtndata) {
      setTentativa(tentativa + 1);
      setImgMsg(ListImg[1]);
      setTxtAga('"ERRO" no Acesso ao Provedor');
      setTxtLabel('Acesso DADOS.');
      setTxtP('Não foi encontrado Banco de Dados para Pesquisa.');
      setIsErroMsg(true);
      setIsFindingoff(true);
      setIsLogin(false);
      if (tentativa <= 3) {
        setIsResgatar(false);
      } else {
        setIsEnviar(false);
        setIsResgatar(true);
      }
    } else {
      setIsAcesso(false);
    }
  }, []);

  const handlerLogin = React.useCallback(() => {
    setIsErroMsg(false);
    //setIsHelpPg(false);
    setIsLogin(false);
    setIsAcesso(false);
    //acessa dados
  
    let rtndados = true;

    if (!rtndados) {
      setTentativa(tentativa + 1);
      setImgMsg(ListImg[2]);
      setTxtAga('"ERRO" de Acesso em Provedor');
      setTxtLabel('Acesso LOGIN.');
      setTxtP(
        'Não foi encontrado Dados durante a Pesquisa. Motivo: ID ou Senha "NÂO ENCONTRADA!"'
      );
      setIsErroMsg(true);
      setIsLoggedoff(true);
      setIsAcesso(false);
      if (tentativa <= 3) {
        setIsResgatar(false);
      } else {
        setIsEnviar(false);
        setIsResgatar(true);
      }
    } else {
      setIsAcesso(true);
    }
  }, []);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  React.useEffect(() => {
    if (iserromsg) {
      setHelpPg(true);
    }
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    dispatch({ type: AcessoUseActions.setLogado, payload: isacesso });
  }, [iserromsg, tentativa, isacesso, dispatch]);
  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin3
        imgsys={loginpg3}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Acesso Sistema.'}
        imghpg={help}
        titbtnhpg={'Ajuda...'}
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen={'states contexto'}
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <ContentCardPage pwidth="70%">
          <ContentCardPageTitle>
            <h2>{ttmodulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardCollunsCenterPage openccp={isview} pwidth="100%">
              <ContentDivManYellow pxheight="65px">
                <ContentCustonText>
                  <label>Empresa:</label>
                  <h4>{state.nmfant}</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="35%" />
              </ContentDivManYellow>
              <ContentDivManYellow pxheight="65px">
                <ContentCustonText>
                  <label>ID:</label>
                  <h4>{state.idnmuser}</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%" />
              </ContentDivManYellow>
              {!isshow ? (
                <ContentDivMainRed pxheigth="65px">
                  <ContentCustonText>
                    <label>Senha:</label>
                    <h4>░░░░░░░░░░</h4>
                  </ContentCustonText>
                  <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                    <ContentDivButtonOff
                      img={olhof}
                      title="Abrir..."
                      onClick={() => {
                        setIsShow(true);
                      }}
                    />
                  </Pg.ContainerCardDivMainEnd>
                </ContentDivMainRed>
              ) : (
                <ContentDivMainRed pxheigth="65px">
                  <ContentCustonText>
                    <label>Senha:</label>
                    <h4>{state.pswuser}</h4>
                  </ContentCustonText>
                  <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                    <ContentDivButtonOn
                      pxwdth="40px"
                      img={olhoa}
                      title="Fechar..."
                      onClick={() => {
                        setIsShow(false);
                      }}
                    />
                  </Pg.ContainerCardDivMainEnd>
                </ContentDivMainRed>
              )}
            </ContentCardCollunsCenterPage>
            {/* // apos clicar em Enviar // */}
            <ContentCardCollunsCenterPage openccp={isconexao} pwidth="100%">
              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={satelite}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>

              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>
            {/* // apos clicar em handlerConexao e não obter uma conexão // */}
            <ContentCardCollunsCenterPage openccp={isconectedoff} pwidth="100%">
              <ContentDivMainOffRed pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteoff}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>

              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>

              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>
            {/* // apos retorno Conexao=> true verifica acesso a Database com handlerFindAcess // */}
            <ContentCardCollunsCenterPage openccp={isfindacces} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>
            {/* // apos clicar em handlerFindAcess e não enconntrar DataBase // */}
            <ContentCardCollunsCenterPage openccp={isfindingoff} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOffRed pxheight="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindoff}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>
              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>
            {/* // apos retorno Database=> true libera handlerLogin busca a existencia dos dados login //*/}
            <ContentCardCollunsCenterPage openccp={islogin} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainBlue pxheigth="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>
            {/* // apos retorno Login false  // */}
            <ContentCardCollunsCenterPage openccp={isloggedoff} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOffRed>
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={logooff}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>
            </ContentCardCollunsCenterPage>
            {/* // apos retorno Login => true libera botão   // */}
            <ContentCardCollunsCenterPage openccp={isacesso} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentCustonText>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentCustonText>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={logoon}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>
            </ContentCardCollunsCenterPage>

            {iserromsg ? (
              <PageModal
                ptop={'1%'}
                pwidth={'30%'}
                pheight={'50%'}
                titulo={'Acesso DataBase.'}
                imgbm={close}
                titbm={'Fechar...'}
                onclose={() => setIsErroMsg(false)}
              >
                <CardImgMsg
                  img={imgmsg}
                  txtaga={txtaga}
                  txtlabel={txtlabel}
                  txtp={txtp}
                />
              </PageModal>
            ) : null}
          </ContentCardBoxMainPage>
          <Pg.DivisionPgHztalPage />

          {isresgatar ? (
            <ContentSidePagePanelBotton open={start} pwidth="100%">
              <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Voltar...'}
                  onclick={goto('/login')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage
                label={'Tentativa [ ' + state.nrcont + 'ª ]'}
              />
              <ContentSidePageBottonLabel
                istitl={isresgatar}
                title={'Resgatar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Resgatar...'}
                  onclick={goto('/resgate1')}
                />
              </ContentSidePageBottonLabel>
            </ContentSidePagePanelBotton>
          ) : (
            <ContentSidePagePanelBotton open={start} pwidth="100%">
              <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setaesq}
                  titbtn={'Voltar...'}
                  onclick={goto('/login2')}
                />
              </ContentSidePageBottonLabel>
              <ContentBoxLabelPage
                label={'Tentativa [ ' + state.nrcont + 'ª ]'}
              />
              {isacesso ? (
                <ContentSidePageBottonLabel
                  istitl={isacesso}
                  title={'Entrar : '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Entrar no Sistema...'}
                    onclick={goto('/')}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
              {islogin ? (
                <ContentSidePageBottonLabel istitl={islogin} title={'Logar : '}>
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Enviar Acesso...'}
                    onclick={handlerLogin}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
              {isfindacces ? (
                <ContentSidePageBottonLabel
                  istitl={isfindacces}
                  title={'Solicitar Provedor: '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Solicitar Provedor...'}
                    onclick={handlerFindAcess}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
              {isconexao ? (
                <ContentSidePageBottonLabel
                  istitl={isconexao}
                  title={'Conectar Rede: '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Conectar Rede...'}
                    onclick={handlerConexao}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
              {isenviar ? (
                <ContentSidePageBottonLabel
                  istitl={isenviar}
                  title={'Enviar.: '}
                >
                  <ContentSidePageBottonButton
                    pxheight={'40px'}
                    img={setadir}
                    titbtn={'Enviar...'}
                    onclick={handlerEnviar}
                  />
                </ContentSidePageBottonLabel>
              ) : null}
            </ContentSidePagePanelBotton>
          )}

          {helppg && !enviado ? (
            <PageModal
              ptop={'1%'}
              pwidth={'55%'}
              pheight={'60%'}
              titulo={'Acesso Sistema.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin3
                imghlp={login3hlp}
                imgcard={loginpg3}
                imgbm={close}
                titbm={'Fechar...'}
                onclose={() => setHelpPg(false)}
              />
            </PageModal>
          ) : null}
          {helppg && enviado ? (
            <PageModal
              ptop={'1%'}
              pwidth={'55%'}
              pheight={'60%'}
              titulo={'Acesso Sistema.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin31
                imghlp={login3hlp}
                imgcard={loginpg3}
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
              pheight={'70%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}
        </ContentCardPage>
      </ThemeLogin3>
    </ThemeProvider>
  );
};
