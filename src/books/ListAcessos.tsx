interface TypeAcessos {
  id?: number;
  idemp?: number;
  iduser?: number;
  mdrecep?: boolean;
  nmrecep?: string;
  mddesig?: boolean;
  nmdesig?: string;
  mdprodu?: boolean;
  nmprodu?: string;
  mdacaba?: boolean;
  nmacaba?: string;
  mdexped?: boolean;
  nmexped?: string;
  mdadmin?: boolean;
  nmadmin?: string;
  mdmaster?: boolean;
  nmmaster?: string;
  mdconfig?: boolean;
  nmconfig?: string;  
  inclusao?: boolean;
  alteracao?: boolean;
  exclusao?: boolean;
  listagem?: boolean;
  visualizar?: boolean;
};

export const ListAcessos: TypeAcessos[] = [
  {
    id: 1,
    idemp: 1,
    iduser: 1,
    mdrecep: true,
    nmrecep: 'Recepção',
    mddesig: true,
    nmdesig: 'Design',
    mdprodu: true,
    nmprodu: 'Produção',
    mdacaba: true,
    nmacaba: 'Acabamento',
    mdexped: true,
    nmexped: 'Expedição',
    mdadmin: true,
    nmadmin: 'Administração',
    mdmaster: true,
    nmmaster: 'Master',
    mdconfig: true,
    nmconfig: 'Config',
    inclusao: true,
    alteracao: true,
    exclusao: true,
    listagem: true,
    visualizar: true,
  },
  {
    id: 2,
    idemp: 1,
    iduser: 1,
    mdrecep: true,
    nmrecep: 'Recepção',
    mddesig: true,
    nmdesig: 'Design',
    mdprodu: true,
    nmprodu: 'Produção',
    mdacaba: true,
    nmacaba: 'Acabamento',
    mdexped: true,
    nmexped: 'Expedição',
    mdadmin: true,
    nmadmin: 'Administração',
    mdmaster: true,
    nmmaster: 'Master',
    mdconfig: true,
    nmconfig: 'Config',
    inclusao: true,
    alteracao: true,
    exclusao: true,
    listagem: true,
    visualizar: true,
  } 
];
