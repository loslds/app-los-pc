import React from 'react';
import * as Msg from './styled-msg';

type PropsCardMsg = {
  children?: React.ReactNode;
};

export const ContentMainMsg = ({children }: PropsCardMsg) => {
  return (
    <Msg.ContainerCardMsg>
      <Msg.ContainerCardMsgFlex>{children}</Msg.ContainerCardMsgFlex>
    </Msg.ContainerCardMsg>
  );
};