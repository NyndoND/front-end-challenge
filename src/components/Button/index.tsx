import theme from '../../theme/theme';
import {
  Container,
  Label
} from './styles';


export interface IButton {
  onClick: () => void;
  label?: string;
  fontSize?: string;
  backgroundColor?: keyof typeof theme.colors
  LabelColor?: keyof typeof theme.colors
}

export const Button = (({
  label,
  onClick,
  backgroundColor = "white",
  fontSize = "20px",
  LabelColor = "black"
}: IButton) => {

  return (
    <Container onPress={()=> onClick()} backgroundColor={backgroundColor}>
      <Label fontSize={fontSize} color={LabelColor}>
        {label}
      </Label>
    </Container>
  )
})

export default Button;