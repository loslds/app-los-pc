import React from 'react';
import * as M from '../mains/stylesMainPg';
import  CardModalTexto from '../Modal/CardModalTexto';
import { ContentTextoModulos } from '../Modal/styles';
import ContainerPanelItens from '../mains/ContainerPanelItens';
import CardItemMaim from '../mains/CardItemMain';
import ContentItemMainModal from '../mains/ContentItemMaimModal';
import ButtonImgMain from '../mains/ButtonImgMain';
import servicos from '../../assets/images/svgs/servicos.svg';
import design from '../../assets/images/svgs/design.svg';
import producao from '../../assets/images/svgs/producao.svg';
import enviar from '../../assets/images/svgs/enviar.svg';
import acabamento from '../../assets/images/svgs/acabamento.svg';
import expedicao from '../../assets/images/svgs/expedicao.svg';
import administra from '../../assets/images/svgs/administra.svg';
import PageModal from '../Modal/PageModal';
import CardModuloRecep from './CardModuloRecep';

type Props = {
    img?: string;
  };
const CardModulosSys: React.FC<Props> = ({ img }) => {


  const [isrecep, setIsRecep]= React.useState(false);
  const [isdesig, setIsDesig]= React.useState(false);
  const [isprodu, setIsProdu]= React.useState(false);
  const [isacaba, setIsAcaba]= React.useState(false);
  const [isexped, setIsExped]= React.useState(false);
  const [isadmin, setIsAdmin]= React.useState(false);
  const [isdiv, setIsDiv]= React.useState(false);

  const HandlerClickDiv = (t: string) => {

    if ( t === 'Recep' ) {
      if (!isrecep) {
        setIsRecep(true);
        setIsDiv(true);
      }
      setIsDesig(false);
      setIsProdu(false);
      setIsAcaba(false);
      setIsExped(false);
      setIsAdmin(false);
      }
    else if ( t === 'Desig' ) {
      setIsRecep(false);
      if (!isdesig) {
        setIsDesig(true);
        setIsDiv(true);
      }
      setIsProdu(false);
      setIsAcaba(false);
      setIsExped(false);
      setIsAdmin(false);
    }
    else if ( t === 'Produ' ) {
      setIsRecep(false);
      setIsDesig(false);
      if (!isprodu) {
        setIsProdu(true);
        setIsDiv(true);
      }
      setIsAcaba(false);
      setIsExped(false);
      setIsAdmin(false);
    }
    else if ( t === 'Acaba' ) {
      setIsRecep(false);
      setIsDesig(false);
      setIsProdu(false);
      if (!isacaba){
        setIsAcaba(true);
        setIsDiv(true);
      }
      setIsExped(false);
      setIsAdmin(false);
    }
    else if ( t === 'Exped' ) {
      setIsRecep(false);
      setIsDesig(false);
      setIsProdu(false);
      setIsAcaba(false);
      if (!isexped){
        setIsExped(true);
        setIsDiv(true);
      }
      setIsAdmin(false);
    }
    else if ( t === 'Admin' ) {
      setIsRecep(false);
      setIsDesig(false);
      setIsProdu(false);
      setIsAcaba(false);
      setIsExped(false);
      if (!isadmin){
        setIsAdmin(true);
        setIsDiv(true);
      }
     }
  };

  //}, []);

  return (
    <CardModalTexto>
      <ContentTextoModulos>
        <ContainerPanelItens>
          <CardItemMaim id={'Recepção'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={servicos} txt={'Recepção.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Recep') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isrecep && isdiv? (
              <PageModal
                                ptop={'13%'}
                pwidth={'80%'}
                pheight={'100%'}
                titulo={'Módulo Recepção.'}
                onclose={() => setIsDiv(false)}
              >
                <CardModuloRecep isscroll={true} />
              </PageModal>
            ) : null}
          </CardItemMaim>
          <CardItemMaim id={'Design'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={design} txt={'Design.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Desig') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isdesig && isdiv ? (
              <PageModal
                
                ptop={'13%'}
                pwidth={'80%'}
                pheight={'100%'}
                titulo={'Módulo Design.'}
                onclose={() => setIsDiv(false)}
              >
                <h3>Design.</h3>
              </PageModal>
            ) : null}
          </CardItemMaim>
          <CardItemMaim id={'Produção'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={producao} txt={'Produção.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Produ') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isprodu && isdiv ? (
              <PageModal
                
                ptop={'13%'}
                pwidth={'80%'}
                pheight={'100%'}
                titulo={'Módulo Produção.'}
                onclose={() => setIsDiv(false)}
              >
                <h3>Produção.</h3>
              </PageModal>
            ) : null}
          </CardItemMaim>
          <CardItemMaim id={'Acabamento'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={acabamento} txt={'Acabamento.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Acaba') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isacaba && isdiv ? (
              <PageModal
                                ptop={'13%'}
                pwidth={'80%'}
                pheight={'100%'}
                titulo={'Módulo Acabamento.'}
                onclose={() => setIsDiv(false)}
              >
                <h3>Acabamento.</h3>
              </PageModal>
            ) : null}
          </CardItemMaim>
          <CardItemMaim id={'Expedição'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={expedicao} txt={'Expedição.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Exped') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isexped && isdiv ? (
              <PageModal
                
                ptop={'13%'}
                pwidth={'80%'}
                pheight={'100%'}
                titulo={'Módulo Expedição.'}
                onclose={() => setIsDiv(false)}
              >
                <h3>Expediçao.</h3>
              </PageModal>
            ) : null}
          </CardItemMaim>
          <CardItemMaim id={'Administração'}>
            <M.ContainerMainItem>
              <ContentItemMainModal liberado={true} imgdiv={administra} txt={'Administração.'}>
                <ButtonImgMain liberado={true} img={enviar} titlebtn={'Abrir...'} onClick={ () => HandlerClickDiv('Admin') } />
              </ContentItemMainModal>
            </M.ContainerMainItem>
            {isadmin && isdiv ? (
              <PageModal
                
                ptop={'13%'}
                pwidth={'50%'}
                pheight={'100%'}
                titulo={'Administração.'}
                onclose={() => setIsDiv(false)}
              >
                <h3>Administração.</h3>
              </PageModal>
            ) : null}
          </CardItemMaim>
        </ContainerPanelItens>
      </ContentTextoModulos>
    </CardModalTexto>
    );
};

export default CardModulosSys;




  // const navigate = useNavigate();
  // const goto = (path: string) => {
  //   return () => {
  //     navigate(path);
  //   };
  // };

  //const { state, dispatch } = MenuPgUseForm();

  //const [ismenu, setIsMenu]= React.useState(false);
  //const tarb_ini = 'Iniciei meu Trabalho '+ state.datetime_ini + '...';
  //const meuacesso = 'O "MEU Acesso " esta restritro à '+ state.nm_modulo + '...';

  //const handleMenu = React.useCallback(() => {
  //  setIsMenu(oldState => !oldState)
