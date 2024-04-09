import * as Pg from '../stylePage.ts';

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
import ContentDivButtonOff from '../ContentDivButtonOff.tsx';
import ContentDivButtonOn from '../ContentDivButtonOn.tsx';
import ContentSidePagePanelBotton from '../ContentSidePagePanelBotton.tsx';
import ContentSidePageLabelBotton from '../ContentSidePageLabelBotton.tsx';
import { ContentDivTxt } from '../ContentDivTxt.tsx';

import setaesq from '../../../assets/svgs/setaesq.svg';
import olhoa from '../../../assets/svgs/olhoa.svg';
import olhof from '../../../assets/svgs/olhof.svg';
import setadir from '../../../assets/svgs/setadir.svg';

// isconexao
import internet from '../../../assets/svgs/internet.svg';
import nuvenon from '../../../assets/svgs/nuvenon.svg';
import nuvenoff from '../../../assets/svgs/nuvenoff.svg';

//isfindacesso
import satelite from '../../../assets/svgs/satelite.svg';
import conexaoon from '../../../assets/svgs/conexaoon.svg';
import conexaooff from '../../../assets/svgs/conexaooff.svg';

import login from '../../../assets/svgs/login.svg';
import logoon from '../../../assets/svgs/logoon.svg';
import logooff from '../../../assets/svgs/logooff.svg';

import enviaron from '../../../assets/svgs/enviaron.svg';

import ContentCardBoxCenterPage from '../ContentCardBoxCenterPage.tsx';
import ContentDivMainImagens from '../ContentDivMainImagens.tsx';
import Loading from '../../loadings/Loading.tsx';

export function Conexao() {
  console.log('entrei : ', 'Conexao()');
  setTimeout(() => {
    <Loading />;
  }, 2000);
  console.log('sai : ', 'Conexao()');
  return true;
}
export function FindAcesso() {
  console.log('entrei : ', 'FindAcesso()');
  setTimeout(() => {
    <Loading />;
  }, 2000);
  console.log('sai : ', 'FindAcesso()');
  return true;
}
export function GetLogon() {
  console.log('entrei : ', 'GetLogon()');
  setTimeout(() => {
    <Loading />;
  }, 2000);
  console.log('sai : ', 'GetLogon()');
  return true;
}

const Login3 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const [isshow, setIsShow] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);

  const [isenviar, setIsEnviar] = React.useState(true);

  const [isconexao, setIsConexao] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  const [isfindacces, setIsFindAcces] = React.useState(false);
  const [isfindacesso, setIsFindAcesso] = React.useState(false);

  const [islogin, setIsLogin] = React.useState(false);
  const [islogon, setIsLogon] = React.useState(false);
  const [acesso, setAcesso] = React.useState(false);
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
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Logar : "CONFIRMAÇÃO" de seu Acesso.'
    });
    dispatch({
      type: AcessoUseActions.setAplicacao,
      payload: 'Acessando Sistena'
    });
    dispatch({ type: AcessoUseActions.setLogado, payload: false });
  }, [dispatch]);

  const handlerEnviar = () => {
    setTentativa(state.nrcont + 1);
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
    //
    setIsEnviar(true);
  };

  React.useEffect(() => {
    if (isenviar) {
      setIsConexao(true);
      setIsConected(Conexao());
    }
    if (isconected) {
      setIsFindAcces(true);
      setIsFindAcesso(FindAcesso());
    }
    if (isfindacesso) {
      setIsLogin(true);
      setIsLogon(GetLogon());
    }
    if (islogin) {
      setAcesso(true);
    }
      
    dispatch({ type: AcessoUseActions.setLogado, payload: islogon });
    console.log('tentativa : ', tentativa);
    if (tentativa >= 5) {
      setIsResgatar(true);
      console.log('isresgatar : ', isresgatar);
    } else {
      setIsResgatar(false);
      console.log('not isresgatar : ', isresgatar);
    }
    console.log('isenviar : ', isenviar);
    console.log('isconexao : ', isconexao);
    console.log('isconected : ', isconected);
    console.log('isfindacces : ', isfindacces);
    console.log('isfindacesso : ', isfindacesso);
    console.log('islogin : ', islogin);
    console.log('islogon : ', islogon);
    console.log('acesso : ', acesso);
    console.log('state.logado : ', state.logado);
  }, [isenviar,isconected,isfindacesso,islogin,dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            {!isenviar ? (
              <ContentSidePagePanelBotton open={true} pwidth="100%">
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
                        // pxwdth="40px"
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
              </ContentSidePagePanelBotton>
            ) : null}
          </ContentCardBoxMainPage>

          {isenviar && !isconexao && isfindacces && !islogin ? (
            <ContentCardBoxCenterPage open={true} pwidth="100%">
              <ContentCardPageTitle>
                <h2>Validando Acesso</h2>
              </ContentCardPageTitle>
              <ContentDivMainImagens>
                {!isconexao ? (
                  <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                    <ContentDivTxt>
                      <label>Acesso Servidor.</label>
                    </ContentDivTxt>
                    <ContentDivButtonOff
                      // pxwdth="40px"
                      img={internet}
                      title="Serviço Net..."
                      // onClick={() => {
                      //   setIsShow(true);
                      // }}
                    />
                  </Pg.ContainerCardDivMainEnd>
                ) : null}
                {!isfindacces ? (
                  <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                    <ContentDivTxt>
                      <label>Acessar Dados.</label>
                    </ContentDivTxt>
                    <ContentDivButtonOff
                      // pxwdth="40px"
                      img={satelite}
                      title="Acesso a Dados"
                      // onClick={() => {
                      //   setIsShow(true);
                      // }}
                    />
                  </Pg.ContainerCardDivMainEnd>
                ) : null}

                {!islogin ? (
                  <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                    <ContentDivTxt>
                      <label>Acesso Login.</label>
                    </ContentDivTxt>
                    <ContentDivButtonOff
                      // pxwdth="40px"
                      img={login}
                      title="Acesso Login..."
                      // onClick={() => {
                      //   setIsShow(true);
                      // }}
                    />
                  </Pg.ContainerCardDivMainEnd>
                ) : null}
              </ContentDivMainImagens>
            </ContentCardBoxCenterPage>
          ) : null}

          {isenviar && isconexao && isfindacces && islogin ? (
            <ContentCardBoxCenterPage open={true} pwidth="100%">
              {!isconected ? (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Acesso Servidor</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={nuvenoff}
                    title="Net Off-Line."
                    // onClick={() => {
                    //     setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              ) : (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Acesso Servidor</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={nuvenon}
                    title="Net On-Line..."
                    // onClick={() => {
                    //   setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              )}

              {!isfindacesso ? (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Acesso Não Liberado</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={conexaooff}
                    title="Dados NÃO liberado."
                    // onClick={() => {
                    //   setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              ) : (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Dados Liberado</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={conexaoon}
                    title="Dados Liberado"
                    // onClick={() => {
                    //   setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              )}

              {!islogon ? (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Acesso Sistema</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={logooff}
                    title="Acesso Negado."
                    // onClick={() => {
                    //   setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              ) : (
                <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                  <ContentDivTxt>
                    <label>Acesso Sistema</label>
                  </ContentDivTxt>
                  <ContentDivButtonOff
                    // pxwdth="40px"
                    img={logoon}
                    title="Acesso Negado."
                    // onClick={() => {
                    //   setIsShow(true);
                    // }}
                  />
                </Pg.ContainerCardDivMainEnd>
              )}
            </ContentCardBoxCenterPage>
          ) : null}

          <Pg.DivisionPgHztalPage />

          {(isenviar && state.nrcont >= 4) || isresgatar ? (
            <ContentSidePagePanelBotton open={true} pwidth="100%">
              <ContentSidePageLabelBotton
                pxheight={'40px'}
                istitl={true}
                title={'Home.: '}
                img={setaesq}
                titbtn={'Home...'}
                onclick={goto('/')}
              />
              <Pg.ContainerBoxLabelPage>
                <label>Expirou Tentativas [ 4 de {state.nrcont} ]. </label>
              </Pg.ContainerBoxLabelPage>
              <ContentSidePageLabelBotton
                pxheight={'40px'}
                istitl={true}
                title={'Resgatar: '}
                img={setadir}
                titbtn={'Resgatar...'}
                onclick={goto('/login4')}
              />
            </ContentSidePagePanelBotton>
          ) : null}

          {!isenviar &&
          state.nrcont <= 4 &&
          (!isconected || !isfindacces || !islogin) ? (
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
              <ContentSidePageLabelBotton
                pxheight={'20px'}
                istitl={true}
                title={'Enviar.: '}
                img={setadir}
                titbtn={'Enviar...'}
                onclick={handlerEnviar}
              />
            </ContentSidePagePanelBotton>
          ) : null}

          {islogon ? (
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
              <ContentSidePagePanelBotton open={true} pwidth="100%">
                <ContentSidePageLabelBotton
                  pxheight={'40px'}
                  istitl={true}
                  title={'Entrar: '}
                  img={enviaron}
                  titbtn={'Acessar Sistema...'}
                  onclick={goto('/')}
                />
              </ContentSidePagePanelBotton>
            </ContentSidePagePanelBotton>
          ) : null}
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login3;
