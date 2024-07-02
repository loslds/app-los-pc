import type { IResponseApi, Order } from '../api.dto';

export interface IFactory {
  id?: number;
  fant?: string;
  cnpj?: string;
  cpf?: string;
  mail?: string;
  fonecel?: string;
  name?: string;
  inse?: string;
  insm?: string;
  fonefx?: string;
  local?: string;
  compl?: string;
  nrlocal?: string;
  cep?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;
  uf?: string;
}
export interface IResponseFactoryList extends IResponseApi {
  factorys: IFactory[];
}
export interface IResponseFactory extends IResponseApi {
  factory?: IFactory;
}

export type FactoryFields = keyof IFactory;


//export type FactoryFilter = Omit<Partial<IFactory>, 'id' | 'fant' | 'cnpj' | 'cpf' | 'mail' | 'fonecel' >;

export type FactoryFilter = IFactory;
export type FactoryOrder = Order<FactoryFields>;
