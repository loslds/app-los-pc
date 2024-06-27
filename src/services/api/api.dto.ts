export interface IResponseApi {
  success?: boolean;
  message?: string;
}

export type Order<T = string> = {
  orderBy?: T;
  order?: 'asc' | 'desc';
};