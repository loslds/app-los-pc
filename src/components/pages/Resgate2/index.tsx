import React from 'react';

import { criasmstr } from '../../util/datamomento.tsx';

import * as Lg from '../stylePage.ts';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';
import { ThemeResgate } from '../../modulos/themes/ThemeResgate/index.tsx';
import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';
import { ContentCardPage } from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import { ContentCardBoxMainPage } from '../ContentCardBoxMainPage.tsx';
import { ContentCardBoxCenterPage } from '../ContentCardBoxCenterPage.tsx';
import { ContentCardCollunsCenterPage} from '../ContentCardCollunsCenterPage.tsx';
import { ContentInputMainPage} from '../ContentInputMainPage.tsx';
import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
//import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { ContentBoxLabelPage } from '../ContentBoxLabelPage.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgtepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';

export const Resgate2 = () => {
  const { state, dispatch } = AcessoUseForm();

  //const [idempresa, setIdEmpresa] = React.useState(0);
  //const [fantempresa, setFantEmpresa] = React.useState('');

  const [snhmaster, setSnhMaster] = React.useState('');

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  //const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções :');

  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [isconfemail, setIsConfEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [isconfsms, setIsConfSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [isconfzap, setIsConfZap] = React.useState(false);
  const [iscpf, setIsCpf] = React.useState(false);
  const [conferido, setConferido] = React.useState(false);

  const [isconfcpf, setIsConfCpf] = React.useState(false);
  const [ispergunta, setIsPergunta] = React.useState(false);

  const [ispergunta1, setIsPergunta1] = React.useState(false);
  const [pergunta1, setPergunta1] = React.useState('');
  const [ispergunta2, setIsPergunta2] = React.useState(false);
  const [pergunta2, setPergunta2] = React.useState('');
  const [ispergunta3, setIsPergunta3] = React.useState(false);
  const [pergunta3, setPergunta3] = React.useState('');

  const [strid, setStrId] = React.useState('');
  const [strpsw, setStrPsw] = React.useState('');

  const [btncontinua, setBtnContinua] = React.useState(false);
  const [isconfirmation, setIsConfirmation] = React.useState(false);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 3 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate2' });

    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    dispatch({ type: AcessoUseActions.setMail, payload: '' });
    dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });

    dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });

    if (state.mdlogin === 1){
      setIsContatoEmail(true);
      setIsContatoSms(false);
      setIsContatoZap(false);
      setIsCpf(false);
      setIsPergunta(false);
    } else if (state.mdlogin === 2){
      setIsContatoEmail(false);
      setIsContatoSms(true);
      setIsContatoZap(false);
      setIsCpf(false);
      setIsPergunta(false);
    } else if (state.mdlogin === 3){
      setIsContatoEmail(false);
      setIsContatoSms(false);
      setIsContatoZap(true);
      setIsCpf(false);
      setIsPergunta(false);
    } else if (state.mdlogin === 4){
      setIsContatoEmail(false);
      setIsContatoSms(false);
      setIsContatoZap(false);
      setIsCpf(true);
      setIsPergunta(false);
    }
    dispatch({
      type: AcessoUseActions.setModulo,
      payload: 'Resgate: Contato Usuário'
    });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: 'Contato :'+ state.mdlogin + '.' });

    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
      
    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
    setStart(true);
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

  const handlerHelpPg = React.useCallback(() => {
    setHelpPg((oldState) => !oldState);
  }, []);

  const handlerOnPanel = React.useCallback(() => {
    setOnPanel((oldState) => !oldState);
  }, []);

  const handlerConferirEdição = React.useCallback(() => {
    if (strid === ''){
      setConferido(false);
    } else {
      setConferido(true);
    }
  }, []);

  React.useEffect(() => {
    if (conferido ){
      if (iscontatoemail){
      setIsContatoEmail(false);
      setIsConfEmail(true);
      } else if (iscontatosms){
        setIsContatoSms(false);
        setIsConfSms(true);
      } else if (iscontatozap){
        setIsContatoZap(false);
        setIsConfZap(true);
      } else if (iscpf){
        setIsCpf(false);
        setIsConfCpf(true);
      }
    } else {
      if (iscontatoemail){
        setIsContatoEmail(true);
        setIsConfEmail(false);
      } else if (iscontatosms){
        setIsContatoSms(true);
        setIsConfSms(false);
      } else if (iscontatozap){
        setIsContatoZap(true);
        setIsConfZap(false);
      } else if (iscpf){
        setIsCpf(true);
        setIsConfCpf(false);
      }
    }
    
    dispatch({ type: AcessoUseActions.setId, payload: mdlogin });
    // dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
  }, [conferido, iscontatoemail, iscontatosms, iscontatozap, iscpf, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg3}
        titbtnsys={'Home...'}
        onclicksys={goto('/')}
        titlepg={'Acesso Resgate.'}
        imghpg={help}
        titbtnhpg={'Ajuda...'}
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen={'states contexto'}
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <div>
          <label>Senha MASTER.....: {snhmaster}</label>
          <label>State idemp......: {state.idemp}</label>
          <label>State nmfant.....: {state.nmfant}</label>
          <label>State nmlogin....: {state.nmlogin}</label>
          <label>State mdlogin....: {state.mdlogin}</label>
        </div>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                <h4>{state.aplicacao}</h4>
              </ContentCardPageTitle>
              <ContentCardCollunsCenterPage
                openccp={iscontatoemail}
                pwidth={'180px'}
              >
                <ContentInputMainPage>
                  {iscontatoemail ? (
                    <ContentInputPage>
                      <form name="email">
                        <br />
                        <label>Email.:</label>
                        <input
                          type="mail"
                          name="mail"
                          value={strid}
                          size={25}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                    ) : null
                  }
                  {iscontatosms ? (
                    <ContentInputPage>
                      <form name="telefone">
                        <br />
                        <label>TeleFone.:</label>
                        <input
                          type="text"
                          name="telefone"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                    ) : null
                  }
                  {iscontatozap ? (
                    <ContentInputPage>
                      <form name="whatsapp">
                        <br />
                        <label>Whatsapp.:</label>
                        <input
                          type="text"
                          name="whatsapp"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                    ) : null
                  }
                  {iscpf ? (
                    <ContentInputPage>
                      <form name="cpf">
                        <br />
                        <label>C.P.F. .:</label>
                        <input
                          type="text"
                          name="cpf"
                          value={strid}
                          size={11}
                          autoFocus={true}
                          onChange={(e) => setStrId(e.currentTarget.value)}
                        />
                        <br />
                      </form>
                    </ContentInputPage>
                    ) : null
                  }
                </ContentInputMainPage>

                </ContentCardCollunsCenterPage> 
 
                <PanelConfResgateYellow
                  titulo={'Acesso Resgate: '+ state.nmlogin}
                  subtitulo={'Dados Requeridos :'}
                  >
                  {conferido && isconfemail? (


                  <label>&emsp;Detemine o email conforme seu Cadastro :</label>

  
  
  <label>
  &emsp;&emsp;&emsp;Nome Fantasia: <span>{state.nmfant}</span>
  </label>
  <p>&emsp;No momento você inseriu a optou por:</p>
  <label>
  &emsp;&emsp;&emsp;Através de : <span>{nmlogin}</span>
  </label>
  <br />
  <p>
    &emsp;&emsp;Precisamos que você confirme se deseja continuar...
  </p>
  <h5>Obs:.</h5>
  <p>
    &emsp;&emsp;Caso queira mudar, click em "VOLTAR" na seta à
    esquerda "Voltar"...
  </p>
  <p>
    &emsp;&emsp;Caso "CONTINUAR", clique na Seta a Direita
    "Continuar"...
  </p>
  <br />
</PanelConfResgateYellow>
) : null}
 */}
              {isconfirmation ? (
                <PanelConfResgateYellow
                  isbgcolor={start}
                  titulo={'Acesso Resgate'}
                  subtitulo={'Dados Inseridos'}
                >

                  <p>&emsp;&emsp;Já temos "EMPRESA".</p>
                  <label>
                    &emsp;&emsp;&emsp;ID Empresa....: <span>{state.idemp}</span>
                  </label>
                  <label>
                  &emsp;&emsp;&emsp;Nome Fantasia: <span>{state.nmfant}</span>
                  </label>
                  <p>&emsp;No momento você inseriu a optou por:</p>
                  <label>
                  &emsp;&emsp;&emsp;Através de : <span>{nmlogin}</span>
                  </label>
                  <br />
                  <p>
                    &emsp;&emsp;Precisamos que você confirme se deseja continuar...
                  </p>
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira mudar, click em "VOLTAR" na seta à
                    esquerda "Voltar"...
                  </p>
                  <p>
                    &emsp;&emsp;Caso "CONTINUAR", clique na Seta a Direita
                    "Continuar"...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Voltar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Voltar...'}
                onclick={goto('/resgate1')}
              />
            </ContentSidePageBottonLabel>

            { (iscontatoemail || iscontatosms || iscontatozap || iscpf) ? ( 
              // Mostra a rotina para resgatar. 
              <ContentBoxLabelPage label={'Contato: [ ' + state.nmlogin + ' ]'} />
              ) : null
            }

            { btncontinua && (iscontatoemail || iscontatosms || iscontatozap || iscpf) ? (
              // Conferir se existe edição e ao clicar continuar compara com a existencia de usuário com :
              // mesmo email, ou mesmo foneC para para SmS, ou foneC para Zap, ou mesmo cpf para perguntas. 
              <ContentSidePageBottonLabel
                istitl={btncontinua}
                title={'Continuar.: '}
              >
                <ContentSidePageBottonButton
                  pxheight={'40px'}
                  img={setadir}
                  titbtn={'Continuar...'}
                  onclick={handlerConferirEdição}
                />
              </ContentSidePageBottonLabel>
              ) : null
            }


          </ContentSidePagePanelBotton>


          {helppg ? (
            <PageModal
              ptop={'1%'}
              pwidth={'50%'}
              pheight={'75%'}
              titulo={'Acesso Resgate.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate1
                imghlp={resgatehlp3}
                imgcard={resgatepg3}
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
              pheight={'95%'}
              titulo={'DADOS Context Login.'}
              imgbm={close}
              titbm={'Fechar...'}
              onclose={() => setOnPanel(false)}
            >
              <CardInfoLogin />
            </PageModal>
          ) : null}
        </ContentCardPage>
      </ThemeResgate>
    </ThemeProvider>
  );
};
