import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsBntConfimation = {
  children?: ReactNode | JSX.Element;
};
export const ContentButtonsConfirmation = ({
  children
}: PropsBntConfimation) => {
  return <Lg.ContainerBtnLoginSRigth>{children}</Lg.ContainerBtnLoginSRigth>;
};
