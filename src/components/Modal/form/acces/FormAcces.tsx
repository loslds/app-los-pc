import React from 'react';

import styled from 'styled-components';

import avatar1 from '~/assets/images/avatar1.png';

import { ContainerFormAvatar } from '../styledForm';
import { CardFormAcces } from './CardFormAcces';
import { MainFormAcces } from './MainFormAcces';
import { TitleFormAcces } from './TitleFormAcces';

const ContainerFormCenter = styled.div`
  border: 0;
  padding: 0px 0px 0px 0px;
  margin: 5px 0px 5px 0px;
  width: 100%;
  min-height: 350px;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const ContainerFormCenterFlex = styled.div`
  border: 0;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  width: 80%;
  min-height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: center;
  align-content: center;
`;

const ContainerFormOption = styled.div`
  border: 2px green solid;
  height: 130px;
  width: 200px;
  padding: 0px 0px 0px 0px;
  margin: 10px 5px 10px 5px;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  p {
    padding: 0px 0px 0px 0px;
    margin: 3px 0px 3px 0px;
    font-size: 14px;
    line-height: 1.5em;
  }
`;

const ContainerFormForm = styled.div`
  border: 2px violet solid;
  height: 130px;
  width: 230px;
  padding: 0px 0px 0px 0px;
  margin: 10px 5px 10px 5px;
  display: flex;
  background-color: transparent;
`;

export const FormAcces: React.FC = () => {
  return (
    <MainFormAcces id={'login'}>
      <CardFormAcces>
        <TitleFormAcces titulo="Login-off" />
        <ContainerFormCenter>
          <ContainerFormCenterFlex>
            <ContainerFormAvatar img={avatar1} />
            <ContainerFormForm>
              <h4>formulario</h4>
            </ContainerFormForm>
            <ContainerFormOption>
              <p>Criar Acesso Sistema.</p>
              <p>Esqueceu sua Senha ?</p>
              <p>Esqueceu seu Email ?</p>
              <p>Entrar de forma Diferênte...</p>
            </ContainerFormOption>
          </ContainerFormCenterFlex>
        </ContainerFormCenter>
      </CardFormAcces>
    </MainFormAcces>
  );
};

/**====================================== */

// const ContainerCard = styled.div`
//   border: none;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   width: 100%;
//   min-height: 40px;
//   background-color: transparent;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
// `;

// const ContainerModalTitle = styled.div`
//   border: 0px; /*1px green dashed;*/
//   padding: 0px auto;
//   margin: 0px auto;
//   min-width: 80%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   color: black;
//   font-size: 12px;
//   font-weight: bold;
//   font-family: 'Courier New', Courier, monospace;
//   h1,
//   h2,
//   h3 {
//     margin: 5px 5px 5px 5px;
//     padding: 5px 5px 5px 5px;
//     text-decoration-color: #727272;
//   }
//   h1 {
//     text-decoration: 3px underline;
//   }
//   h2 {
//     text-decoration: 2px underline;
//   }
//   h3 {
//     text-decoration: 1.5px underline;
//   }
// `;

// const ContainerAvatar = styled.div<{ img?: string }>`
//   border: 2px red solid;
//   height: 100px;
//   width: 120px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   justify-content: center;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
// `;

//    <ContainerCard>
//         <ContainerModalTitle>
//           <h2>LOGIN</h2>
//         </ContainerModalTitle>
//       </ContainerCard>
//       <ContainerAvatar>
//         <h2>Logon-off</h2>
//       </ContainerAvatar>
