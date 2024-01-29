import styled from "styled-components";

import semimg from '../../../assets/svgs/semimg.svg';

export const ContainerMsg = styled.div`
//  color:  ${props => props.theme.colors.textColor};
//  background: ${props => props.theme.colors.backgroundColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  height: 100vh;
  position: absolute;
  border: 0px;
  top: 0px;
  left: 0px;
  z-index: 10;
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

type PropsPanelMsg = {
  brdpx?: string;
  ptop?: string;
  pwidth?: string;

  //pheight?: string;// height: ${({ pheight }) => pheight || '87%'};
  //onClick?: () => void;
};
export const ContainerPanelMsg = styled.div<PropsPanelMsg>`
  border: ${({ brdpx }) => brdpx || 'none'} solid;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  top: ${({ ptop }) => ptop || '62px'};
  position: fixed;
  width: ${({ pwidth }) => pwidth || '66.3%'};
  color: ${props => props.theme.colors.textColor};
  min-height: auto;
  overflow-y: auto;
  display: flex row;
  flex-wrap: nowrap;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  background-color: #fcfceb;
`;
////////////////////////////////////
// card titulo + icons a esq. e centro e botão  com img a dir. ou esq
type PropsCardMsg = {
  brdpx?: string;
}
export const ContainerCardMsg = styled.div<PropsCardMsg>`
  border: ${({ brdpx }) => brdpx || 'none'} solid;
  border-color: ${props => props.theme.colors.textColor};
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  min-height: 40px;
  background-color: #e3e3e3;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 16px;
  font-style: normal;
`;
export const ContainerCardMsgFlex = styled.div`
  border: none ;
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

//////////////////////////////
// titulo menssagem no centro
////////////////////////////// 
export const ContainerTitleMsg = styled.div`
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
///////////////////////////////////
//// container do botão close
//////////////////////////////////
export const ContainerButtonRightMsg = styled.div`
  border: 1px solid red;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  max-width: 10%;
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

export const ContainerButtonLeftMsg = styled.div`
  border: 1px solid greenyellow;
  padding: 0px 0px 0px 0px;
  margin: 0px 10px 0px 10px;
  max-width: 10%;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  background-color: transparent;
  color: black;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
`;


/////////////////////////////
// BOTÃOS NA MSN 
export const ButtonCardImg = styled.button<{ img?: string }>`
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

