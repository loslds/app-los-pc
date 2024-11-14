import React from 'react';

import '../../styles/global';
import * as C from '../Modal/styles';

import { AcessoUseForm, AcessoUseActions } from '../contexts/ContextAcesso';

import { useNavigate } from 'react-router-dom';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { ContentCustonImgPage } from '../pages/ContentCustonImgPage';
import { ContentBoxMainPage } from '../pages/ContentBoxMainPage';

import portaon from '../../assets/svgs/portaon.svg';

export function refreshTime() {
  var dateString = new Date().toLocaleString('PT-BR', {
    timeZone: 'America/Sao_Paulo'
  });
  var formattedString = dateString.replace(', ', ' - ');
  return formattedString;
}

type TypeCardHelpSys = {
  img?: string;
};
export const CardHelpSys = ({ img }: TypeCardHelpSys) => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = AcessoUseForm();

  const [abortar, setAbortar] = React.useState(false);
  const [iniciar, setIniciar] = React.useState(false);
  
  // const myClock = () => {
  //   setInterval(refreshTime, 1000);
  // };

  const tarb_ini = 'Iniciei meu Trabalho : ' + state.datetimei + '...';
  // const meuacesso =
  //   'O "MEU nível de Acesso " disponibiliza : ' + state.page + '.';

  const hanlerAbortar = React.useCallback(() => {
    setAbortar((oldState) => !oldState);
  }, []);
  const hanlerIniciar = React.useCallback(() => {
    setIniciar((oldState) => !oldState);
  }, []);



  React.useEffect(() => {
    if (iniciar ) {
      goto('/');
    }
    if (abortar) {
      dispatch({ type: AcessoUseActions.setLogado, payload: false });
      goto('/finalizado');
    }

  }, [state.logado, abortar, dispatch]);

  return (
    <CardModalTexto>
      <C.ContainerHeardImgMain>
        <C.ContainerModalImg pminheight={'130px'} pwidth={'150px'} img={img} />
      </C.ContainerHeardImgMain>
      <label>{tarb_ini}</label>
      <br />
      <h1> Ola, {state.idnmuser}.</h1>
      <br />
      <br />
      <p> &emsp;Você se encontra em nosso Sistema:</p>
      <p> &emsp;Vamos lhe mostrar os Acessos que tem a permissão de uso.</p>
      <li>No momento você esta Liberado.</li>
      <p>&emsp;Sua liberação é de:</p>
      <h4>{state.descnivel}</h4>
      <p>&emsp;Você poderá obter informações sobre os Serviços Prestados.</p>
      <br />
      <br />
      <label>"INICIAR OS TRABALHOS" no Sistema.</label>

      <label>Fazer "LOGOUT" no Sistema.</label>
      <p>
        &emsp;&emsp;&emsp;Ao CLick na Imagem abaixo, automaticamente
        desconectará você do serviço do Sistema.
      </p>

      <br />
      <br />
      <ContentBoxMainPage>
        <br />
        <br />
        <label>"INICIAR OS TRABALHOS" no Sistema.</label>
        <ContentCustonImgPage
          pxheight={'65px'}
          pheight={'65px'}
          pwidth={'65px'}
          img={portaon}
          titlebtn={'Logout...'}
          onclick={hanlerIniciar}
        />
        <br />
        <br />
        <label>Fazer "LOGOUT" no Sistema.</label>
        <p>
          &emsp;&emsp;&emsp;Ao CLick na Imagem abaixo, automaticamente
          desconectará você do serviço do Sistema.
        </p>
        <ContentCustonImgPage
          pxheight={'65px'}
          pheight={'65px'}
          pwidth={'65px'}
          img={portaon}
          titlebtn={'Logout...'}
          onclick={hanlerAbortar}
        />
      </ContentBoxMainPage>
      <br />
      <br />
    </CardModalTexto>
  );
};
