import React from 'react';

import '../../styles/global';
import * as C from '../Modal/styles';

import {
  AcessoUseForm,
  AcessoUseActions
} from '../contexts/ContextAcesso';

import { useNavigate } from 'react-router-dom';
import { TempoGastoDatIni } from '../util/datamomento';

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

      
  const hanlerAbortar = React.useCallback(() => {
    setAbortar((oldState) => !oldState);
  }, []);

  const dataHoraAtual = new Date();
  const tarb_ini = 'Iniciei meu Trabalho : ' + state.datetimei + '...';
  const tarb_fim = 'Término de meu Trabalho : ' + dataHoraAtual + '...';
  const tarb_tmptt = TempoGastoDatIni(state.datetimei);


  React.useEffect(() => {
    if (abortar) {
      // gravar log 
      dispatch({ type: AcessoUseActions.setLogado, payload: false });
      dispatch({ type: AcessoUseActions.setDtFim, payload: dataHoraAtual });
      dispatch({ type: AcessoUseActions.setTmp, payload: tarb_tmptt });
      goto('/finalizado');
    }
  }, [state.logado, abortar, dispatch]);

  return (
    <CardModalTexto>
      <C.ContainerHeardImgMain>
        <C.ContainerModalImg pminheight={'130px'} pwidth={'150px'} img={img} />
      </C.ContainerHeardImgMain>
      <br />
      <h1> Ola, {state.idnmuser}.</h1>
      <label>{tarb_ini}</label>
      <label>{tarb_fim}</label>
      <label>Tempo de Processado: {tarb_tmptt}</label>
      <br />
      <li>Acessos Registrados no Sistema:</li>
      <p> &emsp;Atividade executadas até o momento...</p>
      <br />
      <p>Obs:. Lista de Atividades:</p>
      <p> &emsp;&emsp;" mostrar todos procedimentos até o momento.</p>
      
      <br />
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
