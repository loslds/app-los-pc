import React from 'react';
import { criasmstr } from '../../util/datamomento.tsx';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/ContextAcesso.tsx';
import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { useNavigate } from 'react-router-dom';

import logosys from '../../../assets/pngs/logosys.png';
import help from '../../../assets/svgs/help.svg';
import resgatebtn from '../../../assets/svgs/resgatebtn.svg';
import jrjr from '../../../assets/svgs/jrjr.svg';
import avatar from '../../../assets/svgs/avatar.svg';
import avatar001 from '../../../assets/pngs/avatares/avatar001.png';
import negado from '../../../assets/svgs/negado.svg';
import recepcao from '../../../assets/svgs/servicos.svg';
import design from '../../../assets/svgs/design.svg';
import producao from '../../../assets/svgs/producao.svg';
import acabamento from '../../../assets/svgs/acabamento.svg';
import expedicao from '../../../assets/svgs/expedicao.svg';
import administra from '../../../assets/svgs/administracao.svg';
import master from '../../../assets/svgs/master.svg';
import config from '../../../assets/svgs/config.svg';

import { useState } from 'react';

import { ThemeHome } from '../../modulos/themes/ThemeHome';
import { ContentItensBody } from '../ContentItensBody.tsx';
import { ContentCustonImgPage } from '../ContentCustonImgPage.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
import { CardImgNeg } from '../../contentHelp/CardImgNeg.tsx';
import { CardHomeSys } from '../../contentHelp/CardHomeSys.tsx';

import close from '../../../assets/svgs/close.svg';

export const Home = () => {
  const { state, dispatch } = AcessoUseForm();

  // USAR snhmaster PARA ACESSO COM CTRL + F12

  React.useEffect(() => {
    if (state.logado) {
      const pswmst = criasmstr(); // Gerar senha uma única vez
      dispatch({ type: AcessoUseActions.setPinAdm, payload: pswmst });
    } else {
      dispatch({ type: AcessoUseActions.setCurrentStep, payload: 0 });
      dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
      dispatch({ type: AcessoUseActions.setPinAdm, payload: '' });
      dispatch({ type: AcessoUseActions.setPage, payload: '' });
      dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
      dispatch({ type: AcessoUseActions.setNmFant, payload: '' });
      dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
      dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
      dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
      dispatch({ type: AcessoUseActions.setMail, payload: '' });
      dispatch({ type: AcessoUseActions.setPin, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
      dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
      dispatch({ type: AcessoUseActions.setAvatar, payload: '' });
      dispatch({ type: AcessoUseActions.setperg1, payload: '' });
      dispatch({ type: AcessoUseActions.setresp1, payload: '' });
      dispatch({ type: AcessoUseActions.setperg2, payload: '' });
      dispatch({ type: AcessoUseActions.setresp2, payload: '' });
      dispatch({ type: AcessoUseActions.setperg3, payload: '' });
      dispatch({ type: AcessoUseActions.setresp3, payload: '' });
      dispatch({ type: AcessoUseActions.setMdVisita, payload: false });
      dispatch({ type: AcessoUseActions.setMdRecep, payload: false });
      dispatch({ type: AcessoUseActions.setMdDesig, payload: false });
      dispatch({ type: AcessoUseActions.setMdProdu, payload: false });
      dispatch({ type: AcessoUseActions.setMdAcaba, payload: false });
      dispatch({ type: AcessoUseActions.setMdExped, payload: false });
      dispatch({ type: AcessoUseActions.setMdAdmin, payload: false });
      dispatch({ type: AcessoUseActions.setMdConfig, payload: false });
      dispatch({ type: AcessoUseActions.setMdMaster, payload: false });
      dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
      dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
      dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
      dispatch({ type: AcessoUseActions.setNmCont, payload: '' });
      dispatch({ type: AcessoUseActions.setModulo, payload: '' });
      dispatch({ type: AcessoUseActions.setAplicacao, payload: '' });
      dispatch({ type: AcessoUseActions.setLogado, payload: false });
      dispatch({ type: AcessoUseActions.setDtIni, payload: '' });
      dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
      dispatch({ type: AcessoUseActions.setTmp, payload: '' });
    }
  }, [state.logado, dispatch]);

  const [theme, setTheme] = useState(dark);
  const [ischeck, setIscheck] = useState(false);
  const ToggleTheme = () => {
    if (theme.name === 'dark') {
      setTheme(light);
      setIscheck(true);
    } else {
      setTheme(dark);
      setIscheck(false);
    }
  };

  const [helppg, setHelpPg] = React.useState(false);
  const [mainhelp, setMainHelp] = React.useState(false);
  const [meusdados, setMeusDados] = React.useState(false);

  const navigate = useNavigate();
  const goto = (path: string) => {
    let rtn = false;
    if (!state.logado) {
      if ( ( state.mdVisita ) || ( state.mdRecep ) || ( state.mdDesig ) ||
        ( state.mdProdu ) || ( state.mdAcaba ) || ( state.mdExped ) ||
        ( state.mdAdmin ) || ( state.mdConfig ) || ( state.mdMaster) ) {
        rtn = true;
      }
    } if (path === '/login' || path === '/resgate') {
      rtn = true;
    }

    return () => {
      if (rtn) {
        navigate(path);
      } else {
        setMainHelp(true); // Mostra modal caso o usuário não esteja logado
      }
    };
  };

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerViewItensLogin = React.useCallback(() => {
    setMeusDados((oldState) => !oldState);
  }, []);

  const handlerLogin = React.useCallback(() => {
    goto('/login');
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {state.logado ? (
      <ThemeHome
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={state.nmfant}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={!state.logado ? avatar : avatar001}
        titbtnopen={ state.logado ? 'Logado...' : 'Logar...' }
        onclickopen={ state.logado ? handlerViewItensLogin : handlerLogin } 
        imgreg={resgatebtn}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
        <div>
          <p>
            {' '}
            PIN ADM (snhmaster): "{state.pinAdm}"...Logado :
            { state.logado ? 'verdadeiro' : 'falso'} 
          </p>
        </div>
        <ContentItensBody>
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={''}
            titlebtn={'Visitante.'}
            onclick={goto('/recepcao')}
          />

          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={recepcao}
            titlebtn={'Recepção.'}
            onclick={goto('/recepcao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={design}
            titlebtn={'Designs.'}
            onclick={goto('/design')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={producao}
            titlebtn={'Produção.'}
            onclick={goto('/producao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={acabamento}
            titlebtn={'Acabamento.'}
            onclick={goto('/acabamento')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={expedicao}
            titlebtn={'Expedição.'}
            onclick={goto('/expedicao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={administra}
            titlebtn={'Administração.'}
            onclick={goto('/administracao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={config}
            titlebtn={'Config.'}
            onclick={goto('/config')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={master}
            titlebtn={'Master.'}
            onclick={goto('/master')}
          />

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'90%'}
              imgbm={close}
              titbm="Fechar..."
              titulo={'Help Conteúdo do Sistema.'}
              onclose={() => setHelpPg(false)}
            >
              <CardHomeSys imgcard={jrjr} />
            </PageModal>
          ) : null}

          {mainhelp ? (
            <PageModal
              ptop="111px"
              pwidth="30%"
              pheight="25%"
              titulo='" A T E N Ç Ã O "'
              imgbm={close}
              titbm="Fechar..."
              onclose={() => {
                setMainHelp(false);
              }}
            >
              <CardImgNeg imgcard={negado} />
            </PageModal>
          ) : null}
        </ContentItensBody>
      </ThemeHome>
    ) : (

      <ThemeHome
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Sistema Bordados.'}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={avatar}
        titbtnopen={ state.logado ? 'Logado...' : 'Logar...' }
        onclickopen={ state.logado ? handlerViewItensLogin : handlerLogin } 
        imgreg={resgatebtn}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
        <div>
          <p>
            {' '}
            PIN ADM (snhmaster): "{state.pinAdm}"...Logado :
            { state.logado ? 'verdadeiro' : 'falso'} 
          </p>
        </div>
        <ContentItensBody>
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={''}
            titlebtn={'Visitante.'}
            onclick={goto('/recepcao')}
          />

          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={recepcao}
            titlebtn={'Recepção.'}
            onclick={goto('/recepcao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={design}
            titlebtn={'Designs.'}
            onclick={goto('/design')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={producao}
            titlebtn={'Produção.'}
            onclick={goto('/producao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={acabamento}
            titlebtn={'Acabamento.'}
            onclick={goto('/acabamento')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={expedicao}
            titlebtn={'Expedição.'}
            onclick={goto('/expedicao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={administra}
            titlebtn={'Administração.'}
            onclick={goto('/administracao')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={config}
            titlebtn={'Config.'}
            onclick={goto('/config')}
          />
          <ContentCustonImgPage
            open={true}
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={master}
            titlebtn={'Master.'}
            onclick={goto('/master')}
          />

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'90%'}
              imgbm={close}
              titbm="Fechar..."
              titulo={'Help Conteúdo do Sistema.'}
              onclose={() => setHelpPg(false)}
            >
              <CardHomeSys imgcard={jrjr} />
            </PageModal>
          ) : null}

          {mainhelp ? (
            <PageModal
              ptop="111px"
              pwidth="30%"
              pheight="25%"
              titulo='" A T E N Ç Ã O "'
              imgbm={close}
              titbm="Fechar..."
              onclose={() => {
                setMainHelp(false);
              }}
            >
              <CardImgNeg imgcard={negado} />
            </PageModal>
          ) : null}
        </ContentItensBody>
      </ThemeHome>
    )}
    </ThemeProvider>
  );
};

//React.useEffect(() => {
//  if (!state.logado) {
//    const defaultPayloads = {
//      setCurrentStep: 0,
//      setIdAces: 0,
//      setPage: '',
//      setIdEmp: 0,
//      setNmFant: '',
//      setIdUser: 0,
//      setIdNmUser: 0,
//      setPswUser: '',
//      setMail: '',
//      setPin: '',
//      setFoneC: '',
//      setFoneZ: '',
//      setAvatar: '',
//      setperg1: '',
//      setresp1: '',
//      setperg2: '',
//      setresp2: '',
//      setperg3: '',
//      setresp3: '',
//      setMdRecep: false,
//      setMdDesig: false,
//      setMdProdu: false,
//      setMdAcaba: false,
//      setMdExped: false,
//      setMdAdmin: false,
//      setMdMaster: false,
//      setMdConfig: false,
//      setMdLogin: 0,
//      setNmLogin: '',
//      setNrCont: 0,
//      setNmCont: '',
//      setModulo: '',
//      setAplicacao: '',
//      setLogado: false,
//      setDtIni: '',
//      setDtFim: '',
//      setTmp: ''
//    };
//    for (const [action, value] of Object.entries(defaultPayloads)) {
//      dispatch({ type: AcessoUseActions[action], payload: value });
//    }
//  }
//}, [state.logado, dispatch]);
//
