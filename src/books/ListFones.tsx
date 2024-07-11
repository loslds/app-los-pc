export interface IFones {
  id?: number;
  idemp?: number;
  idcli?: number;
  idfor?: number;
  idcon?: number;
  idusers?: number;
  fonefx?: string;
  fonecel?: string;
}
// filtro para telenones de empresas tem que ter
export const ListFones: IFones[] = [
  {
    id: 1,
    idemp: 1,
    idcli: 0,
    idfor: 0,
    idcon: 0,
    idusers: 0,
    fonefx: '8532431872',
    fonecel: '85999417475'
  },
  {
    id: 2,
    idemp: 2,
    idcli: 0,
    idfor: 0,
    idcon: 0,
    idusers: 0,
    fonefx: '8532431872',
    fonecel: '85999001110'
  },
  {
    id: 3,
    idemp: 1,
    idcli: 0,
    idfor: 0,
    idcon: 0,
    idusers: 1,
    fonefx: '',
    fonecel: '85998585701'
  },
  {
    id: 4,
    idemp: 2,
    idcli: 0,
    idfor: 0,
    idcon: 0,
    idusers: 1,
    fonefx: '',
    fonecel: '85998585701'
  },
  {
    id: 5,
    idemp: 0,
    idcli: 0,
    idfor: 0,
    idcon: 1,
    idusers: 1,
    fonefx: '',
    fonecel: '99999999999'
  }
];

export const FonesIndexById = (): { [key: number]: IFones } => {
  return ListFones.reduce((acc, lfones) => {
    if (lfones.id !== undefined) {
      acc[lfones.id] = lfones;
    }
    return acc;
  }, {} as { [key: number]: IFones });
};
