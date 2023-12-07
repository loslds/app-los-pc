import React from 'react';

import * as MD from './styles';

type PropsMainModal = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const MainModal: React.FC<PropsMainModal> = ({ id, children }) => {
  return (
    <MD.Content id={id}>
      <MD.ContentTextoModulos >
        {children}
        {/* <C.ContainerModal>{children}</C.ContainerModal> */}
      </MD.ContentTextoModulos>
    </MD.Content>
  );
};

export default MainModal;
