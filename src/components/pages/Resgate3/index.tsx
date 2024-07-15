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
//import { ContentInputPage } from '../ContentInputPage.tsx';
import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate1 } from '../../contentHelp/CardHelpResgate1.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
import { CardImgMsg } from '../../contentHelp/CardImgMsg.tsx';
//import { ContentInputCenter } from '../ContentInputCenter.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg3 from '../../../assets/svgs/resgatepg3.svg';
import resgatehlp3 from '../../../assets/svgs/resgatehlp3.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
//import setadir from '../../../assets/svgs/setadir.svg';
import notedicao from '../../../assets/svgs/notedicao.svg';

import { IUsers, UsersIndexById } from '../../../books/ListUsers.tsx';
import { IAcessos, AcessosIndexById } from '../../../books/ListAcessos.tsx';
import { IFones, FonesIndexById } from '../../../books/ListFones.tsx';
import { IEmps, EmpsIndexById } from '../../../books/ListEmps.tsx';

export function Conexao() {
  return true;
}
export function FindAcesso() {
  return true;
}
export function FindUsers() {
  return true;
}

interface FormState {
  email: string;
  sms: string;
  zap: string;
  cpf: string;
}
export const Resgate3 = () => {
  const { state, dispatch } = AcessoUseForm();

  const [snhmaster, setSnhMaster] = React.useState('');

  const [iscontatoemail, setIsContatoEmail] = React.useState(false);
  const [iscontatosms, setIsContatoSms] = React.useState(false);
  const [iscontatozap, setIsContatoZap] = React.useState(false);
  const [iscontatocpf, setIsContatoCpf] = React.useState(false);
  const [edicao, setEdicao] = React.useState('');

  const [inputstrid, setInputStrId] = React.useState('');
  const [isvalidado, setIsValidado] = React.useState(false);
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  //const [ischeckedicao, setIsCheckEdicao] = React.useState(false);
  //const [isconfirmar, setIsConfirmar] = React.useState(false);

  const [iseditar, setIsEditar] = React.useState(false);
  const [isbtndatacenter, setIsBtnDataCenter] = React.useState(false);
  const [isconected, setIsConected] = React.useState(false);

  const [perg1, setPerg1] = React.useState('');
  const [resp1, setResp1] = React.useState('');
  const [strresp1, setStrResp1] = React.useState('');
  const [perg2, setPerg2] = React.useState('');
  const [resp2, setResp2] = React.useState('');
  const [strresp2, setStrResp2] = React.useState('');
  const [perg3, setPerg3] = React.useState('');
  const [resp3, setResp3] = React.useState('');
  const [strresp3, setStrResp3] = React.useState('');

  const [isbtnperguntas, setIsBtnPerguntas] = React.useState(false);

  const [isbtnenviar, setIsBtnEnviar] = React.useState(false);
  const [isbtnconferir, setIsBtnConferir] = React.useState(false);
  const [isbtncontinuar, setIsBtnContinuar] = React.useState(false);

  const [start, setStart] = React.useState(false);
  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);

  const [islistacess, setListAcess] = React.useState(false);
  const [islistusers, setIsListUsers] = React.useState(false);
  const [islistfones, setIsListFones] = React.useState(false);

  const [islistemps, setIsListEmps] = React.useState(false);

  const [acesso, setAcess] = React.useState<IAcessos | undefined>(undefined);
  const [user, setUser] = React.useState<IUsers | undefined>(undefined);
  const [fones, setFones] = React.useState<IFones | undefined>(undefined);
  const [emps, setEmps] = React.useState<IEmps | undefined>(undefined);

  const [form, setForm] = React.useState<FormState>({
    email: '',
    sms: '',
    zap: '',
    cpf: ''
  });

  const [erros, setErros] = React.useState<Partial<FormState>>({});

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate3' });
    dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: 0 });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
    if (state.mdlogin === 1) {
      setIsContatoEmail(true);
    } else {
      dispatch({ type: AcessoUseActions.setMail, payload: '' });
      if (state.mdlogin === 2 || state.mdlogin === 3) {
        if (state.mdlogin === 2) {
          setIsContatoSms(true);
        } else {
          setIsContatoZap(true);
        }
      } else {
        dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
        if (state.mdlogin === 4) {
          setIsContatoCpf(true);
        } else {
          dispatch({ type: AcessoUseActions.setCpf, payload: '' });
        }
      }
    }
    dispatch({ type: AcessoUseActions.setPin, payload: '' });
    dispatch({ type: AcessoUseActions.setAvatar, payload: '' });

    dispatch({ type: AcessoUseActions.setperg1, payload: '' });
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    dispatch({ type: AcessoUseActions.setperg2, payload: '' });
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    dispatch({ type: AcessoUseActions.setperg3, payload: '' });
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });
    dispatch({ type: AcessoUseActions.setModulo, payload: '' });
    dispatch({ type: AcessoUseActions.setAplicacao, payload: '' });
    setPerg1('');
    setResp1('');
    setStrResp1('');
    setPerg2('');
    setResp2('');
    setStrResp2('');
    setPerg3('');
    setResp3('');
    setStrResp3('');
    //////////////////////////////////////////////////////////////////////////
    setSnhMaster(criasmstr);
    setIsBtnDataCenter(true);
    setIsEditar(false);
    setIsConected(false);
    setIsBtnPerguntas(false);
    setIsBtnEnviar(false);
    setIsBtnConferir(false);
    setIsValidado(true);
    setIsBtnContinuar(false);
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

  // const hasContent = <T>(list: T[]): boolean => {
  //   return list.length > 0;
  // };

  // Função de callback
  const handlerDataCenter = React.useCallback(() => {
    // Criar lista USUARIOS com INDEX ID
    const Lstacessos = AcessosIndexById();
    // Verificar se a lista de Acessos vasia ou corrompida ou existente
    if (Object.keys(Lstacessos).length > 0) {
      setListAcess(true);
    } else {
      // memssagem de e alerta para o erro
      setListAcess(false);
      setTxtAga('"ERRO" ao acessar ACESSOS dos USUÁRIOS');
      setTxtLabel('Não foi encontrado DATA ou DADOS Acessos do Usuários.');
      setTxtP(
        'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
      );
    }
    if (islistacess) {
      // Criar lista USUARIOS com INDEX ID
      const Lstusuarios = UsersIndexById();
      // Verificar se a lista de usuários vasia ou corrompida ou existente
      if (Object.keys(Lstusuarios).length > 0) {
        setIsListUsers(true);
      } else {
        // memssagem de e alerta para o erro
        setIsListUsers(false);
        setTxtAga('"ERRO" ao acessar USUÁRIOS');
        setTxtLabel('Não foi encontrado DATA ou DADOS Usuários.');
        setTxtP(
          'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
        );
      }
      if (islistusers) {
        // Criar lista FONES com INDEX ID
        const Lstfones = FonesIndexById();
        // Verificar se a lista de Fones vasia ou corrompida ou existente
        if (Object.keys(Lstfones).length > 0) {
          setIsListFones(true);
        } else {
          // memssagem de e alerta para o erro
          setIsListFones(false);
          setTxtAga('"ERRO" ao acessar TELEFONES');
          setTxtLabel('Não foi encontrado DATA ou DADOS Telefones.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        if (islistfones) {
          // Criar lista FONES com INDEX ID
          const LstEmps = EmpsIndexById();
          // Verificar se a lista de Fones vasia ou corrompida ou existente
          if (Object.keys(LstEmps).length > 0) {
            setIsListEmps(true);
          } else {
            // memssagem de e alerta para o erro
            setIsListEmps(false);
            setTxtAga('"ERRO" ao acessar TELEFONES');
            setTxtLabel('Não foi encontrado DATA ou DADOS Telefones.');
            setTxtP(
              'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
            );
          }
        }
      }
    }
    if (isbtndatacenter) {
      setIsBtnDataCenter(false);
      setIsConected(true);
    }
    /////
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ThemeResgate
        imgsys={resgatepg3}
        titbtnsys="Home..."
        onclicksys={goto('/')}
        titlepg="Acesso Resgate."
        imghpg={help}
        titbtnhpg="Ajuda..."
        onclickhpg={handlerHelpPg}
        imgopen={esclamacaocirc}
        titbtnopen="help Ajuda..."
        onclickopen={handlerOnPanel}
        ischeck={ischeck}
        onchange={ToggleTheme}
      >
        <div>
          <p>Senha MASTER.: {snhmaster}</p>
          <p>State.idemp.......: {state.idemp ? state.idemp : 'vasio'}</p>
          <p>State.nmfant......: {state.nmfant ? state.nmfant : 'vasio'}</p>
          <p>State.mail........: {state.mail ? state.mail : 'vasio'}</p>
          <p>State.fonec sms...: {state.fonec ? state.fonec : 'vasio'}</p>
          <p>State.fonec zap...: {state.fonec ? state.fonec : 'vasio'}</p>
          <p>State.cpf.........: {state.cpf ? state.cpf : 'vasio'}</p>
          <p>Painel Editar.....: {iseditar ? 'verdadeiro' : 'falso'}</p>
          <p>Painel Botões.:</p>
          <p>IsBtnDataCenter...: {isbtndatacenter ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnPerguntas....: {isbtnperguntas ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnEnviar.......: {isbtnenviar ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnConferir.....: {isbtnconferir ? 'verdadeiro' : 'falso'}</p>
          <p>isValiEdição......: {isvalidado ? 'verdadeiro' : 'falso'}</p>
          <p>IsBtnContinuar.: {isbtncontinuar ? 'verdadeiro' : 'falso'}</p>
        </div>
        <ContentCardPage>
          <ContentCardPageTitle>
            {isbtndatacenter ? <h2>Resgatar: DataCenter</h2> : null}
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                {isbtndatacenter ? <h4>{'Conectar com DataCenter'}</h4> : null}
              </ContentCardPageTitle>

              {isbtndatacenter ? (
                <PanelConfResgateYellow
                  isbgcolor={isbtndatacenter}
                  titulo={'Resgate em Banco de Dados.'}
                  subtitulo={'Dados para Resgate:'}
                >
                  <p>&emsp;&emsp;Busca pelos Dados :</p>
                  <label>&emsp;&emsp;&emsp;Acessos a Usuários</label>
                  <p>&emsp;&emsp;&emsp;Acessos:</p>
                  {islistacess ? <p>Ativada.</p> : <p>Desativada.</p>}
                  <p>&emsp;&emsp;&emsp;Usuários:</p>
                  {islistusers ? <p>Ativada.</p> : <p>Desativada.</p>}
                  <p>&emsp;&emsp;&emsp;Empresas:</p>
                  {islistemps ? <p>Ativada.</p> : <p>Desativada.</p>}
                  <p>&emsp;&emsp;&emsp;Telefones:</p>
                  {islistfones ? <p>Ativada.</p> : <p>Desativada.</p>}
                  <br />
                  <h5>Obs:.</h5>
                  <p>
                    &emsp;&emsp;Caso queira " Abortar.: " clique na Seta à
                    Esquerda...
                  </p>
                  <p>
                    &emsp;&emsp;Caso deseja " Proceguir.:", clique na Seta à
                    Direita...
                  </p>
                  <br />
                </PanelConfResgateYellow>
              ) : null}
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          {!isvalidado ? (
            <PageModal
              ptop="1%"
              pwidth="40%"
              pheight="40%"
              titulo={edicao}
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setIsValidado(true)}
            >
              <CardImgMsg
                img={notedicao}
                txtaga={txtaga}
                txtlabel={txtlabel}
                txtp={txtp}
              />
            </PageModal>
          ) : null}

          <Lg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Abortar...'}
                onclick={goto('/')}
              />
            </ContentSidePageBottonLabel>

            {isconected ? (
              <ContentCardPageTitle>
                <h3>Informação: [ Conectado! ]</h3>
              </ContentCardPageTitle>
            ) : null}

            {isbtndatacenter ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Prosseguir.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Prosseguir..."
                  onclick={handlerDataCenter}
                />
              </ContentSidePageBottonLabel>
            ) : null}

            {isbtndatacenter ? (
              <ContentSidePageBottonLabel
                istitl={start}
                title={'Prosseguir.: '}
              >
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setaesq}
                  titbtn="Prosseguir..."
                  onclick={handlerDataCenter}
                />
              </ContentSidePageBottonLabel>
            ) : null}

          </ContentSidePagePanelBotton>

          {helppg ? (
            <PageModal
              ptop="1%"
              pwidth="50%"
              pheight="6%"
              titulo="Acesso Resgate."
              imgbm={close}
              titbm="Fechar..."
              onclose={() => setHelpPg(false)}
            >
              <CardHelpResgate1
                imghlp={resgatehlp3}
                imgcard={resgatepg3}
                imgbm={close}
                titbm="Fechar..."
                onclose={() => setHelpPg(false)}
              />
            </PageModal>
          ) : null}

          {onpanel ? (
            <PageModal
              ptop="1%"
              pwidth="65%"
              pheight="95%"
              titulo="DADOS Context Login."
              imgbm={close}
              titbm="Fechar..."
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

          

// {iseditar && isbtncontinuar && !isbtnenviar ? (
//               <ContentSidePageBottonLabel
//                 istitl={isbtncontinuar}
//                 title="Confirmar.: "
//               >
//                 <ContentSidePageBottonButton
//                   pxheight="40px"
//                   img={setadir}
//                   titbtn="Confirmar..."
//                   onclick={handlerContinuar}
//                 />
//               </ContentSidePageBottonLabel>
//             ) : null}

//             {isbtnenviar && !iseditar && !isbtncontinuar ? (
//               <ContentSidePageBottonLabel
//                 istitl={isbtnenviar}
//                 title="Continuar.: "
//               >
//                 <ContentSidePageBottonButton
//                   pxheight="40px"
//                   img={setadir}
//                   titbtn="Continuar..."
//                   onclick={goto('/resgate3')}
//                 />
//               </ContentSidePageBottonLabel>
//             ) : null}


//   <ContentInputCenter open={iseditar}>
//      {iscontatoemail ? (
//       <form name="mail">
//         <br />
//         <input
//           type="email"
//           //name="mail"
//           value={inputstrid}
//           size={25}
//           autoFocus={true}
//           onChange={handlerEmailChange}
//         />
//         {erros.email && <span>{erros.email}</span>}
//         <br />
//       </form>
//     ) : null}
//     {iscontatosms ? (
//       <ContentInputPage>
//         <form name="sms">
//           <br />
//           <label>TeleFone.:</label>
//           <input
//             type="text"
//             name="sms"
//             value={inputstrid}
//             size={11}
//             autoFocus={true}
//             onChange={() => {}}
//           />
//           <br />
//         </form>
//       </ContentInputPage>
//     ) : null}
//     {iscontatozap ? (
//       <ContentInputPage>
//         <form name="zap">
//           <br />
//           <label>Whatsapp.:</label>
//           <input
//             type="text"
//             name="zap"
//             value={inputstrid}
//             size={11}
//             autoFocus={true}
//             onChange={() => {}}
//           />
//           <br />
//         </form>
//       </ContentInputPage>
//     ) : null}
//     {iscontatocpf ? (
//       <ContentInputPage>
//         <form name="cpf">
//           <br />
//           <label>C.P.F. .:</label>
//           <input
//             type="text"
//             name="cpf"
//             value={inputstrid}
//             size={11}
//             autoFocus={true}
//             onChange={() => {}}
//           />
//           <br />
//         </form>
//       </ContentInputPage>
//     ) : null}
//   </ContentInputCenter>

//  {!iseditar && !isbtncontinuar && isbtnenviar ? (
//     <PanelConfResgateYellow
//       isbgcolor={isbtnenviar}
//       titulo={'Resgate para seu Acesso.'}
//       subtitulo={'Dados Informados :'}
//     >
//       <p>&emsp;&emsp;Já temos em mãos :</p>
//       <label>
//         &emsp;&emsp;&emsp;# - ID Empresa....:{state.idemp}
//         <span>{state.idemp}</span>
//       </label>
//       <label>
//         &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
//         <span>{state.nmfant}</span>
//       </label>
//       {iscontatoemail ? (
//         <label>
//           &emsp;&emsp;&emsp;# - E-MAIL : <span>{inputstrid}</span>
//         </label>
//       ) : null}
//       {iscontatosms || iscontatozap ? (
//         <label>
//           &emsp;&emsp;&emsp;# - Celular : <span>{inputstrid}</span>
//         </label>
//       ) : null}
//       {iscontatocpf ? (
//         <label>
//           &emsp;&emsp;&emsp;# - C.P.F. :{' '}
//           <span>+85{inputstrid}</span>
//         </label>
//       ) : null}
//       <br />
//       <h5>Obs:.</h5>
//       <p>
//         &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
//         Esquerda...
//       </p>
//       <p>
//         &emsp;&emsp;Caso deseja " Continuar.:", clique na Seta à
//         Direita...
//       </p>
//       <br />
//     </PanelConfResgateYellow>
//   ) : null}

// {isbtnenviar ? (
//   <PanelConfResgateYellow
//     isbgcolor={isbtnenviar}
//     titulo={'Resgate para seu Acesso.'}
//     subtitulo={'Dados Fornecidos :'}
//   >
//     <p>&emsp;&emsp;Já temos em mãos :</p>
//     <label>
//       &emsp;&emsp;&emsp;# - ID Empresa....:{state.idemp}
//       <span>{state.idemp}</span>
//     </label>
//     <label>
//       &emsp;&emsp;&emsp;# - Nome Fantasia:{' '}
//       <span>{state.nmfant}</span>
//     </label>
//     {iscontatoemail ? (
//       <label>
//         &emsp;&emsp;&emsp;# - E-MAIL : <span>{state.mail}</span>
//       </label>
//     ) : null}
//     {iscontatosms || iscontatozap ? (
//       <label>
//         &emsp;&emsp;&emsp;# - Celular : <span>{state.fonec}</span>
//       </label>
//     ) : null}
//     {iscontatocpf ? (
//       <label>
//         &emsp;&emsp;&emsp;# - C.P.F. : <span>+85{state.cpf}</span>
//       </label>
//     ) : null}
//     <br />
//     <h5>Obs:.</h5>
//     <p>
//       &emsp;&emsp;Caso queira " Voltar.: " clique na Seta à
//       Esquerda...
//     </p>
//     <p>
//       &emsp;&emsp;Caso deseja " Continuar.:", clique na Seta à
//       Direita...
//     </p>
//     <br />
//   </PanelConfResgateYellow>
// ) : null}
