import React from 'react';
import { criasmstr } from '../../util/datamomento.tsx';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

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
import { useNavigate } from 'react-router-dom';
import { ThemeHome } from '../../modulos/themes/ThemeHome';
import { ContentItensBody } from '../ContentItensBody.tsx';
import { ContentCustonImgPage } from '../ContentCustonImgPage.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
import { CardImgNeg } from '../../contentHelp/CardImgNeg.tsx';
import { CardHomeSys } from '../../contentHelp/CardHomeSys.tsx';

import close from '../../../assets/svgs/close.svg';

export const Home = () => {
  const { state, dispatch } = AcessoUseForm();
  console.log('state.logado Home : ', state.logado);

  React.useEffect(() => {
    if (!state.logado) {
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
      dispatch({ type: AcessoUseActions.setAvatar, payload: '' });

      dispatch({ type: AcessoUseActions.setperg1, payload: '' });
      dispatch({ type: AcessoUseActions.setresp1, payload: '' });
      dispatch({ type: AcessoUseActions.setperg2, payload: '' });
      dispatch({ type: AcessoUseActions.setresp2, payload: '' });
      dispatch({ type: AcessoUseActions.setperg3, payload: '' });
      dispatch({ type: AcessoUseActions.setresp3, payload: '' });
      
      dispatch({ type: AcessoUseActions.setMdRecep, payload: false });
      dispatch({ type: AcessoUseActions.setMdDesig, payload: false });
      dispatch({ type: AcessoUseActions.setMdProdu, payload: false });
      dispatch({ type: AcessoUseActions.setMdAcaba, payload: false });
      dispatch({ type: AcessoUseActions.setMdExped, payload: false });
      dispatch({ type: AcessoUseActions.setMdAdmin, payload: false });
      dispatch({ type: AcessoUseActions.setMdMaster, payload: false });
      dispatch({ type: AcessoUseActions.setMdConfig, payload: false });

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
    //else {
    //   dispatch({ type: AcessoUseActions.setCurrentStep, payload: 100 });
    //   dispatch({ type: AcessoUseActions.setIdAces, payload: 1 });
    //   //dispatch({ type: AcessoUseActions.setPinAdm, payload: '' });
    //   dispatch({ type: AcessoUseActions.setPage, payload: '' });

    //   dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
    //   dispatch({ type: AcessoUseActions.setNmFant, payload: '' });

    //   dispatch({ type: AcessoUseActions.setMdLogin, payload: 0 });
    //   dispatch({ type: AcessoUseActions.setNmLogin, payload: '' });
    //   dispatch({ type: AcessoUseActions.setNrCont, payload: 0 });
    //   dispatch({ type: AcessoUseActions.setNmCont, payload: '' });

    //   dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    //   dispatch({ type: AcessoUseActions.setFoneC, payload: '' });

    //   dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    //   dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

    //   dispatch({ type: AcessoUseActions.setMail, payload: '' });
    //   dispatch({ type: AcessoUseActions.setPin, payload: '' });

    //   //dispatch({ type: AcessoUseActions.setNmRecep, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdRecep, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmDesig, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdDesig, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmProdu, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdProdu, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmAcaba, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdAcaba, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmExped, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdExped, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmAdmin, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdAdmin, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmMaster, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdMaster, payload: false });
    //   //dispatch({ type: AcessoUseActions.setNmConfig, payload: '' });
    //   dispatch({ type: AcessoUseActions.setMdConfig, payload: false });
    //   //  dispatch({ type: AcessoUseActions.setLogado, payload: false });

    //   dispatch({ type: AcessoUseActions.setLogado, payload: false });
    //   dispatch({ type: AcessoUseActions.setDtIni, payload: '' });
    //   dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
    //   dispatch({ type: AcessoUseActions.setTmp, payload: '' });

    //   dispatch({ type: AcessoUseActions.setModulo, payload: '' });
    //   dispatch({ type: AcessoUseActions.setAplicacao, payload: '' });
    // }
  }, [dispatch]);

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

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [helppg, setHelpPg] = React.useState(false);
  const [mainhelp, setMainHelp] = React.useState(false);
  const [meusdados, setMeusDados] = React.useState(false);

  React.useCallback(() => {
    const [pmst, setPMST] = React.useState('');
    const snhm = criasmstr();
    setPMST(snhm);
    dispatch({ type: AcessoUseActions.setPinAdm, payload: pmst });
  }, [dispatch]);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerViewItensLogin = React.useCallback(() => {
    setMeusDados((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeHome
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Sistema J.R.'}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={!state.logado ? avatar : avatar001}
        titbtnopen={!state.logado ? 'Logar...' : 'Logado...'}
        onclickopen={!state.logado ? goto('/login') : handlerViewItensLogin}
        imgreg={resgatebtn}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
        <ContentItensBody>
          <div>{state.pinAdm}</div>
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={recepcao}
            titlebtn={'Recepção.'}
            onclick={
              state.logado
                ? goto('/recepcao')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={design}
            titlebtn={'Designs.'}
            onclick={
              state.logado
                ? goto('/design')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={producao}
            titlebtn={'Produção.'}
            onclick={
              state.logado
                ? goto('/producao')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={acabamento}
            titlebtn={'Acabamento.'}
            onclick={
              state.logado
                ? goto('/acabamento')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={expedicao}
            titlebtn={'Expedição.'}
            onclick={
              state.logado
                ? goto('/expedicao')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={administra}
            titlebtn={'Administração.'}
            onclick={
              state.logado
                ? goto('/administracao')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={master}
            titlebtn={'Master.'}
            onclick={
              state.logado
                ? goto('/master')
                : () => {
                    setMainHelp(true);
                  }
            }
          />
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={config}
            titlebtn={'Config.'}
            onclick={
              state.logado
                ? goto('/config')
                : () => {
                    setMainHelp(true);
                  }
            }
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
    </ThemeProvider>
  );
};
