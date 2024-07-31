import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import LoginBtn from './LoginBtn'

interface FormProps {
  username: string
  password: string
}

const LogInForm = () => {
  const [formDetails, setFormDetails] = useState<FormProps>({
    username: '',
    password: '',
  })

  const navigate = useNavigate()

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} =  e.target
    setFormDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const submitLoginForm = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if(formDetails.username && formDetails.password) {
      navigate("/dashboard/users")
    }
  }
  return (
    <div className="form__cont">
      <div className="input__text__cont">
        <Title />
        <form>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Email"
            required
            value={formDetails.username}
            onChange={(e) => handleFormChange(e)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            onChange={(e) => handleFormChange(e)}
            value={formDetails.password}
          />
          <p>forgot password?</p>

          <LoginBtn submit={submitLoginForm} />
        </form>
      </div>
    </div>
  )
}

export default LogInForm
