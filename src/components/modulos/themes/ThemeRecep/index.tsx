
import { ReactNode } from 'react';

import { LayoutRecep } from "../../../layouts/LayoutRecep/index.tsx";

type PropsThemeRecep = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  onchange: () => void;
  ischeck: boolean;

  children?: ReactNode | JSX.Element;

  imgopen?: string;
  titbtnopen?: string;
  onClickOpen?:  () => void;
}
export const ThemeRecep = ({imgsys, titbtnsys, onclicksys, titlepg, onchange, ischeck,  children, imgopen,titbtnopen, onClickOpen }:PropsThemeRecep) => {

  return (
    <LayoutRecep imgsys={imgsys} titbtnsys={titbtnsys} onclicksys = {onclicksys} title = {titlepg} onchange = {onchange} ischeck={ischeck} imgopen={imgopen} titbtnopen={titbtnopen}
    onClickOpen={onClickOpen} >
      {children}
    </LayoutRecep>
  );
};


// const [theme,setTheme] = useState(dark);
// const [ischeck,setIscheck] = useState(false);
// const ToggleTheme = () => {
//   if (theme.name === 'dark'){
//     setTheme(light);
//     setIscheck(true);    
//   } else {
//     setTheme(dark);
//     setIscheck(false);    
//   }
// };

// const navigate = useNavigate();
// const goto = (path: string) => {
//   return () => {
//     navigate(path);
//   };
// };

// return (
//   <ThemeProvider theme={theme}>
//     <LayoutRecep onclick = {goto('/')} title = {"Recepção."} onchange = {ToggleTheme} ischeck={ischeck} onLogin={goto('/login')} >
//       {children}
//     </LayoutRecep>
//   </ThemeProvider>
// );
