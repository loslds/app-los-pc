import * as Lg from '../../../styles/styledLogin';

type TypeContentButtonTitleImg = {
  isimg?: boolean;
  title?: string;
  children?: React.ReactNode;
  //React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonTitleImg = ({ isimg, title, children }: TypeContentButtonTitleImg) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      {isimg ? <label>{title}</label> : null}
      {children}
    </Lg.ContainerBtnLoginSRigth>
  );
};


