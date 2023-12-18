import styled from 'styled-components';

import semimg from "../../assets/svgs/semimg.svg"

// ContainerBarSideMain
export const ContainerSPanelMain = styled.div`
  margin: 2px 0px 2px 8px;
  padding: 0px 0px 0px 0px;
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
`;
//container Butto Side lado direito

export const ContainerButtonSRigth = styled.div`
  border: 2px solid;
  border-color: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color: #000;
  &:hover {
    background-color: #e4e4e4;
  }
  /* label {
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
    font-style: normal;
    font-family: Verdana, Tahoma, sans-serif;
    font-weight: bold;
  } */
`;
//container Butto Side lado direito
type PropsItensModulo = {
  open?: boolean;
};
export const ContainerItensModulo = styled.div<PropsItensModulo>`
  border: 1px solid red;
  border-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 2px 5px 2px 10px;
  background: transparent;
  max-height: fit-content;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: space-around;
`;



// ContainerSideButton
export const ContainerSideButton = styled.div`
  border: 2px red;
  border-color: #ffffff;
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 2px 2px 2px;
  background: transparent;
  min-height: 45px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 5px;
  color: #000;
  &:hover {
    background-color: #e4e4e4;
   }
`;

export const ButtonSideBarImg = styled.button<{ img?: string }>`
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




// type PropsImgSys = {
//   img?: string;
//   onff?: boolean;
//   onClick?: () => void;
// };
// export const ContainerSideImgMenu = styled.div<PropsImgSys>`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 10px;
//   background: transparent;
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   min-height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
// `;










type PropsBtn = {
  img?: string;
  title?: string;
}
export const ButtonSItenModulo = styled.button<PropsBtn>`
  border: 0px;
  padding: 1px 1px 1px 1px;
  margin: 0px 5px 0px 5px;
  color: red;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: transparent;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  outline: none;
  min-height: 45px;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
`;

