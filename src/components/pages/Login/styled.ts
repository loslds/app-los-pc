import styled from "styled-components";

export const ContainerLogin = styled.div`
  border: none;/* 2px dashed yellow;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 50px;
  flex-wrap: wrap;
  justify-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
export const ContainerLoginFlex = styled.div<{pwidth? : string}>`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '65%'};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
export const ContainerTitleLogin = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double #dfdfdf;
  min-height: 35px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #bbbbbb;
`;

export const ContainerMainLogin = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 5px 5px;
  border: none;/* 2px dashed red;*/
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
//  flex-flow: row;
  justify-content: space-between;
  align-content: center;
//  align-items: center;
`;
////////////////////////////////////////
type PropsCollFormCenter = {
  pwidth? : string;
  height?: string;
  isopen?: boolean;
}
export const ContainerCollFormCenter = styled.div<PropsCollFormCenter>`
  border: 2px dashed white;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  min-width: ${({ pwidth }) => pwidth || '200px'};
  // min-height: ${({ height }) => height || '150px'};
  display: ${props => (props.isopen ? 'flex' : 'none')};
  flex-wrap: nowrap;
  flex-flow: row;
  //justify-content: left;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
//////////////////////////////////////

type Props = {
  pwidth? : string;
  height?: string;
}
export const ContainerLoginCollunsOpc = styled.div<Props>`
  border: 2px dashed blue;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  width: ${({ pwidth }) => pwidth || '200px'};
  min-height: ${({ height }) => height || '150px'};
  display: flex;
  flex-wrap: nowrap;
  flex-flow: row;
  justify-content: left;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

type PropsCollOpcCenter = {
  pwidth? : string;
  height?: string;
  isopen?: boolean;
}
export const ContainerLoginCollunsOpcCenter = styled.div<PropsCollOpcCenter>`
  border: 2px dashed greenyellow;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  min-width: ${({ pwidth }) => pwidth || '200px'};
  //min-height: ${({ height }) => height || '150px'};
  display: ${props => (props.isopen ? 'flex' : 'none')};
  flex-wrap: nowrap;
  flex-flow: row;
  justify-content: left;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
////////////////////////////////////
// opções
type PropsLoginOpc = {
  pwidth? : string;
  open?: boolean;
}
export const ContainerLoginOpc = styled.div<PropsLoginOpc>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '32%'};
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  display: ${props => (props.open ? 'flex' : 'none')};
  min-height: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ContainerLoginFlexOpc = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: 100%;
  min-height: 60px;
  display: flex row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
export const ContainerTitleLoginOpc = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background: #bbbbbb;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double #dfdfdf;
  min-height: 20px;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  align-content: center; 
`;
/////////////////////////////////
export const ContainerInput = styled.div`
  border: none;/* 1px solid green;*/
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
`;
export const InputCenter = styled.div`
  border: none;/* 1px dashed green;*/
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: left;
  align-content: center;
  align-items: center;
`;

export const InputPage = styled.input`
  border: 1px dashed red;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  max-inline-size: 100%;
  background-color: transparent;
  outline: 0;
  color: #fff;
  size: 18px;
  line-height: 20px;
`;
/////////////////////////////////
// panel dos botões do formulário
/////////////////////////////////
export const ContainerMainButtonsLogin = styled.div<{pwidth? : string}>`
  border: 1px solid red;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '32%'};
  min-height: 45px;

  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  display: flex;
  flex: content;
  flex-wrap: wrap row;
  justify-content: center;
  align-content: center;
  align-items: center ;
`;
export const ContainerMainButtonsLoginFlex = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 10px 0px 10px;
  margin: 5px 10px 5px 10px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center ;
`;

// botão

export const ContainerBtnLoginSRigth = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;


