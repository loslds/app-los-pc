import React from 'react';

import * as MD from './styles';

type PropsMainModal = {
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const MainModalErro: React.FC<PropsMainModal> = ({ptop, pheight, pwidth, children }) => {
  return (
    <MD.ContentInfoErro>
      <MD.ContainerInfoErroModal ptop={ptop} pheight={pheight} pwidth={pwidth} >
        {children}
      </MD.ContainerInfoErroModal>
    </MD.ContentInfoErro>
  );
};

export default MainModalErro;
