//import servicos from '../../assets/svgs/servicos.svg';
import React from 'react';

import { useNavigate } from 'react-router-dom';

import avatar001 from '../../assets/svgs/avatar001.svg';
import portaon from '../../assets/svgs/portaon.svg';

import { ContainerBarSideMain } from './ContainerBarSideMain';
import { ButtonSideBar } from './ButtonSideBar';
import ContainerItensLogado from './ContainerItensLogado';

import PageModal from '../Modal/PageModal';
('components/Modal/PageModal');
import CardAbortarSys from '../contentHelp/CardAbortarSys';

type TypeBarSideMenuDados = {
  openlg2?: boolean;
};
const BarSideMenuDados = ({ openlg2 }: TypeBarSideMenuDados) => {
  const navigate = useNavigate();
  const goto = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  const [isabortar, setIsAbortar] = React.useState(false);

  const handlerAbortar = React.useCallback(() => {
    setIsAbortar((oldState) => !oldState);
  }, []);

  return (
    <ContainerBarSideMain>
      <ContainerItensLogado openlg1={openlg2}>
        <ButtonSideBar
          img={avatar001}
          titbtn="Minha Conta..."
          onClick={goto('/MyAccount')}
        />
        <ButtonSideBar titbtn="Meus Acesso..." onClick={goto('/MyAccount')} />
        <ButtonSideBar
          img={portaon}
          titbtn="Fazerlogo-off..."
          onClick={handlerAbortar}
        />
      </ContainerItensLogado>
      {isabortar ? (
        <PageModal
          ptop="111px"
          pwidth="60%"
          pheight="75%"
          titulo='" A T E N Ç Ã O "'
          onclose={() => {
            setIsAbortar(false);
          }}
        >
          <CardAbortarSys />
        </PageModal>
      ) : null}
    </ContainerBarSideMain>
  );
};

export default BarSideMenuDados;
