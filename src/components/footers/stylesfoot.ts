import styled from 'styled-components';
import semimg from '../../assets/svgs/semimg.svg'

////////////////////////////////////////////
/** Content do foot */
////////////////////////////////////////////
export const AreaContainer = styled.div`
  border: none;
  margin: 0px 0px 0px 2px;
  padding: 0px 0px 0px 0px;
  max-width: 99%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  background-color: transparent;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  font-family: Verdana, Tahoma, sans-serif;
  font-style: normal;
  color: #000000;
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 5px 2px 5px 10px;
    padding: 0px 2px 0px 2px;
    background: transparent;
    background-color: transparent;
    color: #000000;
  }
  h1 {
    line-height: 30px;
    font-size: 28px;
    color: #000000;
  }
  h2 {
    line-height: 26px;
    font-size: 24px;
    color: #000000;
  }
  h3 {
    line-height: 22px;
    font-size: 20px;
    color: #000000;
  }
  h4 {
    line-height: 20px;
    font-size: 18px;
    color: #000000;
  }
  h5 {
    line-height: 18px;
    font-size: 16px;
    color: #000000;
  }
  li {
    list-style-type: none;
    margin-left: 15px;
    color: #000000;
  }
  p {
    margin: 0px 5px 0px 5px;
    line-height: 14px;
    font-size: 12px;
    color: #000000;
  }
  label {
    padding: 0px 10px 0px 10px;
    line-height: 16px;
    font-size: 14px;
    text-decoration: none;
    color: #000000;
  }
  select {
    /* border: 2px double #7f7fbb; */
    border: 3px double;
    border-color: #8d8fad;
    border-radius: 5px;
    font-weight: bold;
    width: 94px;
    color: #000000;
    cursor: pointer;
  }
`;

export const AreaFlex = styled.div`
border: none;
padding: 0px 0px 0px 0px;
margin: 0px 0px 0px 0px;
width: 100%;
background-color: transparent; /* #a7e6fa;  #afebf0; #a2dde0; */
display: flex;
flex-flow: row wrap;
align-content: center;
justify-content: space-around;
color: #000000;
`;
////////////////////////////////////////////
/** Content da Area de cada coluna foot */
////////////////////////////////////////////
/**          colun Default                */
type Props3Collun = {
  pwidth?: string;
 };
export const Area3Collun = styled.div<Props3Collun>`
  border: 2px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  width: ${({ pwidth }) => pwidth || '33%'};
  background: #a7e6fa;
  display: flex;
  flex-flow: wrap;
  color: #000000;
`;

/**          colun dev login                */
type PropsEmp3Collun = {
  pwidth?: string;
 };
export const Area3EmpCollun = styled.div<PropsEmp3Collun>`
  border: 2px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  min-width: ${({ pwidth }) => pwidth || '25%'};
  background: #a7e6fa;
  display: flex;
  flex-flow: wrap;
  color: #000000;

  @media screen and (min-width: 110px) {
    width: 150px;
   }
`;

type PropsContac3Collun = {
  pwidth?: string;
 };
export const Area3ContacCollun = styled.div<PropsContac3Collun>`
  border: 2px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  min-width: ${({ pwidth }) => pwidth || '25%'};
  background: #a7e6fa;
  display: flex;
  flex-flow: wrap;
  color: #000000;

  @media screen and (min-width: 150px) {
    width: 150px;
   }
`;

type PropsProd3Collun = {
  pwidth?: string;
 };
export const Area3ProdCollun = styled.div<PropsProd3Collun>`
  border: 2px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  min-width: ${({ pwidth }) => pwidth || '25%'};
  background: #a7e6fa;
  display: flex;
  flex-flow: wrap;
  color: #000000;

  @media screen and (min-width: 150px) {
    width: 150px;
   }
`;








////////////////////////////////////////////
/** Content da divisão da Area de cada coluna foot */
////////////////////////////////////////////
export const DivisionVPanel = styled.div`
  border: 0px;
  padding: 0px 1px 0px 1px;
  margin: 0px 1px 0px 1px;
  width: 2px;
  display: flex;
  background-color: #7f7fbb;
  color: #000000;
`;
////////////////////////////////////////////
/** Content da Area para Cabeçalho de cada coluna foot */
////////////////////////////////////////////
export const AreaReaderTesto = styled.div`
  border-bottom: 1px solid ;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 0px 0px 0px 0px;
  margin: 2px 0px 2px 0px;
  /* height: 20px; */
  width: 98%;
  background: transparent;
  display: flex row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #000000;
`;
export const AreaTestoItem = styled.div`
  border: none ;
  padding: 0px 0px 0px 0px;
  margin: 0px 3px 0px 3px;
  /* height: 20px; */
  min-width: 98%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: #000000;
`;
////////////////////////////////////////////
/** Content da Area cada coluna foot */
////////////////////////////////////////////
export const AreaContentCollumItem = styled.div`
  border: none;
  padding: 2px 2px 2px 2px;
  margin: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: transparent;
  color: #000000;
`;
////////////////////////////////////////////
/** Content do Conteudo da coluna Produto foot */
////////////////////////////////////////////
export const ContainerProdMain = styled.div`
  border: none;
  margin: 0px 2px 0px 0px;
  padding: 0px 2px 0px 2px;
  width: 99%;
  background: transparent;
  display: flex;
  color: #000000;
`;

export const ContainerProdMainFlex = styled.div`
  border: none;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  background: transparent;

`;
////////////////////////////////////////////
/** Content do Conteudo da coluna foot */
////////////////////////////////////////////
export const DivAreaCollunItem = styled.div`
  border: none;
  /* border-color: #79797b; */
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-width: 100px;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  background: transparent;
  color: #000000;
  :hover {
    border-color: #ffff00;// amarelo
 }
 `;
////////////////////////////////////////////
/** Content da Area do Button foot */
////////////////////////////////////////////
export const DivAreaImgButton = styled.div`
  border: 3px solid;
  border-radius: 45%;
  border-color: #79797b;
  padding: 2px 2px 2px 2px;
  margin: 2px 2px 2px 2px;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  background: transparent;
`;
////////////////////////////////////////////
/** Contentainer Botão foot */
////////////////////////////////////////////
type PropsBtnImgFoot = {
  height? : string;
  width? : string;
  img?: string;
  title?: string;
  };
  export const ButtonImgFoot = styled.button<PropsBtnImgFoot>`
  border: none;
  border-radius: 45%;
  padding: 0px 0px 0px 0px;
  margin: 3px 3px 3px 3px;
  height: ${({ height }) => height || '40px'};
  width: ${({ width }) => width || '40px'};
  font-size: 12px;
  font-weight: bold;
  font-family: 'Courier New', 'Courier', 'monospace';
  background: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  `;

////////////////////////////////////////////////////////////
/** texto cabeçalho collun */
////////////////////////////////////////////
export const AreaTitleCollunIten = styled.div`
  border: none;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 20px;
  width: 100%;
  background: transparent;
  display: flex;
  flex-flow: row wrap;
  justify-content: right;
  align-items: center;
  align-content: center;
  color: #000000;
`;
///////////////////////////////////////////////////////
