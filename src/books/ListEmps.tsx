export type Emps = {
  id?: number;
  fant?: string;
  name?: string;
  cnpj?: string;
  inse?: string;
  insm?: string;
  cpf?: string;
  mail?: string;
  fonefx?: string;
  fonecel?: string;
  local?: string;
  compl?: string;
  nrlocal?: number;
  cep?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
}

export const ListEmps = [
  {
    id: '1',
    fant: 'JR-Bordados.',
    name: 'Junior Bordados Ltda.',
    cnpj: '010.157.662/0001-23',
    inse: '06.365670-2',
    insm: '',
    cpf: '',
    mail: 'jrbordados@hotmail.com.br',
    fonefx: '(85) 3243-1872',
    fonecel: '(85) 999417475',
    local: 'Rua Professor Anacleto',
    compl: 'Casa',
    nrlocal: '576',
    cep: '60450-360',
    bairro: 'Parqueândia',
    cidade: 'Fortaleza',
    uf: 'Ceará'
  },
  {
    id: '2',
    fant: 'RB-Serviços.',
    name: 'Roberta Bastos Ltda.',
    cnpj: '002.494.780/0001-07',
    inse: '',
    insm: '',
    cpf: '',
    mail: 'rbservicos@hotmail.com.br',
    fonefx: '(85) 3243-1872',
    fonecel: '(85) 999001110',
    local: 'Rua Professor Anacleto',
    nrlocal: '576',
    compl: 'Casa',
    cep: '60450-360',
    bairro: 'Parqueândia',
    cidade: 'Fortaleza',
    uf: 'Ceará'
  }
];
