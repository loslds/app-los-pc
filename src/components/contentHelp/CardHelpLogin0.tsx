import React from 'react';
import * as MD from '../Modal/styles';
import CardModalTexto from '../Modal/CardModalTexto';

import PageModalHelp from '../Modal/PageModalHelp';
import CardAcessoSistema from '../contentHelp/CardAcessoSistema';

type TypeCardHelpLogin0 = {
  imghlp?: string;
  imgcard?: string;
};
const CardHelpLogin0 = ({ imgcard, imghlp }: TypeCardHelpLogin0) => {
  const [helpsyspg, setHelpSysPg] = React.useState(false);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imgcard}
            onClick={() => setHelpSysPg(true)}
          />
        </MD.ContainerHeardModalMain>

        <h3>Help Página do Acesso ao Sistema.</h3>
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
        <br/>
      </MD.ContentTextoModulos>

      {helpsyspg ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'87%'}
          titulo={'Acesso Sistema.'}
          onclose={() => setHelpSysPg(false)}
        >
          <CardAcessoSistema imghlp={imghlp} />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};

export default CardHelpLogin0;
