import * as Lg from '../../../styles/styledLogin';

type TypeContentTitleLogin = {
  modotitle?: string;
};
export const ContentTitleLogin = ({ modotitle }: TypeContentTitleLogin) => {
  return (
    <Lg.ContainerTitleLogin>
      <h2>{modotitle}</h2>
    </Lg.ContainerTitleLogin>
  );
};
