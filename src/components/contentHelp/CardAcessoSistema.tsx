import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardAcessoSistema = {
  imgcard?: string;
  titcard?: string;
};
export const CardAcessoSistema = ({ imgcard, titcard }: TypeCardAcessoSistema) => {
  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'100px'}
            pwidth={'180px'}
            img={imgcard}
            title={titcard}
            
          />
        </MD.ContainerHeardModalMain>

        <h2>Acesso ao Sistema.</h2>
        <p>
          &emsp;&emsp;&emsp;01º - O Acesso somente permitira aos cadastrados
          conforme o Setor e a Herarquia de sua Área de Trabalho.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Para que possa logar e obter acesso, entre em
          contato com a Administração.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Receberá uma senha de acesso conforme sua
          Identidade, e o seu trabalho.
        </p>
        <p>
          &emsp;&emsp;&emsp;02º - Selecione as Opções ou edite conforme
          Formulário.
        </p>
        <br />
        <h3>Obs.:</h3>
        <p>
          &emsp; - Poderá utilizar formas Diferêntes para Acesso, clicando em
          "Opções."
        </p>
        <br />
        <h4>Modo:</h4>
        <p>&emsp;&emsp;&emsp; 1º Passo</p>
        <p>
          &emsp;&emsp;&emsp;&emsp; - Determinando: Uma Empresa para Trabalho.
        </p>
        <p>&emsp;&emsp;&emsp; 2º Passo</p>
        <p>&emsp;&emsp;&emsp;&emsp; - Determinando: Um ID e uma Senha.</p>
        <br />
        <p>&emsp; De livre escola poderá ser terminado como:</p>
        <br />
        <p>&emsp;&emsp; - ID(apelido) e Senha(password).</p>
        <p>&emsp;&emsp; - ID(apelido) e PIN.</p>
        <p>&emsp;&emsp; - ID(E-Mail), e Senha(password).</p>
        <p>&emsp;&emsp; - ID(E-Mail), e PIN.</p>
        <label>Atenção:</label>
        <p>&emsp;&emsp;Somente após isso feito poderá realizar o Login.</p>
        <p>
          &emsp;&emsp;Caso envie por mais de (3)Treis vezes o Acesso "ERRADO",
          poderá acessar SITUAÇÃO DE RESGATE.
        </p>
        <br />
        <h4>Obs. do Caso Recuperação do Acesso:</h4>
        <p>
          &emsp; - Recuperar Acesso através de E-Mail. Recuperar Acesso através
          de SMS. Recuperar Acesso através de WATSZAP.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Atravé de E-MAIL vc receberá um Link para
          adentrar no Sistema e Refazer seu Acesso ao Sistema.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Atravé de SMS vc receberá um Código para adentrar
          no Sistema e Refazer seu Acesso ao Sistema.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Atravé de WATSZAP vc receberá um Link para
          adentrar no Sistema e Refazer seu Acesso ao Sistema.
        </p>
        <br />
        <p>
          &emsp;Assim que for detectado sua Chave de Acesso, o Sistema irá
          redirecionar você para o Setor desbloqueado conforme seu Acesso ao
          Sistema na Pagina Principal(HOME).
        </p>
        <br />
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
