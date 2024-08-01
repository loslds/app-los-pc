//import  from "react";
import React from 'react';

import { useNavigate } from 'react-router-dom';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../../contexts/login/ContextAcesso.tsx';

type TypeCardSwitHelpResgate = {
  nmpnl?: string;
  nmlst?: string;
  sinal?: boolean;
  //  children?: ReactNode | JSX.Element;
};
export const CardSwitHelpResgate = ({
  nmpnl,
  nmlst,
  sinal
}: TypeCardSwitHelpResgate) => {
  const { state, dispatch } = AcessoUseForm();

  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [txtaga, setTxtAga] = React.useState('');
  const [txtlabel, setTxtLabel] = React.useState('');
  const [txtp, setTxtP] = React.useState('');

  
    if (nmpg === 'CONEXÃO') {
      switch (nmpnl) {
        case 'Acessos':
          if (sinal) {
            setTxtAga('"SUCESSO" ao acessar DATA ACESSOS.');
            setTxtLabel('Encontrado DATA ou DADOS Acessos.');
            setTxtP('Foi verificado e encontrado Dados dos Acessos.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA ACESSOS.');
            setTxtLabel('Não foi encontrado DATA ou DADOS de Acessos.');
            setTxtP(
              'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
            );
          }
          break;
        case 'Usuarios':
          if (sinal) {
            setTxtAga('"SUCESSO" ao acessar DATA USUÁRIOS');
            setTxtLabel('Encontrado DATA ou DADOS Usuários.');
            setTxtP('Foi verificado e encontrado Dados dos Usuários.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA USUÁRIOS');
            setTxtLabel('Não foi encontrado DATA ou DADOS de Usuários.');
            setTxtP(
              'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
            );
          }
          break;
        case 'Telefones':
          if (sinal) {
            setTxtAga('"SUCESSO" ao acessar DATA TELEFONES');
            setTxtLabel('Encontrado DATA ou DADOS Telefones.');
            setTxtP('Foi verificado e encontrado Dados dos Telefones.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA TELEFONES');
            setTxtLabel('Não foi encontrado DATA ou DADOS de Telefones.');
            setTxtP(
              'Verifique se existe o Banco de Dados, ou se existir, não contem registro ou esta corrompido.'
            );
          }
          break;
        case 'Empresas':
          if (sinal) {
            setTxtAga('"SUCESSO" ao acessar DATA EMPRESAS');
            setTxtLabel('Encontrado DATA ou DADOS Empresas.');
            setTxtP('Foi verificado e encontrado Dados dos Empresas.');
          } else {
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
    } else if (nmpg === 'DOWNLOAD') {
      switch (nmpnl) {
        case 'Acessos':
          if (sinal) {
            setTxtAga('"SUCESSO" com download DATA ACESSOS.');
            setTxtLabel('Download DATA ou DADOS Acessos.');
            setTxtP('Download executado em Datas do Acessos.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA ACESSOS.');
            setTxtLabel('Não encontrado INFORMAÇÕES em Acessos.');
            setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
          }
          break;
        case 'Usuarios':
          if (sinal) {
            setTxtAga('"SUCESSO" com download DATA USUÁRIOS.');
            setTxtLabel('Download DATA ou DADOS Usuários.');
            setTxtP('Download executado em Datas do Usuários.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA USUÁRIOS');
            setTxtLabel('Não encontrado INFORMAÇÕES em Usuários.');
            setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
          }
          break;
        case 'Telefones':
          if (sinal) {
            setTxtAga('"SUCESSO" com download DATA TELEFONES.');
            setTxtLabel('Download DATA ou DADOS Telefones.');
            setTxtP('Download executado em Datas do Telefones.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA TELEFONES');
            setTxtLabel('Não encontrado INFORMAÇÕES em Telefones.');
            setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
          }
          break;
        case 'Empresas':
          if (sinal) {
            setTxtAga('"SUCESSO" com download DATA EMPRESAS.');
            setTxtLabel('Download DATA ou DADOS Empresas.');
            setTxtP('Download executado em Datas do Empresas.');
          } else {
            setTxtAga('"ERRO" ao acessar DATA EMPRESAS');
            setTxtLabel('Não encontrado INFORMAÇÕES em Empresas.');
            setTxtP('Informações solicitadas inexistênte em Banco de Dados.');
          }
          break;
        default:
          break;
      }
    } 
  }

  return <> {children}</>;
};
