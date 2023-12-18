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
export const ContainerLoginFlex = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: 60%;
  //min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  border: 1px dashed red;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

