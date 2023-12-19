import styled from "styled-components";

export const ContainerLogin = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  min-height: 50px;
  flex-wrap: wrap;
  justify-content: center;
  //align-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
export const ContainerLoginFlex = styled.div<{pwidth? : string}>`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '50%'};
  //min-height: 60px;
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
  border: none;/* dashed red;*/
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

////////////////////////////////////
// opções
export const ContainerLoginOpc = styled.div<{pwidth? : string}>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: ${({ pwidth }) => pwidth || '30%'};
  display: flex;
  min-height: 50px;
  flex-wrap: wrap;
  justify-content: center;
  //align-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
export const ContainerLoginFlexOpc = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: 100%;
  //min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
export const ContainerTitleLoginOpc = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double #dfdfdf;
  min-height: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #bbbbbb;
`;
/////////////////////////////////
export const ContainerInput = styled.div`
  border: none; /* solid red;*/
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 99%;
  display: flex;
  flex-flow: wrap;

  
  /* flex-direction: column;
  justify-content: left;
  align-content: center; */
`;
export const InputCenter = styled.div`
  border: 1px dashed green;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  justify-content: left;
  //align-content: center;
  //align-items: center;
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