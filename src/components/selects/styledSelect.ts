import styled from 'styled-components';
import semimg from '../../assets/svgs/semimg.svg';

export const ContainerSel = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  max-width: 100%;
  display: flex;
  min-height: 50px;
  background: transparent;
`;

export const ContainerSelFlex = styled.div`
  border: 1px red solid;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  font-size: 24px;
  background-color: ${props => props.theme.colors.backgroundColor};
  color: ${props => props.theme.colors.textColor};
`;

export const BarColLeft = styled.div`
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px;
  min-width: 49%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const BarColHidth = styled.div`
  border: none;
  padding: 4px 4px 4px 4px;
  margin: 4px 4px 4px 4px; 
  min-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`
export const ImagesContainer = styled.div`
  border: none;
  display: flex;
  flex-flow: 'row nowrap';
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
export const ConteinerItemLink = styled.div`
  border: none;
  margin: 0px 4px 0px 4px;
  padding: 0px 4px 0px 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 20px;
`
export const MainContainer = styled.div`
  border: 1px solid #40f708;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 100%;
  width: 100%;
  display: flex;

  justify-content: center;
`
export const BtnBarMain = styled.button<{img:string;}>`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 2px 4px 2px 4px;
  align-items: center;
  align-content: center;
  justify-content: center center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image:  url( ${ ( {img} ) => img ? img : semimg });
  cursor: pointer;
`
export const ImagemButton = styled.button<{img:string;}>`
  /* border: 1px blue solid; */
  border: none;
  margin: 4px 4px 4px 4px;
  padding: 0px 0px 0px 0px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
`
export const ConteinerFixButton = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: inline-flex;
  align-content: center;
  align-items: center;
  div {
    display: block;
    padding: 0px 8px 0px 8px;
    width: 33.333%;
  }
`
export const ImagemLeftButtomLabel = styled.button<{img:string;}>`
  padding-left: 44px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: #58b0f8;
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: left;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  display: block;
  overflow-x: hidden;
  color: black;
  font-size: 16px;
  font-family: 'Stencil';
`
export const ImgSys = styled.img`
  padding: 0px 4px 0px 4px;
  margin: 2px 2px 2px 2px;
  max-height: 50px;
  display: block;
`
export const ImgEmp = styled.img`
  padding: 0px 4px 0px 4px;
  margin: 2px 2px 2px 2px;
  max-height: 50px;
  display: block;
`
export const MenuBarFlex = styled.div`
  border: 1px #f80606 dotted;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 900px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 100%;
  font-size: 20px;
  color: black;
  /* background-color: white; */
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const ButtonCallModal = styled.button`
  border: 2px white solid; 
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  padding: 2px 2px 2px 2px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: transparent;
  background-color: #58b0f8;
  color: black;
  font-size: 18px;
  font-family: 'Stencil';
  cursor: pointer;
  outline: none;
`