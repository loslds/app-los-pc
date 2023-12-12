//import "../../styles/global";

//import { Link } from "react-router-dom";
import { ReactNode } from 'react';

import * as Mn from './stylesMn';

type PropsAreaMenu= {
  children?: ReactNode | JSX.Element;
}
export const MenuMain = ({children}: PropsAreaMenu) => {

  return (
    <Mn.ContainerMenu>
      {children}
    </Mn.ContainerMenu>
  );
};

{/* <nav className="menu">
<ul>
  <li><Link to ="/">Home</Link></li>
</ul>
<ul>
  <li><Link to ="/about">About</Link></li>
</ul>
</nav> */}
