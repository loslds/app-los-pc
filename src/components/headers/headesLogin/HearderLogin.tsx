import * as Pg from '../../layouts/styled.ts';

import logosys from '../../../assets/pngs/logosys.png';
import help from '../../../assets/svgs/help.svg';
import esclamacao from '../../../assets/svgs/esclamacao.svg';

import React from 'react';
import Switch from 'react-switch';

import { ContentHeaderButtonSys } from '../ContentHeaderButtonSys.tsx';
import { ContentHearderItens } from '../ContentHearderItens.tsx';
import { ContentHearderMain } from '../ContentHearderMain.tsx';
import { ContentHeaderTitle } from '../ContentHeaderTitle.tsx';
import { ContentHearderRight } from '../ContentHearderRight.tsx';
import { ContentHearderItensBar } from '../ContentHearderItensBar.tsx';
import ContentPagesButton from '../../layouts/ContentPagesButton.tsx';

import PageModal from '../../Modal/PageModal.tsx';
import { CardInfoLogin } from '../../contentHelp/CardInfoLogin.tsx';
import { CardAcessoSistema } from '../../contentHelp/CardAcessoSistema.tsx';

type PropsHearderLogin = {
  onclick?: () => void;
  title?: string; // titulo page
  onchange: () => void;
  ischeck?: boolean;
};
export const HearderLogin = ({
  onclick,
  title,
  onchange,
  ischeck
}: PropsHearderLogin) => {
  const [isonpanel, setIsOnPanel] = React.useState(false);
  const [isonhelp, setIsOnHelp] = React.useState(false);

  const handlerOnPanel = React.useCallback(() => {
    setIsOnPanel((oldState) => !oldState);
  }, []);

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
            img={esclamacao}
            titbtn={'Panel...'}
            onClick={handlerOnPanel}
          />
          <ContentPagesButton
            img={help}
            titbtn={'Ajuda...'}
            onClick={handlerOnHelp}
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
            ispx={true}
            ptop={'1%'}
            pwidth={'65%'}
            pheight={'50%'}
            titulo={'Acesso Sistema.'}
            onClose={() => setIsOnHelp(false)}
          >
            <CardAcessoSistema />
          </PageModal>
        ) : null}

        {isonpanel ? (
          <PageModal
            ispx={true}
            ptop={'1%'}
            pwidth={'65%'}
            //pheight={'70%'}
            titulo={'DADOS Context Login.'}
            onClose={() => setIsOnPanel(false)}
          >
            <CardInfoLogin />
          </PageModal>
        ) : null}
      </ContentHearderRight>
    </ContentHearderMain>
  );
};
