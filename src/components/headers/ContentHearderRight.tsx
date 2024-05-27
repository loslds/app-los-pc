import { ReactNode } from 'react';
import * as Ly from '../layouts/styled';

type TypeContentHearderRight = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderRight = ({ children }: TypeContentHearderRight) => {
  return (
    <Ly.ContainerHeaderRight>
      <Ly.ContainerHearderRightFlex>{children}</Ly.ContainerHearderRightFlex>
    </Ly.ContainerHeaderRight>
  );
};
