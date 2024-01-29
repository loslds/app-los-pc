import React from 'react';

type StateAcesso = {
  idacesso: number;
  idemp: number;
  nmfant: string;
  iduser: number;
  idnmuser: string;
  pswuser: string;
  pin: string;
  mail: string;
  fonec: string;
  lvMod: number;
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
  mdConfig: boolean,
  pinAdm: number;
  page: string;
  logado: boolean;
  datetimei: string;
  datetimef: string;
  tempo: string;
};

export const initialData: StateAcesso = {
  idacesso: 0,
  idemp: 0,
  nmfant: '',
  iduser: 0,
  idnmuser: '',
  pswuser: '',
  pin: '',
  mail: '',
  fonec: '',
  lvMod: 0,
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
  pinAdm: 9999,
  page: '',
  logado: false,
  datetimei: '',
  datetimef: '',
  tempo: ''
};

export enum AcessoActions {
  setIdAces,
  setIdEmp,
  setNmFant,
  setIdUser,
  setIdNmUser,
  setPswUser,
  setPin,
  setMail,
  setFoneC,
  setLvMod,
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
  setPinAdm,
  setPage,
  setLogado,
  setDtIni,
  setDtFim,
  setTmp
};

type AcessoAction = {
  type: AcessoActions;
  payload: any;
};

type AcessoContextType = {
  state: StateAcesso;
  dispatch: (action: AcessoAction) => void;
};

const AcessoReducer = (state: StateAcesso, action: AcessoAction) => {
  switch (action.type) {
    case AcessoActions.setIdAces: return { ...state, idacesso: action.payload };
    case AcessoActions.setIdEmp: return { ...state, idemp: action.payload };
    case AcessoActions.setNmFant: return { ...state, nmfant: action.payload };
    case AcessoActions.setIdUser: return { ...state, iduser: action.payload };
    case AcessoActions.setIdNmUser: return { ...state, idnmuser: action.payload };
    case AcessoActions.setPswUser: return { ...state, pswuser: action.payload };
    case AcessoActions.setPin: return { ...state, pin: action.payload };
    case AcessoActions.setMail: return { ...state, mail: action.payload };
    case AcessoActions.setFoneC: return { ...state, fonec: action.payload };
    case AcessoActions.setLvMod: return { ...state, lvMod: action.payload };
    case AcessoActions.setMdRecep: return { ...state, ndrecep: action.payload };
    case AcessoActions.setNmRecep: return { ...state, nmrecep: action.payload };
    case AcessoActions.setMdDesig: return { ...state, mddesig: action.payload };
    case AcessoActions.setNmDesig: return { ...state, nmdesig: action.payload };
    case AcessoActions.setMdProdu: return { ...state, mdprodu: action.payload };
    case AcessoActions.setNmProdu: return { ...state, nmprodu: action.payload };
    case AcessoActions.setMdAcaba: return { ...state, mdacaba: action.payload };
    case AcessoActions.setNmAcaba: return { ...state, nmacaba: action.payload };
    case AcessoActions.setMdExped: return { ...state, mdexped: action.payload };
    case AcessoActions.setNmExped: return { ...state, nmexped: action.payload };
    case AcessoActions.setMdAdmin: return { ...state, mdadmin: action.payload };
    case AcessoActions.setNmAdmin: return { ...state, nmadmin: action.payload };
    case AcessoActions.setMdMaster: return { ...state, mdmaster: action.payload };
    case AcessoActions.setNmMaster: return { ...state, nmmaster: action.payload };
    case AcessoActions.setMdConfig: return { ...state, mdconfig: action.payload };
    case AcessoActions.setNmConfig: return { ...state, nmconfig: action.payload };
    case AcessoActions.setPinAdm: return { ...state, pinadm: action.payload };
    case AcessoActions.setPage: return { ...state, page: action.payload };
    case AcessoActions.setLogado: return { ...state, logado: action.payload };
    case AcessoActions.setDtIni: return { ...state, datetimei: action.payload };
    case AcessoActions.setDtFim: return { ...state, datetimef: action.payload };
    case AcessoActions.setTmp: return { ...state, tempo: action.payload };
    default: return state;
    }
  };

const AcessoContext = React.createContext<AcessoContextType | undefined>(
  undefined
);

type AcessoProviderProps = {
  children: React.ReactNode;
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
