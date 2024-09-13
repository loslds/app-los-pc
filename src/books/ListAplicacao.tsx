interface IAplics {
  id?: number;
  rotina?: string;
  nivel?: number;
}

export const ListAplicacao:IAplics[] = [
  { id: 1, rotina: 'Listagem', nivel: 1 },
  { id: 2, rotina: 'Impressões', nivel: 2 },
  { id: 3, rotina: 'Inclusão', nivel: 3 },
  { id: 4, rotina: 'Alteração', nivel: 4 },
  { id: 5, rotina: 'Exclusão', nivel: 5 },
  { id: 6, rotina: 'Todas', nivel: 6 }
];

export const AplicacaoIndexById = (): { [key: number]:IAplics } => {
  return ListAplicacao.reduce((acc, laplics) => {
    if (laplics.id !== undefined) {
      acc[laplics.id] = laplics;
    }
    return acc;
  }, {} as { [key: number]:IAplics });
};
