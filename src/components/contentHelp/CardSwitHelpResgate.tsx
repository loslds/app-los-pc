//import  from "react";
import React from 'react';

import { PageModal } from '../Modal/PageModal.tsx';
import close from '../../assets/svgs/close.svg';

import { CardImgMsgSwuit } from './CardImgMsgSwuit.tsx';
import resgatar0 from '../../assets/svgs/resgatar0.svg';
import resgatar3 from '../../assets/svgs/resgatar3.svg';

type TypeCardSwitHelpResgate = {
  painel?: string;
  lista?: string;
  sinal?: boolean;
};
export const CardSwitHelpResgate = ({
  painel,
  lista,
  sinal
}: TypeCardSwitHelpResgate) => {
  const [iserromsg, setIsErroMsg] = React.useState(false);
  const [titulohlp, setTituloHlp] = React.useState('');
  const [corimg, setCorImg] = React.useState('');
  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  if (painel === 'Conexao') {
    setIsErroMsg(true);
    switch (lista) {
      case 'LstAcessos':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Data Acesso');
          setTxtAga('"SUCESSO" ao acessar DATA ACESSOS.');
          setTxtLabel('Encontrado DATA ou DADOS Acessos.');
          setTxtP('Foi verificado e encontrado Dados dos Acessos.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Data Acesso');
          setTxtAga('"ERRO" ao acessar DATA ACESSOS.');
          setTxtLabel('Não foi encontrado DATA ou DADOS de Acessos.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        break;
      case 'LstUsers':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Data Usuários');
          setTxtAga('"SUCESSO" ao acessar DATA USUÁRIOS');
          setTxtLabel('Encontrado DATA ou DADOS Usuários.');
          setTxtP('Foi verificado e encontrado Dados dos Usuários.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Data Usuários');
          setTxtAga('"ERRO" ao acessar DATA USUÁRIOS');
          setTxtLabel('Não foi encontrado DATA ou DADOS de Usuários.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        break;
      case 'LstFones':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Data Telefones');
          setTxtAga('"SUCESSO" ao acessar DATA TELEFONES');
          setTxtLabel('Encontrado DATA ou DADOS Telefones.');
          setTxtP('Foi verificado e encontrado Dados dos Telefones.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Data Telefones');
          setTxtAga('"ERRO" ao acessar DATA TELEFONES');
          setTxtLabel('Não foi encontrado DATA ou DADOS de Telefones.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        break;
      case 'LstEmps':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Data Empresa');
          setTxtAga('"SUCESSO" ao acessar DATA EMPRESAS');
          setTxtLabel('Encontrado DATA ou DADOS Empresas.');
          setTxtP('Foi verificado e encontrado Dados dos Empresas.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Data Empresa');
          setTxtAga('"ERRO" ao acessar DATA EMPRESAS');
          setTxtLabel('Não foi encontrado DATA ou DADOS Empresas.');
          setTxtP(
            'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
          );
        }
        break;
      default:
        break;
    }
  } else if (painel === 'Download') {
    setIsErroMsg(true);
    switch (lista) {
      case 'LstAcessos':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Download Acessos');
          setTxtAga('"SUCESSO" do recebimento de Dados de ACESSOS.');
          setTxtLabel('Recepção de DADOS efetivados com sucesso.');
          setTxtP('Os DADOS foram recebidos conforme Datas do Acessos.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Download Acessos');
          setTxtAga('"ERRO" ao tentar acessar DATA ACESSOS.');
          setTxtLabel('Não encontrado INFORMAÇÕES em Acessos.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstUsers':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Download Usuários');
          setTxtAga('"SUCESSO" do recebimento de Dados de USUÁRIOS.');
          setTxtLabel('Recepção de DADOS efetivados com sucesso.');
          setTxtP('Os DADOS foram recebidos conforme Datas do Usuários.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Download Usuários');
          setTxtAga('"ERRO" ao tentar acessar DATA USUÁRIOS');
          setTxtLabel('Não encontrado INFORMAÇÕES em Usuários.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstFones':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Download Telefones');
          setTxtAga('"SUCESSO" do recebimento de Dados de TELEFONES.');
          setTxtLabel('Recepção de DADOS efetivados com sucesso.');
          setTxtP('Os DADOS foram recebidos conforme Datas do Telefones.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Download Telefones');
          setTxtAga('"ERRO" ao tentar acessar DATA TELEFONES');
          setTxtLabel('Não encontrado INFORMAÇÕES em Telefones.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstEmps':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Download Empresas');
          setTxtAga('"SUCESSO" do recebimento de Dados de EMPRESAS.');
          setTxtLabel('Recepção de DADOS efetivados com sucesso.');
          setTxtP('Os DADOS foram recebidos conforme Datas do Empresas.');
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Download Empresas');
          setTxtAga('"ERRO" ao tentar acessar DATA EMPRESAS');
          setTxtLabel('Não encontrado INFORMAÇÕES em Empresas.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      default:
        break;
    }
  } else if (painel === 'Up-Date') {
    setIsErroMsg(true);
    switch (lista) {
      case 'LstAcessos':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Up-Date Acessos');
          setTxtAga('"SUCESSO" com Transferência DATA ACESSOS.');
          setTxtLabel('Transferência efetivado com sucesso.');
          setTxtP(
            'Os DADOS foram repassados conforme Informação solicitada em Acessos.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Up-Date Acessos');
          setTxtAga('"ERRO" na Transferência DATA ACESSOS.');
          setTxtLabel('Não foi possível fazer a Transferência em Acessos.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstUsers':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Up-Date Usuários');
          setTxtAga('"SUCESSO" com Transferência Dados USUÁRIOS.');
          setTxtLabel('Transferência efetivado com sucesso.');
          setTxtP(
            'Os DADOS foram repassados conforme Informação solicitada em Usuários.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Up-Date Usuários');
          setTxtAga('"ERRO" na Transferência DATA USUÁRIOS');
          setTxtLabel('Não foi possível fazer a Transferência em Usuários.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstFones':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Up-Date Telefones');
          setTxtAga('"SUCESSO" com Transferência Dados TELEFONES.');
          setTxtLabel('Transferência efetivado com sucesso.');
          setTxtP(
            'Os DADOS foram repassados conforme Informação solicitada em Telefones.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Up-Date Telefones');
          setTxtAga('"ERRO" na Transferência DATA TELEFONES');
          setTxtLabel('Não foi possível fazer a Transferência em Telefones.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      case 'LstEmps':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Up-Date Empresas');
          setTxtAga('"SUCESSO" com Transferência Dados EMPRESAS.');
          setTxtLabel('Transferência efetivado com sucesso.');
          setTxtP(
            'Os DADOS foram repassados conforme Informação solicitada em Empresas.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Up-Date Empresas');
          setTxtAga('"ERRO" na Transferência DATA EMPRESAS');
          setTxtLabel('Não foi possível fazer a Transferência em Empresas.');
          setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
        }
        break;
      default:
        break;
    }
  } else if (painel === 'Verify') {
    setIsErroMsg(true);
    switch (lista) {
      case 'LstAcessos':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Verificação Usuários');
          setTxtAga('"SUCESSO" na Comparação de Imformação.');
          setTxtLabel('Verificação dos Dados Acessos.');
          setTxtP(
            'Verificação executada com sucesso das informações em Acessos.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Verificação Acessos');
          setTxtAga('"ERRO" da Comparação de Informações.');
          setTxtLabel('Verificação "NÃO" conclusivas em Acessos.');
          setTxtP(
            'Informações solicitadas inexistênte ou não confirmadas dos Dados.'
          );
        }
        break;
      case 'LstUsers':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Verificação Usuários');
          setTxtAga('"SUCESSO" na Comparação de Imformação.');
          setTxtLabel('Verificação dos Dados Usuários.');
          setTxtP(
            'Verificação executada com sucesso das informações Usuários.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Verificação Usuários');
          setTxtAga('"ERRO" da Comparação de Informações.');
          setTxtLabel('Verificação "NÃO" conclusivas em Usuários.');
          setTxtP(
            'Informações solicitadas inexistênte ou não confirmadas dos Dados.'
          );
        }
        break;
      case 'LstFones':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Verificação Telefones');
          setTxtAga('"SUCESSO" na Comparação de Imformação.');
          setTxtLabel('Verificação dos Dados Telefones.');
          setTxtP(
            'Verificação executada com sucesso das informações Telefones.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Verificação Telefones');
          setTxtAga('"ERRO" da Comparação de Informações.');
          setTxtLabel('Verificação "NÃO" conclusivas em Telefones.');
          setTxtP(
            'Informações solicitadas inexistênte ou não confirmadas dos Dados.'
          );
        }
        break;
      case 'LstEmps':
        if (sinal) {
          setCorImg(resgatar3);
          setTituloHlp('"SUCESSO" Verificação Empresas');
          setTxtAga('"SUCESSO" na Comparação de Imformação.');
          setTxtLabel('Verificação dos Dados Empresas.');
          setTxtP(
            'Verificação executada com sucesso das informações em Empresas.'
          );
        } else {
          setCorImg(resgatar0);
          setTituloHlp('"ERRO" Verificação Empresas');
          setTxtAga('"ERRO" da Comparação de Informações.');
          setTxtLabel('Verificação "NÃO" conclusivas em Empresas.');
          setTxtP(
            'Informações solicitadas inexistênte ou não confirmadas dos Dados.'
          );
        }
        break;
      default:
        break;
    }
  }

  return (
    <div>
      {iserromsg ? (
        <PageModal
          ptop={'1%'}
          pwidth={'30%'}
          pheight={'50%'}
          titulo={titulohlp}
          imgbm={close}
          titbm={'Fechar...'}
          onclose={() => setIsErroMsg(false)}
        >
          <CardImgMsgSwuit
            img={corimg}
            txtaga={txtaga}
            txtlabel={txtlabel}
            txtp={txtp}
          />
        </PageModal>
      ) : null}
    </div>
  );
};
