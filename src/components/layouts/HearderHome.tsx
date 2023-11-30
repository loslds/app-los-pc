import "../../styles/global";

import "../../styles/styled.d.ts";
//import * as Hm from './styled';
//import {useState} from 'react';
import Switch from "react-switch";
//import light from "../../styles/themes/light.ts";
//import dark from "../../styles/themes/dark.ts";

import { ContentHeaderImgSys } from "./ContentHeaderImgSys";
import { ContentHearderItens } from "./ContentHearderItens";
import { ContentHearderMain } from "./ContentHearderMain";
import { ContentHeaderTitle } from "./ContentHeaderTitle";
import { ContentHearderRight } from "./ContentHearderRight";
import { ContentHearderItensBar } from "./ContentHearderItensBar";






type PropsHearderHome ={
  img?: string;
  onclick?: () => void;
  title?: string;
  toggleTheme(): void;
  // checked?: boolean;
}
export const HearderHome = ({img, onclick, title, toggleTheme }:PropsHearderHome) => {

  // const [theme,setTheme] = useState(dark);

  // const ToggleTheme = () => {
  //   setTheme(theme.name === 'dark' ? light : dark);  
  // };

  return (
    <ContentHearderMain>
      <ContentHearderItens>
        <ContentHeaderImgSys img={img} onclick={onclick}/>
      </ContentHearderItens>
      <ContentHearderItens>
        <ContentHeaderTitle title={title}/>
      </ContentHearderItens>
      <ContentHearderRight>
        <ContentHearderItensBar>
          <Switch 
            onChange={toggleTheme}
            checked={false}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={50}
            handleDiameter={25}
            onHandleColor="#21ba02"
            offHandleColor="#fa140c"
            onColor="#b4b5b4"
            offColor="#b0b0b0"
          
          />
        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
}