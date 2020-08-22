import React from 'react'
import lady from './ODIO-LADY.png'
import RegisterForm from './RegisterForm'

function RegisterPage({history}) {
  return (
    <div className="register">
      <div className="register-wrapper">
        <div className="left">
          <img src={lady}alt=""/>
        </div>
        <div className="right">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>Lorem ipsum dolor sit amet</p>
          <RegisterForm history={history} />
          <p className="small">Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
