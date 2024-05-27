import * as MD from './styles';

type TypeDivTitleModal = {
  title?: string;
};
export const DivTitleModal = ({ title }: TypeDivTitleModal) => {
  return (
    <MD.ContainerCenterDiv>
      <label>{title}</label>
    </MD.ContainerCenterDiv>
  );
};
