import * as Pg from '../stylePage.ts';
//import * as MD from '../../Modal/styles.ts';

import '../../../styles/global.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
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

const Login3 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const [isshow, setIsShow] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);
  const [nrclicklogo, setNrClickLogo] = React.useState(0);

  const [ttmodulo, setTtModulo] = React.useState(
    'Logar : "VERIFICAÇÃO" da Edição de seu Acesso.'
  );
  const [isview, setIsView] = React.useState(false);

  const [isenviar, setIsEnviar] = React.useState(false);

  const [isconexao, setIsConexao] = React.useState(false);
  const [isconectedon, setIsConectedon] = React.useState(false);
  const [isconectedoff, setIsConectedoff] = React.useState(false);

  const [isfindacces, setIsFindAcces] = React.useState(false);
  const [isfindingon, setIsFindingon] = React.useState(false);
  const [isfindingoff, setIsFindingoff] = React.useState(false);

  const [islogin, setIsLogin] = React.useState(false);
  const [isloggedon, setIsLoggedon] = React.useState(false);
  const [isloggedoff, setIsLoggedoff] = React.useState(false);

  const [isacesso, setIsAcesso] = React.useState(false);
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
    setTentativa(state.nrcont + 1);
    setTtModulo('Logar : "CONEXÃO" com REDE.');

    setIsView(false);
    setIsEnviar(false);
    setIsConexao(true);
    setIsFindAcces(false);
    setIsLogin(false);
    setIsAcesso(false);

    if (tentativa >= 5) {
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
    if (rtncon) {
      setIsConectedon(true);
    } else {
      setIsConectedoff(true);
      setIsFindAcces(false);
      if (tentativa + 1 === 5) {
        setIsResgatar(true);
      }
    }
  }, []);

  const handlerFindAcess = React.useCallback(() => {
    setIsFindAcces(false);
    setIsLogin(true);
    //acessa banco de dados
    let rtndata = true;
    if (rtndata) {
      setIsFindingon(true);
    } else {
      setIsFindingoff(true);
      setIsLogin(false);
      if (tentativa + 1 === 5) {
        setIsResgatar(true);
      }
    }
  }, []);

  const handlerLogin = React.useCallback(() => {
    setIsLogin(false);
    setIsAcesso(true);
    //acessa dados
    let rtndados = true;
    if (rtndados) {
      setIsLoggedon(true);
    } else {
      setIsLoggedoff(true);
      setIsAcesso(false);
      if (tentativa + 1 === 5) {
        setIsResgatar(true);
      }
    }
  }, [dispatch]);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    dispatch({ type: AcessoUseActions.setModulo, payload: ttmodulo });
    if (isacesso) {
      dispatch({ type: AcessoUseActions.setLogado, payload: isloggedon });
    } else {
      dispatch({ type: AcessoUseActions.setLogado, payload: isloggedoff });
    }
  }, [tentativa, isacesso, dispatch]);

  console.log('state.logado login3 :', state.logado);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
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
                    onClick={() => {}}
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
                    onClick={() => {}}
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
                    onClick={() => {}}
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
          {state.nrcont <= 4 ? (
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
                <label>[ {4 - state.nrcont} ] tentativas. </label>
              </Pg.ContainerBoxLabelPage>
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
            </ContentSidePagePanelBotton>
          ) : null}
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login3;

{
  /*
            {isconectedon ? (
              <ContentPagePanelBotton open={isconexao} pwidth="100%">
              <ContentDivMainBlue pxheigth="50px">
                <ContentDivTxt>
                  <label>Conectar:</label>
                  <h4>REDE</h4>
                </ContentDivTxt>
                <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                  <ContentDivButtonOn
                    img={sateliteon}
                    title="REDE Liberada."
                    onClick={() => {}}
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
                    onClick={()=>{}}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>

              </ContentPagePanelBotton>
              ): null 
            }

            {isconectedon ? (





            



&& !isconexao && isfindacces && islogin










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
                    onClick={handlerLogin}
                  />
                </Pg.ContainerCardDivMainEnd>
              </ContentDivMainBlue>
            
            </ContentPagePanelBotton>
 
                        
              









                {isconexao && isconectedon ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>Conexão:</label>
                      <h4>REDE CONECTADA</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOn
                        img={sateliteon}
                        title="REDE Liberada."
                        onClick={() => {}}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}
                {isconexao && isconectedoff ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>Conexão:</label>
                      <h4>REDE NEGADA</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOn
                        img={sateliteoff}
                        title="REDE Negada."
                        onClick={() => {}}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}


                {isfindacces && isfindingon ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>Serviço:</label>
                      <h4>DADOS LIBERADO</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOn
                        img={nuvenfindon}
                        title="Dados Liberado."
                        onClick={() => {}}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}
                {isfindacces && !isfindingoff ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>Serviço:</label>
                      <h4>DADOS NEGADO</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOff
                        img={nuvenfindoff}
                        title="Acesso DADOS."
                        onClick={handlerFindAcess}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}

                {islogin && isfindingon ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>LOGAR:</label>
                      <h4>LOGIN SUCESSO</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOn
                        img={logoon}
                        title="Login Sucesso."
                        onClick={() => {}}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}
                {islogin && isfindingoff ? (
                  <ContentDivMainBlue pxheigth="50px">
                    <ContentDivTxt>
                      <label>Serviço:</label>
                      <h4>LOGIN NEGADO</h4>
                    </ContentDivTxt>
                    <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
                      <ContentDivButtonOff
                        img={logooff}
                        title="Login Negado."
                        onClick={() => {}}
                      />
                    </Pg.ContainerCardDivMainEnd>
                  </ContentDivMainBlue>
                ) : null}
              </ContentPagePanelBotton>
            ) : null}
*/
}

{
  /* 
          
          
          
          {isenviar ? (
            <ContentPagePanelBotton open={true} pwidth="100%">
              <CardModalTexto>
                <MD.ContentTextoModulos>
                  <h4>Informações do Ambiente de acesso.</h4>
                  <p>&emsp;Você deve Clicar nas imagens para o acesso LOGAR.</p>
                  <p>
                    &emsp;01º - O Conecxão à "REDE", estará tentando acessar:
                    via Internet ou REDE Local.
                  </p>
                  <p>
                    &emsp;02º - O Serviço de "DADOS", localizará o serviço de
                    DADOS para pesquiza.
                  </p>
                  <p>
                    &emsp;03º - "LOGAR", identifirará suas credenciais de
                    Acesso.
                  </p>
                </MD.ContentTextoModulos>
              </CardModalTexto>
            </ContentPagePanelBotton>
          ) : null}
          <Pg.DivisionPgHztalPage />
 */
}

// ////////////////////////////////////////////////
//              painel de botões
// ////////////////////////////////////////////////
// ///////////////////////////////////////////////
//              Painel de botões:
//              antes de clicar em enviar
//              enviar: false
// ////////////////////////////////////////////////
//           !isenviar && state.nrcont <= 4 ? (
//             <ContentSidePagePanelBotton open={true} pwidth="100%">
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Voltar: '}
//                 img={setaesq}
//                 titbtn={'Voltar...'}
//                 onclick={goto('/login2')}
//               />
//               <Pg.ContainerBoxLabelPage>
//                 <label>[ {4 - state.nrcont} ] tentativas. </label>
//               </Pg.ContainerBoxLabelPage>
//               <ContentSidePageLabelBotton
//                 pxheight={'20px'}
//                 istitl={true}
//                 title={'Enviar.: '}
//                 img={setadir}
//                 titbtn={'Enviar...'}
//                 onclick={handlerEnviar}
//               />
//             </ContentSidePagePanelBotton>
//           ) : null}

// ////////////////////////////////////////////////
//              Painel de botões:
//              caso entrando com :
//              enviar : falso
//              tentativa: menor ou igual a 4
// ////////////////////////////////////////////////

//                   <ContentDivMainBlue pxheigth="50px">
//                     <ContentDivTxt>
//                       <label>Serviço:</label>
//                       <h4>DADOS</h4>
//                     </ContentDivTxt>
//                     <Pg.ContainerCardDivMainEnd pxheight="50px" pxwidth="33%">
//                       <ContentDivButtonOff
//                         img={nuvenon}
//                         title="Acesso REDE."
//                         onClick={() => {
//                           setIsConexao(true);
//                         }}
//                       />
//                     </Pg.ContainerCardDivMainEnd>
//                   </ContentDivMainBlue>
//                 ) : (
//                   <ContentDivMainBlue pxheigth="65px">
//                     <ContentDivTxt>
//                       <label>Rede:</label>
//                       <h4>ALCANÇADA</h4>
//                     </ContentDivTxt>
//                     <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                       <ContentDivButtonOn
//                         pxwdth="40px"
//                         img={nuvenon}
//                         title="Conectado em REDE."
//                         onClick={() => {}}
//                       />
//                     </Pg.ContainerCardDivMainEnd>
//                   </ContentDivMainBlue>
//                 )}

//           {!isenviar && state.nrcont <= 4  ? (
//             <ContentSidePagePanelBotton open={true} pwidth="100%">
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Voltar: '}
//                 img={setaesq}
//                 titbtn={'Voltar...'}
//                 onclick={goto('/login2')}
//               />
//               <Pg.ContainerBoxLabelPage>
//                 <label>[ {4 - state.nrcont} ] tentativas. </label>
//               </Pg.ContainerBoxLabelPage>
//               <ContentSidePageLabelBotton
//                 pxheight={'20px'}
//                 istitl={true}
//                 title={'Enviar.: '}
//                 img={setadir}
//                 titbtn={'Enviar...'}
//                 onclick={handlerEnviar}
//               />
//             </ContentSidePagePanelBotton>
//           ) : null}

//           { state.nrcont >= 4 || isresgatar ? (
//             <ContentSidePagePanelBotton open={true} pwidth="100%">
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Home.: '}
//                 img={setaesq}
//                 titbtn={'Home...'}
//                 onclick={goto('/')}
//               />
//               <Pg.ContainerBoxLabelPage>
//                 <label>Expirou Tentativas [ 4 de {state.nrcont} ]. </label>
//               </Pg.ContainerBoxLabelPage>
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Resgatar: '}
//                 img={setadir}
//                 titbtn={'Resgatar...'}
//                 onclick={goto('/login4')}
//               />
//             </ContentSidePagePanelBotton>
//           ) : null}

//           {islogin ? (
//             <ContentSidePagePanelBotton open={true} pwidth="100%">
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Voltar: '}
//                 img={setaesq}
//                 titbtn={'Voltar...'}
//                 onclick={goto('/login2')}
//               />
//               <Pg.ContainerBoxLabelPage>
//                 <label>[ {4 - state.nrcont} ] tentativas. </label>
//               </Pg.ContainerBoxLabelPage>
//               </ContentSidePagePanelBotton>
//           ) : null}
//           { acesso ? (
//             <ContentSidePagePanelBotton open={true} pwidth="100%">
//               <ContentSidePageLabelBotton
//                 pxheight={'40px'}
//                 istitl={true}
//                 title={'Entrar: '}
//                 img={enviaron}
//                 titbtn={'Acessar Sistema...'}
//                 onclick={goto('/')}
//               />
//             </ContentSidePagePanelBotton>
//           ) : null}

//                <ContentDivManblue pxheight="65px">
//                   <ContentDivTxt>
//                     <h4>Validando Acesso</h4>
//                   </ContentDivTxt>
//                   <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="35%" />
//                 </ContentDivManblue>

//               <ContentCardBoxCenterPage open={true} pwidth="100%">
//                 <ContentDivMainBlue pxheigth="65px">
//                   <ContentCardPageTitle>
//                     <h2>Validando Acesso</h2>
//                   </ContentCardPageTitle>
//                   <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                     <ContentDivButtonOn
//                         pxwdth="40px"
//                         img={satelite}
//                         title="Acesso a REDE."
//                         onClick={() => {
//                           setIsShow(false);
//                         }}
//                       />
//                     </Pg.ContainerCardDivMainEnd>
//                   </ContentDivMainBlue>

//                 <ContentCardPageTitle>
//                   <h2>Validando Acesso</h2>
//                 </ContentCardPageTitle>
//                 <ContentDivMainImagens>
//                   {!isconexao ? (
//                   <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                     <ContentDivTxt>
//                       <label>Servidor.</label>
//                     </ContentDivTxt>
//                     <ContentDivButtonOff
//                       img={internet}
//                       title="Serviço Net..."
//                     />
//                   </Pg.ContainerCardDivMainEnd>
//                 ) : null}
//                 {!isfindacces ? (
//                   <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                     <ContentDivTxt>
//                       <label>Dados.</label>
//                     </ContentDivTxt>
//                     <ContentDivButtonOff
//                       img={satelite}
//                       title="Acesso a Dados"
//                     />
//                   </Pg.ContainerCardDivMainEnd>
//                 ) : null}
//                 {!islogin ? (
//                   <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                     <ContentDivTxt>
//                       <label>Login.</label>
//                     </ContentDivTxt>
//                     <ContentDivButtonOff
//                       img={login}
//                       title="Acesso Login..."
//                     />
//                   </Pg.ContainerCardDivMainEnd>
//                 ) : null}
//               </ContentDivMainImagens>
//             </ContentCardBoxCenterPage>
//             )
//           }
//           </ContentCardBoxMainPage>

//            {islogin ? (
//             <ContentCardBoxCenterPage open={true} pwidth="100%">
//               {!isconected ? (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Acesso Servidor</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={nuvenoff}
//                     title="Net Off-Line."
//                     // onClick={() => {
//                     //     setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               ) : (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Acesso Servidor</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={nuvenon}
//                     title="Net On-Line..."
//                     // onClick={() => {
//                     //   setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               )}

//               {!isfindacesso ? (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Acesso Não Liberado</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={conexaooff}
//                     title="Dados NÃO liberado."
//                     // onClick={() => {
//                     //   setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               ) : (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Dados Liberado</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={conexaoon}
//                     title="Dados Liberado"
//                     // onClick={() => {
//                     //   setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               )}

//               {!islogon ? (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Acesso Sistema</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={logooff}
//                     title="Acesso Negado."
//                     // onClick={() => {
//                     //   setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               ) : (
//                 <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
//                   <ContentDivTxt>
//                     <label>Acesso Sistema</label>
//                   </ContentDivTxt>
//                   <ContentDivButtonOff
//                     // pxwdth="40px"
//                     img={logoon}
//                     title="Acesso Negado."
//                     // onClick={() => {
//                     //   setIsShow(true);
//                     // }}
//                   />
//                 </Pg.ContainerCardDivMainEnd>
//               )}
//             </ContentCardBoxCenterPage>
//           ) : null}
// */
//         }
