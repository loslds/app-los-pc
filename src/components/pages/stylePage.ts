
import styled from "styled-components";

import semimg from '../../assets/svgs/semimg.svg';

export const ContainerBodyItemPg = styled.div`
  top:0px;
  padding: 0px;
  margin: 0px;
  border: 1px solid;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  display: flex ;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;


////////////////////////////////////////////
export const ContainerBodyItensPage = styled.div`
  top: 0px;
  border: none;
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  max-width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  background: transparent;
`;

// content imagem Sys
export const ContainerBodyItens = styled.div`
  padding: 0px;
  margin: 0px;
  border: 2px double;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  background: transparent;
  display: flex ;
  flex-flow: column;
  flex-wrap: wrap;
  //justify-content: space-between;
  //align-items: center;
  //align-content: center;
`;
/////////////////////////////////////////////////////////
export const ContainerCardPage = styled.div`
  border: none;
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
type ContainerCardMainFlexType = {
  pwidth? : string;
};
export const ContainerCardPageFlex = styled.div<ContainerCardMainFlexType>`
  border: 3px double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: ${({ pwidth }) => pwidth || '65%'};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

type TypeContainerCardBoxMainPage = {
  pheight?: string;
};
export const ContainerCardBoxMainPage = styled.div<TypeContainerCardBoxMainPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  min-height: ${({ pheight }) => pheight || '20px'};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

type TypeContainerCardCenter = {
  pwidth? : string;
  open?: boolean;
}
export const ContainerCardBoxCenterPage = styled.div<TypeContainerCardCenter>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  //min-height: 50px;
  max-width: ${({ pwidth }) => pwidth || '100%'};
  color:  ${props => props.theme.colors.textColor};
  background-color: ${props => props.theme.colors.backgroundColor};
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContainerCardBoxCenterPageFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

type TypeContainerCardTitlePage = {
  pheight?: string;
};
export const ContainerCardPageTitle = styled.div<TypeContainerCardTitlePage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;
  min-height: ${({ pheight }) => pheight || '20px'};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

type TypeContainerCollunsCenterPage = {
  pwidth? : string;
  isopen?: boolean;
}
export const ContainerCollunsCenterPage = styled.div<TypeContainerCollunsCenterPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  min-width: ${({ pwidth }) => pwidth || '50px'};
  display: ${props => (props.isopen ? 'flex' : 'none')};
  flex-direction: column;
`;

export const ContainerInputPage = styled.div`
  border: none;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  //flex-wrap: nowrap;
  justify-content: left;
  align-items: center;
  align-content: center;

`;

type TypeContainerPanelPage = {
  open?: boolean;
  pwidth? : string;
}
export const ContainerPanelPage = styled.div<TypeContainerPanelPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '32%'};
  display: ${props => (props.open ? 'flex' : 'none')};
  min-height: 60px;
  flex-wrap: wrap;
  justify-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;

export const ContainerPanelPageFlex = styled.div`
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

  label {
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
  }
`;

export const ContainerBtnSRigthPage = styled.div`
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

type  TypeContainerCustonBtn ={
  pxheight?: string;
}
export const ContainerCustonBtnPage = styled.div<TypeContainerCustonBtn>`
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: ${({ pxheight }) => pxheight || '165px'};
  display: flex;
  justify-content: center;
  align-items: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;

type TypeButtonDefaulImgPage = {
  img?: string;
};
export const ButtonDefaulImgPage = styled.button<TypeButtonDefaulImgPage>`
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

type TypeCustonBntImgPage ={
  pheight?: string;
  pwidth?: string;
  img?: string;
  title?: string;
}
export const ButtonCustonBtnImgPage = styled.button<TypeCustonBntImgPage>`
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

type TypeCustonBntPage ={
  pxheight?: string;
}
export const ContainerCustonButton = styled.div<TypeCustonBntPage>`
  border: 1px red;
  border-color: #ffffff;
  border-radius: 5px;
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

type TypeBtnCcuston ={
  pheight?: string;
  pwidth?: string;
  img?: string;
  title?: string;
}
export const ButtonCustonImg = styled.button<TypeBtnCcuston>`
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

export const DivisionPgHztal = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #9c9c9c;
`;



///////////////////////////////////////////

export const ContainerImagem = styled.div`
  border: 1px solid yellow;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 3px 8px 3px 8px;
  max-width: 100%;
  background: ${props => props.theme.colors.backgroundColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;

export const ContainerCustonText = styled.div<{ pxheight? : string;}>`
  border: 1px red;
  border-color: #ffffff;

  //border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  
  background: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.textColor};
  width: 100%;
  min-height: ${({ pxheight }) => pxheight || '20px'};
  display: flex;
  flex-wrap: wrap;

  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  
  //flex-flow: row;
  //justify-content: center;
  //align-items: center;
  //align-content: center;
  h1 h2,h3,h4,h5 {
    display: flex;
    margin: 0px 10px 0px 10px;
    padding: 0px 10px 0px 10px;
    font-size: large;
    line-height: auto;
    font-weight: bold;
    h1 { font-size: 20px}
    h2 { font-size: 18px}
    h3 { font-size: 15px}
    h4 { font-size: 12px}
  }
  label {
    display: flex;
    margin: 0px 10px 0px 10px;
    padding: 0px 10px 0px 10px;
    font-size: large;
    line-height: normal;
  } 
`;
export const ContainerCustonImagem = styled.div<{ pxheight? : string;}>`
  border: 1px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.textColor};
  min-height: ${({ pxheight }) => pxheight || '50px'};
  display: flex;
  //flex-wrap: wrap;
  //flex-flow: row;
  //justify-content: center;
  //align-items: center;
  //align-content: center;
`;

export const DivisionPgHztalPage = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #9c9c9c;
`;

export const ContainerBoxLabelPage = styled.div`
  border: 1px double;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.colors.textColor};
  h4,
  label {
    display: flex;
    margin: 0px 10px 0px 0px;
    padding: 0px 10px 0px 0px;
    font-size: large;
    line-height: normal;
  }
  &:hover {
    border-color: red;
    Label {
      color: red;
    }
  }
`;

////////////////////////////////////////////////////////



type TypeContainerDivTestoAtenction = {
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivTestoAtenctionPage = styled.div<TypeContainerDivTestoAtenction>`
  border: 1px solid; 
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-width: ${({ pxwidth }) => pxwidth || '20%'};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  span {
    margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
      color: red;
    }
  h3 {  
    margin: 0px -2px 0px -2px;
    padding: 0px 0px 0px 0px;
    color: red;
  }
  &:hover {
    border: 1px dashed;
    border-color: red;
    label {
      color: red;
    }
  }
`;



type TypeContainerDivManYellow = {
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManYellow = styled.div<TypeContainerDivManYellow>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 10px 0px 0px;
  margin: 5px 10px 5px 10px;
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  /* size: 16px;
  line-height: 16px; */
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  &:hover {
    border-color: #FF8C00;
  }
`;

type TypeContainerDivManRed = {
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManRed = styled.div<TypeContainerDivManRed>`
  border: 1px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  //align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.textColor};
  background: ${(props) => props.theme.colors.backgroundColor};
  &:hover {
    border-color: red;
    label {
      color: red;
    }
  }
`;

export const ContainerCardDivMainLeft = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;

export const ContainerCardDivMainEnd = styled.div`
  border: 1px dashed;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  display: flex;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;

export const ContainerCardDivMainLeftRed = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 50px;
  max-width: 100%;
  background: ${(props) => props.theme.colors.backgroundColor};
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  size: 16px;
  line-height: 16px;
`;

export const ContainerButtonOn = styled.div`
border: 1px;
border-radius: 5px;
padding: 0px 0px 0px 0px;
margin: 2px 2px;
background: transparent;
min-height: 40px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
color: ${(props) => props.theme.colors.textColor};
&:hover {
  background: #3aff35;
}
`;

export const ContainerButtonOff = styled.div`
border: 1px;
border-radius: 5px;
padding: 0px 0px 0px 0px;
margin: 2px 2px;
background: transparent;
min-height: 40px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
color: ${(props) => props.theme.colors.textColor};
&:hover {
  background: #ff3737;
}
`;

type ButtonOnOffImgType = {
img?: string;
};
export const ButtonDefaulOnOffImg = styled.button<ButtonOnOffImgType>`
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
