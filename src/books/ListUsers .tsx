
export type Users = {
   id?: number;
   name?: string;
   apelido?: string;
   password?: string;
   email?: string;
   pin?: string;
   cpf?: number;
   foto?: string;
   fone: string; 
   local: string;
   nrlocal: string;
   cep: string;
   bairro: string;
   cidade: string;
   uf: string;
}

export const ListUser = [
  {
    id: 1,
    name: 'Lindsay O. Sbrissa',
    apelido: 'Oswaldo',
    password: '@Osw1001',
    mail: 'loslds7@hormail.com',
    pin: '1111',
    cpf: '83185133849',
    cnpj: '',
    foto: '',
    fone: '85997851139',    
    local: 'Av. Sargemto Herminio Sampaio',
    nrlocal: '1415',
    cep: '60320-105',
    bairro: 'São Gerardo',
    cidade: 'Fortaleza',
    uf: 'Ceará',
  },
  {
    id: 2,
    name: 'Lindsay O. Sbrissa',
    apelido: 'Oswaldo',
    password: '@Osw1002',
    mail: 'loslds7@hormail.com',
    pin: '1222',
    cpf: '83185133849',
    cnpj: '',
    fone: '85997851139',
    local: 'Av. Sargemto Herminio Sampaio',
    nrlocal: '1415',
    cep: '60320-105',
    bairro: 'São Gerardo',
    cidade: 'Fortaleza',
    uf: 'Ceará',
  }
];
  // {
  //   id: 3,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw1003',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1333',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 3,
  //   namesetor: 'Produçao',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 4,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw1004',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1444',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 4,
  //   namesetor: 'Acabamento',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 5,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw1005',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1555',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 5,
  //   namesetor: 'Expedição',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 6,
  //   idname: 'Oswaldo',
  //   password: '@Osw1006',
  //   name: 'Lindsay O. Sbrissa',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1666',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 6,
  //   namesetor: 'Contas',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 7,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw107',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1777',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 7,
  //   namesetor: 'Cadastros',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 8,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw1008',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1888',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 8,
  //   namesetor: 'Financeiro',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },
  // {
  //   id: 9,
  //   idname: 'Oswaldo',
  //   name: 'Lindsay O. Sbrissa',
  //   password: '@Osw1009',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '1999',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 9,
  //   namesetor: 'Todos',
  //   level: 1,
  //   descrlevel: 'Internet'
  // },

  // {
  //   id: 10,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1010',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2111',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 1,
  //   namesetor: 'Recepçao',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 11,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1011',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2222',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 2,
  //   namesetor: 'Design',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },

  // {
  //   id: 12,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1012',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2333',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 3,
  //   namesetor: 'Produção',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 13,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1013',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2444',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 4,
  //   namesetor: 'Acabamento',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 14,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1014',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2555',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 5,
  //   namesetor: 'Expedição',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 15,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Osw1015',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2666',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 6,
  //   namesetor: 'Contas',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 16,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1016',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2777',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 7,
  //   namesetor: 'Cadastros',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 17,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1017',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2888',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 8,
  //   namesetor: 'Financeiro',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 18,
  //   idname: 'Junior',
  //   name: 'Junior Bordados Ltda.',
  //   password: '@Jr1018',
  //   cpf: '',
  //   cnpj: '010157662000123',
  //   pin: '2999',
  //   mail: 'jrbordados@hotmail.com.br',
  //   fone: '8532431872',
  //   local: 'Rua Prof. Anacleto',
  //   nrlocal: '576',
  //   cep: '60450360',
  //   bairro: 'Parquelândia',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 9,
  //   namesetor: 'Todos',
  //   level: 2,
  //   descrlevel: 'Intranet'
  // },
  // {
  //   id: 19,
  //   idname: 'Pedro',
  //   name: 'Pedro Alcantara Neto',
  //   password: '@Pr1019',
  //   cpf: '83185133849',
  //   cnpj: '',
  //   pin: '2000',
  //   mail: 'loslds7@hormail.com',
  //   fone: '85997851139',
  //   local: 'Av. Sargemto Herminio Sampaio',
  //   nrlocal: '1415',
  //   cep: '60320-105',
  //   bairro: 'São Gerardo',
  //   cidade: 'Fortaleza',
  //   uf: 'Ceará',
  //   idsector: 9,
  //   namesetor: 'Todos',
  //   level: 1,
  //   descrlevel: 'Internet'
  // }

