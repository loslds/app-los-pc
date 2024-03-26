import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsBntConfimation = {
  children?: ReactNode | JSX.Element;
};
const ContentButtonsConfirmation = ({
  children
}: PropsBntConfimation) => {
  return <Lg.ContainerBtnLoginSRigth>{children}</Lg.ContainerBtnLoginSRigth>;
};

export default ContentButtonsConfirmation;