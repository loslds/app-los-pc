import React from 'react';
import * as MD from './styles';

type PropsDivOpction = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  img?: string;
  selected?: boolean;
  onClick?: () => {};
};

const DivActionOpcModal: React.FC<PropsDivOpction> = ({
  children,
  title,
  img,
  description,
  selected,
  onClick
}) => {
  return (
    <MD.ContainerCenterImgDiv img={img} />

  )
};

export default DivActionOpcModal;
