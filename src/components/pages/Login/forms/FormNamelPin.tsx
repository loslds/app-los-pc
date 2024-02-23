import * as Lg from '../../../../styles/styledLogin';

type PropsNamePin = {
  onchange?: () => void;
};
export const FormNamePin = ({ onchange }: PropsNamePin) => {
  return (
    <form name="namepin">
      <Lg.InputCenter>
        <label>Pseud.</label>
        <input
          type="text"
          id="text"
          name="text"
          placeholder="Seu pseudônimo."
          onChange={onchange}
        />
      </Lg.InputCenter>

      <Lg.InputCenter>
        <label>PIN.....</label>
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
