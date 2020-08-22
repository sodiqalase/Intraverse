import React, {useState} from 'react'
import { Redirect } from 'react-router-dom'

function RegisterForm({history}) {
  const [fields, setFields] = useState({firstname: '', email: '', lastname: '', password: '', failed: false, success: false})

  const {firstname, email, lastname, password, failed, success} = fields

  const onchange = (e) => {
    setFields({...fields, [e.target.name]: e.target.value})
  }

  const onsubmit = async (e) => {
    e.preventDefault()
    const url = 'https://staging.odio.com.ng/v1/register'
    const {firstname, email, lastname, password} = fields

    const re = /^(?=.*[A-Za-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    
    
    if (firstname.length > 0 && lastname.length > 0 && email && re.test(password)){
      try {
        const data = {
          first_name: firstname,
          last_name: lastname,
          type: 'customer',
          password,
          email,
          confirm_password: password
        }
        let res = await fetch(url, {method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(data)});
        let pro = await res.json();
        setFields({firstname: '', email: '', lastname: '', password: '', failed: false, success: true});
        setTimeout(() => {
          history.push("/login")}, 2000)
        
      } catch (e) {
        console.log(e)
      }
    } else {
      setFields({...fields, failed: true})
    }
    

   
  }
  return (
    <form onSubmit={onsubmit} action="" className="register-form">
      <p style={{display: failed ? 'block' : 'none' }} className="note">Please ensure that your password meets the criteria and fill all fields</p>
      <p style={{display: success ? 'block' : 'none' }} className="note">Registration Successful!!!</p>
      <input value={firstname} onChange={onchange} type="text" placeholder="First Name*" name="firstname"/>
      <input onChange={onchange} value={lastname} type="text" placeholder="Last Name*" name="lastname"/>
      <input onChange={onchange} value={email} type="email" placeholder="Email*" name="email"/>
      <input onChange={onchange} value={password} type="password" placeholder="Password*" name="password"/>
      <p className="note">password is expected to contain at least 1 upper case letter, 1 lower case letter, 1 number or special character, and a minimum of 8 characters in length</p>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default RegisterForm
