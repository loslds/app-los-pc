import * as Pg from '../layouts/styled.ts';

import Switch from 'react-switch';

import { ContentHeaderButtonSys } from './ContentHeaderButtonSys.tsx';
import { ContentHearderItens } from './ContentHearderItens.tsx';
import { ContentHearderMain } from './ContentHearderMain.tsx';
import { ContentHeaderTitle } from './ContentHeaderTitle.tsx';
import { ContentHearderRight } from './ContentHearderRight.tsx';
import { ContentHearderItensBar } from './ContentHearderItensBar.tsx';
import { ContentPagesButton } from '../layouts/ContentPagesButton.tsx';

type PropsHearderLogged = {
  imgsys?: string;
  titbtnsys?: string;
  onclicksys?: () => void;

  titlepg?: string;

  imghpg?: string;
  titbtnhpg?: string;
  onclickhpg?: () => void;

  imgopen?: string;
  titbtnopen?: string;
  onclickopen?: () => void;

  imgreg?: string;
  titbtnreg?: string;
  onclickreg?: () => void;

  onchange: () => void;
  ischeck?: boolean;
};
export const HearderLogged = ({
  imgsys,
  titbtnsys,
  onclicksys,

  titlepg,

  imghpg,
  titbtnhpg,
  onclickhpg,

  imgopen,
  titbtnopen,
  onclickopen,

  imgreg,
  titbtnreg,
  onclickreg,

  onchange,
  ischeck
}: PropsHearderLogged) => {
  return (
    <ContentHearderMain>
      {/** imagem botão do logo da pagina */}
      <ContentHearderItens>
        <ContentHeaderButtonSys
          img={imgsys}
          title={titbtnsys}
          onClick={onclicksys}
        />
      </ContentHearderItens>
      {/** Titulo da pagina */}
      <ContentHearderItens>
        <ContentHeaderTitle title={titlepg} />
      </ContentHearderItens>

      <ContentHearderRight>
        <ContentHearderItensBar>
          {/** imagem botão do help da pagina */}
          <ContentPagesButton
            imgbtn={imghpg}
            titbtn={titbtnhpg}
            onClick={onclickhpg}
          />
          
          {/** imagem botão do Acão da pagina */}
          <ContentPagesButton
            imgbtn={imgopen}
            titbtn={titbtnopen}
            onClick={onclickopen}
          />

          {/** imagem botão do Restate da pagina */}
          <ContentPagesButton
            imgbtn={imgreg}
            titbtn={titbtnreg}
            onClick={onclickreg}
          />

          {/** botão switch do Padrão fundo Preto ou Branco */}
          <Pg.ContainerPagesButton>
            <Switch
              onChange={onchange}
              checked={ischeck === true ? false : true}
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
};
