import * as Lg from '../../../../styles/styledLogin';

type PropsEmailPin = {
  onchange?: () => void;
};
export const FormEmailPin = ({ onchange }: PropsEmailPin) => {
  return (
    <form name="emailpin">
      <Lg.InputCenter>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email@email.com(.br)"
          onChange={onchange}
        />
      </Lg.InputCenter>

      <Lg.InputCenter>
        <label>PIN....</label>
        <input
          type="text"
          id="pin"
          name="pin"
          placeholder="****"
          onChange={onchange}
        />
      </Lg.InputCenter>
    </form>
  );
};
