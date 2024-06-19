import React from 'react';
import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpResgate0 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpResgate0 = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose
}: TypeCardHelpResgate0) => {
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
          necessário disponinvel em seu cadastro de Usuário:
        </p>
        <p>&emsp;&emsp;&emsp; - Empresa cadastrada.</p>
        <p>&emsp;&emsp;&emsp; - Email cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Telefone cadastrado para envio de SMS.</p>
        <p>&emsp;&emsp;&emsp; - Respostas as Peguntas, cadastradas.</p>
        <br />
        <br />
        <h3>Situações do recuso em processo do Resgate.</h3>
        <label>Do Caso.:</label>
        <p>
          &emsp; - Se não não tiver a Empresa em processo, deverá selecionar uma
          nas opções oferecidas.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Se não não tiver a Empresa em processo, deverá
          selecionar uma nas opções oferecidas.
        </p>
        <label>Obs.:</label>
        <p>
          &emsp;&emsp; - Ao clicar "ABORTAR", abrira a opçao de selecionar uma
          Empresa como Opção.
        </p>
        <p>
          &emsp;&emsp; - Ao clicar "CONTINUAR", para que Continue com o procedimento
          de Resgate.
        </p>
        <br />
        <p>
          &emsp; - Se ja tiver a Empresa em processo, apresentará as mesmas e
          basta clicar "CONTINUAR", para que Continue com o procedimento de Resgate.
        </p>
        <p>
          &emsp; - Caso queira abandorar o Processo de Resgate, basta clicar "ABORTAR".
        </p>
        <br />
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
          pheight={'87%'}
          titulo={'Acessando Empresas.'}
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
