import { ReactNode } from 'react';
import * as Lg from './styled';

type PropsLogin = {
  children?: ReactNode | JSX.Element;
}
export const ContentLoginPg = ({children}:PropsLogin) => {
  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex>
        { children }
      </Lg.ContainerLoginFlex>
    </Lg.ContainerLogin>
  );
}
