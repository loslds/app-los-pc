import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpLogin3 = {
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpLogin3 = ({
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose
}: TypeCardHelpLogin3) => {
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

        <h3>Help Página do Acesso ao Sistema.</h3>
        <br />
        <p>
          &emsp; - Para prosseguir seu logo-on, apresentamos os Dados que irá
          Enviar.
        </p>
        <p>
          &emsp; - Com a devida certeza, você pode verificar se esta correto a
          sua Edição para o acesso ao Sistema.
        </p>
        <p>
          &emsp; - Caso tenha dúvida na edição de sua Senha, no bloco Senha: irá
          encontrar um Botão que poderá visualizar se esta correto a edição da
          mesma.
        </p>
        <p>&emsp; - Tem somente (3)Treis oportunidade.</p>
        <p>
          &emsp; - Caso não tenha certeza da edição, click em Voltar e Reditar.
        </p>
        <p>&emsp; - Caso tenha certeza que está correta , click em Enviar.</p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <label>Obs.:</label>
        <p>
          &emsp; - Toda vêz que Enviar e não conseguir acesso, a contagem começa
          e por 3(treis) vezes.
        </p>
        <p>&emsp; - Consulte Help através das imagens na Aplicação.</p>
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
