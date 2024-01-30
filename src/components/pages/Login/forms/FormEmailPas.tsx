import { useState, useEffect } from 'react';

import * as Lg from '../styled';

export const FormEmailPas = () => {
  const [strmail, setStrMail] = useState('');
  const [strpass, setStrPass] = useState('');
  const [ismailpass, setIsMailPass] = useState(false);
  
  useEffect(() => {
    if (strmail === '' || null){ 
      setIsMailPass(false);
    }
    else if (strpass === '' || null){
      setIsMailPass(false);
    }
    if (strmail !== '' && strpass === ''){ 
      setIsMailPass(false);
    }
    if (strmail === '' && strpass !== ''){ 
      setIsMailPass(false);
    }
    else { setIsMailPass(true); }
  },[strmail,strpass,ismailpass]);

  

  return (
    <form name="emailpas">
      <Lg.InputCenter>
        <label>E-Mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={strmail}
          placeholder="email@email.com(.br)"
          onChange={(e) => setStrMail(e.target.value)}
        />
      </Lg.InputCenter>
      <Lg.InputCenter>
        <label>Pass..</label>
        <input
          type="password"
          id="password"
          name="password"
          value={strpass}
          placeholder="**********"
          onChange={(e) => setStrPass(e.target.value)}
        />
      </Lg.InputCenter>
    </form>
  );
};
