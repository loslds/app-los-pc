import * as Pg from '../stylePage.ts';

import React from 'react';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import ContentCardPage from '../ContentCardPage.tsx';
import { ContentCardPageTitle } from '../ContentCardPageTitle.tsx';
import ContentCardBoxMainPage from '../ContentCardBoxMainPage.tsx';
import ContentDivTextoLeftPage from '../ContentDivTextoLeftPage.tsx';

import ContainerDivTestoAtenctionPage from '../ContentDivTestoAtenctionPage.tsx';

import ContentCardBoxCenterPage from '../ContentCardBoxCenterPage.tsx';

import ContentCardCollunsCenterPage from '../ContentCardBoxCenterPage.tsx';

//import ContentDivManYellow from '../ContentDivManYellow.tsx';
//import ContentDivMainRed from '../ContentDivMainRed.tsx';
//import ContentDivButtonOff from '../ContentDivButtonOff.tsx';
//import ContentDivButtonOn from '../ContentDivButtonOn.tsx';
import ContentSidePagePanelBotton from '../ContentSidePagePanelBotton.tsx';
import ContentSidePageLabelBotton from '../ContentSidePageLabelBotton.tsx';

import setaesq from '../../../assets/svgs/setaesq.svg';
//import olhoa from '../../../assets/svgs/olhoa.svg';
//import olhof from '../../../assets/svgs/olhof.svg';
//import setadir from '../../../assets/svgs/setadir.svg';
import internet from '../../../assets/svgs/internet.svg';

export const Login4 = () => {
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

  const { state, dispatch } = AcessoUseForm();

  const [isconect, setIsConect] = React.useState(false);
  //  const [tentativa, setTentativa] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentCardPage>
          <ContentCardPageTitle>
            <h2>{state.modulo}</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardPage>
              <ContentCardPageTitle>
                <h3>'"A T E N Ç Ã O "'</h3>
              </ContentCardPageTitle>

              <ContentDivTextoLeftPage isborda={true}>
                {!isconect ? (
                  <ContentSidePageLabelBotton
                    istitl={true}
                    title={'Conectando...'}
                    img={internet}
                  />
                ) : (
                  <ContentSidePageLabelBotton
                    istitl={true}
                    title={'Conectado....'}
                    img={internet}
                  />
                )}
              </ContentDivTextoLeftPage>

              <ContentSidePageLabelBotton
                istitl={true}
                title={'Verificando Acesso Sistema...'}
                img={internet}
              />
            </ContentCardPage>

            {/* 
          <ContentCardCollunsCenterPage open={true} pwidth={'100%'}>
            bbbbbbbb
             <ContentSidePagePanelBotton bordas={false} open={true} pwidth="100%">
            aaaaaaaaaaaaaa
            </ContentSidePagePanelBotton>
          </ContentCardCollunsCenterPage>  */}
          </ContentCardBoxMainPage>
          <Pg.DivisionPgHztalPage />
          <ContentSidePagePanelBotton bordas={true} open={true} pwidth="100%">
            <ContentSidePageLabelBotton
              pxheight={'40px'}
              istitl={true}
              title={'Voltar.: '}
              img={setaesq}
              titbtn={'Voltar...'}
              onclick={goto('/login3')}
            />
          </ContentSidePagePanelBotton>
        </ContentCardPage>
      </ThemeLogin>
    </ThemeProvider>
  );
};

export default Login4;

// <Lg.DivisionPgHztalOnOff isopen={iscontinua} />
// <ContentLoginOpc pwidth={'100%'} open={iscontinua}>
//   <ContentTitleLoginOpc titleopc="Aplicação :" />
//   <ContentInput>
//     {iscontinua && mdlogin == 1 ? (
//       <form name="emailpas">
//         <Lg.InputCenter>
//           <label>E-Mail</label>
//           <input
//             type="email"
//             id="email1"
//             name="email1"
//             value={strid}
//             placeholder="email@email.com(.br)"
//             onChange={(e) => setStrId(e.target.value)}
//           />
//         </Lg.InputCenter>
//         <Lg.InputCenter>
//           <label>Pass..</label>
//           <input
//             type="password"
//             id="password1"
//             name="password1"
//             value={strpsw}
//             placeholder="**********"
//             onChange={(e) => setStrPsw(e.target.value)}
//           />
//         </Lg.InputCenter>
//       </form>
//     ) : null}
//     {iscontinua && mdlogin == 2 ? (
//       <form name="emailpin">
//         <Lg.InputCenter>
//           <label>E-Mail</label>
//           <input
//             type="email"
//             id="email2"
//             name="email2"
//             value={strid}
//             placeholder="email@email.com(.br)"
//             onChange={(e) => setStrId(e.target.value)}
//           />
//         </Lg.InputCenter>

//         <Lg.InputCenter>
//           <label>PIN...:</label>
//           <input
//             type="text"
//             id="pin1"
//             name="pin1"
//             value={strpsw}
//             placeholder="****"
//             onChange={(e) => setStrPsw(e.target.value)}
//           />
//         </Lg.InputCenter>
//       </form>
//     ) : null}
//     {iscontinua && mdlogin == 3 ? (
//       <form name="namepas">
//         <Lg.InputCenter>
//           <label>Pseud.:</label>
//           <input
//             type="text"
//             id="pseud1"
//             name="pseud1"
//             value={strid}
//             placeholder="Seu pseudônimo."
//             onChange={(e) => setStrId(e.target.value)}
//           />
//         </Lg.InputCenter>

//         <Lg.InputCenter>
//           <label>Pass...:</label>
//           <input
//             type="password"
//             id="password2"
//             name="password2"
//             value={strpsw}
//             placeholder="**********"
//             onChange={(e) => setStrPsw(e.target.value)}
//           />
//         </Lg.InputCenter>
//       </form>
//     ) : null}
//     {iscontinua && mdlogin == 4 ? (
//       <form name="namepin">
//         <Lg.InputCenter>
//           <label>Pseud.:</label>
//           <input
//             type="text"
//             id="pseud2"
//             name="pseud2"
//             value={strid}
//             placeholder="Seu pseudônimo."
//             onChange={(e) => setStrId(e.target.value)}
//           />
//         </Lg.InputCenter>
//         <Lg.InputCenter>
//           <label>PIN.....:</label>
//           <input
//             type="text"
//             id="pin2"
//             name="pin2"
//             placeholder="****"
//             onChange={(e) => setStrPsw(e.target.value)}
//           />
//         </Lg.InputCenter>
//       </form>
//     ) : null}
//   </ContentInput>
// </ContentLoginOpc>

// <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />

// <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//   <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
//   <Lg.ContainerAreaText>
//     <form name="confInput">
//       <Lg.InputPage>
//         <h3>mostrar inputs para verificação do acesso.</h3>
//         {iscontinua && mdlogin == 1 ? (
//           <>
//             <label>E-Mail</label>
//             <input
//               type="1email"
//               id="1email1"
//               name="1email1"
//               value={state.mail}
//               placeholder="email@email.com(.br)"
//             />
//             <label>Pass..</label>
//             <input
//               type="1password"
//               id="1password1"
//               name="1password1"
//               value={state.pswuser}
//               placeholder="**********"
//               disabled
//             />
//           </>
//         ) : null}
//       </Lg.InputPage>
//     </form>
//   </Lg.ContainerAreaText>
//   <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Enviar..."
//       onClick={() => goto('/login4')}
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Retornar..."
//       onClick={() => {
//         alert('retoma a edição...');
//       }}
//     />
//   </ContentButtonsConfirmation>
// </ContentLoginOpc>

// <Lg.DivisionPgHztalOnOff isopen={isconfirmaresgatar} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmaresgatar}>
//   <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO da MUDANÇA de Dados...' />
//   <Lg.ContainerAreaText>
//     <form name="confResgate">
//       <Lg.InputCenter>
//         <h3>Confime se deseja outro modo para o acesso.</h3>
//         <p>Caso "NÃO" confirme Retornarei do Início. </p>
//       </Lg.InputCenter>
//     </form>
//   </Lg.ContainerAreaText>
//   <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Outra maneira..."
//       onClick={goto('/login2')}
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Inicio..."
//       onClick={goto('/')}
//     />
//   </ContentButtonsConfirmation>
// </ContentLoginOpc>

// React.useEffect(() => {
//   dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
//   dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
// }, [mdlogin, dispatch]);

// const handlerContinuar = React.useCallback(() => {
//   setNmErroLogin('');
//   if (mdlogin >= 1){
//     setCont(cont + 1);
//     let rtn = 0;
//     let str = '';
//     rtn = TestaInput(strid, strpsw);
//     if (rtn == 1 ){ str = 'Determine seu ID e Password para Acesso...';
//     }
//     if (rtn === 2 ){ str = 'Determine a Edição do seu ID...';
//     }
//     if (rtn === 3 ){ str = 'Determine a Edição do seu PassWord...';
//     }
//     if (rtn === 4 ){ str = 'Sua "PASSWORD" deve conter mais de (4) Caracteres...';
//     }
//     if (cont >= 5 && rtn === 0) {
//       rtn = 5;
//       str = '"ACABARAM" suas Tentativas...';
//       setIsContinua(false);
//       setIsResgatar(true);
//       setIsConfirmaInput(false);
//     }
//     if ( rtn >= 1){
//       setNmErroLogin(str);
//       setIsErroLogin(true);
//     } else {
//      setIsErroLogin(false);
//     }
//   }
// }, [cont]);

// React.useEffect(() => {
//   dispatch({ type: AcessoUseActions.setIdNmUser, payload: strid });
//   dispatch({ type: AcessoUseActions.setPswUser, payload: strpsw });
// }, [dispatch]);

// const handlerEnviar = React.useCallback(() => {
//   if (!isconfirmainput) {
//     setIsConfirmaInput(true);
//   }
// }, [isconfirmainput]);

// React.useEffect(() => {
//   if (iscontinua) {
//     setIsContinua(false);
//   }
//   if (ismostraInput) {
//     setIsMostraInput(false);
//   }
// }, [iscontinua, ismostraInput]);

// const handlerResgatar = React.useCallback(() => {
//   if (!isconfirmaresgatar) {
//     setIsConfirmaResgatar(true);
//   }
// }, [isconfirmaresgatar]);

// React.useEffect(() => {
//   if (isconfirmainput) {
//     setIsConfirmaInput(false);
//   }
// }, [isconfirmainput]);

// <Lg.DivisionPgHztal />
// <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
//   <ContentMainButtonsLogin>
//     <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />

//
//     {iscontinua && mdlogin > 0 ? (
//       <ContentButtonTitleImg
//         title="Continuar."
//         onClick={handlerContinuar}
//       />
//     ) : (
//       <p>Você tem [{cont}] tentativas para acesso...</p>
//     )}

//     {ismostraInput ? (
//       <ContentButtonTitleImg title="Enviar" onClick={handlerEnviar} />
//     ) : null}

//     {isresgatar ? (
//       <ContentButtonTitleImg
//         title="Resgatar"
//         onClick={handlerResgatar}
//       />
//     ) : null}

//     {iserrologin ? (
//       <PanelModalInfoErros
//         ptop={'1%'}
//         pwidth={'65%'}
//         pheight={'auto'}
//         titulo={'ERRO em processamento...'}
//         texto={
//           'Mais atenção, tentativa: [' + (5 - cont) + '] de [5].'
//         }
//         onClose={() => setIsErroLogin(false)}
//       >
//         <CardInfoErros nmerro={nmrerrologin} />
//       </PanelModalInfoErros>
//     ) : null}

// <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//   <ContentTitleLoginOpc titleopc='"CONFIRMAÇÃO de Dados...' />
//   <Lg.ContainerAreaText>
//     <label>Empresa :</label>
//     <p>{state.idemp}...</p>

//     <label>Nome Empresa :</label>
//     <p>{state.nmfant}...</p>

//     <label>Acesso Login:</label>
//     <p>{nmlogin}</p>
//   </Lg.ContainerAreaText>
//    <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Enviar..."
//       onClick={ handlerEnvia }
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Recusar..."
//       onClick={ handlerRetorna }
//     />
//   </ContentButtonsConfirmation>
// </ContentLoginOpc>

// <Lg.DivisionPgHztalOnOff isopen={isconfirmainput} />
// <ContentLoginOpc pwidth={'100%'} open={isconfirmainput}>
//   <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
//   <Lg.ContainerAreaText>
//     <p>
//       Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
//     </p>
//     <label>Acesso Login:</label>
//     <p>
//       {mdlogin}...nmlogin : {nmlogin}
//     </p>
//   </Lg.ContainerAreaText>

//   <ContentButtonsConfirmation>
//     <ContentButtonConfimationOnOff
//       title={'SIM'}
//       img={enviaon}
//       titlebtn="Aceitar..."
//       onClick={handlerEnviar}
//     />
//     <ContentButtonConfimationOnOff
//       title={'NÃO'}
//       img={enviaoff}
//       titlebtn="Retornar..."
//       onClick={()=>{}}
//     />
//   </ContentButtonsConfirmation>

// </ContentLoginOpc>

/* <Lg.DivisionPgHztalOnOff isopen={isconfirmacao} />
          <ContentLoginOpc pwidth={'100%'} open={isconfirmacao}>
            <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
            <Lg.ContainerAreaText>
              <p>
                Empresa : {state.idemp}...Nome Empresa : {state.nmfant}
              </p>
              <label>Acesso Login:</label>
              <p>
                {mdlogin}...nmlogin : {nmlogin}
              </p>
            </Lg.ContainerAreaText>

            <ContentButtonsConfirmation>
              <ContentButtonConfimationOnOff
                title={'SIM'}
                img={enviaon}
                titlebtn="Aceitar..."
                onClick={handleresgatar}
              />
              <ContentButtonConfimationOnOff
                title={'NÃO'}
                img={enviaoff}
                titlebtn="Retornar..."
                onClick={goto('/')}
              />
            </ContentButtonsConfirmation>
          </ContentLoginOpc> 



          {confirmacao ? (
            <Lg.DivisionPgHztalOnOff isopen={confirmacao} />
            <ContentLoginOpc pwidth={'100%'} open={confirmacao}>
              <ContentTitleLoginOpc titleopc="CONFIRMAÇÃO :" />
              <Lg.ContainerAreaText onoff={confirmacao}>
                <ContentTitlePanel title={' " CONFIRMA ENVIO DOS DADOS...? " '} />
                  <p>
                    idempresa : {idempresa}...fa-ntempresa : {fantempresa}
                  </p>
                  <p>
                    mdlogin : {mdlogin}...nmlogin : {nmlogin}
                  </p>
                </Lg.ContainerAreaText>
                <ContentButtonsConfirmation>
                  <ContentButtonConfimationOn
                    title={'SIM'}
                    img={enviaron}
                    titlebtn="Aceitar..."
                    onClick={handlernropcao}
                  />
                  <ContentButtonConfimationOff
                    title={'NÃO'}
                    img={enviaroff}
                    titlebtn="Retornar..."
                    onClick={goto('/')}
                  />
                </ContentButtonsConfirmation>
              </ContentFormCollunsCenter>
            ) : null} 
*/
