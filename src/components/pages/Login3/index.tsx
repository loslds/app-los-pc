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

import ContentCardPage from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import ContentCardBoxMainPage from '../ContentCardBoxMainPage.tsx';
import ContentDivManYellow from '../ContentDivManYellow.tsx';
import ContentDivMainRed from '../ContentDivMainRed.tsx';
import ContentDivMainBlue from '../ContentDivMainBlue.tsx';
import ContentDivMainOnGreen from '../ContentDivMainOnGreen.tsx';
import ContentDivMainOffRed from '../ContentDivMainOffRed.tsx';
import ContentDivButtonOff from '../ContentDivButtonOff.tsx';
import ContentDivButtonOn from '../ContentDivButtonOn.tsx';
import ContentCardCollunsCenterPage from '../ContentCardCollunsCenterPage';
import ContentSidePagePanelBotton from '../ContentSidePagePanelBotton.tsx';
import ContentSidePageLabelBotton from '../ContentSidePageLabelBotton.tsx';
import { ContentDivTxt } from '../ContentDivTxt.tsx';
import CardImgMsg from '../../contentHelp/CardImgMsg.tsx';
import PageModal from '../../Modal/PageModal.tsx';
import CardInfoLogin from '../../contentHelp/CardInfoLogin.tsx';
import CardHelpLogin3 from '../../contentHelp/CardHelpLogin3.tsx';
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

const Login3 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  const [ishelppg, setIsHelpPg] = React.useState(false);

  const [isshow, setIsShow] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);
  const [nrclicklogo, setNrClickLogo] = React.useState(0);

  const [ttmodulo, setTtModulo] = React.useState(
    'Logar : "VERIFICAÇÃO" da Edição de seu Acesso.'
  );
  const [isview, setIsView] = React.useState(false);

  const [isenviar, setIsEnviar] = React.useState(false);

  const [isconexao, setIsConexao] = React.useState(false);
  // const [isconectedon, setIsConectedon] = React.useState(false);
  const [isconectedoff, setIsConectedoff] = React.useState(false);

  const [isfindacces, setIsFindAcces] = React.useState(false);
  //const [isfindingon, setIsFindingon] = React.useState(false);
  const [isfindingoff, setIsFindingoff] = React.useState(false);

  const [islogin, setIsLogin] = React.useState(false);
  //const [isloggedon, setIsLoggedon] = React.useState(false);
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

  const { state, dispatch } = AcessoUseForm();

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login3' });
    dispatch({ type: AcessoUseActions.setModulo, payload: ttmodulo });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Acessando Sistena'
    });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
    setIsView(true);
    setIsEnviar(true);
    setIsConexao(false);
    setIsFindAcces(false);
    setIsLogin(false);
    setIsAcesso(false);
    setIsResgatar(false);
  }, [dispatch]);

  const handlerEnviar = React.useCallback(() => {
    setTentativa(state.nrcont);
    setTtModulo('Logar : "CONEXÃO" com REDE.');
    setIsHelpPg(true);
    setIsView(false);
    setIsEnviar(false);
    setIsConexao(true);
    setIsFindAcces(false);
    setIsLogin(false);
    setIsAcesso(false);

    if (tentativa >= 3) {
      setIsResgatar(true);
    } else {
      setIsResgatar(false);
    }
  }, [dispatch]);

  const handlerConexao = React.useCallback(() => {
    setIsConexao(false);
    setIsFindAcces(true);
    //acessa conexão
    let rtncon = true;

    if (!rtncon) {
      //      setIsConectedon(true);
      //    } else {
      setImgMsg(ListImg[0]);
      setTxtAga('"ERRO" na Comunicação');
      setTxtLabel('Acesso REDE.');
      setTxtP('Não foi encontrado Comunicação com Provedor.');
      setIsErroMsg(true);
      setIsConectedoff(true);
      setIsFindAcces(false);
      if (tentativa >= 3) {
        setIsResgatar(true);
      }
    }
  }, []);

  const handlerFindAcess = React.useCallback(() => {
    setIsFindAcces(false);
    setIsLogin(true);
    //acessa banco de dados
    let rtndata = true;
    if (!rtndata) {
      //   setIsFindingon(true);
      // } else {
      setImgMsg(ListImg[1]);
      setTxtAga('"ERRO" no Acesso ao Provedor');
      setTxtLabel('Acesso DADOS.');
      setTxtP('Não foi encontrado Banco de Dados para Pesquisa.');
      setIsErroMsg(true);
      setIsFindingoff(true);
      setIsLogin(false);
      if (tentativa >= 3) {
        setIsResgatar(true);
      }
    }
  }, []);

  const handlerLogin = React.useCallback(() => {
    setIsLogin(false);
    //acessa dados
    let rtndados = false;

    if (!rtndados) {
      //   setIsLoggedon(true);
      // } else {
      setImgMsg(ListImg[2]);
      setTxtAga('"ERRO" de Acesso em Provedor');
      setTxtLabel('Acesso LOGIN.');
      setTxtP(
        'Não foi encontrado Dados durante a Pesquisa. Motivo: ID ou Senha "NÂO ENCONTRADA!"'
      );
      setIsLoggedoff(true);
      setIsAcesso(false);
      if (tentativa >= 3) {
        setIsResgatar(true);
      }
    } else {
      setIsAcesso(true);
    }
  }, [dispatch]);

  
  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    dispatch({ type: AcessoUseActions.setModulo, payload: ttmodulo });
//    if (isacesso) {
    dispatch({ type: AcessoUseActions.setLogado, payload: isacesso });
//    } else {
//      dispatch({ type: AcessoUseActions.setLogado, payload: isloggedoff });
//    }
  }, [tentativa, isacesso, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin3
        imgsys={loginpg3}
        titbtnsys={'Acesso Logo-on...'}
        onclicksys={() => {}}
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
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardCollunsCenterPage openccp={isview} pwidth="100%">
              <ContentDivManYellow pxheight="65px">
                <ContentDivTxt>
                  <label>Empresa:</label>
                  <h4>{state.nmfant}</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="35%" />
              </ContentDivManYellow>
              <ContentDivManYellow pxheight="65px">
                <ContentDivTxt>
                  <label>ID:</label>
                  <h4>{state.idnmuser}</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%" />
              </ContentDivManYellow>
              {!isshow ? (
                <ContentDivMainRed pxheigth="65px">
                  <ContentDivTxt>
                    <label>Senha:</label>
                    <h4>░░░░░░░░░░</h4>
                  </ContentDivTxt>
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
                  <ContentDivTxt>
                    <label>Senha:</label>
                    <h4>{state.pswuser}</h4>
                  </ContentDivTxt>
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
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={satelite}
                    title="Acesso REDE."
                    onClick={handlerConexao}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>

              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
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
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteoff}
                    title="Acesso REDE."
                    onClick={() => setIsErroMsg(true)}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>

              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>

              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
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
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfind}
                    title="Acesso DADOS."
                    onClick={handlerFindAcess}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
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
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOffRed pxheight="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindoff}
                    title="Acesso DADOS."
                    onClick={() => setIsErroMsg(true)}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>
              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
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
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={login}
                    title="Acesso LOGAR."
                    onClick={handlerLogin}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            </ContentCardCollunsCenterPage>

            {/* // apos retorno Login false  // */}
            <ContentCardCollunsCenterPage openccp={isloggedoff} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOffRed>
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={logooff}
                    title="Acesso LOGAR."
                    onClick={() => setIsErroMsg(true)}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOffRed>
            </ContentCardCollunsCenterPage>

            {/* // apos retorno Login => true libera botão   // */}
            <ContentCardCollunsCenterPage openccp={isacesso} pwidth="100%">
              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={sateliteon}
                    title="Acesso REDE."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Serviço:</label>
                  <h4>DADOS</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={nuvenfindon}
                    title="Acesso DADOS."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>

              <ContentDivMainOnGreen pxheight="50px">
                <ContentDivTxt>
                  <label>Logar:</label>
                  <h4>LOGAR</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOff
                    img={logoon}
                    title="Acesso LOGAR."
                    onClick={() => {}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainOnGreen>
            </ContentCardCollunsCenterPage>
          </ContentCardBoxMainPage>
          <Pg.DivisionPgHztalPage />

          { isconectedoff || isfindingoff || isloggedoff && iserromsg? (
            <PageModal
              ptop="111px"
              pwidth="30%"
              pheight="32%"
              titulo='" A T E N Ç Ã O "'
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

          {state.nrcont <= 3 ? (
            <ContentSidePagePanelBotton open={true} pwidth="100%">
              <ContentSidePageLabelBotton
                pxheight={'40px'}
                istitl={true}
                title={'Voltar: '}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/login2')}
              />
              <Pg.ContainerBoxLabelPage>
                <label>[ {3 - state.nrcont} ] tentativas. </label>
              </Pg.ContainerBoxLabelPage>

              {isresgatar ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Resgatar.: '}
                  img={setadir}
                  titbtn={'Resgatar...'}
                  onclick={goto('/login4')}
                />
              ) : null}

              {isacesso ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Entrar : '}
                  img={setadir}
                  titbtn={'Entrar no Sistema...'}
                  onclick={goto('/')}
                />
              ) : null}

              {islogin ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Logar : '}
                  img={setadir}
                  titbtn={'Enviar Acesso...'}
                  onclick={handlerLogin}
                />
              ) : null}

              {isfindacces ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Solicitar Provedor: '}
                  img={setadir}
                  titbtn={'Solicitar Provedor...'}
                  onclick={handlerFindAcess}
                />
              ) : null}

              {isconexao ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Conectar Rede: '}
                  img={setadir}
                  titbtn={'Conectar Rede...'}
                  onclick={handlerConexao}
                />
              ) : null}

              {isenviar ? (
                <ContentSidePageLabelBotton
                  pxheight={'20px'}
                  istitl={true}
                  title={'Enviar.: '}
                  img={setadir}
                  titbtn={'Enviar...'}
                  onclick={handlerEnviar}
                />
              ) : null}
            </ContentSidePagePanelBotton>
          ) : null}

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'40%'}
              pheight={'48%'}
              titulo={'Acesso Sistema.'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin3
                ishlp={ishelppg}
                imgcard={login3hlp}
                imghlp={loginpg3}
              />
            </PageModal>
          ) : null}

          {onpanel ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'70%'}
              titulo={'DADOS Context Login.'}
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

export default Login3;
