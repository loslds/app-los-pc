import React from 'react';
//import { useNavigate } from 'react-router-dom';
import CardModalTexto from '../Modal/CardModalTexto';
import { AcessoUseForm } from '../contexts/login/ContextAcesso';
import * as C from '../Modal/styles';

type Props = {
    img?: string;
  };
const CardTxtQuemSouUser: React.FC<Props> = ({ img }) => {

  // const navigate = useNavigate();
  // const goto = (path: string) => {
  //   return () => {
  //     navigate(path);
  //   };
  // };

  const { state } = AcessoUseForm();

  const tarb_ini = 'Iniciei meu Trabalho '+ state.datetimei + '...';
  const meuacesso = 'O "MEU nível de Acesso " disponibiliza : '+ state.page + '.';

  return (
    <CardModalTexto>
      <C.ContainerHeardImgMain>
        <C.ContainerModalImg
         pminheight={'130px'}
         pwidth={'150px'}
         img={img} />
        {/* <C.ButtonModalMenu sizer={'60px'} img={menu} title='Menu Opções...'onClick={handleMenu} /> */}
      </C.ContainerHeardImgMain>
      <label>{tarb_ini}</label>
      <p>
        {' '}
        &emsp;&emsp;O Sistema esta adequado a tratar as Informações com
        eficiência e fidelidade de acôrdo com o exercício do Usuário.
      </p>
      <p>
        {' '}
        &emsp;&emsp;Estaremos trabalhando com a possibilidade de operar
        com diferêntes empresas no mesmo Sistema.
      </p>
      <p>
        {' '}
        &emsp;&emsp;Todas evoluem de acordo com seus próprios princípios
        em requerer, guardar e publicar as informações.
      </p>
      <p>
        {' '}
        &emsp;&emsp;Todas as rotinas e processamento tem o mesmo perfil,
        somente usa filtro para indexar-las.
      </p>
      <p>
        {' '}
        &emsp;&emsp;As demais Empresa estarão disponiveis através de um
        novo cadastro com as mesmas finalidades
      </p>
      <p>
        {' '}
        &emsp;&emsp;{meuacesso}
      </p>
      <label>Obs:. Opções do "MENU".</label>
      <li>Alteração do ACESSO SISTEMA.</li>
      <p>
        {' '}
        &emsp;&emsp;&rarr; Esta opção irá dar condições de voce alterar(mudar) sua senha
        de acesso, ao fazer Logoff deverá entrar com a senha nova.
      </p>
      <li>Alterarção de seu "AVATAR".</li>
      <p>
      {' '}
      &emsp;&emsp;&rarr; Esta opção irá automaticamente alterar(mudar) seu avatar(Foto).
      </p>
      <li>Fazer "LOGOUT" no Sistema.</li>
      <p>
      {' '}
      &emsp;&emsp;&rarr;Esta opção automaticamente desconectará voce do serviço do Sistema.
      </p>
    </CardModalTexto>
  );
};

export default CardTxtQuemSouUser;
