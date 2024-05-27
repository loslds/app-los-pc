import * as MD from './styles';

type TypeTitleModal = {
  id?: string;
  titulo?: string;
};
export const TitleModal = ({ id, titulo }: TypeTitleModal) => {
  return (
    <MD.ContainerModalTitle id={id}>{<h3>{titulo}</h3>}</MD.ContainerModalTitle>
  );
};
