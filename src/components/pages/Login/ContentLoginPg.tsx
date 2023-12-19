import { ReactNode } from 'react';
import * as Lg from './styled';

type PropsLogin = {
  pwidth? : string;
  children?: ReactNode | JSX.Element;
}
export const ContentLoginPg = ({pwidth, children}:PropsLogin) => {
  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex pwidth={pwidth}>
        { children }
      </Lg.ContainerLoginFlex>
    </Lg.ContainerLogin>
  );
}
