import * as Lg from '../../../styles/styledLogin';

type PropsLoginTitle = {
  title?: string;
};
export const ContentTitlePanel = ({ title }: PropsLoginTitle) => {
  return (
    <Lg.ContainerTitlePanel>
      <h2>{title}</h2>
    </Lg.ContainerTitlePanel>
  );
};
