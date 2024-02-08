
import React from 'react';

import * as MD from '../Modal/styles';

import CardModalTexto from '../Modal/CardModalTexto';


// export function VerNumero(n : number ) {
//   let nn = n;
//   return nn;
// };

// export function VerBolleans( b : boolean ) {
//   if (b){return 'VERDADEIRO'}
//   return 'FALSO';
// };

// export function VerStrings(s : string ) {
//   if (s.length === 0){return 'VASIO'}
//   return s;
// };

// export function VerNumbers(n : number ) {
//   return n;
// };

type PropsVarInfo = {
  nidempresa?: number;
  sfantempresa?: string;
  nmdlogin?: number;
  snmlogin?: string;
  sstrid?: string;
  sstrpsw?: string;
  blogado?: boolean;
  bsolicitar?: boolean;
  bresgatar?: boolean;
  benviar?: boolean;
  bopcao?: boolean;
};

export const CardInfoLogin = ({nidempresa, sfantempresa, nmdlogin, snmlogin, sstrid, sstrpsw, blogado, bsolicitar, bresgatar, benviar, bopcao} : PropsVarInfo) => {


  const [strsolicita, setStrSolicita] = React.useState('FALSE');
  const [strresgata, setStrResg] = React.useState('FALSE');
  const [strenvia, setStrEnvia] = React.useState('FALSE');
  const [stropcao, setStrOpcao] = React.useState('FALSE');
  const [strlogado, setStrLogado] = React.useState('FALSE');
  
  React.useEffect(() => {

    if (bsolicitar) { setStrSolicita('VERDADEIRO')};
    if (bresgatar) { setStrResg('VERDADEIRO')};
    if (benviar) { setStrEnvia('VERDADEIRO')};
    if (bopcao) { setStrOpcao('VERDADEIRO')};
    if (blogado) { setStrLogado('VERDADEIRO')};
    
  }, [bsolicitar,bresgatar,benviar,bopcao]);

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>

        <h4>Informações do Ambiente Login.</h4>
        <p>Acesso logado.. : {strlogado}</p>
        <p>idempresa...... : {nidempresa}</p>
        <p>fantempresa.... : {sfantempresa}</p>
        <p>Nmlogin........ : {snmlogin}</p>
        <p>E-Mail......... : {sstrid}</p>
        <p>PassW.......... : {sstrpsw}</p>
        <p>Pin............ : {sstrpsw}</p>
        <p>Apelido........ : {sstrid}</p>
        <p>Solicitar...... : {strsolicita}</p>
        <p>Enviar......... : {strenvia}</p>}
        <p>Opção.......... : {stropcao}</p>
        <p>Resgatar....... : {strresgata}</p>
        <p>Nr.Celular..... : {sstrid}</p>
        <p>Cod.Seguro..... : {sstrid}</p>
        <p>Cadastro....... : {sstrid}</p>
        <p>Enviar......... : {strenvia}</p>    
        <p>Cod.p/ E-Mail.. : {sstrid}</p>
        <p>Cod.p/ Celular. : {sstrid}</p>
        <p>Cod.Link....... : {sstrid}</p>
        <p>Cadastro....... : {sstrid}</p>

        <p>currentstep : {state.currentstep}</p>
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};
