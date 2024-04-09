
export type TypeAccesSnhs = {
  succes: boolean;
  accessnhs: {
    id?: number;
    idemp?: number;
    iduser?: number;
    mailuser: string;
    pseuduser?: string;
    pswuser?: string;
    pinuser: string;
    pinadm?: string;
    nrmodo?: number;
  };
};

export type propsOrderFilter = {
  order?: object;
  filter?: object;
};

export type propsFilter ={
  userMdLogin?: number;
  userIdEmp?: number;
  userStrId?: string;
  userStrPsw?: string;
};
