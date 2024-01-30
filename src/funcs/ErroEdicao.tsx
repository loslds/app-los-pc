import { useState } from 'react';

export function ErroEdicao(nrerro: number) {
  const [isrtn, setIsRtn] = useState(true);
  //let rtn = true;
  if (nrerro == 1) {
    alert('Determine edição do Email...');
    setIsRtn(false);
  }
  if (nrerro == 2) {
    return alert('Determine edição do PassWord...');
    setIsRtn(false);
  }
  return isrtn;
}
