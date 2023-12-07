import React from 'react';

import * as MD from './styles';
type Props = {
  title?: string;
};
const DivTitleModal: React.FC<Props> = ({title }) => {
  return (
    <MD.ContainerCenterDiv>
      <label>{title}</label>
    </MD.ContainerCenterDiv>
  );
};
export default DivTitleModal;
