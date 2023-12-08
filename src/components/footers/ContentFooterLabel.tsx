
import * as F from './styles';

type PropsFooterLabel = {
  title?:string;
}
export const ContentFooterLabel = ({title }:PropsFooterLabel) => {
  return (
    <F.ContainerLabelFooter>
      <label>{title}</label>
    </F.ContainerLabelFooter>
    
  );
}