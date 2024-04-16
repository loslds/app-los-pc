import React from 'react';
import Switch from 'react-switch';

// import '../../layouts/styled.ts';
import * as Pg from '../layouts/styled.ts';

import {AcessoUseForm} from '../contexts/login/ContextAcesso.tsx';

import logosys from '../../assets/pngs/logosys.png';
import abouthome from '../../assets/svgs/abouthome.svg';
import avatar from '../../assets/svgs/avatar.svg';

import { ContentHeaderButtonSys } from './ContentHeaderButtonSys.tsx';
import { ContentHearderItens } from './ContentHearderItens.tsx';
import { ContentHearderMain } from './ContentHearderMain.tsx';
import { ContentHeaderTitle } from './ContentHeaderTitle.tsx';
import { ContentHearderRight } from './ContentHearderRight.tsx';
import { ContentHearderItensBar } from './ContentHearderItensBar.tsx';
import ContentPagesButton from '../layouts/ContentPagesButton.tsx';

import PageModal from '../Modal/PageModal.tsx';

import CardAcessoSistema from '../contentHelp/CardAcessoSistema.tsx';

type PropsHearderHome = {
  onclick?: () => void;
  title?: string;
  onchange: () => void;
  ischeck?: boolean;
  onLogin?: () => void;
};
export const HearderHome = ({
  onclick,
  title,
  onchange,
  ischeck,
  onLogin
}: PropsHearderHome) => {

  const { state } = AcessoUseForm();
  const [isonpanel, setIsOnPanel] = React.useState(false);

  console.log('state.logado HearderHome :', state.logado);

  return (
    <ContentHearderMain>
      <ContentHearderItens>
        <ContentHeaderButtonSys img={logosys} onClick={onclick} />
      </ContentHearderItens>
      <ContentHearderItens>
        <ContentHeaderTitle title={title} />
      </ContentHearderItens>
      <ContentHearderRight>
        <ContentHearderItensBar>
          <ContentPagesButton
            img={abouthome}
            titbtn={'Help Acesso Login...'}
            onClick={() => {
              setIsOnPanel(true);
            }}
          />
          <ContentPagesButton
            img={avatar}
            titbtn={'Logar...'}
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

        {isonpanel ? (
          <PageModal
            ptop={'1%'}
            pwidth={'65%'}
            pheight={'80%'}
            titulo={'Help do Acesso ao Sistema.'}
            onclose={() => setIsOnPanel(false)}
          >
            <CardAcessoSistema />
          </PageModal>
        ) : null}
      </ContentHearderRight>
    </ContentHearderMain>
  );
};
