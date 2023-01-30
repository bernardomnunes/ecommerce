import { ButtonHTMLAttributes, ReactNode } from 'react'
import { CustomButtonContainer, IconContainer } from './custom-button.styles'

// React.reactnode eh um componente
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  startIcon?: React.ReactNode
}
function CustomButton({ children, startIcon, ...rest }: CustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}
      {children}
    </CustomButtonContainer>
  )
}

export default CustomButton
