
import { ReactNode } from 'react';

import { LayoutMyAccount } from "../../../layouts/LayoutMyAccount/index.tsx";

type PropsThemeMyAccount = {
  onclick?: () => void;
  children?: ReactNode | JSX.Element;
  onchange: () => void;
  ischeck: boolean;
  onLogin?:  () => void;
  onclickhome?:  () => void;
}
export const ThemeMyAccount = ({children, onclick, onchange, ischeck, onclickhome }:PropsThemeMyAccount) => {

  return (
    <LayoutMyAccount onclick = {onclick} title = {"Minha Conta."} onchange = {onchange} ischeck={ischeck} onclickhome={onclickhome} >
      {children}
    </LayoutMyAccount>
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
