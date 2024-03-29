import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxMainEnd = {
  pwidth?: string;
  children?: ReactNode;
};
const ContentCardBoxMainEnd = ({
  pwidth,
  children
}: TypeContentCardBoxMainEnd) => {
  <Pg.ContainerCardDivMainEnd pxwidth={pwidth}>
    {children}
  </Pg.ContainerCardDivMainEnd>;
};

export default ContentCardBoxMainEnd;

// import { ReactNode } from 'react';
// import * as Pg from './stylePage';

// type TypeContentCardBoxMainPage = {
//   children?: ReactNode;
// };
// const ContentCardBoxMainPage = ({ children }: TypeContentCardBoxMainPage) => {
//   return <Pg.ContainerCardBoxMainPage>{children}</Pg.ContainerCardBoxMainPage>;
// };

// export default ContentCardBoxMainPage;
