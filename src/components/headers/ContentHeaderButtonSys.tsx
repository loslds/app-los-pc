
import * as Pag from "../layouts/styled";

type PropsBtPgSys = {
  img?: string;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentHeaderButtonSys = ({ title, img, onClick }: PropsBtPgSys) => {
  return (
    <Pag.ContainerImgSys>
      <Pag.ButtonPagesImgSys img={img} title={title} onClick={onClick} />
    </Pag.ContainerImgSys>
  );
};
export default ContentHeaderButtonSys;
