
import * as Hm from '../styled';

type PropsHeaderTitle = {
  title?:string;
}
export const ContentHeaderTitle = ({title }:PropsHeaderTitle) => {
  return (
    <Hm.ContainerTitleHeader>
      <h1>{title}</h1>
    </Hm.ContainerTitleHeader>
    
  );
}