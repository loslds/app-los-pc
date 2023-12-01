
import "../../styles/global";
/////////// sobre ...............
import home from "../../assets/svgs/home.svg";
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

// type PropsFooterHome ={
//   img?: string;
//   onclick?: () => void;
//   title?: string;
//   onchange: () => void;
//   ischeck?: boolean;
// }
export const FooterHome = () => {
  return (
    <ContentFooterMain>
      <ContentFooterColluns pwidth="23%">
        <ContentFooterTitle title="Empresa."/>
        <DivisionPgHztal />
        <ContentPagesButton img={home} titbtn={"Quem Somos."} />
        <ContentFooterLabel title={"Quem Somos."}/>
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="27%">
        <ContentFooterTitle title="Produtos."/>
        <DivisionPgHztal />
        <ContentPagesButton titbtn={"Bordados."} />
        <ContentPagesButton titbtn={"Cortes."} />
        <ContentPagesButton titbtn={"Gravações."} />
        <ContentPagesButton titbtn={"Portfoli."} />
        
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="42%">
      <ContentFooterTitle title="Contatos."/>
        <DivisionPgHztal />
        <ContentPagesButton img={local} titbtn={"Localização."} />
        <ContentPagesButton img={fone} titbtn={"Telefone."} />
        <ContentPagesButton img={celular} titbtn={"Celulares."} />
        <ContentPagesButton img={email} titbtn={"E-Mails."} />
        <ContentPagesButton img={watszapp} titbtn={"WatsZapp."} />
        <ContentPagesButton img={facebook} titbtn={"Facebook."} />
        <ContentPagesButton img={instagram} titbtn={"Instagram."} />
        <ContentPagesButton img={twiter} titbtn={"Twiter."} />
        <ContentPagesButton img={tiktok} titbtn={"Tiktok."} />
        <ContentPagesButton img={telegram} titbtn={"Telegram."} />
        <ContentPagesButton img={internet} titbtn={"Internet."} />
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
