import { wait } from '../../../helpers/index.ts';
import { compareValues } from '../../../helpers/array.ts';

import { fatoryData } from '../makerData/Factorys.tsx'; // Verifique o caminho correto

import type { IResponseFactoryList, IResponseFactory, FactoryFilter, FactoryOrder } from './factory.dto.ts';

export async function GetFactorys(
  { id }: FactoryFilter = {},
  { order = 'asc', orderBy = 'id' }: FactoryOrder = {}
): Promise<IResponseFactoryList> {
  let filteredFactorys = [...fatoryData.factorys]; // Cria uma cópia para não modificar o original

  if (id) {
    filteredFactorys = filteredFactorys.filter(f => f.id === id);
  }

  filteredFactorys.sort(compareValues(orderBy, order));

  await wait(200); // Simula uma operação assíncrona
  return { success: true, factorys: filteredFactorys };
}

export async function GetFactory(id: number): Promise<IResponseFactory> {
  const found = fatoryData.factorys.find(f => f.id === id);
  await wait(800); // Simula uma operação assíncrona
  return { success: !!found, factory: found };
}

export async function getFilterFactors(
  //{ id, fant, cnpj, cpf, mail, fonecel }: FactoryFilter = {},

  // FactoryFilter esta Omitindo os campos que voce declarou
  filtro: FactoryFilter = {},
  
  { order = 'asc', orderBy = 'id' }: FactoryOrder = {}
): Promise<IResponseFactoryList> {
  let filteredFactorys = [...fatoryData.factorys]; // Cria uma cópia para não modificar o original

  const { id, fant, cnpj, cpf, mail, fonecel } = filtro;

  if (id !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.id === id);
  }
  if (fant !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.fant === fant);
  }
  if (cnpj !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.cnpj === cnpj);
  }
  if (cpf !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.cpf === cpf);
  }
  if (mail !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.mail === mail);
  }
  if (fonecel !== undefined) {
    filteredFactorys = filteredFactorys.filter(f => f.fonecel === fonecel);
  }

  filteredFactorys.sort(compareValues(orderBy, order));

  await wait(200); // Simula uma operação assíncrona
  
  console.log('filteredFactorys : ', filteredFactorys); // Debug para verificar os resultados
  
  return { success: true, factorys: filteredFactorys };
}


// import { wait } from '../../../helpers/index.ts';
// import { compareValues } from '../../../helpers/array.ts';

// import { fatoryData } from '../makerData/Factorys.tsx'; // Verifique o caminho correto

// import type { IResponseFactoryList, IResponseFactory, FactoryFilter, FactoryOrder } from './factory.dto.ts';

// export async function GetFactorys(
//   { id }: FactoryFilter = {},
//   { order = 'asc', orderBy = 'id' }: FactoryOrder = {}
// ): Promise<IResponseFactoryList> {
//   let filteredFactorys = [...fatoryData.factorys]; // Cria uma cópia para não modificar o original

//   if (id) {
//     filteredFactorys = filteredFactorys.filter(f => f.id === id);
//   }

//   filteredFactorys.sort(compareValues(orderBy, order));

//   await wait(200); // Simula uma operação assíncrona
//   return { success: true, factorys: filteredFactorys };
// }

// export async function GetFactory(id: number): Promise<IResponseFactory> {
//   const found = fatoryData.factorys.find(f => f.id === id);
//   await wait(800); // Simula uma operação assíncrona
//   return { success: !!found, factory: found };
// }

// export async function getFilterFactors(
//   { id, fant, cnpj, cpf, mail, fonecel }: FactoryFilter = {},
//   { order = 'asc', orderBy = 'id' }: FactoryOrder = {}
// ): Promise<IResponseFactoryList> {
//   let filteredFactorys = [...fatoryData.factorys]; // Cria uma cópia para não modificar o original

//   if (id) {
//     filteredFactorys = filteredFactorys.filter(f => f.id === id);
//   }
//   if (fant) {
//     filteredFactorys = filteredFactorys.filter(f => f.fant === fant);
//   }
//   if (cnpj) {
//     filteredFactorys = filteredFactorys.filter(f => f.cnpj === cnpj);
//   }
//   if (cpf) {
//     filteredFactorys = filteredFactorys.filter(f => f.cpf === cpf);
//   }
//   if (mail) {
//     filteredFactorys = filteredFactorys.filter(f => f.mail === mail);
//   }
//   if (fonecel) {
//     filteredFactorys = filteredFactorys.filter(f => f.fonecel === fonecel);
//   }

//   filteredFactorys.sort(compareValues(orderBy, order));

//   await wait(200); // Simula uma operação assíncrona
  
//   console.log('filteredFactorys : ', filteredFactorys); // Debug para verificar os resultados
//   return { success: true, factorys: filteredFactorys };
// }
