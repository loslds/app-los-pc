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
///////////////////////////////////////////////////////////////////////////////
// Validar telefone 0800
export function isFone0800Valid(fone0800: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fone0800.replace(/\D/g, '');
  // Expressão regular para telefone 0800 no formato 0800-XXXXXXX
  const fone0800Regex = /^0800\d{7}$/;

  // Verifica se o número segue o formato 0800XXXXXXXX
  return fone0800Regex.test(cleaned);
}

// Mascarar telefone 0800
export function MasckedFone0800(fone0800: string): string {
  const cleaned = fone0800.replace(/\D/g, '');
  const fone0800Regex = /^(0800)(\d{3})(\d{4})$/;

  if (!fone0800Regex.test(cleaned)) {
    return 'Número 0800 incompatível.';
  }

  // Aplica a máscara 0800-XXX-XXXX
  return cleaned.replace(fone0800Regex, '$1-$2-$3');
}

// Validar telefone fixo
export function isFoneFxValid(fonefx: string): boolean {
  // Remove todos os caracteres não numéricos
  const cleaned = fonefx.replace(/\D/g, '');
  // Expressão regular para telefone fixo no formato (XX) XXXX-XXXX
  const fonefxRegex = /^\d{10}$/;

  // Verifica se o número tem exatamente 10 dígitos
  return fonefxRegex.test(cleaned);
}

// Mascarar telefone fixo
export function MasckedFoneFx(fonefx: string): string {
  const cleaned = fonefx.replace(/\D/g, '');
  const fonefxRegex = /^(\d{2})(\d{4})(\d{4})$/;

  if (!fonefxRegex.test(cleaned)) {
    return 'Número de Telefone incompatível.';
  }

  // Aplica a máscara (XX) XXXX-XXXX
  return cleaned.replace(fonefxRegex, '($1) $2-$3');
}

// Validar telefone celular
export function isFoneCValid(fonec: string): boolean {
  const cleaned = fonec.replace(/\D/g, '');
  // Expressão regular para telefone celular no formato (XX) XXXXX-XXXX
  const fonecRegex = /^\d{11}$/;

  // Verifica se o número tem exatamente 11 dígitos
  return fonecRegex.test(cleaned);
}

// Mascarar telefone celular
export function MasckedFoneC(fonec: string): string {
  const cleaned = fonec.replace(/\D/g, '');
  const fonecRegex = /^(\d{2})(\d{5})(\d{4})$/;

  if (!fonecRegex.test(cleaned)) {
    return 'Número de Celular incompatível.';
  }

  // Aplica a máscara (XX) XXXXX-XXXX
  return cleaned.replace(fonecRegex, '($1) $2-$3');
}

// Validar telefone WhatsApp
export function isFoneZValid(fonez: string): boolean {
  const cleaned = fonez.replace(/\D/g, '');
  // Expressão regular para WhatsApp no formato DDI + DDD + Número (XX) XXXXX-XXXX
  const fonezRegex = /^\d{13}$/;

  // Verifica se o número tem exatamente 13 dígitos
  return fonezRegex.test(cleaned);
}

// Mascarar telefone WhatsApp
export function MasckedFoneZ(fonez: string): string {
  const cleaned = fonez.replace(/\D/g, '');
  const fonezRegex = /^(\d{2})(\d{2})(\d{5})(\d{4})$/;

  if (!fonezRegex.test(cleaned)) {
    return 'Número de WhatsApp incompatível.';
  }

  // Aplica a máscara +XX (XX) XXXXX-XXXX
  return cleaned.replace(fonezRegex, '+$1 ($2) $3-$4');
}

// Reconhece através do Google a validação de telefones
// (usando a biblioteca "libphonenumber-js")
// A função isTelefoneValid usa a biblioteca libphonenumber-js para validar
// qualquer número de telefone no formato internacional.
export function isTelefoneValid(fone: string): boolean {
  const phoneNumber = parsePhoneNumberFromString(fone);
  return phoneNumber?.isValid() ?? false;
}

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
