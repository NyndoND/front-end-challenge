import theme from "../../theme/theme";
import { TextInputProps } from 'react-native';
import {
  Container,
  TextInput
} from "./styles";


interface IInput extends TextInputProps{
  backgroundColor?: keyof typeof theme.colors 
}

export const Input = (({backgroundColor, ...rest}: IInput) => {
  return (
    <Container >
      <TextInput {...rest}> 

      </TextInput>

    </Container>
  )
})

export default Input;