import React from 'react'
import Title from './Title'
import LoginBtn from './LoginBtn'

const LogInForm = () => {
  return (
    <div className="form__cont">
      <div className="input__text__cont">
        <Title />
        <form>
          <input type="text" name="username" id="username" placeholder='Email' />
          <input type="password" name="password" id="password" placeholder='Password' />
          <p>forgot password?</p>

          <LoginBtn />
        </form>
      </div>
    </div>
  )
}

export default LogInForm
