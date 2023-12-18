
import * as Lg from '../styled';


type PropsNamePin = {
  onclick?: () => void;
}
export const FormNamePin = ({onclick}:PropsNamePin) => {
  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex>
      <form name="namepin">
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
          <label>PIN</label>
          <input 
            type="text"
            id="pin"
            name="pin"
            placeholder="****"
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