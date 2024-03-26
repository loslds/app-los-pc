import { ReactNode } from 'react';

//import * as Lg from '../../../styles/styledLogin';
import * as Lg1 from './styled';

/*
*styled-component -> ContainerPaneL -> ContainerPanelFlex 
* mostrar ou não Painel -> isopen?: boolean;
* setar Largura desejada -> pwidth?: string;
* 
* receber conponentes filhos -> children?: ReactNode | JSX.Element;

*/

type TypeContentSidePanelBotton = {
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
const ContentSidePanelBotton = ({
  open,
  pwidth,
  children
}: TypeContentSidePanelBotton) => {
  return (
    <Lg1.ContainerPanel open={open} pwidth={pwidth}>
      <Lg1.ContainerPanelFlex>{children}</Lg1.ContainerPanelFlex>
    </Lg1.ContainerPanel>
  );
};

export default ContentSidePanelBotton;
