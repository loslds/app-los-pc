import { compareValues } from 'mini-helper'
const data = {
  success: true,
  subcategoriesbordados: [
    { id: 1, name: 'Todos com Laser.' },
    { id: 2, name: 'Laser em Acrílico.' },
    { id: 3, name: 'Laser em M D F.' },
    { id: 4, name: 'Laser em Madeiras.' },
    { id: 5, name: 'Laser em Tecidos.' },
    { id: 6, name: 'Laser em Couro, Courino ou Semelhante.' },
    { id: 7, name: 'Laser em Metais.' },
    { id: 8, name: 'Laser em outros Materiais.' }
  ]
}

export async function getSubCategoryLasers(options = {}) {
  
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategorylasers && order) {
    resultData.subcategorylasers = resultData.subcategorylasers.sort(
      compareValues(order, 'asc')
    )
    return resultData
  }
  return resultData
}
