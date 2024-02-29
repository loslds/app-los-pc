import { ContentInput } from './ContentInput';

type PropsConttRadioOpc = {
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: number ;
  onclick?: () => void;
  titulo?: string;
};

export const ContentRadioOpc = ({
  disabled,
  id,
  name,
  value,
  onclick,
  titulo
}: PropsConttRadioOpc) => {
  return (
    <ContentInput>
      <input
        disabled={disabled}
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={onclick}
      />
      <label>{titulo}</label>
    </ContentInput>
  );
};
