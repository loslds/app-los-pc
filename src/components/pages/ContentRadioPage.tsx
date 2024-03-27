import ContentInputPage from './ContentInputPage';

type TypeContentRadioPage = {
  disabled?: boolean;
  id?: string;
  name?: string;
  value?: number;
  onclick?: () => void;
  titulo?: string;
};

export const ContentRadioPage = ({
  disabled,
  id,
  name,
  value,
  onclick,
  titulo
}: TypeContentRadioPage) => {
  return (
    <ContentInputPage>
      <input
        disabled={disabled}
        type="radio"
        id={id}
        name={name}
        value={value}
        onClick={onclick}
      />
      <label>{titulo}</label>
    </ContentInputPage>
  );
};
