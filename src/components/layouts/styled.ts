import styled from "styled-components";

import semimg from '../assets/svgs/semimg.svg';
////////////////////////////////
/////////// maim header ////////////
export const ContainerPg = styled.div`
  border: 5px #d2d2d0 double;
  top: 0px;
  left: 0px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  
`;
/** quota da flexão do corpo  sem Borda */
export const ContainerFlexPg = styled.div`
  border: none;
  margin: 0px 5px 0px 5px;
  padding: 0px 0px 0px 0px;
  width: 980px;
  display: flex row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
`;
///////////// HEADER /////////////////////////
export const ContainerHearder = styled.div`
  top: 0px;
  border: none; 
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
///////////// FOOTER /////////////////////////
export const ContainerFooter = styled.div`
  /* top: calc(100vh - 80px); */
  border: none; /*1px dashed green;*/
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

// content imagem Sys
export const ContainerHeaderItens = styled.div`
  padding: 0px;
  margin: 0px;
  border: 2px double;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
///////////container do swith/////////////////////
export const ContainerHeaderRight = styled.div`
  border: 2px double;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 0px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
`;
export const ContainerHearderRightFlex = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;
///////////////////////////////////
export const ContainerHeaderItensBar = styled.div`
  border: none;
  padding: 5px 5px 5px 5px;
  margin: 5px 5px 5px 5px;
  max-width: 100%;
  min-height: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background: transparent;
`;

type PropsImgSys = {
  img?: string;
  onClick?: () => void;
};
export const ContainerImgSys = styled.div<PropsImgSys>`
  border: none;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  background: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  width: 135px; /*150px;*/
  height: 55px;/*55px;*/
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
`;

export const ContainerTitleHeader = styled.div`
  border: none; /*1px dashed red;*/
  padding: 0px 0px 0px 0px;
  margin: 5px;
  min-height: 60px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
/////////////////////////////////////////////



export const ContainerBody = styled.div`
  border: 1px dashed red;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

export const ContainerMenu = styled.div`
  border: 1px dashed blue;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
`;

export const ContainerPage = styled.div`
  border: 1px dashed grey;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  //justify-content: space-between;
  //align-content: center;
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

// botoes das paginas
export const ContainerPagesButton = styled.div`
  border: 2px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
  //background: ${props => props.theme.colors.backgroundColor};
  // color: #000;
  &:hover {
    background-color: #e4e4e4;
   }
`;

export const ButtonPagesImg = styled.button<{ img?: string }>`
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
  min-height: 45px;
  width: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;
////////////////////////////////////////////////

export const ContainerCustonButton = styled.div<{ pxheight : string;}>`
  border: 1px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: ${({ pxheight }) => pxheight || '50px'};
  display: flex;
  flex-wrap: wrap;
  //justify-content: center;
  //align-items: center;
  //align-content: center;
  color:  ${props => props.theme.colors.textColor};
  &:hover {
    background-color: #e4e4e4;
   }
`;



type Propsbtncuston ={
  pheight?: string;
  pwidth?: string;
  img?: string;
}
export const ButtonCustonImg = styled.button<Propsbtncuston>`
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
  min-height: ${({ pheight }) => pheight || '45px'};
  width: ${({ pwidth }) => pwidth || '45px'};
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

