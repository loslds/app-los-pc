import * as S from "./stylesSidebar";

import menu from "../../assets/svgs/menu.svg";
import tabprc from "../../assets/svgs/tabprc.svg";
import tabcor from "../../assets/svgs/tabcor.svg";
import producao from "../../assets/svgs/producao.svg";
import acabamento from "../../assets/svgs/acabamento.svg";
import expedicao from "../../assets/svgs/expedicao.svg";
import administracao from "../../assets/svgs/administracao.svg";
import master from "../../assets/svgs/master.svg";
import config from "../../assets/svgs/config.svg";

import { ContainerBarSideMain } from "./ContainerBarSideMain";
import { ButtonSideBar } from "./ButtonSideBar";
import ContainerItensMenu from "./ContainerItensMenu";
import React from "react";
import PageModal from "../Modal/PageModal";

import { CardModuloRecep } from "../contentHelp/CardModuloRecep";

export const BarSideMenuRecep = () => {
  const [isitensmenu, setIsItensMenu] = React.useState(false);
  const [istabprc, setIsTabPrc] = React.useState(false);
  const [istabcor, setIsTabCor] = React.useState(false);
  const [ismdprodu, setIsMdProdu] = React.useState(false);
  const [ismdacaba, setIsMdAcaba] = React.useState(false);
  const [ismdexped, setIsMdExped] = React.useState(false);
  const [ismdadmin, setIsMdAdmin] = React.useState(false);
  const [ismdmaste, setIsMdMaste] = React.useState(false);
  const [ismdconfi, setIsMdConfi] = React.useState(false);


  const handlerClickItensMenu = React.useCallback(() => {
    setIsItensMenu((oldState) => !oldState);
  }, []);


  return (
    <ContainerBarSideMain>
      <S.ContainerButtonSRigth>
        <ButtonSideBar
          img={menu}
          titbtn={"Menu Help..."}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>
      <ContainerItensMenu onoff={isitensmenu}>
        
        <ButtonSideBar
          img={tabprc}
          titbtn="Tab.Preços..."
          onClick={() => {
            setIsTabPrc(true);
          }}
        />
        <ButtonSideBar
          img={tabcor}
          titbtn="Tab.Cores..."
          onClick={() => {
            setIsTabCor(true);
          }}
        />
        <ButtonSideBar
          img={producao}
          titbtn="Produção..."
          onClick={() => {
            setIsMdProdu(true);
          }}
        />
        <ButtonSideBar
          img={acabamento}
          titbtn="Acabamento..."
          onClick={() => {
            setIsMdAcaba(true);
          }}
        />
        <ButtonSideBar
          img={expedicao}
          titbtn="Expedição..."
          onClick={() => {
            setIsMdExped(true);
          }}
        />
        <ButtonSideBar
          img={administracao}
          titbtn="Administração..."
          onClick={() => {
            setIsMdAdmin(true);
          }}
        />
        <ButtonSideBar
          img={master}
          titbtn="Master..."
          onClick={() => {
            setIsMdMaste(true);
          }}
        />
        <ButtonSideBar
          img={config}
          titbtn="Config..."
          onClick={() => alert("cliquei Config")}
        />
      </ContainerItensMenu>
      {istabprc ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"65%"}
          pheight={"50%"}
          titulo={'Tabela de Preços.'}
          onClose={() => {
            setIsTabPrc(false);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {istabcor ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Tabela de Cores.'}
          onClose={() => {
            setIsTabCor(false);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdprodu ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdProdu(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdacaba ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdAcaba(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdexped ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdExped(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdadmin ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdAdmin(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdmaste ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdMaste(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }
      {ismdconfi ? (
        <PageModal
          ispx={true}
          ptop={"1%"}
          pwidth={"85%"}
          pheight={"50%"}
          titulo={'Recepção.'}
          onClose={() => {
            setIsMdConfi(true);
          }}
        >
          <CardModuloRecep />
        </PageModal>
        ) : null
      }



    </ContainerBarSideMain>
  );
};

