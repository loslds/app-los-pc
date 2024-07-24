import * as Pg from './stylePage';
import botaoverde from '../../assets/svgs/botaoverde.svg';
import botaoverme from '../../assets/svgs/botaoverme.svg';

type TypeContentLabelButtonOnOff = {
  sinal?: boolean;
  pxwidth?: string;
  pxheight?: string;
  pxhght?: string;
  pxwdth?: string;
  //img?: string;
  title?: string;
  onClick?: () => void;
};
export const ContentLabelButtonOnOff = ({
  sinal,
  pxheight,
  pxwidth,
  pxhght,
  pxwdth,
  title,
  onClick
}: TypeContentLabelButtonOnOff) => {
  return (
    <Pg.ContainerSinaleiro pxheight={pxheight} pxwidth={pxwidth}>
      {{ sinal } ? (
        <label>
          DESATIVADO{' '}
          <span>
            <Pg.ButtonSinaleiro
              pxhght={pxhght}
              pxwdth={pxwdth}
              img={botaoverme}
              title={title}
              onClick={onClick}
            />
          </span>
        </label>
      ) : (
        <label>
          ATIVADO{' '}
          <span>
            <Pg.ButtonSinaleiro
              pxhght={pxhght}
              pxwdth={pxwdth}
              img={botaoverde}
              title={title}
              onClick={onClick}
            />
          </span>
        </label>
      )}
    </Pg.ContainerSinaleiro>
  );
};
