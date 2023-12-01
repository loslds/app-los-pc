
import * as F from './styles';

type PropsFooterTitle = {
  title?:string;
}
export const ContentFooterTitle = ({title }:PropsFooterTitle) => {
  return (
    <F.ContainerTitleFooter>
      <h3>{title}</h3>
    </F.ContainerTitleFooter>
    
  );
}