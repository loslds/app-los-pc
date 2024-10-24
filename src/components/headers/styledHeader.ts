import styled from "styled-components";

import semimg from '../../assets/svgs/semimg.svg';

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
  width: 70px;
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
// INICIO content lado direito HEADER (imagem swith e outras)

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
export const ContainerHeaderButton = styled.div`
  border: 2px;
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


export const ButtonHeaderImg = styled.button<{ img?: string }>`
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
  min-height: 40px;
  width: 40px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;


///////////////////////

// INICIO content lado esquerdo HEADER (imagem swith e outras)

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




// FIM content lado esquerdo HEADER (imagem swith e outras)




// botoes das paginas



