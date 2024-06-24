import React from 'react';
import * as MD from '../Modal/styles';

import { AcessoUseForm } from '../contexts/login/ContextAcesso.tsx';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpResgate1 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpResgate1 = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose
}: TypeCardHelpResgate1) => {
  const { state } = AcessoUseForm();

  const [help, setHelp] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            onClick={() => setHelp(true)}
          />
        </MD.ContainerHeardModalMain>
        <h3>Help Página do Acesso Resgate.</h3>
        <p>
          &emsp; - Para que possa prosseguir com o Resgate de seu Acesso, é
          necessário disponibilizar mais Informações, desde que contenha em seu
          cadastro de Usuário:
        </p>
        <h4>Situações dos recurso em processo do Resgate.</h4>
        <label>Como Concluido.:</label>
        <p>&emsp; - Já temos a Empresa, a qual devemos filtrar seu acesso.</p>
        <label><span> # - </span>{state.nmfant}</label>


        {state.mdlogin === 0 ? (
          <div>
            <p>
              &emsp; - Para que possa prosseguir com o Resgate de seu Acesso, é
              necessário disponibilizar de Informação.
            </p>
            <p>
              &emsp; - Qual a "OPÇÃO" o sistema deve requerer? Qual a meneira ?
            </p>
            <p>&emsp; - Selecione uma "OPÇÃO" para continuarmos.</p>
          </div>
        ) : (
          <div>
            <h4>Maneira da qual devemos nos comunicar:</h4>
            <label><span> # - </span>{state.nmlogin}</label>
            <p>
              &emsp; - Apartir daqui iremos te encaminhar para nos comunicarmos.
            </p>
          </div>
        )}
        <label>Do Caso.:</label>
        <p>
          &emsp; - Se não tiver a Maneira de entrarmos em contato, selecione uma
          Opção oferecidas.
        </p>
        <p>
          &emsp; - Se ja tivermos a maneira de comunicarmos, é só clicar em
          "CONTINUAR".
        </p>
        <p>&emsp; - Se quiser mudar de EMPRESA, basta clicar em "VOLTAR".</p>
        <p>&emsp;&emsp; - o Sistema irá responder conforme sua escolha.</p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
        <br />
      </MD.ContentTextoModulos>

      {help ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'90%'}
          titulo={'Acessando ao Sistema.'}
          imgbm={imgbm}
          titbm={titbm}
          onclose={onclose}
        >
          <CardAcessoSistema imgcard={imgcard} />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};
