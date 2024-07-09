import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
  // export interface DefaultTheme {
    name : string;
    colors : {
      primary : string;
      secundary : string;
      ligthGray : string;
      backgroundColor : string;
      textColor : string;
      backgroundColorOn : string;
      backgroundColorOff : string;
    }
  } 
}