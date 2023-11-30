import styled from "styled-components";

import semimg from '../../assets/svgs/semimg.svg';
////////////////////////////////
/////////// maim header ////////////
export const Container = styled.div`
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
export const ContainerFlex = styled.div`
  border: 1px dashed red;
  margin: 0px 5px 0px 5px;
  padding: 0px 0px 0px 0px;
  width: 980px;
  display: flex row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
`;
//////////////////////////////////////
export const ContainerHearder = styled.div`
  top: 0px;
  border: nome; /*1px dashed orange;*/
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
////////////////////////////////
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
  border: 1px dashed mediumpurple;
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
  border: 1px dashed white;
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
  border: nome; /*1px dashed red;*/
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




export const ContainerBody = styled.div`
  border: 1px dashed green;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
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
  border: 1px dashed rosybrown;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
`;

export const ContainerFooter = styled.div`
  bottom: 0px;
  border: 1px dashed violet;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
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