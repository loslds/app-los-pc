import * as Ly from '../layouts/styled';

type TypeContentHeaderTitle = {
  title?: string;
};
export const ContentHeaderTitle = ({ title }: TypeContentHeaderTitle) => {
  return (
    <Ly.ContainerTitleHeader>
      <h1>{title}</h1>
    </Ly.ContainerTitleHeader>
  );
};
