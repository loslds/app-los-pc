interface IConsu {
  id?: number;
  name?: string;
  cpf?: string;
  mail?: string;
  idfone?: number;
  local?: string;
  compl?: string;
  nrlocal?: string;
  cep?: string;
  bairro?: string;
  estado?: string;
  cidade?: string;
  uf?: string;
}

export const ListConsu:IConsu[] = [
  {
    id: 1,
    name: 'João de Deus.',
    cpf: '93195133849',
    mail: 'joaodedeus@gmail.com',
    idfone: 5,
    local: 'Rua Dos Milagres',
    compl: 'Céu',
    nrlocal: 's/n',
    cep: '00000001',
    bairro: 'Nuvem Sagrada',
    estado: 'Morto',
    cidade: 'Céu',
    uf: 'C'
  }
];

export const ConsuIndexById = (): { [key: number]:IConsu } => {
  return ListConsu.reduce((acc, lacoes) => {
    if (lacoes.id !== undefined) {
      acc[lacoes.id] = lacoes;
    }
    return acc;
  }, {} as { [key: number]:IConsu });
};
