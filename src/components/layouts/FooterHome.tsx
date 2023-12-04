
import "../../styles/global";
/////////// sobre ...............
import home from "../../assets/svgs/home.svg";
/////////// produtos .............
import bordados from "../../assets/svgs/bordados.svg";
import cortes from "../../assets/svgs/cortes.svg";
import gravacao from "../../assets/svgs/gravacao.svg";
import portifolios from "../../assets/svgs/portifolios.svg";
/////////// contatos ...............
import local from "../../assets/svgs/local.svg";
import fone from "../../assets/svgs/telefone.svg";
import celular from "../../assets/svgs/Celular.svg";
import email from "../../assets/svgs/email.svg";
import watszapp from "../../assets/svgs/watszapp.svg";
import facebook from "../../assets/svgs/facebook.svg";
import instagram from "../../assets/svgs/instagran.svg";
import twiter from "../../assets/svgs/twiter.svg";
import tiktok from "../../assets/svgs/tiktok.svg";
import telegram from "../../assets/svgs/telegram.svg";
import internet from "../../assets/svgs/internet.svg";

import ContentFooterMain from "./ContentFootMain";
import ContentPagesButton from "./ContentPagesButton";
import ContentFooterColluns from "./footerHome/ContentFooterColluns";
import { ContentFooterTitle } from "./footerHome/ContentFooterTitle";
import { ContentFooterLabel } from "./footerHome/ContentFooterLabel";
import { DivisionPgHztal } from "./styled";

//type PropsFooterHome ={
//   img?: string;
//onClick?: () => void;
//   title?: string;
//   onchange: () => void;
//   ischeck?: boolean;
//}
export const FooterHome = () => {
  return (
    <ContentFooterMain>
      <ContentFooterColluns pwidth="23%">
        <ContentFooterTitle title="Empresa." />
        <DivisionPgHztal />
        <ContentPagesButton img={home} titbtn={"Quem Somos."} onClick={() => {alert('empresa.')}}/>
        <ContentFooterLabel title={"Quem Somos."}/>
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="27%">
        <ContentFooterTitle title="Produtos."/>
        <DivisionPgHztal />
        <ContentPagesButton img={bordados} titbtn={"Bordados."} onClick={() => {alert('bordados.')}}/>
        <ContentPagesButton img={cortes} titbtn={"Cortes."} onClick={() => {alert('Corte Laser.')}}/>
        <ContentPagesButton img={gravacao} titbtn={"Gravações."} onClick={() => {alert('Gravação Laser.')}}/>
        <ContentPagesButton img={portifolios} titbtn={"Portfolio."} onClick={() => {alert('PortiFolio.')}}/>
        
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="42%">
      <ContentFooterTitle title="Contatos."/>
        <DivisionPgHztal />
        <ContentPagesButton img={local} titbtn={"Localização."} onClick={() => {alert('Localização GEO-MAPAS.')}}/>
        <ContentPagesButton img={fone} titbtn={"Telefone."} onClick={() => {alert('Telefone.')}}/>
        <ContentPagesButton img={celular} titbtn={"Celulares."} onClick={() => {alert('Celulares.')}}/>
        <ContentPagesButton img={email} titbtn={"E-Mails."} onClick={() => {alert('E-Mail.')}} />
        <ContentPagesButton img={watszapp} titbtn={"WatsZapp."} onClick={() => {alert('Watszapp.')}}/>
        <ContentPagesButton img={facebook} titbtn={"Facebook."} onClick={() => {alert('Faceboock.')}} />
        <ContentPagesButton img={instagram} titbtn={"Instagram."} onClick={() => {alert('INstagram.')}}/>
        <ContentPagesButton img={twiter} titbtn={"Twiter."} onClick={() => {alert('Twiter.')}}/>
        <ContentPagesButton img={tiktok} titbtn={"Tiktok."} onClick={() => {alert('Tiktok.')}}/>
        <ContentPagesButton img={telegram} titbtn={"Telegram."} onClick={() => {alert('Telegram.')}}/>
        <ContentPagesButton img={internet} titbtn={"Internet."} onClick={() => {alert('Internet.')}}/>
      </ContentFooterColluns>
    </ContentFooterMain>
  );
}

{/* <ContentHearderMain>
<ContentHearderItens>
  <ContentHeaderImgSys img={img} onclick={onclick}/>
</ContentHearderItens>
<ContentHearderItens>
  <ContentHeaderTitle title={title}/>
</ContentHearderItens>
<ContentHearderRight>
  <ContentHearderItensBar>
  </ContentHearderItensBar>
</ContentHearderRight>
</ContentHearderMain> */}
