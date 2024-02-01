import "../../../styles/global.ts";
import "../../layouts/styled.ts";
import * as Pg from '../../layouts/styled.ts'

import Switch from "react-switch";

import { ContentHeaderButtonSys } from "../ContentHeaderButtonSys.tsx";
import { ContentHearderItens } from "../ContentHearderItens.tsx";
import { ContentHearderMain } from "../ContentHearderMain.tsx";
import { ContentHeaderTitle } from "../ContentHeaderTitle.tsx";
import { ContentHearderRight } from "../ContentHearderRight.tsx";
import { ContentHearderItensBar } from "../ContentHearderItensBar.tsx";
import ContentPagesButton from "../../layouts/ContentPagesButton.tsx"

type PropsHearderHome ={
  onclick?: () => void;
  title?: string;
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
}
export const HearderHome = ({onclick, title, onchange, ischeck, onLogin }:PropsHearderHome) => {

  return (
    <ContentHearderMain>
      <ContentHearderItens>
        <ContentHeaderButtonSys onClick={onclick} />
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