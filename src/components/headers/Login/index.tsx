import * as Hed from '../styledHeader';

import Switch from 'react-switch';

import { ContentHearderMain } from '../ContentHearderMain';
import { ContentHearderItens } from '../ContentHearderItens';
import { ContentHeaderButtonSys } from '../ContentHeaderButtonSys';
import { ContentHeaderTitle } from '../ContentHeaderTitle';
import { ContentHearderRight } from '../ContentHearderRight';
import { ContentHearderItensBar } from '../ContentHearderItensBar';
import { ContentHeaderButton } from '../ContentHeaderButton';

type PropsHearderLogando = {
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
  ischeck: boolean;
  onchange: () => void;
};
export const HearderLogando = ({
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
  ischeck,
  onchange
}: PropsHearderLogando) => {
  return (
    <ContentHearderMain>
      <ContentHearderItens>
        <ContentHeaderButtonSys
          img={imgsys}
          title={titbtnsys}
          onClick={onclicksys}
        />
      </ContentHearderItens>
      <ContentHearderItens>
        <ContentHeaderTitle title={titlepg} />
      </ContentHearderItens>
      <ContentHearderRight>
        <ContentHearderItensBar>
          {/** imagem botão do help da pagina */}
          <ContentHeaderButton
            imgbtn={imghpg}
            titbtn={titbtnhpg}
            onClick={onclickhpg}
          />
          {/** imagem botão do Acão da pagina */}
          <ContentHeaderButton
            imgbtn={imgopen}
            titbtn={titbtnopen}
            onClick={onclickopen}
          />
          {/** imagem botão switch do Padrão fundo Preto ou Branco */}
          <Hed.ContainerHeaderButton>
            <Switch
              onChange={onchange}
              checked={ischeck === true ? false : true}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={50}
              handleDiameter={20}
              onHandleColor="#21ba02"
              offHandleColor="#fa140c"
              onColor="#b4b5b4"
              offColor="#b0b0b0"
              borderRadius={10}
            />
          </Hed.ContainerHeaderButton>
        </ContentHearderItensBar>
      </ContentHearderRight>
    </ContentHearderMain>
  );
};