import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Title from './Title'
import LoginBtn from './LoginBtn'

interface FormProps {
  email: string
  password: string
}

const LogInForm = () => {
  const [formDetails, setFormDetails] = useState<FormProps>({
    email: '',
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
    if(formDetails.email && formDetails.password) {
      navigate("/dashboard/users")
    }
  }
  return (
    <div className="form__cont">
      <div className="input__text__cont">
        <Title />
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={formDetails.email}
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
