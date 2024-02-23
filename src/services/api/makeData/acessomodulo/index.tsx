
// import  compareValue  from 'mini-helper';


export type TypeAcessoModulo = {
  succes: boolean,
  acessos : { 
    id?: number,
    idemp?: number,
    iduser?: number,
    inclusao?: boolean,
    alteracao?: boolean,
    exclusao?: boolean,
    listagem?: boolean,
    visualizar?: boolean
  }
 };
export const data = {
  succes: true,
  acessos: [
    {id: 1, idemp: 1, modulo: 'Recepção', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 2, idemp: 2, modulo: 'Recepção', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 3, idemp: 1, modulo: 'Design', iduser: 1, inclusao: true, alteracao: true, exclusao: true,
    listagem: true, visualizar: true },
    {id: 4, idemp: 2, modulo: 'Design', iduser: 1, inclusao: true, alteracao: true, exclusao: true,
    listagem: true, visualizar: true },
    {id: 5, idemp: 1, modulo: 'Produção', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 6, idemp: 2, modulo: 'Produção', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 7, idemp: 1, modulo: 'Acabamento', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 8, idemp: 2, modulo: 'Acabamento', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 9, idemp: 1, modulo: 'Expedição', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 10, idemp: 2, modulo: 'Expedição', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 11, idemp: 1, modulo: 'Administração', iduser: 1, inclusao: true, alteracao: true,exclusao: true, listagem: true, visualizar: true },
    {id: 12, idemp: 2, modulo: 'Administração', iduser: 1, inclusao: true, alteracao: true,
    exclusao: true, listagem: true, visualizar: true },
    {id: 13, idemp: 1, modulo: 'Master', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 14, idemp: 2, modulo: 'Master', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 15, idemp: 1, modulo: 'Config', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true },
    {id: 16, idemp: 2, modulo: 'Config', iduser: 1, inclusao: true, alteracao: true, exclusao: true, listagem: true, visualizar: true }
  ]
};



// type TypeOptions ={ options?: object}
// export async function getAcessos( {options}:TypeOptions ) {
 
//   type PropsOrdFilt = {
//     order?: string;
//     filter?: string;
//   }
//   const { {order, filter}:PropsOrdFilt = {} } = options; 

//   const result = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve({ data })
//     }, 2000)
//   });

//   const resultData = result && result.data;

//   const { id, idemp, iduser, modulo } = filter;

//   if (id) {
//     resultData.Acessos = resultData.Acessos.filter(p => p.id === id)
//   };

//   if (idemp) {
//     resultData.Acessos = resultData.Acessos.filter(p => p.idemp === idemp)
//   };

//   if (iduser) {
//     resultData.Acessos = resultData.Acessos.filter(p => p.iduser === iduser)
//   };

//   if (modulo) {
//     resultData.Acessos = resultData.Acessos.filter(p => p.modulo === modulo)
//   };


//   if (resultData.Acessos && order) {
//     resultData.Acessos = resultData.Acessos.sort(compareValues(order, 'asc'))
//   };

//   return resultData;
// };

