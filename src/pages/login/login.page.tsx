import { BsGoogle } from 'react-icons/bs'

import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'

import {
  LoginContainer,
  LoginContent,
  LoginHeadline,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

function LoginPage() {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadline>Entre com a sua conta</LoginHeadline>

          <CustomButton startIcon={<BsGoogle size={25} />}>
            Entrar com o Google
          </CustomButton>

          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>{/* email input */}</LoginInputContainer>
          <LoginInputContainer>{/* password input */}</LoginInputContainer>

          {/* Button entrar */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
