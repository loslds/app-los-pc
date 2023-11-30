
import { ReactNode } from 'react';
import * as Hm from '../styled';

type PropsHearderRight = {
  children?: ReactNode | JSX.Element;
}
export const ContentHearderRight = ({children}:PropsHearderRight) => {
  return (
    <Hm.ContainerHeaderRight>
      <Hm.ContainerHearderRightFlex>
        { children }
      </Hm.ContainerHearderRightFlex>
    </Hm.ContainerHeaderRight>
  );
}