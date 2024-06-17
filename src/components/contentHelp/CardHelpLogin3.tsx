import React from 'react';
import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';
import { CardModalTextoModulos } from '../Modal/CardModalTextoModulos';
import { PageModalHelp } from '../Modal/PageModalHelp';
import { CardAcessoSistema } from './CardAcessoSistema';

type TypeCardHelpLogin3 = {
  ishlp?: boolean;
  imghlp?: string;
  imgcard?: string;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
};
export const CardHelpLogin3 = ({
  ishlp,
  imghlp,
  imgcard,
  imgbm,
  titbm,
  onclose
}: TypeCardHelpLogin3) => {
  const [helpsyspg, setHelpSysPg] = React.useState(false);

  return (
    <CardModalTexto>
      <CardModalTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'70px'}
            pwidth={'78px'}
            img={imghlp}
            title={'Help-Login3...'}
            onClick={() => setHelpSysPg(true)}
          />
        </MD.ContainerHeardModalMain>
        <h3>Help Página do Acesso ao Sistema.</h3>
        <br />
        {!ishlp ? (
          <MD.ContentTextoModulos>
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
            <p>&emsp; - Tem somente (3)Treis oportunidade.</p>
            <p>
              &emsp; - Caso não tenha certeza da edição, click em Voltar e
              Reditar.
            </p>
            <p>
              &emsp; - Caso tenha certeza que está correta , click em Enviar.
            </p>
            <br />
            <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
            <label>Obs.:</label>
            <p>
              &emsp; - Toda vêz que Enviar e não conseguir acesso, a contagem
              começa e por 3(treis) vezes.
            </p>
            <p>&emsp; - Consulte Help através das imagens na Aplicação.</p>
            <br />
          </MD.ContentTextoModulos>
        ) : (
          <MD.ContentTextoModulos>

            <p>
              &emsp; - Apartir deste momento você acaba de usar uma de suas
              3(treis) tentativas de Acesso ao Sistema.
            </p>
            <p>
              &emsp; - Nós econtramos em estado de suspensão para Logar no
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
            <br />
            <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
            <label>Obs.:</label>
            <p>&emsp; - Click na imagem para ver o Help da Aplicação.</p>
            <br />
          </MD.ContentTextoModulos>
        )}
      </CardModalTextoModulos>

      {helpsyspg ? (
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
