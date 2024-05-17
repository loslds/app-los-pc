import * as Pg from '../layouts/styled.ts';

import logosys from '../../assets/pngs/logosys.png';
import help from '../../assets/svgs/help.svg';
import esclamacao from '../../assets/svgs/esclamacao.svg';

import React from 'react';
import Switch from 'react-switch';

import { ContentHeaderButtonSys } from './ContentHeaderButtonSys.tsx';
import { ContentHearderItens } from './ContentHearderItens.tsx';
import { ContentHearderMain } from './ContentHearderMain.tsx';
import { ContentHeaderTitle } from './ContentHeaderTitle.tsx';
import { ContentHearderRight } from './ContentHearderRight.tsx';
import { ContentHearderItensBar } from './ContentHearderItensBar.tsx';
import ContentPagesButton from '../layouts/ContentPagesButton.tsx';

import PageModal from '../Modal/PageModal.tsx';
import CardInfoLogin from '../contentHelp/CardInfoLogin.tsx';
import CardAcessoSistema from '../contentHelp/CardAcessoSistema.tsx';

type PropsHearderLogin = {
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
  children?: ReactNode | JSX.Element;
};
export const HearderLogin = ({
  imgsys,
  titbtnsys,
  onclicksys,
  titlepg,
  imghpg,
  titbtnhpg,
  onclickhpg,
  imgopen,
  titbtnopen,
  onclickopen
  ischeck,
  onchange,
}: PropsHearderLogin) => {
  const [isonpanel, setIsOnPanel] = React.useState(false);
  const [isonhelp, setIsOnHelp] = React.useState(false);

  const handlerOnPanel = React.useCallback(() => {
    setIsOnPanel((oldState) => !oldState);
  }, []);


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
          <ContentPagesButton
            img={esclamacao}
            titbtn={'Panel...'}
            onClick={handlerOnPanel}
          />

          {/** imagem botão do help da pagina */}
          <ContentPagesButton
            img={imghpg}
            titbtn={titbtnhpg}
            onClick={onclickhpg}
          />
          {/** imagem botão do Acão da pagina */}
          <ContentPagesButton
            img={imgopen}
            titbtn={titbtnopen}
            onClick={onclickopen}
          />
          {/** imagem botão switch do Padrão fundo Preto ou Branco */}          
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
