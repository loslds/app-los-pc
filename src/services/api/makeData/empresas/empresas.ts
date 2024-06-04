
export type TypeEmpresas = {
  succes: boolean;
  empresas: [{id?: number; fant?: string; name?: string; cnpj?: string; inse?: string; insm?: string; cpf?: string; mail?: string; fonefx?: string; fonecel?: string; local?: string; compl?: string; nrlocal?: number; cep?: string; bairro?: string; cidade?: string; uf?: string;}
  ] 
};

export type TypeEmpresasOrderFilter = {
  order?: string;
  filter?: string;
  opcoes?: string;
};

export type TypeEmpresasFilter ={
  empresaId?: number;
  empresaNm?: string;
  empresaFant?: string;
  empresaFoneF?: string;
  empresaFoneC?: string;
};
