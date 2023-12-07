import React from 'react';
import ButtonModal from '../Modal/ButtonModal';
import CardButtonsModal from '../Modal/CardButtonsModal';
import CardModal from '../Modal/CardModal';
import * as MD from '../Modal/styles';
import TitleModal from '../Modal/TitleModal';
import closevrm from '../../assets/images/closevrm.png';

type PropsModalHlp = {
    id?: string;
    children?: React.ReactNode | JSX.Element;
    ispx?: boolean;
    ptop?: string;
    pwidth?: string;
    pheight?: string;
    titulo?: string;
    isbtn?: boolean;
    img?: string;
    titbtn?:string;
    onClose?: () => void;
  };
const PageModal: React.FC<PropsModalHlp> = ({ispx, ptop, pwidth, pheight, titulo, children, onClose }) => {
    return (
        <MD.Content>
            <MD.ContainerModal ispx={ispx} ptop={ptop} pwidth={pwidth} pheight={pheight}>
                <CardModal>
                    <TitleModal titulo={titulo} />
                    <CardButtonsModal>
                        <ButtonModal img={closevrm} onClick={onClose}/>
                    </CardButtonsModal>
                </CardModal>
                {children}
            </MD.ContainerModal>
        </MD.Content>
        );
    };
export default PageModal;
