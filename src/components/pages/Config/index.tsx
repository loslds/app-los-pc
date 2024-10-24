import React from 'react';
//import { criasmstr } from '../../util/datamomento.tsx';
//import {
//  AcessoUseForm,
//  AcessoUseActions
//} from '../../contexts/login/ContextAcesso.tsx';
import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import logosys from '../../../assets/pngs/logosys.png';
import help from '../../../assets/svgs/help.svg';
//import resgatebtn from '../../../assets/svgs/resgatebtn.svg';
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
//import master from '../../../assets/svgs/master.svg';
//import config from '../../../assets/svgs/config.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeHome } from '../../modulos/themes/ThemeHome';
import { ContentItensBody } from '../ContentItensBody.tsx';
import { ContentCustonImgPage } from '../ContentCustonImgPage.tsx';

import { PageModal } from '../../Modal/PageModal.tsx';
import { CardImgNeg } from '../../contentHelp/CardImgNeg.tsx';
import { CardHomeSys } from '../../contentHelp/CardHomeSys.tsx';

import close from '../../../assets/svgs/close.svg';

export const Config = () => {
  const KeyAcesso = 'Master';
  const [logged, setLogged] = React.useState(false);

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
    if (KeyAcesso === 'Master') {
      setLogged(true);
    }
  }, []);

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerViewMeusDados = React.useCallback(() => {
    setMeusDados((oldState) => !oldState);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeHome
        imgsys={logosys}
        titbtnsys={'Home...'}
        onclicksys={goto('/logar')}
        titlepg={'Sistema J.R.'}
        imghpg={help}
        titbtnhpg={'Help...'}
        onclickhpg={handlerHelpPg}
        imgopen={!logged ? avatar : avatar001}
        titbtnopen={!logged ? 'Logar...' : 'Logado...'}
        onclickopen={!logged ? goto('/logar') : handlerViewMeusDados}
        // imgreg={resgatebtn}
        // titbtnreg={'Resgatar Acesso...'}
        // onclickreg={goto('/resgate')}

        onchange={ToggleTheme}
        ischeck={ischeck}
        open={meusdados}
      >
        <ContentItensBody>
          <ContentCustonImgPage
            pxheight={'165px'}
            pheight={'165px'}
            pwidth={'165px'}
            img={recepcao}
            titlebtn={'Recepção.'}
            onclick={
              logged
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
              logged
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
              logged
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
              logged
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
              logged
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
              logged
                ? goto('/administracao')
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
