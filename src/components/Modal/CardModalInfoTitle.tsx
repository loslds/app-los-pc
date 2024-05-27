import * as MD from './styles';

type TypeCardModalInfoTitle = {
  titulo?: string;
};
export const CardModalInfoTitle = ({ titulo }: TypeCardModalInfoTitle) => {
  return (
    <MD.ContainerInfoErroModalTitle>
      {<h3>{titulo}</h3>}
    </MD.ContainerInfoErroModalTitle>
  );
};
