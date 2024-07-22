import { useState } from 'react';

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

  if (!fonecRegex.test(cleaned)) {
    return false;
  }

  return true;
}

// mascarar telefone Celular
export function MasckedFoneC(fonec: string): string {
  // Remove todos os caracteres não numéricos
  const cleaned = fonec.replace(/\D/g, '');

  const fonecRegex = /^(\d{2})(\d{5})(\d{4})$/;

  if (!fonecRegex.test(cleaned)) {
    return 'Número Celular incompatível.';
  }
  // Aplica a máscara
  const masked = cleaned.replace(fonecRegex, '($1) $2-$3');
  return masked;
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
  // Remove todos os caracteres não numéricos
  const cleaned = cpf.replace(/\D/g, '');

  // Expressão regular para verificar se o CPF tem 11 dígitos
  const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;

  return cpfRegex.test(cleaned);
}

// se Numero cpd existe conforme verificador
export function isExistsCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, '');

  if (cleaned.length !== 11) return false;

  let sum = 0;
  let remainder;

  // Validação do primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(9, 10))) return false;

  sum = 0;
  // Validação do segundo dígito verificador
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

  if (!isCpfValid(cleaned)) {
    return 'Número CPF inválido.';
  }

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
