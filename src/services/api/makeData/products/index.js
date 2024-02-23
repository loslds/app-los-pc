import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  products: [
    {
      id: 1,
      grupo: 1,
      subgrupo: 1,
      promocao: 1,
      cod: '01010101',
      name: 'ZProduct 1.',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 2,
      grupo: 1,
      subgrupo: 1,
      promocao: 0,
      cod: '02010100',
      name: 'SProduct 2',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 3,
      grupo: 1,
      subgrupo: 1,
      promocao: 0,
      cod: '03010100',
      name: 'AProduct 3',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 4,
      grupo: 1,
      subgrupo: 1,
      promocao: 0,
      cod: '04010100',
      name: 'CProduct 4',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 5,
      grupo: 1,
      subgrupo: 2,
      promocao: 1,
      cod: '05010201',
      name: '1Product 5',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 6,
      grupo: 2,
      subgrupo: 2,
      promocao: 0,
      cod: '06020200',
      name: 'BProduct 6',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 7,
      grupo: 2,
      subgrupo: 2,
      promocao: 0,
      cod: '07020200',
      name: 'FProduct 7',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 8,
      grupo: 2,
      subgrupo: 2,
      promocao: 0,
      cod: '08020200',
      name: 'JProduct 8',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 9,
      grupo: 2,
      subgrupo: 3,
      promocao: 1,
      cod: '09020301',
      name: 'DProduct 9',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 10,
      grupo: 2,
      subgrupo: 3,
      promocao: 0,
      cod: '10020300',
      name: 'OProduct 10',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 11,
      grupo: 3,
      subgrupo: 3,
      promocao: 0,
      cod: '11030300',
      name: 'JProduct 11',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 12,
      grupo: 3,
      subgrupo: 3,
      promocao: 0,
      cod: '12030300',
      name: 'DProduct 12',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 13,
      grupo: 3,
      subgrupo: 4,
      promocao: 1,
      cod: '13030401',
      name: 'JProduct 13',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 14,
      grupo: 3,
      subgrupo: 4,
      promocao: 0,
      cod: '14030400',
      name: 'DProduct 14',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 15,
      grupo: 3,
      subgrupo: 4,
      promocao: 0,
      cod: '15030400',
      name: 'OProduct 15',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 16,
      grupo: 4,
      subgrupo: 4,
      promocao: 0,
      cod: '16040400',
      name: 'JProduct 16',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 17,
      grupo: 4,
      subgrupo: 5,
      promocao: 1,
      cod: '17040501',
      name: 'DProduct 17',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 18,
      grupo: 4,
      subgrupo: 5,
      promocao: 0,
      cod: '18040500',
      name: 'ZProduct 18.',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 19,
      grupo: 4,
      subgrupo: 5,
      promocao: 0,
      cod: '19040500',
      name: 'SProduct 19',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 20,
      grupo: 4,
      subgrupo: 5,
      promocao: 0,
      cod: '20040500',
      name: 'AProduct 20',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 21,
      grupo: 5,
      subgrupo: 6,
      promocao: 1,
      cod: '21050601',
      name: 'CProduct 21',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 22,
      grupo: 5,
      subgrupo: 6,
      promocao: 0,
      cod: '22050600',
      name: '1Product 22',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 23,
      grupo: 5,
      subgrupo: 6,
      promocao: 0,
      cod: '23050600',
      name: 'BProduct 23',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 24,
      grupo: 5,
      subgrupo: 6,
      promocao: 0,
      cod: '24050600',
      name: 'FProduct 24',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 25,
      grupo: 5,
      subgrupo: 7,
      promocao: 1,
      cod: '02050701',
      name: 'JProduct 25',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 26,
      grupo: 6,
      subgrupo: 7,
      promocao: 0,
      cod: '26060700',
      name: 'DProduct 26',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 27,
      grupo: 6,
      subgrupo: 7,
      promocao: 0,
      cod: '27060700',
      name: 'OProduct 27',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 28,
      grupo: 6,
      subgrupo: 7,
      promocao: 0,
      cod: '28060700',
      name: 'JProduct 28',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 29,
      grupo: 6,
      subgrupo: 8,
      promocao: 1,
      cod: '29060801',
      name: 'DProduct 29',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 30,
      grupo: 6,
      subgrupo: 8,
      promocao: 0,
      cod: '30060800',
      name: 'JProduct 30',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 31,
      grupo: 7,
      subgrupo: 8,
      promocao: 0,
      cod: '31070800',
      name: 'DProduct 31',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 32,
      grupo: 7,
      subgrupo: 8,
      promocao: 0,
      cod: '32070700',
      name: 'OProduct 32',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 33,
      grupo: 7,
      subgrupo: 9,
      promocao: 0,
      cod: '33070900',
      name: 'JProduct 33',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 34,
      grupo: 7,
      subgrupo: 9,
      promocao: 1,
      cod: '34070901',
      name: 'DProduct 34',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 35,
      grupo: 7,
      subgrupo: 9,
      promocao: 0,
      cod: '35070900',
      name: 'OProduct 35',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 36,
      grupo: 8,
      subgrupo: 9,
      promocao: 0,
      cod: '36080900',
      name: 'JProduct 36',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 37,
      grupo: 8,
      subgrupo: 10,
      promocao: 0,
      cod: '37081000',
      name: 'DProduct 37',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 38,
      grupo: 8,
      subgrupo: 10,
      promocao: 1,
      cod: '38081001',
      name: 'JProduct 38',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 39,
      grupo: 8,
      subgrupo: 10,
      promocao: 0,
      cod: '39081000',
      name: 'DProduct 39',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    },
    {
      id: 40,
      grupo: 8,
      subgrupo: 10,
      promocao: 0,
      cod: '40081000',
      name: 'DProduct 40',
      imageUrl: '',
      price: 10.5,
      ref: 'Descrição do Fabricante do produto'
    }
  ]
}

export async function getProducts(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order, filter = {} } = options
  const resultData = result && result.data

  const { categoryId, subcategoryId, promocao } = filter

  if (promocao) {
    resultData.products = resultData.products.filter(
      p => p.promocao === promocao
    )
  }

  if (categoryId) {
    resultData.products = resultData.products.filter(
      p => p.grupo === categoryId
    )
  }
  if (subcategoryId) {
    resultData.products = resultData.products.filter(
      p => p.subgrupo === subcategoryId
    )
  }

  if (resultData.products && order) {
    resultData.products = resultData.products.sort(compareValues(order, 'asc'))
  }
  return resultData
}
