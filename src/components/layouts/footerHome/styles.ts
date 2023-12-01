
import styled from "styled-components"; 
////////////////////////////////////////////
/** Content da Area de cada coluna foot */
////////////////////////////////////////////
/**          colun Default                */
type PropsFooterCollun = {
  pwidth?: string;
 };
export const ContainerFooterColluns = styled.div<PropsFooterCollun>`
  border: 1px solid ;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 15px 2px 10px;
  min-height: 60px;
  width: ${({ pwidth }) => pwidth || '33%'};
  background: transparent;
  display: flex;
  flex-flow: wrap;
  &:hover {
    background-color: #acacac;
  }
`;

export const ContainerFooterCollunsFlex = styled.div`
  border: none; /*1px dashed red;*/
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 10px 10px 10px 10px;
  width: 98%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
export const ContainerTitleFooter = styled.div`
  border: none;
  //border: 1px dashed red;
  padding: 0px 0px 0px 0px;
  margin: 0px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
export const ContainerLabelFooter = styled.div`
  border: none;
  //border: 1px dashed red;
  padding: 0px 0px 0px 0px;
  margin: 0px;
  max-width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  label {
    padding: 0px 10px 0px 10px;
    line-height: 16px;
    font-size: 16px;
    text-decoration: none;
    ;
  }
`;