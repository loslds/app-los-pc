import * as F from './styles';

type TypeFooterTitle = {
  title?: string;
};
export const ContentFooterTitle = ({ title }: TypeFooterTitle) => {
  return (
    <F.ContainerTitleFooter>
      <h3>{title}</h3>
    </F.ContainerTitleFooter>
  );
};
