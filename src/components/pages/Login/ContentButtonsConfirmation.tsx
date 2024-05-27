import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentButtonsConfirmation = {
  children?: ReactNode | JSX.Element;
};
export const ContentButtonsConfirmation = ({
  children
}: TypeContentButtonsConfirmation) => {
  return <Lg.ContainerBtnLoginSRigth>{children}</Lg.ContainerBtnLoginSRigth>;
};
