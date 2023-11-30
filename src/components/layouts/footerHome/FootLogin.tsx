//import React from "react";
import * as F from "./stylesfoot";

/////////// sobre ...............
import home from "../../assets/svgs/home.svg";
/////////// contatos ...............
import local from "../../assets/svgs/local.svg";
import fone from "../../assets/svgs/telefone.svg";
import celular from "../../assets/svgs/Celular.svg";
import email from "../../assets/svgs/email.svg";
import watszapp from "../../assets/svgs/watszapp.svg";
import instagram from "../../assets/svgs/instagran.svg";
import twiter from "../../assets/svgs/twiter.svg";
import tiktok from "../../assets/svgs/tiktok.svg";
import facebook from "../../assets/svgs/facebook.svg";
import telegram from "../../assets/svgs/telegram.svg";
import internet from "../../assets/svgs/internet.svg";

//import { useNavigate } from 'react-router-dom';
import BarMainFoot from "../ContentFootMain";
import BarEmp3ColunsFoot from "./BarEmp3ColunsFoot";
import BarContac3ColunsFoot from "./BarContac3ColunsFoot";
import BarProd3ColunsFoot from "./BarProd3ColunsFoot";
import BarProdMainFoot from "./BarProdMainFoot";

import BarReaderItemFoot from "./BarReaderItemFoot";
import BarTextoFoot from "./BarTextoFoot";
// <F.AreaContentCollumItem />
import BarDivAreaCollunImg from "./BarDivAreaCollunImg";
import ButtonCollunImgFoot from "./ButtonCollunImgFoot";

/////////// Produtos ...............
//import b_bordado from "../assets/svgs/b_bordado.svg";
// import l_laser from "../assets/svgs/l_laser.svg";
// import g_laser from "../assets/svgs/g_laser.svg";
// import d_diverso from "../assets/svgs/d_diverso.svg";

//import PageModal from "../components/modal/PageModal";
//import CardDesemvolver from "../components/modalhelp/CardDesenvolver";

const FootLogin = () => {
  //const [issobre, setIsSobre] = React.useState(false); //1
  //const [islocal, setIsLocal] = React.useState(false); //2
  // const [istelef, setIsTelef] = React.useState(false); //3
  // const [isemail, setIsEmail] = React.useState(false); //4
  // const [iswatsz, setIsWatsz] = React.useState(false); //5
  // const [isinsta, setIsInsta] = React.useState(false); //6
  // const [isfaceb, setIsFaceb] = React.useState(false); //7
  // const [istwite, setIsTwite] = React.useState(false); //8
  // const [istikto, setIsTikto] = React.useState(false); //9
  // const [isteleg, setIsTeleg] = React.useState(false); //10
  // const [isinter, setIsInter] = React.useState(false); //11
  //const [isborda, setIsBorda] = React.useState(false); //12
  // const [iscorte, setIsCorte] = React.useState(false); //13
  // const [isgrava, setIsGrava] = React.useState(false); //14
  // const [isdiver, setIsDiver] = React.useState(false); //15

  // const [isopcao, setIsOpcao] = React.useState("");

  return (
    <BarMainFoot>
      <BarEmp3ColunsFoot pwidth={"29%"}>
        <BarReaderItemFoot>
          <h4>"Sobre."</h4>
        </BarReaderItemFoot>
        <BarTextoFoot>
          <p>&emsp;&emsp;* Conheça nossas Empresas.</p>
        </BarTextoFoot>
        <F.AreaContentCollumItem>
          <label>Quem Somos:</label>
          <BarDivAreaCollunImg>
            <ButtonCollunImgFoot
              img={home}
              title={"Quem Somos..."}
              onClick={() => alert("Quem Somos.")}
            />
          </BarDivAreaCollunImg>
        </F.AreaContentCollumItem>
      </BarEmp3ColunsFoot>
      <F.DivisionVPanel />

      <BarContac3ColunsFoot pwidth={"40%"}>
        <BarReaderItemFoot>
          <h4>"Contatos."</h4>
        </BarReaderItemFoot>
        <BarDivAreaCollunImg>
          <ButtonCollunImgFoot
            img={local}
            title={"Localização..."}
            onClick={() => alert("Local.")}
          />
          <ButtonCollunImgFoot
            img={fone}
            title={"Telefone..."}
            onClick={() => alert("Telefone.")}
          />
          <ButtonCollunImgFoot
            img={celular}
            title={"Celular..."}
            onClick={() => alert("Celular.")}
          />
          <ButtonCollunImgFoot
            img={email}
            title={"Email..."}
            onClick={() => alert("Email.")}
          />
          <ButtonCollunImgFoot
            img={watszapp}
            title={"Watszapp..."}
            onClick={() => alert("Watszapp.")}
          />
          <ButtonCollunImgFoot
            img={instagram}
            title={"Instagram..."}
            onClick={() => alert("Instagram.")}
          />
          <ButtonCollunImgFoot
            img={twiter}
            title={"Twiter..."}
            onClick={() => alert("Twiter.")}
          />
          <ButtonCollunImgFoot
            img={tiktok}
            title={"Tiktok..."}
            onClick={() => alert("Tiktok.")}
          />
          <ButtonCollunImgFoot
            img={facebook}
            title={"Facebook..."}
            onClick={() => alert("Facebook.")}
          />
          <ButtonCollunImgFoot
            img={telegram}
            title={"Telegram..."}
            onClick={() => alert("Telegram.")}
          />
          <ButtonCollunImgFoot
            img={internet}
            title={"Internet..."}
            onClick={() => alert("Internet.")}
          />
        </BarDivAreaCollunImg>
      </BarContac3ColunsFoot>

      <F.DivisionVPanel />

      <BarProd3ColunsFoot pwidth={"28%"}>
        <BarReaderItemFoot>
          <h4>"Produtos."</h4>
        </BarReaderItemFoot>
        <BarTextoFoot>
          <p>&emsp;&emsp;* Conheça nossos Produtos.</p>
        </BarTextoFoot>
        <F.AreaContentCollumItem>
          <BarProdMainFoot>
            <label>Opções:</label>
            <select name="empresa" defaultValue={"0"} onChange={() => {}}>
              <option value={"0"}> Opções: </option>
              <option value={"1"}> Bordados. </option>
              <option value={"2"}> Corte-Laser. </option>
              <option value={"3"}> Gravação-Laser. </option>
            </select>
          </BarProdMainFoot>
        </F.AreaContentCollumItem>
      </BarProd3ColunsFoot>

      <F.DivisionVPanel />
    </BarMainFoot>
  );
};
export default FootLogin;

// <F.AreaContentCollumItem>

//     <F.DivAreaImgButton>
//       <F.ButtonImgFoot img={local} title={'local...'}/>
//     </F.DivAreaImgButton>

//     <F.DivAreaImgButton>
//       <F.ButtonImgFoot img={fone} title={'Fones...'}/>
//     </F.DivAreaImgButton>

//     <F.DivAreaImgButton>
//       <F.ButtonImgFoot img={email} title={'Email...'}/>
//     </F.DivAreaImgButton>

// </F.AreaContentCollumItem>

//      <F.AreaContentCollumItem>
//       <F.DivAreaCollunItem>
//         <BarTitleCollunItem title={"Telefones:"} />
//       </F.DivAreaCollunItem>
//       <F.DivAreaCollunImg>
//         <F.DivAreaImgButton>
//           <F.ButtonImgFoot img={fone} title={'Fones...'}/>
//         </F.DivAreaImgButton>
//       </F.DivAreaCollunImg>
//     </F.AreaContentCollumItem>

//     <F.AreaContentCollumItem>
//       <F.DivAreaCollunItem>
//         <BarTitleCollunItem title={"Email:"} />
//       </F.DivAreaCollunItem>

//    <BarColunsFoot pwidth={"32.5%"}>
//     <BarCabecalho title={"Sobre."} />
//     <BarAreaContent>
//       <BarDivImgFoot
//         heightdiv={"50px"}
//         widthdiv={"50px"}
//         imgdiv={home}
//       >
//         <h5>Quen Somos.</h5>
//         <F.DivAreaImgButton>
//         <F.ButtonImgFoot
//           img={home}
//           title="Sobre."
//           onClick={() => {
//             setIsSobre(true);
//           }}
//         />
//         </F.DivAreaImgButton>
//       </BarDivImgFoot>
//       {issobre ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsSobre(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//     </BarAreaContent>
//   </BarColunsFoot>
//   <BarColunsFoot pwidth={"32.5%"}>
//     <BarCabecalho title={"Contatos."} />
//     <F.AreaContainerButton>
//       <F.ButtonImgFoot
//         img={local}
//         title="Localização"
//         onClick={() => {
//           setIsLocal(true);
//         }}
//       />
//       {islocal ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsLocal(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//     </F.AreaContainerButton>
//   </BarColunsFoot>

//   <BarColunsFoot pwidth={"32.5%"}>
//     <BarCabecalho title={"Produtos."} />
//     <F.AreaContainerButton>
//       <F.ButtonImgFoot
//         height={"60px"}
//         width={"55px"}
//         img={b_bordado}
//         title="Bodados"
//         onClick={() => {
//           setIsLocal(true);
//         }}
//       />
//       {isborda ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsBorda(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//     </F.AreaContainerButton>
//   </BarColunsFoot>
// //</BarMainFoot>

// <F.AreaContainerButton>
//       <F.ButtonImgFoot
//         id={"2"}
//         img={local}
//         title="Localização"
//         onClick={() => {
//           handlerClickButton("2");
//         }}
//       />
//       {islocal ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsLocal(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"3"}
//         img={fone}
//         title="Telefone"
//         onClick={() => {
//           handlerClickButton("3");
//         }}
//       />
//       {istelef ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsTelef(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"4"}
//         img={email}
//         title="Email"
//         onClick={() => {
//           handlerClickButton("4");
//         }}
//       />
//       {isemail ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsEmail(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"5"}
//         img={watszapp}
//         title="Watszapp"
//         onClick={() => {
//           handlerClickButton("5");
//         }}
//       />
//       {iswatsz ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsWatsz(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"6"}
//         img={instagram}
//         title="Instagram"
//         onClick={() => {
//           handlerClickButton("6");
//         }}
//       />
//       {isinsta ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsInsta(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"7"}
//         img={facebook1}
//         title="Faceboock"
//         onClick={() => {
//           handlerClickButton("7");
//         }}
//       />
//       {isfaceb ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsFaceb(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"8"}
//         img={twiter}
//         title="Twitter"
//         onClick={() => {
//           handlerClickButton("8");
//         }}
//       />
//       {istwite ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsTwite(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"9"}
//         img={tiktok}
//         title="TikTok"
//         onClick={() => {
//           handlerClickButton("9");
//         }}
//       />
//       {istikto ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsTikto(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"10"}
//         img={telegram}
//         title="Telegram"
//         onClick={() => {
//           handlerClickButton("10");
//         }}
//       />
//       {isteleg ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsTeleg(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//       <F.ButtonImgFoot
//         id={"11"}
//         img={internet}
//         title="Internet"
//         onClick={() => {
//           handlerClickButton("11");
//         }}
//       />
//       {isinter ? (
//         <PageModal
//           ispx={true}
//           ptop={"25%"}
//           pwidth={"50%"}
//           pheight={"50%"}
//           titulo={"Em Acesso Negado"}
//           onClose={() => setIsInter(false)}
//         >
//           <CardDesemvolver />
//         </PageModal>
//       ) : null}
//     </F.AreaContainerButton>

//   <F.ButtonImgFoot
//     height={"60px"}
//     width={"55px"}
//     id={"13"}
//     img={l_laser}
//     title="Corte Laser"
//     onClick={() => {
//       handlerClickButton("13");
//     }}
//   />
//   {iscorta ? (
//     <PageModal
//       ispx={true}
//       ptop={"25%"}
//       pwidth={"50%"}
//       pheight={"50%"}
//       titulo={"Em Acesso Negado"}
//       onClose={() => setIsCorta(false)}
//     >
//       <CardDesemvolver />
//     </PageModal>
//   ) : null}
//   <F.ButtonImgFoot
//     height={"60px"}
//     width={"55px"}
//     id={"14"}
//     img={g_laser}
//     title="Gravação Laser"
//     onClick={() => {
//       handlerClickButton("14");
//     }}
//   />
//   {isgrava ? (
//     <PageModal
//       ispx={true}
//       ptop={"25%"}
//       pwidth={"50%"}
//       pheight={"50%"}
//       titulo={"Em Acesso Negado"}
//       onClose={() => setIsGrava(false)}
//     >
//       <CardDesemvolver />
//     </PageModal>
//   ) : null}
//   <F.ButtonImgFoot
//     height={"60px"}
//     width={"55px"}
//     id={"15"}
//     img={d_diverso}
//     title="Diversos"
//     onClick={() => {
//       handlerClickButton("15");
//     }}
//   />
//   {isdiver ? (
//     <PageModal
//       ispx={true}
//       ptop={"25%"}
//       pwidth={"50%"}
//       pheight={"50%"}
//       titulo={"Em Acesso Negado"}
//       onClose={() => setIsDiver(false)}
//     >
//       <CardDesemvolver />
//     </PageModal>
//   ) : null}
// </F.AreaContainerButton>

// type CharOpc =
//     'Sobre'|
//     'Localizacao'|
//     'Telefone'|
//     'Email'|
//     'Watszapp'|
//     'Instagram'|
//     'Faceboock'|
//     'Twitter'|
//     'TikTok'|
//     'Telegram'|
//     'Internet'|
//     'Bordado'|
//     'Corte'|
//     'Grava'|
//     'Diversos' ;

//   export type SumaryOpc = {
//     item: number;
//     descr: string;
//     onoff: boolean;
//   };

//   export type OpcaoSumary = Record<CharOpc, SumaryOpc>;

//   export const initialState: OpcaoSumary  = {
//     Sobre: { item: 1, descr: 'Sobre.', onoff: false },
//     Localizacao: { item: 2, descr: 'Localização', onoff: false },
//     Telefone: { item: 3, descr: 'Telefone', onoff: false },
//     Email: { item: 4, descr: 'Email', onoff: false },
//     Watszapp: { item: 5, descr: 'Watszapp', onoff: false },
//     Instagram: { item: 6, descr: 'Instagram', onoff: false },
//     Faceboock: { item: 7, descr: 'Faceboock', onoff: false },
//     Twitter: { item: 8, descr: 'Twitter', onoff: false },
//     TikTok: { item: 9, descr: 'TikTok', onoff: false },
//     Telegram: { item: 10, descr: 'Telegram', onoff: false },
//     Internet: { item: 11, descr: 'Internet', onoff: false },
//     Bordado: { item: 12, descr: 'Bordados', onoff: false },
//     Corte: { item: 13, descr: 'Cortes', onoff: false },
//     Grava: { item: 14, descr: 'Gravação', onoff: false },
//     Diversos: { item: 15, descr: 'Diversos', onoff: false }
