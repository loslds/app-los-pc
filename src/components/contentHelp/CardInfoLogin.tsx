import * as MD from '../Modal/styles';

import CardModalTexto from '../Modal/CardModalTexto';

import { AcessoUseForm } from '../contexts/login/ContextAcesso';

const CardInfoLogin = () => {
  const { state } = AcessoUseForm();

  return (
    <CardModalTexto>
      <MD.ContentTextoModulos>
        <h4>Informações do Ambiente Login.</h4>

        <p>CurrentStep..: {state.currentstep}</p>
        <p>Acesso logado: {state.logado ? 'True' : 'False'}</p>
        <p>IdAcesso.....: {state.idacesso === 0 ? '0' : state.idacesso}</p>
        <p>idempresa....: {state.idemp === 0 ? '0' : state.idemp}</p>
        <p>fantempresa..: {state.nmfant === '' ? 'Vasio' : state.nmfant}</p>
        <p>IdUser.......: {state.iduser === 0 ? '0' : state.iduser}</p>
        <p>
          IdNmUser......: {state.idnmuser === '' ? 'Vasio' : state.idnmuser}
        </p>
        <p>PswUser.......: {state.pswuser === '' ? 'Vasio' : state.pswuser}</p>
        <p>Pin..........: {state.pin === '' ? 'Vasio' : state.pin}</p>
        <p>Mail.........: {state.mail === '' ? 'Vasio' : state.mail}</p>
        <p>FoneC........: {state.fonec === '' ? 'Vasio' : state.fonec}</p>

        <p>NmRecep...: {state.nmRecep}</p>
        <p>MdRecep..: {state.mdRecep ? 'True' : 'False'}</p>
        <p>NmDesig...: {state.nmDesig}</p>
        <p>MdDesig..: {state.mdDesig ? 'True' : 'False'}</p>
        <p>NmProdu...: {state.nmProdu}</p>
        <p>MdProdu..: {state.mdProdu ? 'True' : 'False'}</p>
        <p>NmAcaba...: {state.nmAcaba}</p>
        <p>MdAcaba..: {state.mdAcaba ? 'True' : 'False'}</p>
        <p>NmExped...: {state.nmExped}</p>
        <p>MdExped..: {state.mdExped ? 'True' : 'False'}</p>
        <p>NmAdmin...: {state.nmAdmin}</p>
        <p>MdAdmin..: {state.mdAdmin ? 'True' : 'False'}</p>
        <p>NmMaster..: {state.nmMaster}</p>
        <p>MdMaster.: {state.mdMaster ? 'True' : 'False'}</p>
        <p>NmConfig..: {state.nmConfig}</p>
        <p>MdConfig.: {state.mdConfig ? 'True' : 'False'}</p>
        <p>PinAdm....: {state.pinAdm === 0 ? '0' : state.pinAdm}</p>
        <p>Page......: {state.page === '' ? 'Vasio' : state.page}</p>
        <p>Modulo....: {state.modulo === '' ? 'Vasio' : state.modulo}</p>
        <p>Aplicacao.: {state.aplicacao === '' ? 'Vasio' : state.aplicacao}</p>
        <p>DateTimeI.: {state.datetimei === '' ? 'Vasio' : state.datetimei}</p>
        <p>DateTimeF.: {state.datetimef === '' ? 'Vasio' : state.datetimef}</p>
      </MD.ContentTextoModulos>
    </CardModalTexto>
  );
};

export default CardInfoLogin;
