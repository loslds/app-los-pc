// import Api from '../../requester'
import { compareValues } from 'mini-helper';


const data = {
  success: true,
  empresas: [
    {
      id: 1,
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
      nrlocal: 576,
      cep: '60450-360',
      bairro: 'Parqueândia',
      cidade: 'Fortaleza',
      uf: 'Ceará'
    },
    {
      id: 2,
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
      nrlocal: 576,
      compl: 'Casa',
      cep: '60450-360',
      bairro: 'Parqueândia',
      cidade: 'Fortaleza',
      uf: 'Ceará'
    }
  ]
};


export async function getEmpresas(options = {} ) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, 2000);
  });

  const { order, filter = {} } = options;
  
  const resultData = result && result.data;

  const { empId } = filter;

  if ( empId ) {
    resultData.empresas = resultData.empresas.filter(p => p.promocao === promocao)
  }

    
  if (resultData.empresas && order) {
    resultData.empresas = resultData.empresas.sort(compareValues(order, 'asc'))}
  return resultData
}

