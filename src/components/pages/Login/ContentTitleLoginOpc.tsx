import * as Lg from '../../../styles/styledLogin';

type PropsLoginTitleOpc = {
  titleopc?: string;
};
export const ContentTitleLoginOpc = ({ titleopc }: PropsLoginTitleOpc) => {
  return (
    <Lg.ContainerTitleLoginOpc>
      <h4>{titleopc}</h4>
    </Lg.ContainerTitleLoginOpc>
  );
};
