
import * as Lg from './styled';

type PropsLoginTitle = {
  modotitle?: string;
}
export const ContentTitleLogin = ({modotitle}:PropsLoginTitle) => {
  return (
    <Lg.ContainerTitleLogin>
      <h2>{ modotitle }</h2>
    </Lg.ContainerTitleLogin>
  );
}
