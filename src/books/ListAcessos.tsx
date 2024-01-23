export type Acessos = {
  id?: number;
  idemp?: number;
  iduser?: number;
  inclusao?: boolean;
  alteracao?: boolean;
  exclusao?: boolean;
  listagem?: boolean;
}

export const ListAcessos = [
  { id: '1', idemp: '1', modulo: 'RECEPÇÃO' , iduser: 1, inclusao: true, alteracao: true,  exclusao: true,listagem: true },
  { id: '2', idemp: '2', modulo: 'RECEPÇÃO' , iduser: 1, inclusao: true, alteracao: true,  exclusao: true,listagem: true },
  { id: '3', idemp: '1', modulo: 'RECEPÇÃO' , iduser: 2, inclusao: true, alteracao: true,  exclusao: true,listagem: true },
  { id: '4', idemp: '2', modulo: 'RECEPÇÃO' , iduser: 2, inclusao: true, alteracao: true,  exclusao: true,listagem: true },



  { id: '2',  name: 'ALTERAÇÃO'  },
  { id: '3',  name: 'Produção.' },
  { id: '4',  name: 'Acabamento.'  },
  { id: '5',  name: 'Expedição.' },
  { id: '6',  name: 'Administração.'  },
  { id: '7',  name: 'Master.' },
  { id: '8',  name: 'Config.'  }
];
