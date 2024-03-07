import React from 'react';

type StateAcesso = {
  currentstep: number;

  idacesso: number;
  pinAdm: number;
  page: string;

  idemp: number;
  nmfant: string;
  iduser: number;
  idnmuser: string;
  pswuser: string;
  mdlogin: number;
  nmlogin: string;
  nrcont: number;
  nmcont: string;

  pin: string;
  mail: string;
  fonec: string;
  nmRecep: string;
  mdRecep: boolean;
  nmDesig: string;
  mdDesig: boolean;
  nmProdu: string;
  mdProdu: boolean;
  nmAcaba: string;
  mdAcaba: boolean;
  nmExped: string;
  mdExped: boolean;
  nmAdmin: string;
  mdAdmin: boolean;
  nmMaster: string;
  mdMaster: boolean;
  nmConfig: string;
  mdConfig: boolean;
  modulo: string;
  aplicacao: string;
  logado: boolean;
  datetimei: string;
  datetimef: string;
  tempo: string;
};

export const initialData: StateAcesso = {
  currentstep: 0|1|2|3|4|5,
  idacesso: 0,
  pinAdm: 9999,
  page: '',

  idemp: 0,
  nmfant: '',
  idnmuser: '',
  pswuser: '',
  mdlogin: 0,
  nmlogin: '',
  nrcont: 0,
  nmcont: '',

  iduser: 0,
  pin: '',
  mail: '',
  fonec: '',
  
  nmRecep: 'Recepção',
  mdRecep: false,
  nmDesig: 'Design',
  mdDesig: false,
  nmProdu: 'Produção',
  mdProdu: false,
  nmAcaba: 'Acabamento',
  mdAcaba: false,
  nmExped: 'Expedição',
  mdExped: false,
  nmAdmin: 'Administração',
  mdAdmin: false,
  nmMaster: 'Master',
  mdMaster: false,
  nmConfig: 'Config',
  mdConfig: false,

  modulo: '',
  aplicacao: '',
  logado: false,
  datetimei: '',
  datetimef: '',
  tempo: ''
};

export enum AcessoUseActions {
  setCurrentStep,
  setIdAces,
  setPinAdm,
  setPage,
  setIdEmp,
  setNmFant,
  setIdNmUser,
  setPswUser,

  setMdLogin,
  setNmLogin,
  setNrCont,
  setNmCont,

  setIdUser,
  setPin,
  setMail,
  setFoneC,

  setMdRecep,
  setNmRecep,
  setMdDesig,
  setNmDesig,
  setMdProdu,
  setNmProdu,
  setMdAcaba,
  setNmAcaba,
  setMdExped,
  setNmExped,
  setMdAdmin,
  setNmAdmin,
  setMdMaster,
  setNmMaster,
  setMdConfig,
  setNmConfig,
  
  setModulo,
  setAplicacao,
  setLogado,
  setDtIni,
  setDtFim,
  setTmp
}

type AcessoAction = {
  type: AcessoUseActions;
  payload: any;
};

type AcessoContextType = {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};

const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case AcessoUseActions.setCurrentStep:
      return { ...state, currentstep: action.payload };
    case AcessoUseActions.setIdAces:
      return { ...state, idacesso: action.payload };
    case AcessoUseActions.setPinAdm:
      return { ...state, pinadm: action.payload };
    case AcessoUseActions.setPage:
      return { ...state, page: action.payload };

    case AcessoUseActions.setIdEmp:
      return { ...state, idemp: action.payload };
    case AcessoUseActions.setNmFant:
      return { ...state, nmfant: action.payload };
    case AcessoUseActions.setIdNmUser:
      return { ...state, idnmuser: action.payload };
    case AcessoUseActions.setPswUser:
      return { ...state, pswuser: action.payload };

    case AcessoUseActions.setMdLogin:
      return { ...state, mdlogin: action.payload };
    case AcessoUseActions.setNmLogin:
      return { ...state, nmlogin: action.payload };
    case AcessoUseActions.setNrCont:
      return { ...state, nrcont: action.payload };
    case AcessoUseActions.setNmCont:
      return { ...state, nmcont: action.payload };
  

    case AcessoUseActions.setIdUser:
      return { ...state, iduser: action.payload };
    case AcessoUseActions.setPin:
      return { ...state, pin: action.payload };
    case AcessoUseActions.setMail:
      return { ...state, mail: action.payload };
    case AcessoUseActions.setFoneC:
      return { ...state, fonec: action.payload };

    case AcessoUseActions.setMdRecep:
      return { ...state, ndrecep: action.payload };
    case AcessoUseActions.setNmRecep:
      return { ...state, nmrecep: action.payload };
    case AcessoUseActions.setMdDesig:
      return { ...state, mddesig: action.payload };
    case AcessoUseActions.setNmDesig:
      return { ...state, nmdesig: action.payload };
    case AcessoUseActions.setMdProdu:
      return { ...state, mdprodu: action.payload };
    case AcessoUseActions.setNmProdu:
      return { ...state, nmprodu: action.payload };
    case AcessoUseActions.setMdAcaba:
      return { ...state, mdacaba: action.payload };
    case AcessoUseActions.setNmAcaba:
      return { ...state, nmacaba: action.payload };
    case AcessoUseActions.setMdExped:
      return { ...state, mdexped: action.payload };
    case AcessoUseActions.setNmExped:
      return { ...state, nmexped: action.payload };
    case AcessoUseActions.setMdAdmin:
      return { ...state, mdadmin: action.payload };
    case AcessoUseActions.setNmAdmin:
      return { ...state, nmadmin: action.payload };
    case AcessoUseActions.setMdMaster:
      return { ...state, mdmaster: action.payload };
    case AcessoUseActions.setNmMaster:
      return { ...state, nmmaster: action.payload };
    case AcessoUseActions.setMdConfig:
      return { ...state, mdconfig: action.payload };
    case AcessoUseActions.setNmConfig:
      return { ...state, nmconfig: action.payload };

    case AcessoUseActions.setLogado:
      return { ...state, logado: action.payload };
    case AcessoUseActions.setModulo:
      return { ...state, modulo: action.payload };
    case AcessoUseActions.setAplicacao:
      return { ...state, aplicacao: action.payload };

    case AcessoUseActions.setDtIni:
      return { ...state, datetimei: action.payload };
    case AcessoUseActions.setDtFim:
      return { ...state, datetimef: action.payload };
    case AcessoUseActions.setTmp:
      return { ...state, tempo: action.payload };
 
    default:
      return state;
  }
};

const AcessoContext = React.createContext<AcessoContextType | undefined>(
  undefined
);

type AcessoProviderProps = {
  children: React.ReactNode | JSX.Element;
};
export const AcessoProvider = ({ children }: AcessoProviderProps) => {
  const [state, dispatch] = React.useReducer(AcessoReducer, initialData);
  const value = { state, dispatch };
  return (
    <AcessoContext.Provider value={value}>{children}</AcessoContext.Provider>
  );
};

export const AcessoUseForm = () => {
  const context = React.useContext(AcessoContext);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default AcessoContext;
