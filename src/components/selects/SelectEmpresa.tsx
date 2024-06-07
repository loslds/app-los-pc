import React from 'react';

import {
  AcessoUseForm,
  AcessoUseActions
} from '../contexts/login/ContextAcesso';
import { ContentMainSelectPage } from './ContentMaimSelectPage';

export const SelectEmpresa = () => {
  const { state, dispatch } = AcessoUseForm();

  const [idempresa, setIdEmpresa] = React.useState(0);
  const [fantempresa, setFantEmpresa] = React.useState('');

  const handlerSelect = (e: number) => {
    setIdEmpresa(e);
    if (e > 0) {
      if (e === 1) {
        setFantEmpresa('JR-Bordados.');
      } else {
        setFantEmpresa('RB-Serviços.');
      }
    } else {
      setFantEmpresa('');
    }

    console.log('IdEmpresa.. : ', idempresa);
    console.log('fantempresa : ', fantempresa);
  };

  React.useEffect(() => {
    dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
    dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  }, [dispatch]);

  console.log('state.idemp. :', state.idemp);
  console.log('state.nmfant :', state.nmfant);

  return (
    <ContentMainSelectPage>
      <select
        name="empresa"
        defaultValue={idempresa}
        onChange={(e) => handlerSelect(parseInt(e.target.value))}
      >
        <option value={'0'}>Opções : </option>
        <option value={'1'}>JR-Bordados.</option>
        <option value={'2'}>RB-Serviços.</option>
      </select>
    </ContentMainSelectPage>
  );
};
