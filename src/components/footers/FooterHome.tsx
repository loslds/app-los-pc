import '../../styles/global';
/////////// sobre ...............
import home from '../../assets/svgs/home.svg';
/////////// produtos .............
import bordados from '../../assets/svgs/bordados.svg';
import cortes from '../../assets/svgs/cortes.svg';
import gravacao from '../../assets/svgs/gravacao.svg';
import portifolios from '../../assets/svgs/portifolios.svg';
/////////// contatos ...............
import local from '../../assets/svgs/local.svg';
import fone from '../../assets/svgs/telefone.svg';
import celular from '../../assets/svgs/celular.svg';
import email from '../../assets/svgs/email.svg';
import watszapp from '../../assets/svgs/watszapp.svg';
import facebook from '../../assets/svgs/facebook.svg';
import instagram from '../../assets/svgs/instagran.svg';
import twiter from '../../assets/svgs/twiter.svg';
import tiktok from '../../assets/svgs/tiktok.svg';
import telegram from '../../assets/svgs/telegram.svg';
import internet from '../../assets/svgs/internet.svg';

import { ContentFooterMain } from './ContentFootMain';
import { ContentPagesButton } from '../layouts/ContentPagesButton';
import { ContentFooterColluns } from './ContentFooterColluns';
import { ContentFooterTitle } from './ContentFooterTitle';
import { ContentFooterLabel } from './ContentFooterLabel';
import { DivisionPgHztal } from '../layouts/styled';

export const FooterHome = () => {
  return (
    <ContentFooterMain>
      <ContentFooterColluns pwidth="23%">
        <ContentFooterTitle title="Empresa." />
        <DivisionPgHztal />
        <ContentPagesButton
          imgbtn={home}
          titbtn={'Quem Somos.'}
          onClick={() => {
            alert('empresa.');
          }}
        />
        <ContentFooterLabel title={'Quem Somos.'} />
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="27%">
        <ContentFooterTitle title="Produtos." />
        <DivisionPgHztal />
        <ContentPagesButton
          imgbtn={bordados}
          titbtn={'Bordados.'}
          onClick={() => {
            alert('bordados.');
          }}
        />
        <ContentPagesButton
          imgbtn={cortes}
          titbtn={'Cortes.'}
          onClick={() => {
            alert('Corte Laser.');
          }}
        />
        <ContentPagesButton
          imgbtn={gravacao}
          titbtn={'Gravações.'}
          onClick={() => {
            alert('Gravação Laser.');
          }}
        />
        <ContentPagesButton
          imgbtn={portifolios}
          titbtn={'Portfolio.'}
          onClick={() => {
            alert('PortiFolio.');
          }}
        />
      </ContentFooterColluns>
      <ContentFooterColluns pwidth="42%">
        <ContentFooterTitle title="Contatos." />
        <DivisionPgHztal />
        <ContentPagesButton
          imgbtn={local}
          titbtn={'Localização.'}
          onClick={() => {
            alert('Localização GEO-MAPAS.');
          }}
        />
        <ContentPagesButton
          imgbtn={fone}
          titbtn={'Telefone.'}
          onClick={() => {
            alert('Telefone.');
          }}
        />
        <ContentPagesButton
          imgbtn={celular}
          titbtn={'Celulares.'}
          onClick={() => {
            alert('Celulares.');
          }}
        />
        <ContentPagesButton
          imgbtn={email}
          titbtn={'E-Mails.'}
          onClick={() => {
            alert('E-Mail.');
          }}
        />
        <ContentPagesButton
          imgbtn={watszapp}
          titbtn={'WatsZapp.'}
          onClick={() => {
            alert('Watszapp.');
          }}
        />
        <ContentPagesButton
          imgbtn={facebook}
          titbtn={'Facebook.'}
          onClick={() => {
            alert('Faceboock.');
          }}
        />
        <ContentPagesButton
          imgbtn={instagram}
          titbtn={'Instagram.'}
          onClick={() => {
            alert('INstagram.');
          }}
        />
        <ContentPagesButton
          imgbtn={twiter}
          titbtn={'Twiter.'}
          onClick={() => {
            alert('Twiter.');
          }}
        />
        <ContentPagesButton
          imgbtn={tiktok}
          titbtn={'Tiktok.'}
          onClick={() => {
            alert('Tiktok.');
          }}
        />
        <ContentPagesButton
          imgbtn={telegram}
          titbtn={'Telegram.'}
          onClick={() => {
            alert('Telegram.');
          }}
        />
        <ContentPagesButton
          imgbtn={internet}
          titbtn={'Internet.'}
          onClick={() => {
            alert('Internet.');
          }}
        />
      </ContentFooterColluns>
    </ContentFooterMain>
  );
};
