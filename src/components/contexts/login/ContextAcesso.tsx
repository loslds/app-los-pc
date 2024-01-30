import React from 'react';

type StateAcesso = {
  currentstep: number;
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
  mdConfig: boolean;
  pinAdm: number;
  page: string;
  logado: boolean;
  datetimei: string;
  datetimef: string;
  tempo: string;
};

export const initialData: StateAcesso = {
  currentstep: 0,
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

export enum AcessoUseActions {
  setCurrentStep,
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
    case AcessoUseActions.setIdEmp:
      return { ...state, idemp: action.payload };
    case AcessoUseActions.setNmFant:
      return { ...state, nmfant: action.payload };
    case AcessoUseActions.setIdUser:
      return { ...state, iduser: action.payload };
    case AcessoUseActions.setIdNmUser:
      return { ...state, idnmuser: action.payload };
    case AcessoUseActions.setPswUser:
      return { ...state, pswuser: action.payload };
    case AcessoUseActions.setPin:
      return { ...state, pin: action.payload };
    case AcessoUseActions.setMail:
      return { ...state, mail: action.payload };
    case AcessoUseActions.setFoneC:
      return { ...state, fonec: action.payload };
    case AcessoUseActions.setLvMod:
      return { ...state, lvMod: action.payload };
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
    case AcessoUseActions.setPinAdm:
      return { ...state, pinadm: action.payload };
    case AcessoUseActions.setPage:
      return { ...state, page: action.payload };
    case AcessoUseActions.setLogado:
      return { ...state, logado: action.payload };
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
