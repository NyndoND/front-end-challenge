import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../theme/theme';
import logo from '../../../assets/Logo.png';

import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  ButtonContainer,
  InputContainer
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';

export default function Login({navigation}:any) {

  const [teste, setTeste] = useState('Email...');

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />
        <Header>
          <Logo source={logo} />

          <Title>Fit Dream</Title>
        </Header>
        <Content>

          <InputContainer>
            <Input
              placeholder={teste}
              placeholderTextColor={theme.colors.black}
            />
          </InputContainer>

          <InputContainer>
            <Input
              placeholder='Senha...'
              placeholderTextColor={theme.colors.black}
              onChangeText={(value)=> setTeste(value)}
            />
          </InputContainer>
          <ButtonContainer>
            <Button
              onClick={()=> navigation.navigate({name: "Register"})}
              label="Crie sua conta!"
              backgroundColor={'white'}
              LabelColor={"greeNeon"}
              fontSize={"15px"}
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button
              onClick={() => { }}
              label="Login"
              backgroundColor={'purpleNeon'}
              LabelColor={'white'}
            />
          </ButtonContainer>
        </Content>
      </Container>
    </ThemeProvider>
  );
}