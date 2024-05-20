import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderLogin1 } from '../../headers/HearderLogin1';
//import { FooterLogin } from '../../footers/FooterLogin';
import { ReactNode } from 'react';

type PropsLayoutLogin1 = {
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
export const LayoutLogin1 = ({
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
}: PropsLayoutLogin1) => {
  return (
    <ContentPages>
      <HearderLogin1
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
      <Hm.DivisionPgHztal />
      <Hm.ContainerBody>
        <Hm.ContainerPage>{children}</Hm.ContainerPage>
      </Hm.ContainerBody>
    </ContentPages>
  );
};
