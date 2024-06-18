import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpLogin31 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpLogin31 = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose
}: TypeCardHelpLogin31) => {
  const [help, setHelp] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            title={'Help...'}
            onClick={() => setHelp(true)}
          />
        </MD.ContainerHeardModalMain>

        <h3>Help Página do Acesso ao Sistema.</h3>
        <br />
        <p>
          &emsp; - Apartir deste momento você acaba de usar uma de suas 3(treis)
          tentativas de Acesso ao Sistema.
        </p>
        <p>
          &emsp; - Nós econtramos em estado de suspensão para Logar no Sistema.
        </p>
        <p>&emsp; - Você estara solicitando conexão com a "REDE".</p>
        <p>&emsp; - Você estara solicitando enviodo "DADOS".</p>
        <p>&emsp; - Você estara solicitando liberação de seus "LOGIN".</p>
        <br />
        <p>
          &emsp;&emsp;&emsp; - Caso não estabeleça a conexão Sucesso.Você deve
          solicitar.
        </p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
        <br />
      </MD.ContentTextoModulos>
      {help ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'87%'}
          titulo={'Acesso Sistema.'}
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
