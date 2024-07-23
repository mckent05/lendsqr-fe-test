import React from 'react'
import "./login.scss"
import SideBanner from '../../components/Sessions/SideBanner'
import LogInForm from '../../components/Sessions/LoginForm'

const LoginPage = () => {
  return (
    <div className='login__page'>
      <SideBanner />
      <LogInForm />
    </div>
  )
}

export default LoginPage
