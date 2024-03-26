import styled from "styled-components";

import semimg from '../../../assets/svgs/semimg.svg';

type TypeContainerPanel = {
  open?: boolean;
  pwidth? : string;
}
export const ContainerPanel = styled.div<TypeContainerPanel>`
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

export const ContainerPanelFlex = styled.div`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 10px 0px 10px;
  margin: 5px 10px 5px 10px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;


///////////////////////////////

export const ContainerBtnSRigth = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;

export const ContainerCustonBtn = styled.div<{ pxheight? : string;}>`
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: ${({ pxheight }) => pxheight || '165px'};
  display: flex;
  //flex-wrap: wrap;
  //flex-flow: row;
  justify-content: center;
  align-items: center;
  //align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;

type ButtonOnOffImgType = {
  img?: string;
  };
  export const ButtonDefaulImg = styled.button<ButtonOnOffImgType>`
  border: 2px;
  border-radius: 3px;
  margin: 2px 5px 2px 5px;
  color: ${(props) => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  height: 30px;
  min-width: 30px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  `;
  

type Propsbtncuston ={
  pheight?: string;
  pwidth?: string;
  img?: string;
  title?: string;
}
export const ButtonCustonbtnImg = styled.button<Propsbtncuston>`
  border: none;
  margin: 2px 5px 2px 5px;
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: ${({ pheight }) => pheight || '125px'};
  width: ${({ pwidth }) => pwidth || '125px'};
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
///////////////////////////////////////////////

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


