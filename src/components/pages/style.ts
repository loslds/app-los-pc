
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
export const ContainerBodyItensBar = styled.div`
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

export const ContainerCustonButton = styled.div<{ pxheight? : string;}>`
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
  title?: string;
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

