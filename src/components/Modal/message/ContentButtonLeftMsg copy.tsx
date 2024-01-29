import React from 'react';
import * as Msg from './styled-msg';

type PropsBtnRight = {
  children?: React.ReactNode;
};

export const ContentButtonRightMsg = ({children }: PropsBtnRight) => {
  return (
    <Msg.ContainerButtonRightMsg>
      {children}
    </Msg.ContainerButtonRightMsg>
  );
};