import React from 'react';
import closevrm from '../../assets/images/closevrm.png';
import * as MD from './styles';

type Props = {
  id?: string;
  title?: string;
  onClose: () => void;
};
const DivOpcTitle: React.FC<Props> = ({ title , onClose}) => {
  return (
    <MD.ContainerDivOpcTitle>
      <h5>{title}</h5>
      <MD.BButtonModal img={closevrm} title={'Fechar...'} onClick={onClose} />
      <MD.DivisionPanel />
    </MD.ContainerDivOpcTitle>
  );
};
export default DivOpcTitle;
