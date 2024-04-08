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

import ContentCardBoxCenterPage from '../ContentCardBoxCenterPage.tsx';

import ContentDivMainImagens from '../ContentDivMainImagens.tsx';

import { getAccesSnhs, setAccesSnhs } from '../../../services/api/makeData/logins';
import Loading from '../../loadings/Loading.tsx';
import { useIsMounted } from '../Rooks.tsx';




export function ConectarServe() {
  return true;
}

const Login3 = () => {
  const [theme, setTheme] = React.useState(dark);
  const [ischeck, setIscheck] = React.useState(false);

  const [isshow, setIsShow] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);

  const [isenviar,setIsEnviar] = React.useState(true);
  
  const [isconexao,setIsConexao] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  const [isfindacces, setFindAcces] = React.useState(false);
  const [isfindacesso,setFindAcesso] = React.useState(false);


  const [islogin] = React.useState(false);
  const [islogon, setLogon] = React.useState(false);

  const isMounted = useIsMounted()
  const [loading, setLoading] = React.useState(false)
  const [accesnh, setAcceSnh] = React.useState([]);
  const [openFilter, setOpenFilter] = React.useState(false)
  const [filter, setFilter] = React.useState({ empresa: 0 })


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
    setFilter({empresa: state.mdlogin});
  
    const fetchData = React.useCallback(async () => {
      setLoading(true)
      const response = await getAccesSnhs({ order: 'id', filter })
      if (isMounted.current) {
        setLoading(false);
        if (response) {
          setAccesSnhs(response.accessnhs);
        }
      }
    }, [isMounted, filter])

    React.useEffect(() => {
      fetchData();
    }, [fetchData]);

  };  


  React.useEffect(() => {
    if (isenviar) {
      if (isconexao){
        setIsConected(true);
      }
      if (state.logado) {
        alert('logado');
      }
    }
    dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
  }, [dispatch]);



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

          {isenviar ? (
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
              {!isfindacesso ? (
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
              ):null}
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
              ): null}
            </ContentDivMainImagens>
          </ContentCardBoxCenterPage>
          ): null}

          {isenviar ? (
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
              ):(
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
              {!isfindacces ? (
              <Pg.ContainerCardDivMainEnd pxheight="60px" pxwidth="33%">
                <ContentDivTxt>
                  <label>Acesso Liberado</label>
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
                  <label>Dados Não Liberado</label>
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
              {!islogin ? (
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
              ):(
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
          ): null}

          <Pg.DivisionPgHztalPage />

          {!isenviar ? (
          <ContentSidePagePanelBotton open={true} pwidth='100%'>
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
          {isenviar  && state.nrcont >= 4 && (!isconected || !isfindacces || !islogin) ? (
          <ContentSidePagePanelBotton open={true} pwidth='100%'>
            <ContentSidePageLabelBotton
              pxheight={'40px'}
              istitl={true}
              title={'Home.: '}
              img={setaesq}
              titbtn={'Home...'}
              onclick={goto('/')}
            />
            <ContentSidePageLabelBotton
              pxheight={'40px'}
              istitl={true}
              title={'Resgatar: '}
              img={setadir}
              titbtn={'Resgatar...'}
              onclick={goto('/login4')}
            />
          </ContentSidePagePanelBotton>  
          ): null }

          {isenviar && state.nrcont <= 4 && (!isconected || !isfindacces || !islogin) ? (
          <ContentSidePagePanelBotton open={true} pwidth='100%'>
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
          </ContentSidePagePanelBotton>
          ): null}
          
          {isenviar && state.nrcont <= 4 && (isconected  || !isfindacces || !islogin) && loading ? (
            <Loading />  
          ): null }
          
          {/* {loading ? <Loading /> : null} */}


        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login3;
