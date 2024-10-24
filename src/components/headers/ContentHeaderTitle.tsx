import * as Hed from './styledHeader';

type TypeContentHeaderTitle = {
  title?: string;
};
export const ContentHeaderTitle = ({ title }: TypeContentHeaderTitle) => {
  return (
    <Hed.ContainerTitleHeader>
      <h1>{title}</h1>
    </Hed.ContainerTitleHeader>
  );
};
