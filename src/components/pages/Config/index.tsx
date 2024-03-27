// import "../../../styles/global.ts";

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import logosys from '../../../assets/pngs/logosys.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutConfi } from '../../layouts/LayoutConfi/index.tsx';
import { ContentItensBody } from '../ContentItensBody.tsx';

export const Config = () => {
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
      <LayoutConfi
        img={logosys}
        onclick={goto('/')}
        title={'Config.'}
        onchange={ToggleTheme}
        ischeck={ischeck}
        onLogin={goto('/login')}
      >
        <ContentItensBody>
          <h1>Conteudo da Config</h1>
        </ContentItensBody>
      </LayoutConfi>
    </ThemeProvider>
  );
};
