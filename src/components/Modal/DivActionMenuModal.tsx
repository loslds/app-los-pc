import React from 'react';

import * as MD from './styles';
import DivTitleModal from './DivTitleModal';

type Props = {
  // children?: React.ReactNode;
  onClick?: () => void;
  path?: string;
  title?: string;
  img?: string;
  id?: string;
};
const DivActionMenuModal: React.FC<Props> = ({id, img, path, title, onClick }) => {
  return (
    <MD.ContainerActionItemDivMenu >
      <MD.ContainerActClickModalItemMenu id={id} path={path} onClick={onClick}>
        <MD.ContainerCenterImgDiv img={img}/>
        <DivTitleModal title={title} />
      </MD.ContainerActClickModalItemMenu>
    </MD.ContainerActionItemDivMenu>
  );
};
export default DivActionMenuModal;
