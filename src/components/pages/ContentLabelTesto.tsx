
import * as Pg from './stylePage';
import { ReactNode } from 'react';

type TypeContentLabelTesto = {
  testo?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentLabelTesto = ({
  testo,
  children
}: TypeContentLabelTesto) => {
  return (
    <Pg.ContainerLabelTexto>
      <label>
        &emsp;&emsp;&emsp;
        {testo}
        {children}
      </label>  
    </Pg.ContainerLabelTexto>
  );
};
