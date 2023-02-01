import theme from '../../theme/theme';
import logo from '../../../assets/Logo.png';

import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  ButtonContainer,
  InputContainer,
  Subtitle,
  TitleContainer
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';

export const Home = (({ navigation }: any) => {

  const days = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ]

  function formatDateNumber(number: number){
    if(number < 10){
      return "0"+ number;
    }
    return number;
  }
  return (

    <Container>
      <Header>
        <Logo source={logo} />
        <TitleContainer>
          <Title>Aulas</Title>
          <Subtitle>{days[new Date().getDay()]}, {formatDateNumber(new Date().getDate())}/{formatDateNumber(new Date().getMonth())}</Subtitle>
        </TitleContainer>
      </Header>
      <Content>

        
      </Content>
    </Container>
  )
})

export default Home;