//import React from 'react';

import { AcessoUseForm } from '../contexts/login/ContextAcesso';
import { ContentTextoBgPanelYellow } from '../pages/ContentTextoPanelYellow';
import { ContentCardPagePanelTitle } from '../pages/ContentCardPagePanelTitle';

type TypePanelConfResgateYellow = {
  isbgcolor?: boolean;
  titulo?: string;
  subtitulo?: string;
};
export const PanelConfResgateYellow = ({
  isbgcolor,
  titulo,
  subtitulo
}: TypePanelConfResgateYellow) => {
  const { state, dispatch } = AcessoUseForm();

  //const [idempresa, setIdEmpresa] = React.useState(0);
  //const [fantempresa, setFantEmpresa] = React.useState('');

  // const handleredResgate = (e: number) => {
  //   setIdEmpresa(e);
  //   if (e > 0) {
  //     if (e === 1) {
  //       setFantEmpresa('JR-Bordados.');
  //     } else {
  //       setFantEmpresa('RB-Serviços.');
  //     }
  //   } else {
  //     setFantEmpresa('');
  //   }

  // console.log('IdEmpresa.. : ', idempresa);
  // console.log('fantempresa : ', fantempresa);
  // };

  // React.useEffect(() => {
  //   dispatch({ type: AcessoUseActions.setIdEmp, payload: idempresa });
  //   dispatch({ type: AcessoUseActions.setNmFant, payload: fantempresa });
  // }, [dispatch]);

  return (
    <ContentTextoBgPanelYellow isbgcolor={isbgcolor}>
      <ContentCardPagePanelTitle>
        <h3>{titulo}</h3>
      </ContentCardPagePanelTitle>
      <h4>{subtitulo}</h4>
      <p>
        &emsp;&emsp;No momento você inseriu a solicitação do Login para Acesso
        Empresa:
      </p>
      <label>
        &emsp;ID Empresa....: <span>{state.idemp}.</span>
      </label>
      <label>
        &emsp;Nome Fantasia: <span>{state.nmfant}.</span>
      </label>
      <br />
      <p>
        &emsp;&emsp;Precisamos que você confirme se deseja continuar com o
        Resgate ao acesso para esta Empresa.
      </p>
      <h5>Obs:.</h5>
      <p>
        &emsp;&emsp;Caso "SIM", abaixo clique na Seta a Direita "Resgatar"...
      </p>
      <p>&emsp;&emsp;Caso "NÃO" clique na seta à esquerda "Voltar"...</p>
    </ContentTextoBgPanelYellow>
  );
};
