// import "../../../styles/global.ts";
import * as Pg from '../layouts/styled.ts';

import logosys from '../../assets/pngs/logosys.png';
import help from '../../assets/svgs/help.svg';
import voltar from '../../assets/svgs/home.svg';

import React from 'react';
import Switch from 'react-switch';

import { ContentHeaderButtonSys } from './ContentHeaderButtonSys.tsx';
import { ContentHearderItens } from './ContentHearderItens.tsx';
import { ContentHearderMain } from './ContentHearderMain.tsx';
import { ContentHeaderTitle } from './ContentHeaderTitle.tsx';
import { ContentHearderRight } from './ContentHearderRight.tsx';
import { ContentHearderItensBar } from './ContentHearderItensBar.tsx';
import { ContentPagesButton } from '.././layouts/ContentPagesButton.tsx';

import { PageModal } from '../Modal/PageModal.tsx';
import { CardDesemvolver } from '../contentHelp/CardDesenvolver.tsx';

type PropsHearderPage = {
  onclick?: () => void;
  title?: string; // titulo page
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
};
export const HearderPage = ({
  onclick,
  title,
  onchange,
  ischeck,
  onLogin
}: PropsHearderPage) => {
  const [isonhelp, setIsOnHelp] = React.useState(false);

  const handlerOnHelp = React.useCallback(() => {
    setIsOnHelp((oldState) => !oldState);
  }, []);

  return (
    <ContentHearderMain>
      <ContentHearderItens>
        <ContentHeaderButtonSys
          img={logosys}
          title={'Home...'}
          onClick={onclick}
        />
      </ContentHearderItens>

      <ContentHearderItens>
        <ContentHeaderTitle title={title} />
      </ContentHearderItens>

      <ContentHearderRight>
        <ContentHearderItensBar>
          <ContentPagesButton
            imgbtn={help}
            titbtn={'Ajuda...'}
            onClick={handlerOnHelp}
          />

          <ContentPagesButton
            imgbtn={voltar}
            titbtn={'Voltar...'}
            onClick={onLogin}
          />

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

        {isonhelp ? (
          <PageModal
            ptop={'1%'}
            pwidth={'65%'}
            pheight={'50%'}
            titulo={'Help do Acesso Sistema.'}
            onclose={() => setIsOnHelp(false)}
          >
            <CardDesemvolver />
          </PageModal>
        ) : null}
      </ContentHearderRight>
    </ContentHearderMain>
  );
};
