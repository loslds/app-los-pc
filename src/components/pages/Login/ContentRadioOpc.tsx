import { ContentInput } from './ContentInput';

type PropsConttInputOpc = {
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: number;
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
}: PropsConttInputOpc) => {
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
