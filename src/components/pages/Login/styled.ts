import styled from "styled-components";

export const ContainerButtonBgImgColorOn = styled.div`
  border: 1px solid green;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px;
  background-color: ${props => props.theme.colors.backgroundColor};
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: ${props => props.theme.colors.backgroundColorOn};
   }
`;




