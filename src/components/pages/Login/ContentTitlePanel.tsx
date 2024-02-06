import * as Lg from './styled';

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
