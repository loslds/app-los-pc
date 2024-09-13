interface IModulos {
  id?: number;
  name?: string;
}

export const ListModulos: IModulos[] = [
  { id: 1, name: 'Cliênte' },
  { id: 2, name: 'Recepção' },
  { id: 3, name: 'Design' },
  { id: 4, name: 'Produção' },
  { id: 5, name: 'Acabamento' },
  { id: 6, name: 'Expedição' },
  { id: 7, name: 'Administração' },
  { id: 8, name: 'Master' },
  { id: 9, name: 'Config' },
  { id: 10, name: 'Todos' }
];

export const FonesIndexById = (): { [key: number]: IModulos } => {
  return ListModulos.reduce((acc, lmodul) => {
    if (lmodul.id !== undefined) {
      acc[lmodul.id] = lmodul;
    }
    return acc;
  }, {} as { [key: number]: IModulos });
};
