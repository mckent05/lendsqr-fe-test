import React from 'react'
import logo from "../../assets/images/logo.png"
import "./styles.scss"

const SideBanner = () => {
  return (
    <div className='banner__cont'>
        <div className='login__logo__'>
          <img src={logo} alt="company-logo" />
        </div>
        <div className='banner__backImg'></div>

    </div>
  )
}

export default SideBanner
