import { defineMessages } from 'react-intl'

export default defineMessages({
  ids: 'components.modals.AuthModal',

  loginTitle: 'Log in to your account',
  registerTitle: 'Create your account',
  email: 'Email',
  password: 'Password',
  forgotPassword: 'Forgot your password?',
  dontHaveAnAccount: 'Dont\'t have an account?',
  haveAnAccount: 'Have an account?',
  rules: `
    By hitting the "Register" button, you agree to the 
    <a href="{terms}" target="_blank">Terms and Conditions</a> 
    and <a href="{privacy}" target="_blank">Privacy Policy</a>
  `,
  login: 'Log In',
  register: 'Register',
})
