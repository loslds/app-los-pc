
import * as S from "./stylesSidebar";

import semimg from "../../assets/svgs/semimg.svg";
import menu from "../../assets/svgs/menu.svg";
import tabprc from "../../assets/svgs/tabprc.svg";
import tabcor from "../../assets/svgs/tabcor.svg";

//import producao from "../../assets/svgs/producao.svg";
//import acabamento from "../../assets/svgs/acabamento.svg";
//import expedicao from "../../assets/svgs/expedicao.svg";
//import administracao from "../../assets/svgs/administracao.svg";
//import master from "../../assets/svgs/master.svg";
//import config from "../../assets/svgs/config.svg";

import { ContainerBarSideMain } from "./ContainerBarSideMain";
import { ButtonSideBar } from "./ButtonSideBar";
import ContainerItensModMn from "./ContainerItensModMn";
import { ContentButtonTitleMenu } from "./ContentButtonTitleMenu";

import React from "react";
//import PageModal from "../Modal/PageModal";
//import { CardModuloRecep } from "../contentHelp/CardModuloRecep";

export const BarSideMenuRecep = () => { 
  const [isitensmenu, setIsItensMenu] = React.useState(false);
  const [ismntab, setIsMnTab] = React.useState(false);
  const [istabprc, setIsTabPrc] = React.useState(false);
  const [istabcor, setIsTabCor] = React.useState(false);

  const [ismncad, setIsMnCad] = React.useState(false);
  const [iscados, setIsCadOs] = React.useState(false);
  const [iscadcli, setIsCadCli] = React.useState(false);
  const [iscaddia, setIsCadDia] = React.useState(false);

  const [ismnsetor, setIsMnSetor] = React.useState(false);
  const [issetdesg, setIsSetDesg] = React.useState(false);
  const [issetprod, setIsSetProd] = React.useState(false);
  const [issetacab, setIsSetAcab] = React.useState(false);
  const [issetexpe, setIsSetExpe] = React.useState(false);

  //const [ismdadmin, setIsMdAdmin] = React.useState(false);
  //const [ismdmaste, setIsMdMaste] = React.useState(false);
  //const [ismdconfi, setIsMdConfi] = React.useState(false);


  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);

  const handlerClickMnTab = React.useCallback(() => {
     setIsMnTab((oldState) => !oldState);
  }, []);

  const handlerClickMnCad = React.useCallback(() => {
    setIsMnCad((oldState) => !oldState);
  }, []);
  const handlerClickMnSetor = React.useCallback(() => {
    setIsMnSetor((oldState) => !oldState);
  }, []);


  return (
    <ContainerBarSideMain>
      <S.ContainerButtonSRigth>
        <ButtonSideBar
          img={menu}
          titbtn={"Menu..."}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>
      <S.ContainerMenuSide open={isitensmenu}>
        {/* Tabelas  */}
      <S.ContainerButtonSLeft>
        <ContainerItensModMn onoff={ismntab}>
          <ButtonSideBar
            img={tabprc}
            titbtn="Tab.Preços..."
            onClick={() => {
              setIsTabCor(true);
              }
            }
          />
          <ButtonSideBar
            img={tabcor}
            titbtn="Tab.Cores..."
            onClick={() => {
              setIsTabPrc(true);
              }
            }
          />
        </ContainerItensModMn>

        <S.ContainerButtonMnItens>
          <ContentButtonTitleMenu 
            isimg={ismntab} 
            title={'Tabelas.'}
            onclick={handlerClickMnTab}
          />
        </S.ContainerButtonMnItens>
      </S.ContainerButtonSLeft>

      {/* cadastros  */}
      <S.ContainerButtonSLeft>
        <ContainerItensModMn onoff={ismncad}>
          <ButtonSideBar
            
            titbtn="O.Serviço..."
            onClick={() => {
              setIsCadOs(true);
              }
            }
          />
          <ButtonSideBar
            
            titbtn="Cliêntes..."
            onClick={() => {
              setIsCadCli(true);
              }
            }
          />
          <ButtonSideBar
            
            titbtn="Diario..."
            onClick={() => {
              setIsCadDia(true);
              }
            }
          />
        </ContainerItensModMn>
        <S.ContainerButtonMnItens>
          <ContentButtonTitleMenu 
            isimg={ismncad} 
            title={'Cadastros.'}
            onclick={handlerClickMnCad}
          />
        </S.ContainerButtonMnItens>
      </S.ContainerButtonSLeft>

      {/* Setores  */}
      <S.ContainerButtonSLeft>
        <ContainerItensModMn onoff={ismnsetor}>
          <ButtonSideBar
          
            titbtn="Design..."
            onClick={() => {
              setIsSetDesg(true);
              }
            }
          />
          <ButtonSideBar
              
            titbtn="Produção..."
            onClick={() => {
              setIsSetProd(true);
              }
            }
          />
          <ButtonSideBar
              
              titbtn="Produção..."
              onClick={() => {
                setIsSetAcab(true);
                }
              }
            />
          <ButtonSideBar
              
              titbtn="Expedição..."
              onClick={() => {
                setIsSetExpe(true);
                }
              }
            />
        </ContainerItensModMn>
        <S.ContainerButtonMnItens>
          <ContentButtonTitleMenu 
            isimg={ismnsetor} 
            title={'Setores.'}
            onclick={handlerClickMnSetor}
          />
        </S.ContainerButtonMnItens>
      </S.ContainerButtonSLeft>
      </S.ContainerMenuSide>
    </ContainerBarSideMain>
  );
};

