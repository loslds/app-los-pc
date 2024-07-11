interface IAplics {
  id?: number;
  rotina?: string;
}

export const ListAplicacao:IAplics[] = [
  { id: 1, rotina: 'Inclusão' },
  { id: 2, rotina: 'Alteração' },
  { id: 3, rotina: 'Exclusão' },
  { id: 4, rotina: 'Listagem' },
  { id: 5, rotina: 'Visualisação' }
];

export const AplicacaoIndexById = (): { [key: number]:IAplics } => {
  return ListAplicacao.reduce((acc, laplics) => {
    if (laplics.id !== undefined) {
      acc[laplics.id] = laplics;
    }
    return acc;
  }, {} as { [key: number]:IAplics });
};
