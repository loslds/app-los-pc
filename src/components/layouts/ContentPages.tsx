import { ReactNode } from 'react';
import * as Hm from './styled';


type PropsPages = {
  children?: ReactNode | JSX.Element;
}
export const ContentPages = ({children}:PropsPages) => {
  return (
    <Hm.Container>
      <Hm.ContainerFlex>
        { children }
      </Hm.ContainerFlex>
    </Hm.Container>
  );
}