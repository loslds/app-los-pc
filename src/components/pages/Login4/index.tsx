import * as Lg from '../../../styles/styledLogin.ts';

//import enviaon from '../../../assets/svgs/enviaron.svg';
//import enviaoff from '../../../assets/svgs/enviaroff.svg';

import { ThemeProvider } from 'styled-components';
import light from '../../../styles/themes/light.ts';
import dark from '../../../styles/themes/dark.ts';

import { ThemeLogin } from '../../modulos/themes/ThemeLogin/index.tsx';
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

import { ContentLoginPg } from '../ContentCardPage.tsx';
import { ContentTitleLogin } from '../Login/ContentTitleLogin.tsx';
import { ContentLoginCollunsCenter } from '../Login/ContentLoginCollunsCenter.tsx';
import { ContentLoginColluns } from '../Login/ContentLoginCollunsOpc.tsx';
import { ContentLoginOpc } from '../Login/ContentLoginOpc.tsx';
import { ContentTitleLoginOpc } from '../Login/ContentTitleLoginOpc.tsx';
//import { ContentInput } from '../Login/ContentInput.tsx';
//import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';
import { ContentMainButtonsLogin } from '../Login/ContentMainButtonsLogin.tsx';
import { ContentButtonTitleImg } from '../Login/ContentButtonTitleImg.tsx';

//import { ContentInput } from '../Login/ContentInput.tsx';
//import { ContentLoginColluns } from '../Login/ContentLoginColluns.tsx';
//import { ContentRadioOpc } from '../Login/ContentRadioOpc.tsx';

//import PanelModalInfoErros from '../../Modal/PanelModalInfoErros.tsx';
//import { CardInfoErros } from '../../contentHelp/CardInfoErros.tsx';
//import { ContentButtonsConfirmation } from '../Login/ContentButtonsConfirmation.tsx';
//import { ContentButtonConfimationOnOff } from '../Login/ContentButtonConfimationOnOff.tsx';

//import { ListAcessos } from '../../../books/ListAcessos.tsx';

// type PropsGetLogin = {
//   mdlogin?:number;
//   idempr?:number;
//   strid?:string;
//   strpsw?:string;
// }
//export function GetLogin() {
// if ( mdlogin === 0 || mdlogin === null || mdlogin === undefined) return false;
// if ( idempr === 0 || idempr === null || idempr === undefined) return false;
// if ( strid === '' || strid === null || strid === undefined) return false;
// if ( strpsw === '' || strpsw === null || strpsw === undefined ) return false;
//let rtn = true;
// const ltsAcesso = ListAcessos.map( (ListaAcesso) => {
// return ListaAcesso;
//}

// const filtroacesso = idempr === id
// const [busca, setBusca] = React.useState('');
// const lowerBusca = busca.toLowerCase();
// const resultListaFiltrada = ListAcessos
// .filter((filtroacesso) => ListAcessos.toLowerCase().includes(lowerBusca));

/// EMAIL E PSW
// if (mdlogin === 1) {

// }

export const Login4 = () => {
  // const [ispsw] = React.useState(true);

  // const [mdlogin, setMdLogin] = React.useState(0);
  // const [nmlogin, setNmLogin] = React.useState('Opções:');

  // const [strid, setStrId] = React.useState('');
  // const [strpsw, setStrPsw] = React.useState('');

  // const [cont, setCont] = React.useState(0);

  // const [iserrologin, setIsErroLogin] = React.useState(false);
  // const [nmrerrologin, setNmErroLogin] = React.useState('');

  // const [iscontinua, setIsContinua] = React.useState(false);
  // const [ismostraInput, setIsMostraInput] = React.useState(false);
  // const [isconfirmainput, setIsConfirmaInput] = React.useState(false);

  // const [isresgatar, setIsResgatar] = React.useState(false);
  // const [isconfirmaresgatar, setIsConfirmaResgatar] = React.useState(false);

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

  const [isopen, setIsOpen] = React.useState(false);
  const [mdlogin, setMdLogin] = React.useState(0);
  const [nmlogin, setNmLogin] = React.useState('Opções:');
  const [btncontinua, setBtnContinua] = React.useState(false);
  const [tentativa, setTentativa] = React.useState(0);

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 5 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/login4' });
    setIsOpen(true);
    setTentativa(state.nrcont);
  }, [dispatch]);

  const DescrOpc = [
    'Opções:',
    'Resgate com E-Mail.',
    'Resgate com SMS.',
    'Resgate com Segurança.',
    'Cadastro Acesso.'
  ];

  const setModo = (level: number) => {
    setMdLogin(level);
    setNmLogin(DescrOpc[level]);
    setTentativa(tentativa + 1);
  };

  React.useEffect(() => {
    console.log('tentativa1 : ', tentativa);
    console.log('state.nrCont1 : ', state.nrcont);
    ////////////////////////////
    if (mdlogin >= 4 && mdlogin <= 8) {
      setBtnContinua(true);
      if (tentativa < state.nrcont) {
        dispatch({ type: AcessoUseActions.setNrCont, payload: tentativa });
      }
    } else if (mdlogin === 0) {
      setBtnContinua(false);
    }
    dispatch({ type: AcessoUseActions.setMdLogin, payload: mdlogin });
    dispatch({ type: AcessoUseActions.setNmLogin, payload: nmlogin });
  }, [mdlogin, tentativa, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeLogin onclick={goto('/')} onchange={ToggleTheme} ischeck={ischeck}>
        <ContentLoginPg>
          <ContentTitleLogin modotitle={'Determine a Maneira do seu Acesso.'} />
          <Lg.ContainerMainLogin isopen={isopen}>
            <ContentLoginCollunsCenter isopen={isopen}>
              <ContentLoginColluns>
                <ContentLoginOpc pwidth="200px" open={isopen}>
                  <ContentTitleLoginOpc titleopc={nmlogin} />
                </ContentLoginOpc>
              </ContentLoginColluns>
            </ContentLoginCollunsCenter>
          </Lg.ContainerMainLogin>
          <Lg.DivisionPgHztal />

          <ContentLoginColluns pheight={'60px'} pwidth={'100%'}>
            <ContentMainButtonsLogin>
              <ContentButtonTitleImg title="Voltar." onClick={goto('/login')} />
              <p>Você tem [{4 - state.nrcont}] tentativas para acesso...</p>
              {btncontinua && mdlogin > 0 && mdlogin < 5 ? (
                <ContentButtonTitleImg
                  title="Continuar."
                  onClick={goto('/login2')}
                />
              ) : null}
            </ContentMainButtonsLogin>
          </ContentLoginColluns>
        </ContentLoginPg>
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
