// import "../../../styles/global.ts";
import React from 'react';

import { AcessoUseForm, AcessoUseActions } from '../../contexts/login/ContextAcesso.tsx';
import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeRecepcao } from '../../modulos/themes/ThemeRecepcao';

import logorecepcao from '../../../assets/svgs/logorecepcao.svg';
import help from '../../../assets/svgs/help.svg';
import avatar from '../../../assets/svgs/avatar.svg';
import avatar001 from '../../../assets/pngs/avatares/avatar001.png';

export const Recepcao = () => {
  const { state, dispatch } = AcessoUseForm();

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
  
  React.useEffect(() => {
    if (state.logado) {
      dispatch({ type: AcessoUseActions.setCurrentStep, payload: 200 });
    }
  }, [dispatch]);



  return (
    <ThemeProvider theme={theme}>
      <ThemeRecepcao
        imgsys={logorecepcao}
        titbtnsys={'Recepção...'}
        onclicksys={() => {}}
        titlepg={'Recepção.'}
        imghpg={help}
        titbtnhpg={'Ajuda...'}
        onclickhpg={() => {}}
        // onclickhpg={handlerHelpPg}
        imgopen={state.logado ? avatar001 : avatar}
        titbtnopen={state.logado ? 'Logado...' : 'Logar...'}
        onclickopen={()=>{}}
        // onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <h1>Recepção</h1>
      </ThemeRecepcao>
    </ThemeProvider>
  );
};
