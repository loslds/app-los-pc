import React from 'react';

import * as Sl from './styledSelect';
import { ListEmpresas } from '../../books/ListEmps';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../contexts/login/ContextAcesso';

function getFindFantasia(id: number) {
  let fantasia = id.toString(10);

  return fantasia;
}

export const SelectEmpresa = () => {
  const { state, dispatch } = AcessoUseForm();

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const handlerSelect = (e: number) => {
    setIdEmpresa(e);
  };

  React.useEffect(() => {
    if (idempresa === 0) {
      setFantEmpresa('');
    }
    if (idempresa >= 0) {
      let nfemp = getFindFantasia(idempresa);
      console.log('nfemp :', nfemp);
      if (nfemp != '') {
        setFantEmpresa(nfemp);
      } else {
        setFantEmpresa('');
      }
    }
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  },[idempresa,dispatch]);

  console.log('state.idemp. :', state.idemp);
  console.log('state.nmfant :', state.nmfant);

  return (
    <Sl.ContainerSel>
      <Sl.ContainerSelFlex>
        <select
          name="empresa"
          size={1}
          value={0}
          defaultValue={idempresa}
          onChange={(e) => handlerSelect(parseInt(e.target.value))}
        >
          <option value={'0'}>Opções : </option>
          {ListEmpresas.map((item,index) => (
            <option key={index} value={item.id}>{item.fant}</option>
          ))}
        </select>
      </Sl.ContainerSelFlex>
    </Sl.ContainerSel>
  );
};
