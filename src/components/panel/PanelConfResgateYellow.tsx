import { ReactNode } from 'react';

import { ContentTextoBgPanelYellow } from '../pages/ContentTextoPanelYellow';
import { ContentCardPagePanelTitle } from '../pages/ContentCardPagePanelTitle';

type TypePanelConfResgateYellow = {
  isbgcolor?: boolean;
  titulo?: string;
  subtitulo?: string;
  children?: ReactNode | JSX.Element;
};
export const PanelConfResgateYellow = ({
  isbgcolor,
  titulo,
  subtitulo,
  children
}: TypePanelConfResgateYellow) => {
    return (
    <ContentTextoBgPanelYellow isbgcolor={isbgcolor}>
      <ContentCardPagePanelTitle>
        <h3>{titulo}</h3>
      </ContentCardPagePanelTitle>
      <h4>{subtitulo}</h4>
         {children}
    </ContentTextoBgPanelYellow>
  );
};
