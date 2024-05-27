import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpLogin3 = {
  imghlp?: string;
  imgcard?: string;
  ishlp?: boolean;
};
export const CardHelpLogin3 = ({
  ishlp,
  imgcard,
  imghlp
}: TypeCardHelpLogin3) => {
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
        <br />

        {!ishlp ? (
          <div>
            <p>
              &emsp; - Para prosseguir seu logo-on, apresentamos os Dados que
              irá Enviar.
            </p>
            <p>
              &emsp; - Com a devida certeza, você pode verificar se esta correto
              a sua Edição para o acesso ao Sistema.
            </p>
            <p>
              &emsp; - Caso tenha dúvida na edição de sua Senha, no bloco Senha:
              irá encontrar um Botão que poderá visualizar se esta correto a
              edição da mesma.
            </p>
            <p>
              &emsp; - Tem somente (3)Treis oportunidade.Na (4)quatra, mostrara
              um botão para acesso do RESGATE.
            </p>
            <br />
            <p>&emsp; - Após estar ciênte é só dar um click para Enviar.</p>
            <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
            <label>Obs.:</label>
            <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
            <br />
          </div>
        ) : (
          <div>
            <p>
              &emsp; - Apartir deste momento você acabade usar uma de suas
              3(treis) tentativas de Acesso ao Sistema.
            </p>
            <p>
              &emsp; - Nps econtramos em estado de suspensão para Logar no
              Sistema.
            </p>
            <p>&emsp; - Você estara solicitando conexão com a "REDE".</p>
            <p>&emsp; - Você estara solicitando enviodo "DADOS".</p>
            <p>&emsp; - Você estara solicitando liberação de seus "LOGIN".</p>
            <br />
            <p>
              &emsp;&emsp;&emsp; - Caso não estabeleça a conexão Sucesso.Você
              deve solicitar.
            </p>

            <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
            <label>Obs.:</label>
            <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
            <br />
          </div>
        )}
      </MD.ContentTextoModulos>

      {helpsyspg ? (
        <PageModalHelp
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'87%'}
          titulo={'Acesso Sistema.'}
          onclose={() => setHelpSysPg(false)}
        >
          <CardAcessoSistema />
        </PageModalHelp>
      ) : null}
    </CardModalTexto>
  );
};
