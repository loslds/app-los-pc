export interface IAcessos {
  id?: number;              //id acessoa
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
  incluir?: boolean;
  alterar?: boolean;
  excluir?: boolean;
  listar?: boolean;
  visualizar?: boolean;
}

export const ListAcessos: IAcessos[] = [
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
    visualizar: true
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
    visualizar: true
  }
];

export const AcessosIndexById = (): { [key: number]: IAcessos } => {
  return ListAcessos.reduce((acc, lacessos) => {
    if (lacessos.id !== undefined) {
      acc[lacessos.id] = lacessos;
    }
    return acc;
  }, {} as { [key: number]: IAcessos });
};

export const GetFilterAcessoId = (id: number): IAcessos | undefined => {

  return ListAcessos.find((acess) => acess.id === id);
};

export const FindAcessoID = (id: number): IAcessos | undefined => {
  const acess = ListAcessos.find(acess => acess.id === id);
  if (acess) {
    const { id, ...rest } = acess;
    return rest;
  }
  return undefined;
};