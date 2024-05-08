import * as S from './stylesSidebar';
import React from 'react';

import menuh from '../../assets/svgs/menuh.svg';
import servicos from '../../assets/svgs/servicos.svg';
import design from '../../assets/svgs/design.svg';
import producao from '../../assets/svgs/producao.svg';
import acabamento from '../../assets/svgs/acabamento.svg';
import expedicao from '../../assets/svgs/expedicao.svg';
import administracao from '../../assets/svgs/administracao.svg';
import master from '../../assets/svgs/master.svg';
import config from '../../assets/svgs/config.svg';

import { ContainerBarSideMain } from './ContainerBarSideMain';
import { ButtonSideBar } from './ButtonSideBar';
import ContainerItensMenu from './ContainerItensMenu';

import PageModal from '../Modal/PageModal';

import CardModuloRecep from '../contentHelp/CardModuloRecep';
import CardDesemvolver from '../contentHelp/CardDesenvolver';

export const BarSideMenuHome = () => {
  const [isitensmenu, setIsItensMenu] = React.useState(false);
  const [ismdrecep, setIsMdRecep] = React.useState(false);
  const [ismddesig, setIsMdDesig] = React.useState(false);
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
          img={menuh}
          titbtn={'Menu Help...'}
          onClick={handlerClickItensMenu}
        />
      </S.ContainerButtonSRigth>
      <ContainerItensMenu onoff={isitensmenu}>
        <ButtonSideBar
          img={servicos}
          titbtn="Recepção..."
          onClick={() => {
            setIsMdRecep(true);
          }}
        />
        <ButtonSideBar
          img={design}
          titbtn="Design..."
          onClick={() => {
            setIsMdDesig(true);
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
          onClick={() => {
            setIsMdConfi(true);
          }}
        />
      </ContainerItensMenu>
      {ismdrecep ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'80%'}
          titulo={'Recepção.'}
          onclose={() => {
            setIsMdRecep(false);
          }}
        >
          <CardModuloRecep />
        </PageModal>
      ) : null}
      {ismddesig ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Design.'}
          onclose={() => {
            setIsMdDesig(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdprodu ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Produção.'}
          onclose={() => {
            setIsMdProdu(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdacaba ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Acabamento.'}
          onclose={() => {
            setIsMdAcaba(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdexped ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Expedição.'}
          onclose={() => {
            setIsMdExped(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdadmin ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Administração.'}
          onclose={() => {
            setIsMdAdmin(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdmaste ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Master.'}
          onclose={() => {
            setIsMdMaste(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
      {ismdconfi ? (
        <PageModal
          ptop={'1%'}
          pwidth={'65%'}
          pheight={'50%'}
          titulo={'Cpnfig.'}
          onclose={() => {
            setIsMdConfi(false);
          }}
        >
          <CardDesemvolver />
        </PageModal>
      ) : null}
    </ContainerBarSideMain>
  );
};
