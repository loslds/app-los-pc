import * as Lg from '../../../styles/styledLogin';

type PropsLoginTitle = {
  modotitle?: string;
};
export const ContentTitleLogin = ({ modotitle }: PropsLoginTitle) => {
  return (
    <Lg.ContainerTitleLogin>
      <h2>{modotitle}</h2>
    </Lg.ContainerTitleLogin>
  );
};
