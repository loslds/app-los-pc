
import * as Lg from '../styled';


type PropsEmailPin = {
  onclick?: () => void;
}
export const FormEmailPin = ({onclick}:PropsEmailPin) => {
  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex>
      <form name="emailpin">
        <div>
          <label>E-Mail</label>
          <input 
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com(.br)"
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
