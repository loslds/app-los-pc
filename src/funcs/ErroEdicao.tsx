import { useState } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export function ErroEdicao(nrerro: number) {
  const [isrtn, setIsRtn] = useState(true);
  //let rtn = true;
  if (nrerro == 1) {
    alert('Determine edição do Email...');
    setIsRtn(false);
  }
  if (nrerro == 2) {
    return alert('Determine edição do PassWord...');
    setIsRtn(false);
  }
  return isrtn;
}
///////////////////////////////////////////////////////
// Função para validar email
export function isValidarEmail(email: string): boolean {
  const normalizedEmail = email.toLowerCase();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return false;
  }
  return true;
}

// Função para normalizar (mascarar) email
export function MasckedEmail(email: string): string {
  const normalizedEmail = email.toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    console.log('emailRegex : ', 'falso');
    return 'Email incompatível.';
  }

  return normalizedEmail;
}
/////////////////////////////////////////////////////
/// validar telefone fixo
export function isFoneFxValid(fonefx: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fonefx.replace(/\D/g, '');
  const fonefxRegex = /^(\d{2})(\d{4})(\d{4})$/;

  if (!fonefxRegex.test(cleaned)) {
    return false;
  }
  return true;
}

/// mascarar telefone fixo
export function MasckedFoneFx(fonefx: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = fonefx.replace(/\D/g, '');
  const fonefxRegex = /^(\d{2})(\d{4})(\d{4})$/;

  if (!fonefxRegex.test(cleaned)) {
    return 'Número Telefone incompatível.';
  }
  // Aplica a máscara
  const masked = cleaned.replace(fonefxRegex, '($1) $2-$3');
  return masked;
}
//////////////////////////////////////////////////////////

// validar telefone Celular
export function isFoneCValid(fonec: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fonec.replace(/\D/g, '');
  const fonecRegex = /^(\d{2})(\d{5})(\d{4})$/;
  return fonecRegex.test(cleaned);
}

// mascarar telefone Celular
export function MasckedFoneC(fonec: string): string {
  const cleaned = fonec.replace(/\D/g, '');
  const fonecRegex = /^(\d{2})(\d{5})(\d{4})$/;
  return cleaned.replace(fonecRegex, '($1) $2-$3');
}
////////////////////////////////////////////////////////////
// validar telefone WhatsApp
export function isFoneZValid(fonez: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fonez.replace(/\D/g, '');
  const fonezRegex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
  return fonezRegex.test(cleaned);
}

// mascarar telefone Celular
export function MasckedFoneZ(fonez: string): string {
  const cleaned = fonez.replace(/\D/g, '');
  const fonezRegex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;
  return cleaned.replace(fonezRegex, '+$1 ($2) $3-$4');
}
////////////////////////////////////////////////////////////
// reconhecimento do google existencia do telefones

export function isTelelefoneZValid(fonez: string): boolean {
  const phoneNumber = parsePhoneNumberFromString(fonez);
  return phoneNumber?.isValid() ?? false;
}

// função para Validar DDI conforme suas Regiões
// obs: a string do telefone devera vir com as mascaras DDI:
// (+**?***?)
// export function extrairDDI(fonez: string): string | null {
//   // Expressão regular para capturar o DDI do formato (+DDI)
//   const ddiRegex = /^\(\+(\d{1,3})\)/;

//   // Executa a expressão regular na string formatada
//   const matches = fonez.match(ddiRegex);

//   // Se houver correspondência, retorna o DDI; caso contrário, retorna null
//   return matches ? matches[1] : null;
// }

// export function isDDIValid(fone:string):boolean => {

//   let ddi = extrairDDI(fone);
//   if (ddi === null){
//     return false;
//   }

// // Remove todos os caracteres não numéricos
// const cleaned = fone.replace(/\D/g, '');

// if(cleaned !) {
//   case
// }

//};

////////////////////////////////////////////////////////////
// testa se foi editado somente numeros
export function isNumber(str: string): boolean {
  const strRegex = /^[0-9]+$/; // Apenas números
  return strRegex.test(str);
}

/////////////////////////////////////////////////////////////
// validar Documento CPF
export function isCpfValid(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpfRegex.test(cleaned);
}

// se Numero cpf existe conforme verificador
export function isExistsCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');
  if (cleaned.length !== 11) return false;
  let sum = 0;
  let remainder;
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(9, 10))) return false;
  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(10, 11))) return false;
  return true;
}

// Mascarar Documento CPF
export function MasckedCpf(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, '');
  return cleaned.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
}

/////////////////////////////////////////////////////////////////

/**
 * Função para validar e mascarar um número de celular.
 * @param phone - O número de celular como string.
 * @returns A string mascarada se válida, caso contrário uma mensagem de erro.
 */
export function maskFoneCNumber(phone: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = phone.replace(/\D/g, '');
  // Expressão regular para verificar se o número tem 11 dígitos
  const phoneRegex = /^(\d{2})(\d{5})(\d{4})$/;
  if (!phoneRegex.test(cleaned)) {
    return 'Número de celular inválido';
  }

  // Aplica a máscara
  const masked = cleaned.replace(phoneRegex, '($1) $2-$3');
  return masked;
}

/**
 * Função para validar e mascarar um número de CPF.
 * @param cpf - O número de CPF como string.
 * @returns A string mascarada se válida, caso contrário uma mensagem de erro.
 */
export function maskCPF(cpf: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = cpf.replace(/\D/g, '');

  // Expressão regular para verificar se o CPF tem 11 dígitos
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  if (!cpfRegex.test(cleaned)) {
    return 'Número de CPF inválido.';
  }

  // Aplica a máscara
  const masked = cleaned.replace(cpfRegex, '$1.$2.$3-$4');
  return masked;
}

// export function maskAndValidateCPF(cpf: string): string {
//   if (!isCpfValid(cpf)) {
//     return 'Número de CPF inválido.';
//   } else {
//     const cleaned = cpf.replace(/\D/g, '');
//     // Expressão regular para verificar se o CPF tem 11 dígitos
//     const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
//     if (cpfRegex.test(cleaned)) {
//       const masked = cleaned.replace(cpfRegex, '$1.$2.$3-$4');
//       return masked;
//     } else {
//       return 'Edição CPF inconpatível.';
//     }
//   }
// }
