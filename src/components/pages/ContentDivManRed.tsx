import { ReactNode } from 'react';

import * as Lg from './style';

type PropsContentDivManRed = {
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivManRed = ({
  label,
  statedata,
  children
}: PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManRed>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Lg.ContainerDivManRed>
  );
};

export default ContentDivManRed;
