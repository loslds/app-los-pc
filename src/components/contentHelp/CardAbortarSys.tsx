import React from 'react';

import '../../styles/global';
import * as C from '../Modal/styles';

import {
  AcessoUseForm,
  AcessoUseActions
} from '../contexts/login/ContextAcesso';

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

type TypeCardAbortarSys = {
  img?: string;
};
export const CardAbortarSys = ({ img }: TypeCardAbortarSys) => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const { state, dispatch } = AcessoUseForm();

  const [abortar, setAbortar] = React.useState(false);

  // const myClock = () => {
  //   setInterval(refreshTime, 1000);
  // };

  const tarb_ini = 'Iniciei meu Trabalho : ' + state.datetimei + '...';
  // const meuacesso =
  //   'O "MEU nível de Acesso " disponibiliza : ' + state.page + '.';

  const hanlerAbortar = React.useCallback(() => {
    setAbortar((oldState) => !oldState);
  }, []);

  React.useEffect(() => {
    if (state.logado && abortar) {
      dispatch({ type: AcessoUseActions.setLogado, payload: false });
      goto('/');
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
      <li>Meus Acessos ao Sistema:</li>
      <p> &emsp;&emsp;acessos do Liberardos para voce...</p>
      <br />
      <li>Obs:. Meus Acessos até o Momento :</li>
      <p> &emsp;&emsp;acessos do bd no dia de hoje...</p>
      <label>Fazer "LOGOUT" no Sistema.</label>
      <p>
        &emsp;&emsp;&rarr;Ao CLick na Imagem abaixo, automaticamente
        desconectará você do serviço do Sistema.
      </p>
      <br />
      <br />
      <ContentBoxMainPage>
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
