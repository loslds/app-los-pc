import { ReactNode } from 'react';
import * as Ly from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderRecepcao } from '../../headers/HearderRecepcao';

type TypeLayoutRecepcao = {
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
export const LayoutRecepcao = ({
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
  onchange,
  children
}: TypeLayoutRecepcao) => {
  return (
    <ContentPages>
      <HearderRecepcao
        imgsys={imgsys}
        titbtnsys={titbtnsys}
        onclicksys={onclicksys}
        titlepg={titlepg}
        imghpg={imghpg}
        titbtnhpg={titbtnhpg}
        onclickhpg={onclickhpg}
        imgopen={imgopen}
        titbtnopen={titbtnopen}
        onclickopen={onclickopen}
        ischeck={ischeck}
        onchange={onchange}
      />
      <Ly.DivisionPgHztal />
      <Ly.ContainerBody>

        <h1>SideMenu help con SideMenu Acao</h1>
        
        <Ly.ContainerPage>{children}</Ly.ContainerPage>
      </Ly.ContainerBody>
      <Ly.DivisionPgHztal />
      <h1>Footer Recepção</h1>
    </ContentPages>
  );
};
