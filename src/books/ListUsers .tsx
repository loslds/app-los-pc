
interface TypeUsers {
   id?: number;
   name?: string;
   apelido?: string;
   password?: string;
   email?: string;
   pin?: string;
   cpf?: string;
   cnpj?: string;
   foto?: string;
   idfone: number; 
   local: string;
   nrlocal: string;
   cep: string;
   bairro: string;
   cidade: string;
   uf: string;
   pergunta1: string;
   resposta1: string;
   pergunta2: string;
   resposta2: string;
   pergunta3: string;
   resposta3: string;
}

export const ListUsers: TypeUsers[] = [
  {
    id: 1,
    name: 'Lindsay O. Sbrissa',
    apelido: 'Oswaldo',
    password: '@Osw1001',
    email: 'loslds7@hormail.com',
    pin: '1111',
    cpf: '93195133849',
    cnpj: '',
    foto: '',
    idfone: 3,    
    local: 'Av. Sargemto Herminio Sampaio',
    nrlocal: '1415',
    cep: '60320105',
    bairro: 'São Gerardo',
    cidade: 'Fortaleza',
    uf: 'Ceará',
    pergunta1: 'Qual o nome Tipo de Animal você mais Admira ?',
    resposta1: 'Cachorro',
    pergunta2: 'Qual Marca de Veículo você mais Gosta ?',
    resposta2: 'Ford',
    pergunta3: 'Qual o esporte você mais Simpatiza ?',
    resposta3: 'Natação'
   },
  {
    id: 2,
    name: 'Lindsay O. Sbrissa',
    apelido: 'Oswaldo',
    password: '@Osw1002',
    email: 'los.sbrissa@gmail.com',
    pin: '1222',
    cpf: '93195133849',
    cnpj: '',
    idfone: 4,
    local: 'Av. Sargemto Herminio Sampaio',
    nrlocal: '1415',
    cep: '60320105',
    bairro: 'São Gerardo',
    cidade: 'Fortaleza',
    uf: 'Ceará',
    pergunta1: 'Qual o nome Tipo de Animal você mais Admira ?',
    resposta1: 'Gato',
    pergunta2: 'Qual Marca de Veículo você mais Gosta ?',
    resposta2: 'Fiat',
    pergunta3: 'Qual o esporte você mais Simpatiza ?',
    resposta3: 'Futebol'
  }
];
