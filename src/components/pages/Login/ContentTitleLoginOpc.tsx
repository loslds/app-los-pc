import * as Lg from '../../../styles/styledLogin';

type TypeContentTitleLoginOpc = {
  titleopc?: string;
};
export const ContentTitleLoginOpc = ({
  titleopc
}: TypeContentTitleLoginOpc) => {
  return (
    <Lg.ContainerTitleLoginOpc>
      <h4>{titleopc}</h4>
    </Lg.ContainerTitleLoginOpc>
  );
};
