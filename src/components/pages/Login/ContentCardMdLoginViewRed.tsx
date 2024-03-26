//import * as Lg from '../style.ts';
//import * as Pg from '../style.ts';

import ContentDivManRed from '../ContentDivMainRed';
import { ReactNode } from 'react';

type ContentCardMdLoginViewRed = {
  label?: string;
  statedata?: string;
  children: ReactNode | JSX.Element;
};
const ContentCardMdLoginViewRed = ({
  label,
  statedata,
  children
}: ContentCardMdLoginViewRed) => {
  <ContentDivManRed label={label} statedata={statedata}>
    {children}
  </ContentDivManRed>;
};

export default ContentCardMdLoginViewRed;
