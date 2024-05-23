import { compareValues } from 'mini-helper';

// import { useState } from 'react';
// pinmastes
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

export type TupeAccessnhsOrderFilter = {
  order?: object;
  filter?: object;
};

export type TypeAccessnhsFilter ={
  userMdLogin?: number;
  userIdEmp?: number;
  userStrId?: string;
  userStrPsw?: string;
  p?: string;
};

export const data:TypeAccesSnhs = {
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



export async function getAccesSnhs(options = {}) {
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve( data );
    }, 3000);
  });

    
  const  {order, filter}:TupeAccessnhsOrderFilter = options;
  const resultData = result && result.data;
  
  const { userMdLogin, userIdEmp, userStrId, userStrPsw } : TypeAccessnhsFilter  = filter;

  if (userIdEmp) {
    resultData.accessnhs = resultData.accessnhs.filter( (p) => p.idemp === userIdEmp ); }
      
  if (userMdLogin === 1 || userMdLogin === 3){
    if (userStrId) {
      resultData.accessnhs = resultData.accessnhs.filter( (p) => p.mailuser === userStrId ); 
    }
    if (userStrPsw) {
      if (userMdLogin === 1) {
        resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pswuse === userStrPsw ); 
      } else {
        resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pin === userStrPsw );   
      }
    }  
  }

  if (userMdLogin === 2 || userMdLogin === 4){
    if (userStrId) {
      resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pseuduser === userStrId ); 
    }
    if (userStrPsw) {
      if (userMdLogin === 2){
        resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pswuse === userStrPsw ); 
      } else {
        resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pin === userStrPsw ); 
      }
    }
  }
  
  if (userMdLogin === 3){
    if (userStrId) {
      resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pswuse === userStrId ); }
    if (userStrPsw) {
      resultData.accessnhs = resultData.accessnhs.filter( (p) => p.pin === userStrPsw ); }
  }

  if (resultData.accessnhs && order) {
    resultData.accessnhs = resultData.accessnhs.sort( compareValues(order, 'asc') );}
  return resultData;
}
