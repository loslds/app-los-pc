
import { ReactNode } from 'react';
import * as Lg from "./styled";

type PropsBntMainLogin = {
  children?: ReactNode | JSX.Element;
}
export const ContentMainButtonsLogin = ({children}:PropsBntMainLogin) => {
  return (
    <Lg.ContainerMainButtonsLogin>
      <Lg.ContainerMainButtonsLoginFlex>
        { children }
      </Lg.ContainerMainButtonsLoginFlex>
    </Lg.ContainerMainButtonsLogin>
  );
}
