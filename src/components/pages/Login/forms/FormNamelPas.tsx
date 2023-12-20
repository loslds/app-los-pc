
import * as Lg from '../styled';

type PropsNamePas = {
  onchange?: () => void;
}
export const FormNamePas = ({onchange}:PropsNamePas) => {
  return (
    <form name="namepas">
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
        <label>Pass...</label>
        <input 
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          onChange={onchange}
        />
      </Lg.InputCenter>      
    </form>
  );
}
