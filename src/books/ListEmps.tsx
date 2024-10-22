export interface IEmps {
  id?: number;
  fant?: string;
  name?: string;
  cnpj?: string;
  inse?: string;
  insm?: string;
  cpf?: string;
  mail?: string;
  idfone?: number;
  fonecel?: string;
  local?: string;
  compl?: string;
  nrlocal?: string;
  cep?: string;
  bairro?: string;
  estado?: string;
  cidade?: string;
  uf?: string;
}

export const ListEmps:IEmps[] = [
  {
    id: 1,
    fant: 'JR-Bordados.',
    name: 'Junior Bordados Ltda.',
    cnpj: '10.157.662/0001-23',
    inse: '063.656.702',
    insm: '',
    cpf: '',
    mail: 'jrbordados@hotmail.com.br',
    idfone: 1,
    local: 'Rua Professor Anacleto',
    compl: 'Casa',
    nrlocal: '576',
    cep: '60450360',
    bairro: 'Parqueândia',
    cidade: 'Fortaleza',
    estado: 'Ceará',
    uf: 'CE'
  },
  {
    id: 2,
    fant: 'RB-Serviços.',
    name: 'Roberta Bastos Ltda.',
    cnpj: '02.494.780/0001-07',
    inse: '',
    insm: '',
    cpf: '',
    mail: 'rbservicos@hotmail.com.br',
    idfone: 2,
    local: 'Rua Professor Anacleto',
    nrlocal: '576',
    compl: 'Casa',
    cep: '60450360',
    bairro: 'Parqueândia',
    cidade: 'Fortaleza',
    estado: 'Ceará',
    uf: 'CE'
  }
];

export const EmpsIndexById = (): { [key: number]:IEmps } => {
  return ListEmps.reduce((acc, lemps) => {
    if (lemps.id !== undefined) {
      acc[lemps.id] = lemps;
    }
    return acc;
  }, {} as { [key: number]:IEmps });
};

export const FindEmpsID = (id: number): Omit<IEmps, 'id'> | undefined => {
  const emp = ListEmps.find(emp => emp.id === id);
  if (emp) {
    const { id, ...rest } = emp;
    return rest;
  }
  return undefined;
};
