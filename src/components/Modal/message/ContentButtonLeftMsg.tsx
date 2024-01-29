import React from 'react';
import * as Msg from './styled-msg';

type PropsBtnLeft = {
  children?: React.ReactNode;
};

export const ContentButtonLeftMsg = ({children }: PropsBtnLeft) => {
  return (
    <Msg.ContainerButtonLeftMsg>
      {children}
    </Msg.ContainerButtonLeftMsg>
  );
};