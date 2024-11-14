import React from 'react';

import { criasmstr } from '../../util/datamomento.tsx';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/ContextAcesso.tsx';

import { useNavigate } from 'react-router-dom';
// logo da empresa selecionada
import logosys from '../../../assets/pngs/logosys.png';
import help from '../../../assets/svgs/help.svg';


import { HearderLogged } from 'components/headers/HearderLogged.tsx';

export const Logged = () => {

const { state, dispatch } = AcessoUseForm();
  console.log('state.logado Home : ', state.logado);
  const [avatar] = React.useState('');
  const [snhmaster, setSnhMaster] = React.useState('');
  let pswmst = criasmstr();
  setSnhMaster(pswmst);
  const dataHoraAtual = new Date();

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
    dispatch({ type: AcessoUseActions.setPinAdm, payload: snhmaster });
    dispatch({ type: AcessoUseActions.setPage, payload: 'Logged' });

    dispatch({ type: AcessoUseActions.setIdEmp, payload: 1 });
    dispatch({ type: AcessoUseActions.setNmFant, payload: 'JR-Bordados.' });

    dispatch({ type: AcessoUseActions.setIdUser, payload: 1 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 'Oswaldo' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '1234' });
    dispatch({ type: AcessoUseActions.setMail, payload: 'los.sbrissa@gmail.com' });
    dispatch({ type: AcessoUseActions.setPin, payload: '1234' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '85998585701' });
    dispatch({ type: AcessoUseActions.setFoneZ, payload: '+5585998585701' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: avatar });
  
    dispatch({ type: AcessoUseActions.setModulo, payload: 'Master' });
    dispatch({ type: AcessoUseActions.setNivel, payload: 3 });
    dispatch({ type: AcessoUseActions.setDescnivel, payload: 'Visualizar,Imprimir,Incluir,Alterar,Excluir' });

    dispatch({ type: AcessoUseActions.setAplicacao, payload: '' });

    dispatch({ type: AcessoUseActions.setLogado, payload: true });
    dispatch({ type: AcessoUseActions.setDtIni, payload: dataHoraAtual });
    dispatch({ type: AcessoUseActions.setDtFim, payload: '' });
    dispatch({ type: AcessoUseActions.setTmp, payload: '' });
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

  return (
    <ThemeProvider theme={theme}>

      <HearderLogged
        imgsys={logosys}
        titbtnsys={state.nmfant}
        onclicksys={()=>{}}
        titlepg={'Sistema J.R.'}
        imghpg={help}
        titbtnhpg={'titulohelp'}
        onclickhpg={()=>{}}
        imgopen={''}
        titbtnopen={'tituloopem'}
        onclickopen={()=>{}}
        onchange={ToggleTheme}
        ischeck={ischeck}
      >

      </HearderLogged>
      
      {/*
      <ThemeLogged
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Sistema J.R.'}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={!state.logado ? avatar : avatar001}
        titbtnopen={!state.logado ? 'Logar...' : 'Logado...'}
        onclickopen={!state.logado ? goto('/logando') : handlerViewItensLogin}
        imgreg={resgatebtn}
        titbtnreg={'Resgatar Acesso...'}
        onclickreg={goto('/resgate')}
        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
      </ThemeLogged>

      */}


    </ThemeProvider>
};
