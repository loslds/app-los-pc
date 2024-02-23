//import "../../../styles/global.ts";
// import React from 'react';
// import {
//   AcessoUseForm,
//   AcessoUseActions
// } from '../../contexts/login/ContextAcesso.tsx';
import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

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
import { LayoutHome } from '../../layouts/LayoutHome/index.tsx';
import { ContentItensBody } from '../ContentItensBody.tsx';
import { ContentCustonImg } from '../ContentCustonImg.tsx';

export const Home = () => {
  //const { dispatch } = AcessoUseForm();

  // React.useEffect(() => {
  //   dispatch({ type: AcessoUseActions.setCurrentStep, payload: 0 });
  //   dispatch({ type: AcessoUseActions.setIdAces, payload: 0 });
  //   dispatch({ type: AcessoUseActions.setIdEmp, payload: 0 });
  //   dispatch({ type: AcessoUseActions.setNmFant, payload: '' });
  //   dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
  //   dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
  //   dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
  //   dispatch({ type: AcessoUseActions.setPin, payload: '' });
  //   dispatch({ type: AcessoUseActions.setMail, payload: '' });
  //   dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
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
  //   dispatch({ type: AcessoUseActions.setPage, payload: '' });
  //   dispatch({ type: AcessoUseActions.setLogado, payload: '' });
  // }, [dispatch]);

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
      <LayoutHome
        onclick={goto('/')}
        title={'Sistema J.R.'}
        onchange={ToggleTheme}
        ischeck={ischeck}
        onLogin={goto('/login')}
      >
        <ContentItensBody>
          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={recepcao}
            titlebtn={'Recepção.'}
            onclick={goto('/recepcao')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={design}
            titlebtn={'Designs.'}
            onclick={goto('/design')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={producao}
            titlebtn={'Produção.'}
            onclick={goto('/producao')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={acabamento}
            titlebtn={'Acabamento.'}
            onclick={goto('/acabamento')}
          />
          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={expedicao}
            titlebtn={'Expedição.'}
            onclick={goto('/expedicao')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={administra}
            titlebtn={'Administração.'}
            onclick={goto('/administracao')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={master}
            titlebtn={'Master.'}
            onclick={goto('/master')}
          />

          <ContentCustonImg
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={config}
            titlebtn={'Config.'}
            onclick={goto('/config')}
          />
        </ContentItensBody>
      </LayoutHome>
    </ThemeProvider>
  );
};
