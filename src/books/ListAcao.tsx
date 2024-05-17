export type TypeAcao = {
  id?: number;
  name?: string;
  acao?: boolean;
};

export const ListAcao: TypeAcao = [
  { id: 1, name: 'Negado', acao: false },
  { id: 2, name: 'Permitido', acao: true }
];
