import * as MD from '../Modal/styles';
import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardAcessoResgate = {
  imgcard?: string;
};
export const CardAcessoResgate = ({ imgcard }: TypeCardAcessoResgate) => {
  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
            pminheight={'100px'}
            pwidth={'220px'}
            img={imgcard}
          />
        </MD.ContainerHeardModalMain>
        <h2>Acesso ao Resgate.</h2>
        <p>
          &emsp;&emsp;&emsp;01º - O Acesso somente permitira aos cadastrados
          conforme o Setor e a Herarquia de sua Área de Trabalho.
        </p>
        <p>
          &emsp;&emsp;&emsp; - Para que possa resgatar e obter acesso, é necessário seguir os seguintes processos:
        </p>
        <h4>Recuperação do Acesso:</h4>
        
        <p>&emsp;&emsp;&emsp; - Empresa cadastrada.</p>
        <p>&emsp;&emsp;&emsp; - Email cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Telefone cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Whatsapp cadastrado.</p>
        <p>&emsp;&emsp;&emsp; - Respostas as Peguntas cadastradas.</p>

        <p>
          &emsp;01º - Determinar para qual empresa deseja resgatar o seu Acesso.
          &emsp;&emsp; - Selecionar uma Empresa.
        </p>
        <p>
          &emsp;02º - Selecione através de qual forma.
          &emsp;&emsp; - Através do email cadastrado em sua Conta.
          &emsp;&emsp; - Através do nº do Celular receber através de SMS Código de verificação.
          &emsp;&emsp; - Através do nº do Celular receber através do WhatsUpp Código de verificação.
          &emsp;&emsp; - Através das Respostas das perguntas Cadastradas ao cadastrar seu C.P.F.
        </p>
        <label>Após Seleção da Forma que for determinado.</label>
        <p>
          &emsp;- O Sistema apresentará opções para progredir com os procedimentos de acesso aos Dados Cadastrados que determinarão o acesso ao resgate. - 
        </p>
        <p>
          &emsp;- Para qual for sua opção, o sistema enviará ao seu: email ou Celular o código de segurança, e então tera que colocar e confirmar, no caso das respostas, deverá
          responder e enviar.
        </p>
        <br />
        <p>▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒</p>
        <h4>Obs.:</h4>
        <p>
          &emsp;Assim que cada procedimento for concluido cm sucesso, será direcionado para alterar o seu acesso ao sistema.
        </p>
        <p>
          &emsp;Após feito a renovação do seu acesso, o Sistema reiniciará para poder logar com o novo Acesso.
        </p>
        <br />
      
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
