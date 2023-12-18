
import * as Lg from '../styled';

type PropsNamePas = {
  onclick?: () => void;
}
export const FormNamePas = ({onclick}:PropsNamePas) => {
  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex>

      <form name="namepas">
        <div>
          <label>Pseudônimo</label>
          <input 
            type="text"
            id="text"
            name="text"
            placeholder="Seu pseudônimo."
          />
        </div>

        <div>
          <label>Password</label>
          <input 
            type="password"
            id="password"
            name="password"
            placeholder="**********"
          />
        </div>

        <div>
          <label> Deseja <button onClick={onclick}>Acessar com PIN</button></label>
        </div>

      </form>

      </Lg.ContainerLoginFlex>
    </Lg.ContainerLogin>
  );
}
