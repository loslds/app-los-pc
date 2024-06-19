import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardAcessoSistema = {
  imgcard?: string;
};
export const CardAcessoSistema = ({ imgcard }: TypeCardAcessoSistema) => {
  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'100px'}
            pwidth={'180px'}
            img={imgcard}
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
       
        <h3>Obs.:</h3>
        <p>
          &emsp; - Poderá utilizar formas Diferêntes para Acesso, clicando em
          "Opções."
        </p>
     
        <h4>Modo:</h4>
        <p>&emsp;&emsp;&emsp; 1º Passo</p>
        <p>
          &emsp;&emsp;&emsp;&emsp; - Determinando: Uma Empresa para Trabalho.
        </p>
        <p>&emsp;&emsp;&emsp; 2º Passo</p>
        <p>&emsp;&emsp;&emsp;&emsp; - Determinando: Um ID e uma Senha.</p>
    
        <p>&emsp; De livre escola poderá ser terminado como:</p>
      
        <p>&emsp;&emsp; - ID(apelido) e Senha(password).</p>
        <p>&emsp;&emsp; - ID(apelido) e PIN.</p>
        <p>&emsp;&emsp; - ID(E-Mail), e Senha(password).</p>
        <p>&emsp;&emsp; - ID(E-Mail), e PIN.</p>
        <label>Atenção:</label>
        <p>&emsp;&emsp;Somente após isso feito poderá realizar o Login.</p>
        <p>
          &emsp;&emsp; - Caso envie por mais de (3)Treis vezes o Acesso "NAO
          EXECUTADO COM SUCESSO", poderá acessar SITUAÇÃO DE RESGATE.
        </p>
      
        <h4>Obs. do Caso Recuperação do Acesso:</h4>
        <p>&emsp;&emsp;&emsp; - Empresa cadastrada.</p>
        <p>&emsp;&emsp;&emsp; - Email cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Telefone cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Whatsapp cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Respostas as Peguntas cadastradas.</p>
        <h4>Do processo a requerido ao Acesso:</h4>
        <p>
          &emsp;Recuperar através do EMAIL.
        </p>
        <p>
          &emsp;&emsp; - Será enviado um email e conterá as imformações com as quais você irá seguir.
        </p>
      
        <p>
          &emsp;Recuperar através do Telefone.
        </p>
        <p>
          &emsp;&emsp; - Será enviado um SMS com o Código de segurança temporário.
        </p>
       
        <p>
          &emsp;Recuperar através do Whatsapp.
        </p>
        <p>
          &emsp;&emsp; - Será enviado um Código de segurança temporário.
        </p>
       
        <p>
          &emsp;Recuperar através de Perguntas.
        </p>
        <p>
          &emsp;&emsp; - Será solicitada as respostas para as perguntas exigidas.
        </p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
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
