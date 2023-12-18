

import styled from 'styled-components';

import semimg from '../../assets/svgs/semimg.svg';


export const DivPanel = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 1px 0px 1px 0px;
  height: 3px;
  width: 100%;
  display: flex;
  background-color: #9c9c9c;
`;
/////////////// inicio MainModal

export const Content = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  z-index: 1000;
  color: white;
  background-color: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3,
  h4 {
    margin: 2px 2px 2px 2px;
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
  li {
    list-style-type: none;
    margin-left: 15px;
  }
`;

type PropsMain = {
  ispx?: boolean;
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onClick?: () => void;
};
export const ContainerModal = styled.div<PropsMain>`
  border: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  color: black;
  top: ${({ ptop }) => ptop || '62px'};
  position: fixed;
  width: ${({ pwidth }) => pwidth || '66.3%'};
  // height: ${({ pheight }) => pheight || '87%'};

  min-height: auto;
  overflow-y: auto;

  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: #fcfceb;
`;
///////////////////////////////////////////////////
type PropsModulosSys = {
  ispx?: boolean;
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onClick?: () => void;
};
export const ContainerModulosSys = styled.div<PropsModulosSys>`
border: 2px red solid;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
color: black;
top: ${({ ptop }) => ptop || '62px'};
position: fixed;
width: ${({ pwidth }) => pwidth || '66.3%'};
// height: ${({ pheight }) => pheight || '87%'};
display: flex row;
flex-wrap: nowrap;
flex-direction: center;
justify-content: center;
align-items: center;
background-color: #fcfceb;
`;
export const ContentTextoModulos = styled.div<{ isscroll? : boolean }>`
  border: none;/*1px green solid;*/
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  height: ${props => ( props.isscroll ? '500px' : 'auto')};
  //overflow-y: ${props => ( props.isscroll ? 'scroll' : 'auto')};
  width: 98%;

  overflow-y: auto;

  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;
///////////////////////////////////////////////////


export const ContainerModalTexto = styled.div`
  border: 0px;
  padding: 0px 5px 0px 0px;
  margin: 2px 10px 2px 10px;
  width: 100%;

  min-height: auto;
  overflow-y: auto;

  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;

type PropsImg = {
  ispx?: boolean;
  ptop?: string;
  pminheight?: string;
  pwidth?: string;
  img?: string;
  onClick?: () => void;
};
export const ContainerModalImg = styled.div<PropsImg>`
  border: 6px silver groove ;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: ${({ pminheight }) => pminheight || '27%'};// min-height: 130px;
  width: ${({ pwidth }) => pwidth || '66.3%'}; // width: 150px;
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
`;

export const ContainerModalImgModulo = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 10px;
  width: 97%;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;

/////////////// fim MainModal
/////////////// inicio CardMocal
export const ContainerCard = styled.div`
  border-bottom: 2px #727272 solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 30px;
  background-color: #e3e3e3;
  /* background-color: #d6d6d6; */
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
`;

export const ContainerCardFlex = styled.div`
  border: 3px silver groove ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent; //* black;*/
  display: flex;
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
`;
///////////////// fim CardModal

///////////////// inicio TitleModal
export const ContainerModalTitle = styled.div`
  border: 0px; /*1px green dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
////////////////// fim TitleModal
///////////////// inicio ButtonModal
export const ContainerButtonModal = styled.div`
  border: 0px;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  min-width: 15%;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background-color: transparent;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`;

export const ButtonModalImg = styled.button<{ img?: string }>`
  border: none; /*1 red solid;*/
  padding: 0px 0px 0px 0px;
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
  min-height: 35px;
  width: 35px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
////////////////////////////////////////

// ++++++++++++++++++++++++++++++++++

export const FFlexCard = styled.div`
  border: none;
  min-height: 40px;
  width: 100%;
  padding: 2px 5px 2px 5px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
  div {
    padding: 0px 5px 0px 5px;
    margin: 0px 0px 0px 0px;
  }
`;

export const CCardTitle = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: white;
  font-size: 18px;
`;

export const CContainerButton = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  min-width: 6%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`;

export const BButtonModal = styled.button<{ img?: string }>`
  margin: 2px 4px 2px 4px;
  padding: 2px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 30px;
  height: 30px;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;


export const ContentDivOpc = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100%;
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  z-index: 1100;
  color: white;
  background-color: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: normal;
  font-family: 'Courier New', Courier, monospace;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0px 5px 0px 5px;
    padding: 0px 0px 0px 5px;
    color: #fff;
    font-style: normal;
  }
  h1 {
    font-size: 20px;
    line-height: 22px;
  }
  h2 {
    font-size: 18px;
    line-height: 20px;
  }
  h3 {
    font-size: 16px;
    line-height: 18px;
  }
  h4 {
    font-size: 12px;
    line-height: 14px;
  }
  h5 {
    font-size: 10px;
    line-height: 12px;
  }
  ul {
    margin-left: 10px ;
  }
  li {
    margin-left: 20px ;
  }
`;


type PropsDivModalMain = {
  open?: boolean;
  ptop?: string;
  pleft?: string;
  pheight?: string;
  pwidth?: string;
};
export const ContainerDivOpcModal = styled.div<PropsDivModalMain>`
  border: 2px #727272 solid;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 5px;
  color: black;
  top: ${({ ptop }) => ptop || '62px'};
  left: ${({ pleft }) => pleft || '20%'};
  position: relative;
  width: ${({ pwidth }) => pwidth || '66.3%'};
  height: ${({ pheight }) => pheight || '87%'};
  display: ${props => ( props.open ? 'flex row' : 'none')};
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
export const ContainerDivOpcTexto = styled.div`
  border: 1px black dashed;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  width: 98%;
  // height: 85%;
  display: flex row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;
export const ContainerDivOpcTitle = styled.div`
  border: 1px green dashed;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
/////////////////////////////
// Heard do Modal com Buttom Menu
///////////////////////////
export const ContainerHeardImgMain = styled.div`
  border: 3px silver solid ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent; //* black;*/
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContainerHeardModalMain = styled.div`
  border: 0px ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent; //* black;*/
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
type PropsModalModal = {
  ispx?: boolean;
  ptop?: string;
  pminheight?: string;
  pwidth?: string;
  img?: string;
  onClick?: () => void;
};
export const ContentModalModal = styled.div<PropsModalModal>`
  border: 1px red solid ;
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: ${({ pminheight }) => pminheight || '30%'};
  width: ${({ pwidth }) => pwidth || '66.3%'};
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
`;

export const ButtonModalMenu = styled.button<{ img?: string ; sizer?: string; onClick: () => void; }>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
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
  min-height: ${({ sizer }) => sizer || '100px'};
  width: ${({ sizer }) => sizer || '100px'};
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ContainerDivModalItemsMenu = styled.div<{ open?: boolean }>`
  border-left: 3px red solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 10px;
  //height: 100px;
  width: 200px;
  background-color: transparent; //* black;*/
  display: ${props => ( props.open ? 'flex row' : 'none')};
  flex-flow: wrap;
  justify-content: center; /*space-around;*/
  align-content: center;
  align-items: center;
  font-size: 12px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-style: normal;
`;


export const ContainerActionItemDivMenu = styled.div`
  border: 1px silver solid;
  min-height: 38px;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: center;/* space-between;*/
  align-content: center;
  align-items: center;
  background-color: #baeeff;
  :hover {
    border: 1px blue solid;
    //background-color: #00c0ff;
  }
 `;
type PropsClick = {
  onClick?: () => void;
  path?: string;
};
export const ContainerActClickModalItemMenu = styled.div<PropsClick>`
border: none; /*3px yellow solid;*/
min-height: 38px;
width: 100%;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
display: flex;
flex-flow: wrap;
justify-content: space-between;
align-items: center;
`;

export const ContainerCenterImgDiv = styled.div<{ img? : string }>`
  border: none; /*1px green solid;*/
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 0px 2px;
  width: 19%;
  min-height: 35px;
  direction: left;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const ContainerCenterDiv = styled.div`
  border: none;/*1px yellow solid;*/
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 0px 2px;
  width: 55%;
  min-height: 30px;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
`;

export const ButtonItemDivModalMenu = styled.button`
  border: none;/*1px red solid;*/
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  outline: none;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
`;
