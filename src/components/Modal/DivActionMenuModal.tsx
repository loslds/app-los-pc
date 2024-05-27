import * as MD from './styles';

import { DivTitleModal } from './DivTitleModal';

type TypeCardModalTexto = {
  onClick?: () => void;
  path?: string;
  title?: string;
  img?: string;
  id?: string;
};
export const DivActionMenuModal = ({
  id,
  img,
  path,
  title,
  onClick
}: TypeCardModalTexto) => {
  return (
    <MD.ContainerActionItemDivMenu>
      <MD.ContainerActClickModalItemMenu id={id} path={path} onClick={onClick}>
        <MD.ContainerCenterImgDiv img={img} />
        <DivTitleModal title={title} />
      </MD.ContainerActClickModalItemMenu>
    </MD.ContainerActionItemDivMenu>
  );
};
export default DivActionMenuModal;
