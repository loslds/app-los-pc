import React from 'react';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/ContextAcesso.tsx';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import logosys from '../../../assets/pngs/logosys.png';
import help from '../../../assets/svgs/help.svg';

import resgatebtn from '../../../assets/svgs/resgatebtn.svg';

import jrjr from '../../../assets/svgs/jrjr.svg';
import avatar0 from '../../../assets/svgs/avatar0.svg';
//import avatar001 from '../../../assets/pngs/avatares/avatar001.png';

//import negado from '../../../assets/svgs/negado.svg';
//import recepcao from '../../../assets/svgs/servicos.svg';
//import design from '../../../assets/svgs/design.svg';
//import producao from '../../../assets/svgs/producao.svg';
//import acabamento from '../../../assets/svgs/acabamento.svg';
//import expedicao from '../../../assets/svgs/expedicao.svg';
//import administra from '../../../assets/svgs/administracao.svg';
//import master from '../../../assets/svgs/master.svg';
//import config from '../../../assets/svgs/config.svg';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeLogged } from '../../modulos/themes/ThemeLogged';
//import { ContentItensBody } from '../ContentItensBody.tsx';
//import { ContentCustonImgPage } from '../ContentCustonImgPage.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
//import { CardImgNeg } from '../../contentHelp/CardImgNeg.tsx';
import { CardHomeSys } from '../../contentHelp/CardHomeSys.tsx';

import close from '../../../assets/svgs/close.svg';

export const Logged = () => {
  const { state, dispatch } = AcessoUseForm();

  const dataHoraAtual = new Date();

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });

    dispatch({ type: AcessoUseActions.setPage, payload: 'Logged' });

    dispatch({ type: AcessoUseActions.setIdEmp, payload: 1 });
    dispatch({ type: AcessoUseActions.setNmFant, payload: 'JR-Bordados.' });

    dispatch({ type: AcessoUseActions.setIdUser, payload: 1 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 'Oswaldo' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '1234' });
    dispatch({
      type: AcessoUseActions.setMail,
      payload: 'los.sbrissa@gmail.com'
    });
    dispatch({ type: AcessoUseActions.setPin, payload: '1234' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '85998585701' });
    dispatch({ type: AcessoUseActions.setFoneZ, payload: '+5585998585701' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: avatar0 });

    dispatch({ type: AcessoUseActions.setModulo, payload: 'Master' });
    dispatch({ type: AcessoUseActions.setNivel, payload: 3 });
    dispatch({
      type: AcessoUseActions.setDescnivel,
      payload: 'Visualizar,Imprimir,Incluir,Alterar,Excluir'
    });

    dispatch({ type: AcessoUseActions.setAplicacao, payload: '' });

    dispatch({ type: AcessoUseActions.setLogado, payload: true });
    dispatch({ type: AcessoUseActions.setDtIni, payload: dataHoraAtual });
    dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
    dispatch({ type: AcessoUseActions.setTmp, payload: '' });
  }, [state.logado, dispatch]);

  console.log('state.logado (Logged) : ', state.logado);

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

  const [helppg, setHelpPg] = React.useState(false);
  //const [mainhelp, setMainHelp] = React.useState(false);
  const [meusdados, setMeusDados] = React.useState(false);

  const handlerViewItensLogin = React.useCallback(() => {
    setMeusDados((oldState) => !oldState);
  }, []);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogged
        imgsys={logosys}
        titbtnsys={state.nmfant}
        onclicksys={() => {}}
        titlepg={'Sistema J.R.'}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={avatar0}
        titbtnopen={'Logado...'}
        onclickopen={handlerViewItensLogin}
        imgreg={resgatebtn}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
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
      </ThemeLogged>
    </ThemeProvider>
  );
};
