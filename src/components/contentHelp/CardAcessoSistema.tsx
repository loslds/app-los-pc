
import * as MD from '../Modal/styles';
import  CardModalTexto from '../Modal/CardModalTexto';
import clientes from '../../assets/svgs/clientes.svg';

export const CardAcessoSistema = () => {
  return (
    <CardModalTexto>
      <MD.ContentTextoModulos >
        <MD.ContainerHeardModalMain>
          <MD.ContainerModalImg
           ispx={true}
           pminheight={'60px'}
           pwidth={'80px'}
           img={clientes} />
        </MD.ContainerHeardModalMain>
        <h3>Acesso.</h3>
        <p>01º - O Acesso somente permitira aos cadastrados conforme o Setor e a Herarquia de sua Área de Trabalho.</p>
        <p>&emsp; - Para que possa logar e obter acesso, entre em contato com a Administração.</p>
        <p>Receberá uma senha de acesso conforme sua Identidade, e o seu trabalho.</p>
        <p>02º - Selecione as Opções necessárias solicitadas em Formulário.</p>
        <h4>Obs.:</h4>  
        <p>Poderá utilizar formas Diferêntes para Acesso, clicando em "Opções."</p>
        <h5>Modo:</h5>
        <p>&emsp; - Determinando: Empresa, ID(apelido) e Senha(password).</p>
        <p>&emsp; - Determinando: Empresa, ID(apelido) e PIN.</p>
        <p>&emsp; - Determinando: E-Mail, ID(apelido) e Senha(password).</p>
        <p>&emsp; - Determinando: E-Mail, ID(apelido) e PIN.</p>
        <p>Somente após isso feito poderá realizar o Login.</p>
        <br/>  
        <h5>Obs. do Caso Recuperação do Acesso:</h5>
        <p>&emsp; - Recuperar Acesso através de E-Mail.</p>
        <p>&emsp; - Recuperar Acesso através de SMS.</p>
        <br/>
        <h5>Obs. do Caso Ateração Cadastrais do Acesso:</h5>
        <p>&emsp; - Para isso é necessário estar logado e seguir instruções conforme Opção.</p>
        <h5>Ao Enviar o seu Acesso em Formulário:</h5>
        <br/>
        <p> Assim que for detectado sua Chave de Acesso, O Sistema irá redirecionar voce para o Setor da liberdade do Acesso ao Sistema.</p>
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
