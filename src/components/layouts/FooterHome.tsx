
import "../../styles/global";
// import * as F from './footerHome/styles';
import ContentFooterMain from "./ContentFootMain";
import ContentPagesButton from "./ContentPagesButton";
import ContentFooterColluns from "./footerHome/ContentFooterColluns";
import { ContentFooterTitle } from "./footerHome/ContentFooterTitle";
 "";

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
      <ContentFooterColluns pwidth="25%">
        <ContentFooterTitle title="Empresa."/>
        <ContentPagesButton titbtn={"Quem Somos."} />
        <label>Quem Somos.</label>
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="34%">
        <ContentFooterTitle title="Produtos."/>
        <ContentPagesButton titbtn={"Bordados."} />
        <ContentPagesButton titbtn={"Cortes."} />
        <ContentPagesButton titbtn={"Gravações."} />
        <ContentPagesButton titbtn={"Portfoli."} />
        
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="33%">
        Contatos
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
