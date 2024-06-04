import * as Pg from './stylePage';

type TypeContentBoxLabelPage = {
  label?: string;
};
export const ContentBoxLabelPage = ({ label }: TypeContentBoxLabelPage) => {
  return (
    <Pg.ContainerBoxLabelPage>
      <label>{label}</label>
    </Pg.ContainerBoxLabelPage>
  );
};
