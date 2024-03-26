import * as Lg from '../../../styles/styledLogin';

type BntTitleLg = {
  isimg?: boolean;
  title?: string;
  children?: React.ReactNode;
  //React.MouseEventHandler<HTMLButtonElement>;
};
const ContentButtonTitleImg = ({ isimg, title, children }: BntTitleLg) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      {isimg ? <label>{title}</label> : null}
      {children}
    </Lg.ContainerBtnLoginSRigth>
  );
};

export default ContentButtonTitleImg;
