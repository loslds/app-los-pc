import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentMainButtonsLogin = {
  children?: ReactNode | JSX.Element;
};
export const ContentMainButtonsLogin = ({ children }: TypeContentMainButtonsLogin) => {
  return (
    <Lg.ContainerMainButtonsLogin>
      <Lg.ContainerMainButtonsLoginFlex>
        {children}
      </Lg.ContainerMainButtonsLoginFlex>
    </Lg.ContainerMainButtonsLogin>
  );
};
