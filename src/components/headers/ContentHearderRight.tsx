import { ReactNode } from 'react';
import * as Hed from '../layouts/styled';

type TypeContentHearderRight = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderRight = ({ children }: TypeContentHearderRight) => {
  return (
    <Hed.ContainerHeaderRight>
      <Hed.ContainerHearderRightFlex>{children}</Hed.ContainerHearderRightFlex>
    </Hed.ContainerHeaderRight>
  );
};
