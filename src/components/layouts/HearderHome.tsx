import "../../styles/global";
import "../../styles/styled.d.ts";
import * as Pg from './styled.ts'

import Switch from "react-switch";

import { ContentHeaderImgSys } from "./headerHome/ContentHeaderImgSys.tsx";
import { ContentHearderItens } from "./headerHome/ContentHearderItens.tsx";
import { ContentHearderMain } from "./ContentHearderMain.tsx";
import { ContentHeaderTitle } from "./headerHome/ContentHeaderTitle.tsx";
import { ContentHearderRight } from "./headerHome/ContentHearderRight.tsx";
import { ContentHearderItensBar } from "./headerHome/ContentHearderItensBar.tsx";
import ContentPagesButton from "./ContentPagesButton.tsx"

type PropsHearderHome ={
  img?: string;
  onclick?: () => void;
  title?: string;
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
}
export const HearderHome = ({img, onclick, title, onchange, ischeck, onLogin }:PropsHearderHome) => {

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
         <ContentPagesButton titbtn={"Logar..."} onClick={onLogin} />
         <ContentPagesButton titbtn={"BTN-2"} />
         <Pg.ContainerPagesButton>
            <Switch
              onChange={onchange}
              checked={ ( ischeck === true ? false : true) }
              checkedIcon={false}
              uncheckedIcon={false}
              height={15}
              width={50}
              handleDiameter={25}
              onHandleColor="#21ba02"
              offHandleColor="#fa140c"
              onColor="#b4b5b4"
              offColor="#b0b0b0"
              borderRadius={10}
            />
          </Pg.ContainerPagesButton>
        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
}