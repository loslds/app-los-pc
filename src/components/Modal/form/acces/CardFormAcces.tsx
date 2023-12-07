import React from 'react';

import { ContainerCardForm, ContainerCardFormFlex } from '../styledForm';

type Props = {
  id?: string;
  children?: React.ReactNode;
};

export const CardFormAcces: React.FC<Props> = ({ id, children }) => {
  return (
    <ContainerCardForm id={id}>
      <ContainerCardFormFlex>{children}</ContainerCardFormFlex>
    </ContainerCardForm>
  );
};
