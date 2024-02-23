import { compareValues } from 'mini-helper'

const data = {
  succes: true,
  portifolios: [
    {
      id: 1,
      category: 1,
      subcategoryartes: 1,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01',
      ref: 'Todas as Artes',
      imageUrl: ''
    },
    {
      id: 2,
      category: 1,
      subcategoryartes: 2,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01020000',
      ref: 'Artes com Bordados.',
      imageUrl: ''
    },
    {
      id: 3,
      category: 1,
      subcategoryartes: 3,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01030000',
      ref: 'Artes com Bordados em Tecidos.',
      imageUrl: ''
    },
    {
      id: 4,
      category: 1,
      subcategoryartes: 4,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01040000',
      ref: 'Artes com Bordados em outro Material.',
      imageUrl: ''
    },
    {
      id: 5,
      category: 1,
      subcategoryartes: 5,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01050000',
      ref: 'Artes a Lasers.',
      imageUrl: ''
    },
    {
      id: 6,
      category: 1,
      subcategoryartes: 6,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01060000',
      ref: 'Artes a Lasers em Acrílico.',
      imageUrl: ''
    },
    {
      id: 7,
      category: 1,
      subcategoryartes: 7,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01070000',
      ref: 'Artes a Lasers em M D F.',
      imageUrl: ''
    },
    {
      id: 8,
      category: 1,
      subcategoryartes: 8,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01080000',
      ref: 'Artes a Lasers em Madeiras.',
      imageUrl: ''
    },
    {
      id: 8,
      category: 1,
      subcategoryartes: 9,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01090000',
      ref: 'Artes a Lasers em Tecidos.',
      imageUrl: ''
    },
    {
      id: 9,
      category: 1,
      subcategoryartes: 10,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01100000',
      ref: 'Artes a Lasers em Couro, Courino ou Semelhante.',
      imageUrl: ''
    },
    {
      id: 10,
      category: 1,
      subcategoryartes: 11,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01110000',
      ref: 'Artes a Lasers em Metais.',
      imageUrl: ''
    },
    {
      id: 11,
      category: 1,
      subcategoryartes: 12,
      subcategorbordados: 0,
      subcategorlasers: 0,
      codref: '01120000',
      ref: 'Laser em outros Materiais.',
      imageUrl: ''
    },
    /** bordados */
    {
      id: 12,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 1,
      subcategorlasers: 0,
      codref: '02',
      ref: 'Todas os Bordados',
      imageUrl: ''
    },
    {
      id: 13,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 2,
      subcategorlasers: 0,
      codref: '02000200',
      ref: 'Bordados em Tecidos.',
      imageUrl: ''
    },
    {
      id: 14,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 3,
      subcategorlasers: 0,
      codref: '02000300',
      ref: 'Bordados em Bonés.',
      imageUrl: ''
    },
    {
      id: 15,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 4,
      subcategorlasers: 0,
      codref: '02000400',
      ref: 'Bordados em Vestuários.',
      imageUrl: ''
    },
    {
      id: 16,
      category: 2,
      subcategoryartes: 0,
      subcategorbordados: 5,
      subcategorlasers: 0,
      codref: '02000500',
      ref: 'Bordados em Acessórios.',
      imageUrl: ''
    },
    {
      id: 17,
      category: 1,
      subcategoryartes: 0,
      subcategorbordados: 6,
      subcategorlasers: 0,
      codref: '02000600',
      ref: 'Bordados em outro Material.',
      imageUrl: ''
    },
    {
      id: 18,
      category: 1,
      subcategoryartes: 0,
      subcategorbordados: 7,
      subcategorlasers: 0,
      codref: '01000700',
      ref: 'Bordados com uso de Lasers.',
      imageUrl: ''
    }

    /** Categorias e Sub Categorias para  Filtragem
     * Categorias
     * 1 - Artes
     *  Sub-Categories Arte
     *  1  - Todas as Artes.
     *  2  - Artes com Bordados.
     *  3  - Artes com Bordados em Tecidos.
     *  4  - Artes com Bordados em outro Material.
     *  5  - Artes a Lasers.
     *  6  - Artes a Lasers em Acrílico.
     *  7  - Artes a Lasers em M D F.
     *  8  - Artes a Lasers em Madeiras.
     *  9  - Artes a Lasers em Tecidos.
     *  10 - Artes a Lasers em Couro, Courino ou Semelhante.
     *  11 - Artes a Lasers em Metais.
     *  12 - Artes a Lasers com outros Materiais.
     *
     * Categorias
     * 2 - Bordados
     *  Sub-Categories Bordados
     *  1 - Todos os Bordados.
     *  2 - Bordados em Tecidos.
     *  3 - Bordados em Bonés.
     *  4 - Bordados em Vestuários.
     *  5 - Bordados em Acessórios.
     *  6 - Bordados em outro Material.
     *  7 - Bordados com uso de Lasers.
     *
     * Categorias
     * 3 - Laser
     *  Sub-Categories Lasers *
     *  1 - Todos com Laser.
     *  2 - Laser em Acrílico.
     *  3 - Laser em M D F.
     *  4 - Laser em Madeiras.
     *  5 - Laser em Tecidos.
     *  6 - Laser em Couro, Courino ou Semelhante.
     *  7 - Laser em Metais.
     *  8 - Laser em outros Materiais.
     */
  ]
}

export async function getPortifolios(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order, filter = {} } = options
  const resultData = result && result.data

  const {
    categoryIdArtes,
    subcategoryIdArte,
    categoryIdBordados,
    subcategoryIdBordados,
    categoryIdLasers,
    subcategoryIdLasers,
    codref
  } = filter

  if (categoryIdArtes) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.cateroria === categoryIdArtes
    )
  }
  if (subcategoryIdArte) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdArte
    )
  }
  if (categoryIdBordados) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.categoria === categoryIdBordados
    )
  }
  if (subcategoryIdBordados) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdBordados
    )
  }
  if (categoryIdLasers) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.categoria === categoryIdLasers
    )
  }
  if (subcategoryIdLasers) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.subcategoria === subcategoryIdLasers
    )
  }
  if (codref) {
    resultData.portifolios = resultData.portifolios.filter(
      p => p.codref === codref
    )
  }
  if (resultData.portifolios && order) {
    resultData.portifolios = resultData.portifolios.sort(
      compareValues(order, 'asc')
    )
  }

  return resultData
}
