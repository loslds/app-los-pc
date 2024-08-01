import React from 'react';

export type StateGethelp = {
  nmpnl?: string;
  nmlst?: string;
  sinal?: boolean;
};

export const initialData: StateGethelp = {
  nmpnl: '',
  nmlst: '',
  sinal: false
};

export enum GethelpUseActions {
  setNmPnl,
  setNmLst,
  setSinal
}

type GethelpAction = {
  type: GethelpUseActions;
  payload: any;
};

type GethelpContextType = {
  state: StateGethelp;
  dispatch: (action: GethelpAction) => void;
};

const GethelpReducer = (state: StateGethelp, action: GethelpAction) => {
  switch (action.type) {
    case GethelpUseActions.setNmPnl:
      return { ...state, nmpnl: action.payload };
    case GethelpUseActions.setNmLst:
      return { ...state, nmlst: action.payload };
    case GethelpUseActions.setSinal:
      return { ...state, sinal: action.payload };

    default:
      return state;
  }
};

const ContextGethelp = React.createContext<GethelpContextType | undefined>(
  undefined
);

type GethelpProviderProps = {
  children: React.ReactNode | JSX.Element;
};
export const GethelpProvider = ({ children }: GethelpProviderProps) => {
  const [state, dispatch] = React.useReducer(GethelpReducer, initialData);
  const value = { state, dispatch };
  return (
    <ContextGethelp.Provider value={value}>{children}</ContextGethelp.Provider>
  );
};

export const GethelpUseForm = () => {
  const context = React.useContext(ContextGethelp);
  if (context === undefined) {
    throw new Error('"Useform" precisa ser usado dentro do Provider!');
  }
  return context;
};

export default ContextGethelp;
