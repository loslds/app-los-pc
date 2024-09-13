import React from 'react';

import * as Pg from '../stylePage.ts';

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

import { ContentLabelTesto } from '../ContentLabelTesto.tsx';
import { ContentLabelButtonOnOff } from '../ContentLabelButtonOnOff.tsx';

import { ContentSidePagePanelBotton } from '../ContentSidePagePanelBotton.tsx';
import { ContentSidePageBottonLabel } from '../ContentSidePageBottonLabel.tsx';
import { ContentSidePageBottonButton } from '../ContentSidePageBottonButton.tsx';
import { PageModal } from '../../Modal/PageModal.tsx';
import { CardHelpResgate3 } from '../../contentHelp/CardHelpResgate3.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';

// import { PanelConfResgateYellow } from '../../panel/PanelConfResgateYellow.tsx';
// import { CardSwitHelpResgate } from '../../contentHelp/CardSwitHelpResgate.tsx';

import close from '../../../assets/svgs/close.svg';
import resgatepg4 from '../../../assets/svgs/resgatepg4.svg';
import resgatehlp4 from '../../../assets/svgs/resgatehlp4.svg';
import esclamacaocirc from '../../../assets/svgs/esclamacaocirc.svg';
import help from '../../../assets/svgs/help.svg';
import setaesq from '../../../assets/svgs/setaesq.svg';
import setadir from '../../../assets/svgs/setadir.svg';



export const Resgate3 = () => {
  const { state, dispatch } = AcessoUseForm();

  const [isperg1, setIsPerg1] = React.useState(false);
  const [isperg2, setIsPerg2] = React.useState(false);
  const [isperg3, setIsPerg3] = React.useState(false);
  const [resp1, setRerp1] = React.useState('');
  const [resp2, setRerp2] = React.useState('');
  const [resp3, setRerp3] = React.useState('');
  // state para guardar as informações existente do usuario
  const [dbempresauser, setDbEmpresaUser] = React.useState(0);
  const [dbnmfantuser, setDbNmFantUser] = React.useState('');
  const [dbstriduser, setDbStrIdUser] = React.useState('');
  const [dbstrpswuser, setDbStrPswUser] = React.useState('');
  const [dbemailuser, setDbEmailUser] = React.useState('');
  const [dbfonecuser, setDbFonecUser] = React.useState('');
  const [dbfonezuser, setDbFonezUser] = React.useState('');
  const [dbcpfuser, setDbCpfUser] = React.useState('');
  const [dbperg1, setDBPerg1] = React.useState('');
  const [dbperg2, setDBPerg2] = React.useState('');
  const [dbperg3, setDBPerg3] = React.useState('');
  const [dbsresp1, setDbRerp1] = React.useState('');
  const [dbsresp2, setDbRerp2] = React.useState('');
  const [dbsresp3, setDbRerp3] = React.useState('');

  const [edicao, setEdicao] = React.useState(false);
  const [start, setStart] = React.useState(false);

  const [onpanel, setOnPanel] = React.useState(false);
  const [helppg, setHelpPg] = React.useState(false);
  // edição de perguntas
  const [isperguntas, setIsPerguntas] = React.useState(false); // painel edição
  const [iseditar, setIsEditar] = React.useState(false); // painel edição
  const [isnenviar, setIsEnviar] = React.useState(false);
  const [isreceber, setIsReceber] = React.useState(false);

  const [btnrecebido, setBtnRecebido] = React.useState(false);
  const [btncontinuar, setBtnContinuar] = React.useState(false);



//   //////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setCurrentStep, payload: 4 });
    dispatch({ type: AcessoUseActions.setPage, payload: '/resgate3' });
    dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
    dispatch({ type: AcessoUseActions.setPswUser, payload: '' });

    setDbEmpresaUser(0);
    setDbNmFantUser('');
    setDbStrIdUser('');
    setDbStrPswUser('');
    setDbEmailUser('');
    setDbFonecUser('');
    setDbFonezUser('');
    setDbCpfUser('');
  




    setIsPerg1(false);
    dispatch({ type: AcessoUseActions.setresp1, payload: '' });
    setIsPerg2(false);
    dispatch({ type: AcessoUseActions.setresp2, payload: '' });
    setIsPerg3(false);
    dispatch({ type: AcessoUseActions.setresp3, payload: '' });

    setRerp1('');
    setRerp2('');
    setRerp3('');
  
    
//     //   dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setCpf, payload: '' });
    }
//     // if (state.mdlogin === 2) {
//     //   dispatch({ type: AcessoUseActions.setMail, payload: '' });
//     //   // dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setCpf, payload: '' });
//     // }
//     // if (state.mdlogin === 3) {
//     //   dispatch({ type: AcessoUseActions.setMail, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
//     //   // dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setCpf, payload: '' });
//     // }
//     // if (state.mdlogin === 4) {

//     //   dispatch({ type: AcessoUseActions.setMail, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setFoneC, payload: '' });
//     //   dispatch({ type: AcessoUseActions.setFoneZ, payload: '' });
//     //   // dispatch({ type: AcessoUseActions.setCpf, payload: '' });
//     // }
//     dispatch({
//       type: AcessoUseActions.setModulo,
//       payload: 'Resgatar: Contato Usuário'
//     });
//     dispatch({
//       type: AcessoUseActions.setAplicacao,
//       payload: 'Contato :' + state.nmlogin + '.'
//     });

//     // atraves da busca dos DBs
//     dispatch({ type: AcessoUseActions.setIdUser, payload: 0 });
//     dispatch({ type: AcessoUseActions.setIdNmUser, payload: '' });
//     dispatch({ type: AcessoUseActions.setPswUser, payload: '' });
//     dispatch({ type: AcessoUseActions.setPin, payload: '' });
//     dispatch({ type: AcessoUseActions.setAvatar, payload: '' });
//     dispatch({ type: AcessoUseActions.setperg1, payload: '' });
//     dispatch({ type: AcessoUseActions.setresp1, payload: '' });
//     dispatch({ type: AcessoUseActions.setperg2, payload: '' });
//     dispatch({ type: AcessoUseActions.setresp2, payload: '' });
//     dispatch({ type: AcessoUseActions.setperg3, payload: '' });
//     dispatch({ type: AcessoUseActions.setresp3, payload: '' });
//     /////////////////////////////////////////////////////////////////////////
//     setSnhMaster(criasmstr);
//     setIsConected(false);
//     setIsValid(false);

//     setIsConexao(true);
//     setHelpNomePainel('Conexao');
//     setHelpLstAcessoNmLst('ListAcessos');
//     setHelpLstAcessoValid(false);

//     setIsDownload(false);
//     setIsDownloaded(false);
//     setIsUpDate(false);
//     setIsUpDated(false);
//     setIsVerify(false);
//     setIsVerified(false);
//     setIsConclusion(false);
//     setIsConcluded(false);
//     setIsHome(false);

    setEdicao('C O N E C Ã O');
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
        <ContentCardPage>
          <ContentCardPageTitle>
          <h2>Resgate3</h2>
          </ContentCardPageTitle>
          <ContentCardBoxMainPage>
            <ContentCardBoxCenterPage pwidth="200px">
              <ContentCardPageTitle>
                <h4>Conectar com DataCenter.</h4>
              </ContentCardPageTitle>
          
            </ContentCardBoxCenterPage>
          </ContentCardBoxMainPage>

          {/* ////////////////////////////////////////////////////////////// */}

          <Pg.DivisionPgHztalPage />

          <ContentSidePagePanelBotton bordas="3px" open={start} pwidth="100%">
            <ContentSidePageBottonLabel istitl={start} title={'Abortar.: '}>
              <ContentSidePageBottonButton
                pxheight={'40px'}
                img={setaesq}
                titbtn={'Abortar...'}
                onclick={goto('/')}
              />
            </ContentSidePageBottonLabel>
            <ContentCardPageTitle>
              <h5>label box botão</h5>
            </ContentCardPageTitle>

            {isconexao ? (
              <ContentSidePageBottonLabel istitl={start} title={'Conectar.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Conectar..."
                  onclick={handlerConexao}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isdownload ? (
              <ContentSidePageBottonLabel istitl={start} title={'Download.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Download..."
                  onclick={handlerDownload}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isupdate ? (
              <ContentSidePageBottonLabel istitl={start} title={'Up-Date.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Up-Date..."
                  onclick={handlerUpdate}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isverify ? (
              <ContentSidePageBottonLabel istitl={start} title={'Verificar.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Verificar..."
                  onclick={handlerVerify}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {isconclusion ? (
              <ContentSidePageBottonLabel istitl={start} title={'Concluir.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Concluir..."
                  onclick={handlerConclusion}
                />
              </ContentSidePageBottonLabel>
            ) : null}
            {ishome ? (
              <ContentSidePageBottonLabel istitl={start} title={'Concluir.: '}>
                <ContentSidePageBottonButton
                  pxheight="40px"
                  img={setadir}
                  titbtn="Concluir..."
                  onclick={goto('/')}
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
              <CardHelpResgate3
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
