import { ReactNode } from 'react';
import { LayoutRecepcao } from '../../../layouts/LayoutRecepcao';

type TypeThemeRecepcao = {
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
export const ThemeRecepcao = ({
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
}: TypeThemeRecepcao) => {
  return (
    <LayoutRecepcao
      imgsys={imgsys}
      titbtnsys={titbtnsys}
      onclicksys={onclicksys}
      titlepg={titlepg}
      imghpg={imghpg}
      titbtnhpg={titbtnhpg}
      onclickhpg={onclickhpg}
      imgopen={imgopen}
      titbtnopen={titbtnopen}
      ischeck={ischeck}
      onchange={onchange}
      onclickopen={onclickopen}
    >
      {children}
    </LayoutRecepcao>
  );
};
