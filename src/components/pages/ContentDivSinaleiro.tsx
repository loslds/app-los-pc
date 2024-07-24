import * as Pg from './stylePage';

type TypeContentDivSinaleiro = {
  pxwidth?: string;
  pxheight?: string;
  pxhght?: string;
  pxwdth?: string;
  img?: string;
  title?: string;
  onClick?: () => void;
};
export const ContentDivSinaleiro = ({
  pxheight,
  pxwidth,
  pxhght,
  pxwdth,
  img,
  title,
  onClick
}: TypeContentDivSinaleiro) => {
  return (
    <Pg.ContainerSinaleiro pxheight={pxheight} pxwidth={pxwidth}>
      <Pg.ButtonSinaleiro
        pxhght={pxhght}
        pxwdth={pxwdth}
        img={img}
        title={title}
        onClick={onClick}
      />
    </Pg.ContainerSinaleiro>
  );
};
