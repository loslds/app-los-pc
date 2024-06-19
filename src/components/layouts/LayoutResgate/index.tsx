import { ReactNode } from 'react';
import * as Ly from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderResgate } from '../../headers/HearderResgate';

type TypeLayoutResgate = {
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
export const LayoutResgate = ({
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
}: TypeLayoutResgate) => {
  return (
    <ContentPages>
      <HearderResgate
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
        <Ly.ContainerPage>{children}</Ly.ContainerPage>
      </Ly.ContainerBody>
    </ContentPages>
  );
};
