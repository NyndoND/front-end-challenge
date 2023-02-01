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
  InputContainer,
  UserTypeContainer,
  UserType
} from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useState } from 'react';

export default function Register({ navigation }: any) {

  const [userType, setUserType] = useState('Cliente');
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />
        <Header>
          <Logo source={logo} />

          <Title>Fit Dream Cadastro</Title>
        </Header>
        <Content>
          <InputContainer>
            <Input
              placeholder={"Email..."}
              placeholderTextColor={theme.colors.black}
            />
          </InputContainer>


          <InputContainer>
            <Input
              placeholder='Senha...'
              placeholderTextColor={theme.colors.black}
              onChangeText={(value) => {}}
            />
          </InputContainer>
          <UserTypeContainer>
            <UserType>
              <Button
                onClick={() => setUserType("Cliente")}
                label="Cliente"
                backgroundColor={userType == "Cliente" ? 'purpleNeon': "white"}
                LabelColor={userType == "Cliente" ? 'white': "blackPure"}
                fontSize={"15px"}
              />
            </UserType>
            <UserType>
              <Button
                onClick={() => setUserType("Professor")}
                label="Professor"
                backgroundColor={userType == "Professor" ? 'purpleNeon': "white"}
                LabelColor={userType == "Professor" ? 'white': "blackPure"}
                fontSize={"15px"}
              />
            </UserType>

            <UserType>
              <Button
                onClick={() => setUserType("Admin")}
                label="Admin"
                backgroundColor={userType == "Admin" ? 'purpleNeon': "white"}
                LabelColor={userType == "Admin" ? 'white': "blackPure"}
                fontSize={"15px"}
              />
            </UserType>

          </UserTypeContainer>

          <InputContainer>
            <Input
              placeholder={"Confirmar senha..."}
              placeholderTextColor={theme.colors.black}
            />
          </InputContainer>

          <InputContainer>
            <Input
              placeholder={"Confirmar senha..."}
              placeholderTextColor={theme.colors.black}
            />
          </InputContainer>
          <ButtonContainer>
            <Button
              onClick={() => navigation.navigate({ name: "Login" })}
              label="Login"
              backgroundColor={'white'}
              LabelColor={"greeNeon"}
              fontSize={"15px"}
            />
          </ButtonContainer>

          <ButtonContainer>
            <Button
              onClick={() => navigation.navigate('Home')}
              label="Cadastrar"
              backgroundColor={'purpleNeon'}
              LabelColor={'white'}
            />
          </ButtonContainer>
        </Content>
      </Container>
    </ThemeProvider>
  );
}