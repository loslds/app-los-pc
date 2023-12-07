import React from 'react';

import { ContainerForm, ContainerFormFlex } from '../styledForm';

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export const MainFormAcces: React.FC<Props> = ({ id, children }) => {
  return (
    <ContainerForm id={id}>
      <ContainerFormFlex>{children}</ContainerFormFlex>
    </ContainerForm>
  );
};
