
import ContentInputPage from '../ContentInputPage';

type PropsContInputOpc = {
  disabled?: boolean;
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  maxlength?: number;
  placeholder?: string;
  onchange?: () => void;
  titulo?: string;
};

export const ContentInputOpc = ({
  disabled,
  id,
  type,
  name,
  value,
  maxlength,
  placeholder,
  onchange,
  titulo
}: PropsContInputOpc) => {
  return (
    <ContentInputPage>
      <label>{titulo}</label>
      <input
        disabled={disabled}
        type={type}
        id={id}
        name={name}
        value={value}
        maxLength={maxlength}
        placeholder={placeholder}
        onChange={onchange}
      />
    </ContentInputPage>
  );
};
