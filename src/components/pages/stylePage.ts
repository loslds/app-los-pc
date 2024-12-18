
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
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  //color:  ${props => props.theme.colors.textColor};
  //background: transparent;
`;
type TypeContainerCardMainFlexType = {
  pwidth? : string;
};
export const ContainerCardPageFlex = styled.div<TypeContainerCardMainFlexType>`
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
}
export const ContainerCardBoxCenterPage = styled.div<TypeContainerCardCenter>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: ${({ pwidth }) => pwidth || '150px'};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-flow: row;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;

export const ContainerCardBoxCenterPageFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  border: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

// type TypeContainerCardTitlePage = {
//   pheight?: string;
// };
export const ContainerCardPageTitle = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 3px double;
  border-color: ${props => props.theme.colors.textColor};
  background-color: #bbbbbb;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ContainerCardPagePanelTitle = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent;
  min-height: 25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

type TypeContainerTextoBgPanelYellow = {
  isbgcolor?: boolean;
}
export const ContainerTextoBgPanelYellow = styled.div<TypeContainerTextoBgPanelYellow>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 40px;
  width: 100%;
  //overflow-y: auto;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background: ${props => (props.isbgcolor ? '#fffee8' : 'tranparent')};
  color: #000000;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2px 2px 2px 10px;
    padding: 2px 2px 2px 2px;
    text-decoration-color: #727272;
  }
  h1 {
    text-decoration: 3px underline;
  }
  h2 {
    text-decoration: 2px underline;
  }
  h3 {
    text-decoration: 1.5px underline;
  }
  h4 {
    text-decoration: 1px underline;
  }
  h5 {
    text-decoration: 1px underline;
  }
  label,
  p {
    margin: 2px 2px 2px 10px;
    padding: 2px 2px 2px 2px;
    font-size: 14px;
  }
  label {
    color: #556aff;
    span {
      margin: 0px 2px 0px 10px;
      font-weight: bold;
      color: #000000;
    }
  }
  li {
    list-style-type: none;
    margin-left: 15px;
  }
`;

type TypeContainerCollunsCenterPage = {
  pheight? : string;
  pwidth? : string;
  openccp?: boolean;
}
export const ContainerCollunsCenterPage = styled.div<TypeContainerCollunsCenterPage>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: ${({ pheight }) => pheight || '50px'};
  min-width: ${({ pwidth }) => pwidth || '100px'};
//  display: ${({openccp}) => openccp ? 'flex' : 'none' };
  display: ${props => (props.openccp ? 'flex' : 'none')};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;

export const ContainerInputPage = styled.div`
  border: none;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  min-width: 48%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

export const ContainerInputCenter = styled.div<{open?: boolean;}>`
  border: 2px solid green;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 45px;
  display:  ${props => (props.open ? 'flex' : 'none')};
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 18px;
  line-height: normal;
  font-style: normal;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
`;
 


export const ContainerInputCenterimg = styled.div`
  border: 2px solid green;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-size: 16px;
  line-height: normal;
  font-style: normal;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
 
  label {
    padding: 2px 2px 2px 2px;
    margin: 0px 5px 0px 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
  }
  input {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    min-width: 48%;
    display: flex;
    //flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    align-content: center;
 }
  img {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    height: 40px;
    height: 40px;
  }
  button {
    padding: 2px 2px 2px 2px;
    margin: 0px 0px 0px 0px;
    height: 40px;
    height: 40px;
  }
`;
export const ContainerInputMainPage = styled.div`
  border: 1px solid red;
  padding: 2px 0px 2px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;
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
  min-height: 40px;
  width: ${({ pwidth }) => pwidth || '32%'};
  display: ${({open}) => open ? 'flex' : 'none' };
  min-height: 60px;
  flex-wrap: wrap;
  justify-content: center;
`;

type TypeContainerPanelPageFlex = {
bordas?: string;
}
export const ContainerPanelPageFlex = styled.div<TypeContainerPanelPageFlex>`
  //border : ${props => props.bordas || 'none'};
  border: ${({ bordas }) => bordas || '3px'};
  border-style: double;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 3px 5px 3px 5px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

type TypeContainerPageFlex = {
bordas?: string;
}
export const ContainerPageFlex = styled.div<TypeContainerPageFlex>`
  border: none;
  border-radius: 10px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 3px 5px 3px 5px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

export const ContainerBtnSRigthPage = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 5px;
  min-width: 35px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
 `;

type  TypeContainerCustonBtnPage ={
  pxheight?: string;
}
export const ContainerCustonBtnPage = styled.div<TypeContainerCustonBtnPage>`
  border: 1px solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  //background: transparent;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  //color:  ${props => props.theme.colors.textColor};
  &:hover {
    background: #e4e4e4;
   }
`;
type  TypeContainerDefaulButton ={
  pxheight?: string;
}
export const ContainerDefaulButton = styled.div<TypeContainerDefaulButton>`
  border: 1px solid red;
  border-radius: 45%;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({ pxheight }) => pxheight || '34px'};
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
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
  background-image: url( ${ ( {img} ) => img ? img : semimg });
  //background-image: url( ${({ img }) => img || semimg});
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
  min-height: ${({ pheight }) => pheight || '125px'};
  width: ${({ pwidth }) => pwidth || '125px'};
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

type TypeContainerCustonButton = {
  pxheight?: string;
  open?: boolean;
}
export const ContainerCustonButton = styled.div<TypeContainerCustonButton>`
  border: 1px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: ${({ pxheight }) => pxheight || '165px'};
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background: #e4e4e4;
   }
`;

type TypeButtonCustonImg ={
  pheight?: string;
  pwidth?: string;
  img?: string;
  title?: string;
}
export const ButtonCustonImg = styled.button<TypeButtonCustonImg>`
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
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${props => props.theme.colors.textColor};
  &:hover {
    background: #e4e4e4;
   }
`;

type TypeContainerTextoLeftPage = {
  isborda: boolean;
}
export const ContainerTextoLeftPage = styled.div<TypeContainerTextoLeftPage>`
  border: ${props => (props.isborda ? '1px' : 'none')};
  border-style: ${props => (props.isborda ? 'solid' : 'none')};
  border-radius: ${props => (props.isborda ? '10px' : 'none')};
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 10px;
  margin: 5px 10px 5px 10px;
  background: transparent;
  width: 100%;
  min-width: 35px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
`;

type TypeContainerCustonText = {
  pxheight? : string;
}
export const ContainerCustonText = styled.div<TypeContainerCustonText>`
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 100%;
  min-height: ${({ pxheight }) => pxheight || '20px'};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-weight: 500;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  line-height: 18px;
  
  h1 h2,h3,h4,h5 {
    display: flex;
    margin: 0px 5px 0px 5px;
    padding: 0px 5px 0px 5px;
    font-size: large;
    line-height: normal;
    font-weight: bold;
    h1 { font-size: 20px}
    h2 { font-size: 18px}
    h3 { font-size: 15px}
    h4 { font-size: 12px}
  }
  label {
    display: flex;
    margin: 0px 5px 0px 5px;
    padding: 0px 0px 0px 0px;
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
  } 
`;

type TypeContainerCustonImagem = {
  pxheight? : string;
}
export const ContainerCustonImagem = styled.div<TypeContainerCustonImagem>`
  border: 1px;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  background: transparent;
  color: ${props => props.theme.colors.textColor};
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
  background-color: #9c9c9c;
  display: flex;
`;

export const ContainerBoxLabelPage = styled.div`
  border: 2px dashed;
  border-color: ${props => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 3px 5px 3px 15px;
  margin: 3px 10px 3px 10px;
  min-width: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  color: ${props => props.theme.colors.textColor};
  &:hover {
    border-color: #ff0000;
   }
  h4,
  label {
    display: flex;
    margin: 0px 10px 0px 0px;
    padding: 0px 10px 0px 0px;
    font-size: large;
    line-height: normal;
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
  margin: 5px 10px 5px 10px;
  min-width: ${({ pxwidth }) => pxwidth || '20%'};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  span {
    margin: 0px 0px 0px 0px;
      padding: 0px 0px 0px 0px;
    }
  h1,h2,h3,h4 {
    display: flex;
    margin: 0px 10px 0px 10px;
    padding: 0px 0px 0px 0px;
    justify-content: center;
    align-content: center;
    color: red; 
  }
  &:hover {
    border: 1px dashed;
    border-color: red;
  }
`;

type TypeContainerDivMainOffRed = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivMainOffRed = styled.div<TypeContainerDivMainOffRed>`
  border: 2px solid;
  border-radius: 10px;
  border-color: red;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: red;
  background: transparent;
`;

type TypeContainerDivMainOnGreen = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivMainOnGreen = styled.div<TypeContainerDivMainOnGreen>`
  border: 2px solid;
  border-radius: 10px;
  border-color: greenyellow;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: greenyellow;
  background: transparent;
`;

type TypeContainerDivManYellow = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManYellow = styled.div<TypeContainerDivManYellow>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  &:hover {
    border-color: orange;
  }
`;

type TypeContainerDivManRed = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManRed = styled.div<TypeContainerDivManRed>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  &:hover {
    border-color: #fc0303;
  }
`;

type TypeContainerDivManBlue = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
}
export const ContainerDivManBlue = styled.div<TypeContainerDivManBlue>`
  border: 2px solid;
  border-radius: 10px;
  border-color: ${(props) => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: left;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  &:hover {
    border-color: #00ffff;
  }
`;


type TypeContainerCardDivMainLeft = {
  pxheight?: string;
}
export const ContainerCardDivMainLeft = styled.div<TypeContainerCardDivMainLeft>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 10px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: 100%;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

type TypeContainerCardDivManEnd = {
  pxheight?: string;
  pxwidth?: string;
}
export const ContainerCardDivMainEnd = styled.div<TypeContainerCardDivManEnd>`
  border: none ;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 5px 8px 5px 8px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: end;
  align-items: center;
  align-content: center;
  color: ${(props) => props.theme.colors.textColor};
`;

type TypeContainerCardDivMainLeftRed = {
  pxheight?: string;
  pxwidth?: string;
}
export const ContainerCardDivMainLeftRed = styled.div<TypeContainerCardDivMainLeftRed>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: ${({ pxheight }) => pxheight || '30px'};
  width: ${({ pxwidth }) => pxwidth || '100%'};
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

export const ContainerLabelTexto = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 15px;
  width: 100%;
  color: ${(props) => props.theme.colors.textColor};
  background: transparent;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: left;
  /* align-items: center;*/
  align-content: center; 
  div {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }
`;

type TypeContainerSinaleiro = {
  onoff?: boolean;
  pxheight?: string;
  pxwidth?: string;
}
export const ContainerSinaleiro = styled.div<TypeContainerSinaleiro>`
border: none;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
min-height: ${({ pxheight }) => pxheight || '12px'};
width: ${({ pxwidth }) => pxwidth || '100%'};
color: ${(props) => props.theme.colors.textColor};
background: transparent;
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: left;
//align-items: center;
align-content: center;
label {
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  font-size: 12px;
  font-style: normal;
  color: ${({onoff}) => onoff ? 'green' : 'red' };
  &:hover {
    color: orange;
  }
}
span {
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  font-size: 12px;
  font-style: normal;
}
`;

type TypeButtonSinaleiro = {
  pxhght?: string;
  pxwdth?: string;
  img?: string;
}
export const ButtonSinaleiro = styled.button<TypeButtonSinaleiro>`
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.textColor};
  border-radius: 45%;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  min-height: ${({ pxhght }) => pxhght || '18px'};
  min-width: ${({ pxwdth }) => pxwdth || '18px'};
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
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;




export const ContainerButtonOn = styled.div`
border: 1px solid;
border-color: ${(props) => props.theme.colors.textColor};
border-radius: 5px;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
width: 40px;
min-height: 40px;
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
color: ${(props) => props.theme.colors.textColor};
background-color: #e4e4e4;
&:hover {
  background-color: #3aff35;
}
`;

export const ContainerButtonOff = styled.div`
border: 1px;
border-radius: 5px;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
min-width: 40px;
min-height: 40px;
display: flex;
flex-wrap: wrap;
flex-flow: row;
justify-content: center;
align-items: center;
align-content: center;
color: ${(props) => props.theme.colors.textColor};
background-color: #e4e4e4;
&:hover {
  background-color: #ff3737;
}
`;

type TypeButtonDefaulOnOffImg = {
  pxwdth?: string;
  pxhght?: string;
  img?: string;
};
export const ButtonDefaulOnOffImg = styled.button<TypeButtonDefaulOnOffImg>`
border: none;
border-radius: 3px;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px  0px;
width: ${({ pxwdth }) => pxwdth || '40px'};
height: ${({ pxhght }) => pxhght || '40px'};
font-size: 16px;
font-weight: bold;
font-family: 'Courier New', Courier, monospace;
background-color: transparent;
background-image: url( ${({ img }) => img || semimg});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
cursor: pointer;
outline: none;
display: flex;
flex-flow: nowrap;
justify-content: center;
align-items: center;
`;

type TypeContainerDivMainIcons = {
  brd?: string;
  hght?: string;
  wdth?: string;
}
export const ContainerDivMainIcons = styled.div<TypeContainerDivMainIcons>`
border: ${props => (props.brd ? '3px' : 'none')};
border-style: ${props => (props.brd ? 'solid' : 'none')};
border-radius: ${props => (props.brd ? '10px' : 'none')};
border-color: ${props => props.theme.colors.textColor};
padding: 0px 0px 0px 0px;
margin: 5px 10px 5px 10px;
height: ${({ hght }) => hght || '40px'};
width: ${({ wdth }) => wdth || '100%'};
display: flex;
flex-flow: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
color: ${(props) => props.theme.colors.textColor};
background:${(props) => props.theme.colors.backgroundColor};
`;


export const ContainerDivMainImagens = styled.div`
  border: 1px dashed red;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 3px 3px 3px 3px;
  max-width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  size: 16px;
  line-height: 16px;
  color: ${props => props.theme.colors.textColor};
`;

export const ContainerBoxMainPage = styled.div`
  border: 3px solid red;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-flow: row;
  justify-content: space-between;
  align-content: center;
  //align-items: center;
`;
