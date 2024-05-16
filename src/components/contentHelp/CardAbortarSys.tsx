import React from 'react';

import portaon from '../../assets/svgs/portaon.svg';
//import { useNavigate } from 'react-router-dom';
import CardModalTexto from '../Modal/CardModalTexto';
import { AcessoUseForm } from '../contexts/login/ContextAcesso';
import { ContentCustonImgPage } from '../pages/ContentCustonImgPage';

import * as C from '../Modal/styles';

type Props = {
  img?: string;
};

export function refreshTime() {
  var dateString = new Date().toLocaleString('PT-BR', {
    timeZone: 'America/Sao_Paulo'
  });
  var formattedString = dateString.replace(', ', ' - ');
  //timeDisplay.innerHTML = formattedString;

  return formattedString;
}

const CardAbortarSys: React.FC<Props> = ({ img }) => {
  const { state } = AcessoUseForm();

  // const myClock = () => {
  //   setInterval(refreshTime, 1000);
  // };

  const tarb_ini = 'Iniciei meu Trabalho : ' + state.datetimei + '...';
  // const meuacesso =
  //   'O "MEU nível de Acesso " disponibiliza : ' + state.page + '.';

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

      <li>Meus Acessoa ao Sistema:</li>
      <p> &emsp;&emsp;acessos do Liberardos para minha Pessoa...</p>
      <br />

      <li>Obs:. Meus Acessos até o Momento :</li>
      <p> &emsp;&emsp;acessos do bd no dia de hoje...</p>

      <label>Fazer "LOGOUT" no Sistema.</label>
      <p>
        {' '}
        &emsp;&emsp;&rarr;Ao CLick desta opção, automaticamente desconectará
        você do serviço do Sistema.
      </p>
      <br />
      <br />

      <ContentCustonImgPage
        pxheight={'65px'}
        pheight={'65px'}
        pwidth={'65px'}
        img={portaon}
        titlebtn={'Logout...'}
        onclick={() => {}}
      />
      <br />
      <br />
    </CardModalTexto>
  );
};

export default CardAbortarSys;
