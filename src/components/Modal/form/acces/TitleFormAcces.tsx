import React from 'react';

import { ContainerFormTitle } from '../styledForm';

type Props = {
  titulo?: string;
  children?: React.ReactNode;
};

export const TitleFormAcces: React.FC<Props> = ({ titulo, children }) => {
  return (
    <ContainerFormTitle>
      <h2>{children || titulo}</h2>
    </ContainerFormTitle>
  );
};
