import { compareValues } from 'mini-helper'

const data = {
  success: true,
  subcategoriesbordados: [
    { id: 1, name: 'Todos os Bordados.' },
    { id: 2, name: 'Bordados em Tecidos.' },
    { id: 3, name: 'Bordados em Bonés.' },
    { id: 4, name: 'Bordados em Vestuários' },
    { id: 5, name: 'Bordados em Acessórios.' },
    { id: 6, name: 'Bordados em outro Material.' },
    { id: 7, name: 'Bordados como uso de Lasers.' }
  ]
}

export async function getSubCategoryBordados(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategorybordados && order) {
    resultData.subcategorybordados = resultData.subcategorybordados.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
