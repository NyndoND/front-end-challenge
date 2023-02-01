import styled from "styled-components/native";
import theme from "../../theme/theme";

interface IContainer {
  backgroundColor: keyof typeof theme.colors;
}
export const Container = styled.Pressable<IContainer>`
  display: flex;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;

  border-radius: 20px;

  background-color: ${({theme, backgroundColor})=> theme.colors[backgroundColor]};
`;

//forma alternativa de typing
export const Label = styled.Text<{ fontSize: string; color: keyof typeof theme.colors }>`
  display: flex;

  font-size: ${({fontSize})=> fontSize};
  color: ${({color, theme})=> theme.colors[color]}
`;