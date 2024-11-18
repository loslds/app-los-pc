import React from 'react';

import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeLogando } from '../../modulos/themes/ThemeLogando';
import { useNavigate } from 'react-router-dom';
import { ContentCardPage } from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import { ContentCardBoxMainPage } from '../ContentCardBoxMainPage.tsx';
import { ContentCardBoxCenterPage } from '../ContentCardBoxCenterPage.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpLogin0 } from '../../contentHelp/CardHelpLogin0.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
//import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';

import close from '../../../assets/svgs/close.svg';
import login0hlp from '../../../assets/svgs/login0hlp.svg';
import loginpg0 from '../../../assets/svgs/loginpg0.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Logando = () => {
  //const { state, dispatch } = AcessoUseForm();

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

  const [tentativa] = React.useState(0);

  const [start] = React.useState(true);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [btncontinua, setBtnContinua] = React.useState(false);

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const DescrOpc = ['Opções:', 'JR-Bordados.', 'RB-Serviços.'];

  React.useEffect(() => {
    setFantEmpresa(DescrOpc[idempresa]);
    if (idempresa === 0) {
      setBtnContinua(false);
    } else {
      if (tentativa >= 3) {
        setBtnContinua(false);
      } else {
        setBtnContinua(true);
      }
    }
  }, [idempresa, fantempresa]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogando
        imgsys={loginpg0}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Acesso Sistema.'}
        imghpg={help}
        titbtnhpg={'Ajuda...'}
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen={'states contexto'}
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{'Acesso ao Sistema.'}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                <h4>{'Login para Acesso'}</h4>
              </ContentCardPageTitle>
              <ContentInputPage>
                <select
                  name="opcão"
                  defaultValue={idempresa}
                  onChange={(e) => setIdEmpresa(parseInt(e.target.value))}
                >
                  <option value={'0'}>Opções : </option>
                  <option value={'1'}>JR-Bordados.</option>
                  <option value={'2'}>RB-Serviços.</option>
                </select>
                <p> outra coisa...</p>
              </ContentInputPage>
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={() => {}}
              />
            </ContentSidePageBottonLabel>

            <ContentBoxLabelPage label={'Tentativa [ ' + tentativa + 'ª ]'} />

            {btncontinua ? (
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Enviar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Enviar...'}
                  onclick={() => {}}
                />
              </ContentSidePageBottonLabel>
            ) : null}
          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'40%'}
              pheight={'43%'}
              titulo={'Acesso Empresas.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpLogin0
                imghlp={login0hlp}
                imgcard={loginpg0}
                imgbm={close}
                titbm={'Fechar...'}
                onclose={() => setHelpPg(false)}
              />
            </PageModal>
          ) : null}

          {onpanel ? (
            <PageModal
              ptop={'1%'}
              pwidth={'65%'}
              pheight={'75%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}

          {/*isloading ? <Loading /> : null */}
        </ContentCardPage>
      </ThemeLogando>
    </ThemeProvider>
  );
};
