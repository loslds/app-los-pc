import * as Hm from '../styled';
import { ContentPages } from '../ContentPages';
import { HearderLogin } from '../../headers/HearderLogin';
//import { FooterLogin } from '../../footers/FooterLogin';
import { ReactNode } from 'react';

type PropsLayoutLogin = {
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
export const LayoutLogin = ({
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
}: PropsLayoutLogin) => {
  return (
    <ContentPages>
      <HearderLogin
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
