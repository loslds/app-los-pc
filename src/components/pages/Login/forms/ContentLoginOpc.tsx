import { ReactNode } from 'react';
import * as Lg from '../styled';
import { ContentTitleLoginOpc } from '../ContentTitleLoginOpc';

type PropsLoginOpc = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  titleopc?: string;
}
export const ContentLoginOpc = ({pwidth, children, titleopc}:PropsLoginOpc) => {
  return (
    <Lg.ContainerLoginOpc pwidth={pwidth}>
      <Lg.ContainerLoginFlexOpc>
        <ContentTitleLoginOpc titleopc={titleopc} />
        { children }
      </Lg.ContainerLoginFlexOpc>
    </Lg.ContainerLoginOpc>
  );
}
