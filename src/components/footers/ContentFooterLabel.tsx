import * as F from './styles';

type TypeFooterLabel = {
  title?: string;
};
export const ContentFooterLabel = ({ title }: TypeFooterLabel) => {
  return (
    <F.ContainerLabelFooter>
      <label>{title}</label>
    </F.ContainerLabelFooter>
  );
};
