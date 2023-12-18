
import * as Lg from '../styled';

type PropsEmailPas = {
  onclick?: () => void;
}
export const FormEmailPas = ({onclick}:PropsEmailPas) => {

  return (
    <Lg.ContainerLogin>
      <Lg.ContainerLoginFlex>
      <form name="emailpas">
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
