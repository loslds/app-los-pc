import * as MD from './styles';
import * as Pg from '../pages/stylePage';

import { ButtonModal } from './ButtonModal';
//import closevrm from '../../assets/images/closevrm.png';

type TypeDivOpcTitle = {
  titulo?: string;
  imgbm?: string;
  titbm?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const DivOpcTitle = ({ titulo, imgbm, titbm, onClick }: TypeDivOpcTitle) => {
  return (
    <MD.ContainerDivOpcTitle>
      <h5>{titulo}</h5>
      <ButtonModal imgbm={imgbm} titbm={titbm} onClick={onClick} />
      <Pg.DivisionPgHztal />
    </MD.ContainerDivOpcTitle>
  );
};
