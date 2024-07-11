interface IAcoes {
  id?: number;
  name?: string;
  acao?: boolean;
};

export const ListAcoes:IAcoes[] = [
  { id: 1, name: 'Negado', acao: false },
  { id: 2, name: 'Permitido', acao: true }
];

export const AcoesIndexById = (): { [key: number]:IAcoes } => {
  return ListAcoes.reduce((acc, lacoes) => {
    if (lacoes.id !== undefined) {
      acc[lacoes.id] = lacoes;
    }
    return acc;
  }, {} as { [key: number]: IAcoes });
};
