import styled from "styled-components/native";
import theme from "../../theme/theme";

interface IContainer {
  backgroundColor?: keyof typeof theme.colors
}
export const Container = styled.View<IContainer>`
  display: flex;

  width: 100%;
  height: 100%;

  background-color: ${({backgroundColor, theme})=> backgroundColor ? theme.colors[backgroundColor] : ""};


  border: 1px solid ${({theme})=> theme.colors.black};

  border-radius: 20px;

`;

export const TextInput = styled.TextInput`
  display: flex;
  width: 100%;
  height: 100%;

  margin-left: 20px;

  color: ${({theme})=> theme.colors.black};
`;