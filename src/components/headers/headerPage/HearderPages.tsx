
import "../../../styles/global.ts";
import * as Pg from '../../layouts/styled.ts'

import Switch from "react-switch";

import { ContentHeaderImgSys } from "../ContentHeaderImgSys.tsx";
import { ContentHearderItens } from "../ContentHearderItens.tsx";
import { ContentHearderMain } from "../ContentHearderMain.tsx";
import { ContentHeaderTitle } from "../ContentHeaderTitle.tsx";
import { ContentHearderRight } from "../ContentHearderRight.tsx";
import { ContentHearderItensBar } from "../ContentHearderItensBar.tsx";
import ContentPagesButton from "../../layouts/ContentPagesButton.tsx"

type PropsHearderPage ={
  img?: string;
  onclick?: () => void;
  title?: string; // titulo page
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
}
export const HearderPage = ({img, onclick, title, onchange, ischeck, onLogin }:PropsHearderPage) => {

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