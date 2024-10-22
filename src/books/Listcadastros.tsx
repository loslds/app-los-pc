export interface ICadastros {
  id?: number;             //id acessos
  idempresas?: number;     //id empresas
  idusuarios?: number;     //id usuarios
  idclientes?: number;     //id clientes
  idfornecedores?: number; //id fornecedores
}

export const ListCadastros: ICadastros[] = [
  {
    id:0,
    idempresas: 0,
    idusuarios: 0,
    idclientes: 0,
    idfornecedores: 0
  }
];

export const CadastrosIndexById = (): { [key: number]: ICadastros } => {
  return ListCadastros.reduce((acc, lcadastros) => {
    if (lcadastros.id !== undefined) {
      acc[lcadastros.id] = lcadastros;
    }
    return acc;
  }, {} as { [key: number]: ICadastros });
};


export const ExistsCadastrosId = (id: number): ICadastros | undefined => {

  return ListCadastros.find((cadastr) => cadastr.id === id);
};

export const GetCadastrosID = (id: number): ICadastros | undefined => {
  const cadastr = ListCadastros.find(lstcadastr => lstcadastr.id === id);
  if (cadastr) {
    const { id, ...rest } = cadastr;
    return rest;
  }
  return undefined;
};


export const GetCadastrosIDEmpresa = (id: number): ICadastros | undefined => {
  const cadastr = ListCadastros.find(lstcadastr => lstcadastr.idempresas === id);
  if (cadastr) {
    
    const { id, ...rest } = cadastr;
    return rest;
  }
  return undefined;
};






