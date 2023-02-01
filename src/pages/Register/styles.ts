import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  //justify-content: center;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 30%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.purpleNeon};

`;

export const Title = styled.Text`
  display: flex;

  font-size: 46px;
  color: ${({ theme }) => theme.colors.greeNeon};

`;

export const Logo = styled.Image`
  display: flex;
  width: 20%;
  height: 35%;
`;

export const Content = styled.View`
  display: flex;
  width: 100%;
  height: 70%;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};

`;

export const InputContainer = styled.View`
  display: flex;

  width: 70%;

  height: 10%;

  margin-bottom: 20px;
`;

export const ButtonContainer = styled.View`
  display: flex;

  width: 50%;
  height: 10%;
`;

export const UserTypeContainer = styled.View`
  display: flex;

  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 10%;

  margin-bottom: 10px;
`;

export const UserType = styled.View`
  display: flex;

  width: 30%;
  height: 50%;
`;