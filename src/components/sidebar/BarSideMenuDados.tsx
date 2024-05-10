
//import servicos from '../../assets/svgs/servicos.svg';
import portaon from '../../assets/svgs/portaon.svg';

import { ContainerBarSideMain } from './ContainerBarSideMain';
import { ButtonSideBar } from './ButtonSideBar';
import ContainerItensLogado from './ContainerItensLogado';

type TypeBarSideMenuDados = {
  itonoff?: boolean;  
  onclicklog?: () => void;
};
const BarSideMenuDados = ({itonoff, onclicklog }: TypeBarSideMenuDados) => {

  return (
    <ContainerBarSideMain>
      <ContainerItensLogado itonoff={itonoff}  >
        <ButtonSideBar
          // img={servicos}
          titbtn="Meu login..."
          onClick={() => {}}
        />
        <ButtonSideBar
          img={portaon}
          titbtn="Fazerlogo-off..."
          onClick={ onclicklog }
        />
      </ContainerItensLogado>
    </ContainerBarSideMain>
  );
};

export default BarSideMenuDados;