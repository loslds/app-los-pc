import React from 'react';

import { ListEmpresas } from '../../books/ListEmps';
import {
  AcessoUseForm,
  AcessoUseActions
} from '../contexts/login/ContextAcesso';
import { ContentMainSelectPage } from './ContentMaimSelectPage';

export const SelectEmpresa = () => {
  const { state, dispatch } = AcessoUseForm();

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const handlerSelect = (e: string) => {
    setIdEmpresa(parseInt(e));

    console.log('IdEmpresa.. : ', idempresa);
  };

  React.useEffect(() => {
    if (idempresa < 0) {
      setFantEmpresa('');
    } else {
      dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
      dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
    }
  }, [idempresa, dispatch]);

  console.log('state.idemp. :', state.idemp);
  console.log('state.nmfant :', state.nmfant);

  return (
    <ContentMainSelectPage>
      <select
        name="empresa"
        size={1}
        value={0}
        defaultValue={idempresa}
        onChange={(e) => handlerSelect(e.target.value)}
      >
        <option value={-1}>Opções : </option>
        {ListEmpresas.map((item, index) => (
          <option key={index} value={item.id}>
            {item.fant}
          </option>
        ))}
      </select>

      <ul>
        {ListEmpresas.map((emp) => (
          <li key={emp.id}>{emp.id}</li>
        ))}
      </ul>
    </ContentMainSelectPage>
  );
};
