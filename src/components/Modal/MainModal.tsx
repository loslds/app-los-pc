import React from 'react';

import * as MD from './styles';

type TypeMainModal = {
  id?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const MainModal = ({ id, children }: TypeMainModal) => {
  return (
    <MD.Content id={id}>
      <MD.ContentTextoModulos>{children}</MD.ContentTextoModulos>
    </MD.Content>
  );
};
