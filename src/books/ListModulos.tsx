interface IModulos {
  id?: number;
  name?: string;
}

export const ListModulos: IModulos[] = [
  { id: 1, name: 'Recepção' },
  { id: 2, name: 'Design' },
  { id: 3, name: 'Produção' },
  { id: 4, name: 'Acabamento' },
  { id: 5, name: 'Expedição' },
  { id: 6, name: 'Administração' },
  { id: 7, name: 'Master' },
  { id: 8, name: 'Config' }
];

export const FonesIndexById = (): { [key: number]: IModulos } => {
  return ListModulos.reduce((acc, lmodul) => {
    if (lmodul.id !== undefined) {
      acc[lmodul.id] = lmodul;
    }
    return acc;
  }, {} as { [key: number]: IModulos });
};
