import { ReactNode } from 'react';

import * as Lg from './style';

type PropsContentDivManRedBtn = {
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivManRedBtn = ({
  label,
  statedata,
  children
}: PropsContentDivManRedBtn) => {
  return (
    <Lg.ContainerDivManRed>
      <label>{label}</label>
      <h3>{statedata}</h3>
    </Lg.ContainerDivManRed>

    <Lg.ContainerCardDivMainEnd>
      {children}
    </Lg.ContainerCardDivMainEnd>
    
  );
};

export default ContentDivManRedBtn;
