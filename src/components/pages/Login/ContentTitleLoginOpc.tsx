
import * as Lg from './styled';

type PropsLoginTitleOpc = {
  titleopc?: string;
}
export const ContentTitleLoginOpc = ({titleopc}:PropsLoginTitleOpc) => {
  return (
    <Lg.ContainerTitleLoginOpc>
      <h4>{ titleopc }</h4>
    </Lg.ContainerTitleLoginOpc>
  );
}
