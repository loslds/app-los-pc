

import { ContentInput } from './ContentInput';


type PropsConttInputOpc = {
  id?:string;
  name?: string;
  value?: number;
  onclick?: () => void;
  titulo?: string;
}

export const ContentRadioOpc = ({id, name, value, onclick, titulo}:PropsConttInputOpc) => {
  return (
    <ContentInput>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={onclick}
      />
      <label>{titulo}</label>
    </ContentInput>
  );
}