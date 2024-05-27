import React from 'react';
import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';

import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from '../contentHelp/CardAcessoSistema';

type TypeCardHelpLogin0 = {
  imghlp?: string;
  tithlp?: string;

  imgcard?: string;
  titcard?: string;

  onclosecard?: () => void;
};
export const CardHelpLogin0 = ({ imghlp, tithlp }: TypeCardHelpLogin0) => {
  const [helpsyspg, setHelpSysPg] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            title={tithlp}
          />
        </MD.ContainerHeardModalMain>

        <h3>Help Página do Acesso a Empresa.</h3>
        <p>
          &emsp; - Para que possa logar é necessário que selecione uma Opção.
        </p>
        <p>
          &emsp; - No momento você prescisa somente optar em selecionar uma
          Empresa.
        </p>
        <p>&emsp; - Após selecionar click em Continuar.</p>
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
        <br />
      </MD.ContentTextoModulos>

      {helpsyspg ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'87%'}
          titulo={'Acessando Empresas.'}
          onclose={() => setHelpSysPg(false)}
        >
          <CardAcessoSistema />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};
