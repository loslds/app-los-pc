import { compareValues } from 'mini-helper';

export type TypeAccesSnhs = {
  succes: boolean;
  acessos: {
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

const data = {
  succes: true,
  accessnhs: [
    {
      id: 1,
      idemp: 1,
      iduser: 1,
      mailuser: 'loslds7@hotmail.com',
      pseuduser: 'Los',
      pswuser: '123',
      pinuser: '1234',
      pinadm: '9999'
    },
    {
      id: 2,
      idemp: 2,
      iduser: 1,
      mailuser: 'los.sbrissa@gmail.com',
      pseuduser: 'Osw',
      pswuser: '456',
      pinuser: '5678',
      pinadm: '9999'
    }
  ]
};

type propsorderfilter = {
  order?: {};
  filter?: {};
};

export async function getAccesSnhs(options = {}) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data });
    }, 3000);
  });

  const { order, filter }: propsorderfilter = options;
  const resultData = result;

  if (empresa === 1) {
    resultData.accessnhs = resultData.accessnhs.filter(
      (p) => p.empresa === empresa
    );
  }

  const { filtros } = filter;

  if (empresaId) {
    resultData.accessnhs = resultData.accessnhs.filter(
      (p) => p.idemp === idemp
    );
  }

  if (nrcodId) {
    resultData.accessnhs = resultData.accessnhs.filter(
      (p) => p.grupo === categoryId
    );
  }
  if (subcategoryId) {
    resultData.accessnhs = resultData.accessnhs.filter(
      (p) => p.subgrupo === subcategoryId
    );
  }

  if (resultData.accessnhs && order) {
    resultData.accessnhs = resultData.accessnhs.sort(
      compareValues(order, 'asc')
    );
  }
  return resultData;
}
