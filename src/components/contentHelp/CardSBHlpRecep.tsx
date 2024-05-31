import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardSBHlpRecep = {
  imgcard?: string;
};
export const CardSBHlpRecep = ({ imgcard }: TypeCardSBHlpRecep) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg
          pminheight={'70px'}
          pwidth={'70px'}
          img={imgcard}
        />
      </MD.ContainerHeardModalMain>
      <h3>Conceito de Recepção.</h3>
      <br />
      <p>
        &emsp;&emsp;<b>01º -</b> Transmitir: "Simpatia, Respeito, Préstimos e
        atenção, e ouvir com todo cuidado.
      </p>
      <p>
        &emsp;&emsp;<b>02º -</b> Sempre procurar a melhor forma de Prestação no
        Serviço.
      </p>
      <p>
        &emsp;&emsp;&emsp;Se necessário: explicar motivos, detalhes possíveis,
        adequado ou requeridos apresentado e indicar melhor forma.
      </p>
      <p>
        &emsp;&emsp;<b>03º -</b> Constar: Nome, Telefone ou outro contato.
      </p>
      <p>
        &emsp;&emsp;<b>04º -</b> Determinar a existência do Design, ou
        providênciar a imagem.
      </p>
      <p>
        &emsp;&emsp;<b>05º -</b>Determinar: Comprimento e Largura do objeto,
        padrão das Cores e Linhas à serem utilizadas.
      </p>
      <p>
        &emsp;&emsp;&emsp;Não esquecer de enunciar o uso de linhas especiais, se
        o caso for.
      </p>
      <p>
        &emsp;&emsp;<b>07º -</b> Determinar como deverá ser executado o serviço
        em Objeto.
      </p>
      <p>
        &emsp;&emsp;&emsp;Determinar objetivo: em Local, e Material utilizado,
        etc...
      </p>
      <p>
        &emsp;&emsp;&emsp;Determinar material: Caso exista Aplique, Pré-Posto,
        etc...
      </p>
      <p>
        &emsp;&emsp;&emsp;Determinar Caso Bordado, Corte Laser ou Gravação,
        antes ou depois no Objeto.
      </p>
      <p>
        &emsp;&emsp;<b>08º -</b> - Quanto ao Uso de Material.
      </p>
      <p>&emsp;&emsp;&emsp;Especficar material da: Empresa / Cliente.</p>
      <p>
        &emsp;&emsp;&emsp;Especificar que: "Se encontra na Empresa ou Aguarda
        obter".
      </p>
      <p>
        &emsp;&emsp;<b>09º -</b> - Determinar a Data, Período, ou hora para
        entrega.
      </p>
      <p>
        &emsp;&emsp;&emsp;Em caso de "Não" ter o Material, que o mesmo será
        fornecido pelo Cliênte:
      </p>
      <p>
        &emsp;&emsp;&emsp;"NÃO" estabelecer entrega antes de receber o material.
      </p>
      <p>
        &emsp;&emsp;&emsp;Somente após ter em mãos determinar data e período
        para entrega.
      </p>
      <p>
        <b>&emsp;&emsp;10º -</b> Determinar Valores para cada objeto ou item em
        separado.
      </p>
      <p>
        &emsp;&emsp;&emsp;Os "Valores" deverão corresponder conforme Tabela em
        gestão.
      </p>
      <p>
        &emsp;&emsp;&emsp;Desenvolvimento de Arte(Design) se o caso for
        necessário.
      </p>
      <p>
        &emsp;&emsp;&emsp;Serviços de 3ºs, caso exista prestações de serviços
        fora da Empresa.
      </p>
      <p>
        &emsp;&emsp;<b>11º -</b> Quanto a Forma de Pagamento.
      </p>
      <p>
        &emsp;&emsp;&emsp;Valores diferente à tabela de Preço Vigente, devera
        ser alterado no ambito da Administração.
      </p>
      <p>
        &emsp;&emsp;&emsp;A alteração deverá ser executada somente após a O.S.
        passar pelos competentes.
      </p>
      <br />
    </CardModalTexto>
  );
};
