import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpLogin2 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpLogin2 = ({ imghlp, imgcard, imgbm, titbm, onclose }: TypeCardHelpLogin2) => {
  
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
          &emsp; - Para prosseguir seu logo-on, é necessário que edite nos
          respectivos locais de edição suas credenciais para o acesso conforme
          selecionado anteriormente.
        </p>
        <p>
          &emsp; - Não se esquecas de lembrar que você tem 3(Treis)
          oportunidade.Na (4)quatra, mostrara um botão para acesso do RESGATE.
        </p>
        <br />
        <p>&emsp;&emsp; - Após a Edição click em Continuar.</p>
        <p>&emsp;&emsp; - O Sistema irá rever sua edição , se tudo estiver conforme solicitado click em Acessar...</p>
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
