// import "../../../styles/global.ts";

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeMyAccount } from '../../modulos/themes/ThemeMyAccount/index.tsx';

export const MyAccount = () => {

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

  return (
    <ThemeProvider theme={theme}>
      <ThemeMyAccount
        onclick={()=>{}}
        onchange={ToggleTheme}
        ischeck={ischeck}
        onLogin={goto('/')}
      >
        <h1>Conteudo Page MyAccount</h1>
      </ThemeMyAccount>
    </ThemeProvider>
  );
};
