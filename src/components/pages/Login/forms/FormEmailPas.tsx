
import * as Lg from '../styled';



type PropsEmailPas = {
  
  onchange?: () => void;
}
export const FormEmailPas = ({onchange}:PropsEmailPas) => {




  return (
    <form name="emailpas">
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
        <label>Pass..</label>
        <input 
          type="password"
          id="password"
          name="password"
          placeholder="**********"
          onChange={()=>{}}
        />
      </Lg.InputCenter>
    </form>
  );
}
