import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsBntMainLogin = {
  children?: ReactNode | JSX.Element;
};
export const ContentMainButtonsLogin = ({ children }: PropsBntMainLogin) => {
  return (
    <Lg.ContainerMainButtonsLogin>
      <Lg.ContainerMainButtonsLoginFlex>
        {children}
      </Lg.ContainerMainButtonsLoginFlex>
    </Lg.ContainerMainButtonsLogin>
  );
};
