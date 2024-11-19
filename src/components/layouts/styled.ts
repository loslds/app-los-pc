import semimg from '../../assets/svgs/semimg.svg';

import styled from "styled-components";

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
  color:  ${props => props.theme.colors.textColor};
  background: ${props => props.theme.colors.backgroundColor};
  
`;
/** quota da flexão do corpo  sem Borda */
export const ContainerFlexPg = styled.div`
  border: none;
  margin: 0px 5px 0px 5px;
  padding: 0px 0px 0px 0px;
  width: 980px;
  justify-content: space-between;
  background-color: transparent;
`;
///////////// HEADER /////////////////////////
export const ContainerHearder = styled.div`
  top: 0px;
  border: none; 
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

// INICIO content lado direito HEADER (imagem Sys)
export const ContainerHeaderItens = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
/////
export const ContainerImgSys = styled.div`
  border: none;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 3px 7px 3px 7px;
  background: #fff;
  display: flex;
  justify-content: left;
  align-items: center;
  align-content: center;
`;
type TypeButtonPagesImgSys = {
  img?: string;
}
export const ButtonPagesImgSys = styled.button<TypeButtonPagesImgSys>`
  border: none;
  margin: 0px 0px 0px 0px;
  color: ${props => props.theme.colors.textColor};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 110px;
  height: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
// FIM content imagem Sys

// INICIO content CENTRO Titulo da Pagina Sys
export const ContainerTitleHeader = styled.div`
  border: none; /*1px dashed red;*/
  padding: 0px 0px 0px 0px;
  margin: 5px 10px 5px 10px;
  min-height: 40px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
// FIM content CENTRO Titulo da Pagina Sys

// INICIO content lado esquerdo HEADER (imagem swith e outras)
// content lado direito
export const ContainerHeaderRight = styled.div`
  border: 2px solid;
  border-radius: 8px;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 2px 0px 2px;
  //background: transparent;
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
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;

// botoes das paginas
export const ContainerPagesButton = styled.div`
  border: 2px red;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color:  ${props => props.theme.colors.textColor};
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



// FIM content lado esquerdo HEADER (imagem swith e outras)

///////////// FOOTER /////////////////////////
export const ContainerFooter = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  width: 100%;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
`;


///////////container do swith/////////////////////

///////////////////////////////////
export const ContainerHeaderItensBar = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  min-height: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background: transparent;
`;

// type PropsImgSys = {
//   img?: string;
//   onClick?: () => void;
// };


/////////////////////////////////////////////



export const ContainerBody = styled.div`
  border: none; /* 1px dashed red;*/
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 60px;
  display: flex;
  //flex-wrap: wrap;
  //justify-content: space-between;
  //align-content: center;
`;

export const ContainerMenu = styled.div`
  border: 1px dashed blue;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
`;

export const ContainerPage = styled.div`
  border: none; /* dashed grey;*/
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

