import React from 'react';

import * as MD from './styles';

type TypeMainModalErro = {
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const MainModalErro = ({
  ptop,
  pheight,
  pwidth,
  children
}: TypeMainModalErro) => {
  return (
    <MD.ContentInfoErro>
      <MD.ContainerInfoErroModal ptop={ptop} pheight={pheight} pwidth={pwidth}>
        {children}
      </MD.ContainerInfoErroModal>
    </MD.ContentInfoErro>
  );
};
