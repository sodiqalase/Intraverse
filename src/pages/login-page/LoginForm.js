import React, {useState} from 'react'

function LoginForm() {

  const [fields, setFields] = useState({password: '', email: '', failed: false, success: false});
  const {email, password, failed, success} = fields

  const onchange = (e) => {
    setFields({...fields, [e.target.name]: e.target.value})
  }
  const onsubmit = async (e) => {
    e.preventDefault()
    console.log(fields)
    const url = 'https://staging.odio.com.ng/v1/login'
    if (email && password){
      try {
        const data = {
          password,
          email,
        }
        let res = await fetch(url, {method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify(data)});
        let pro = await res.json();
        console.log(pro)
        if (pro.message !== 'Successful'){
          setFields({...fields, failed: true})
          setTimeout(() => {
            setFields({...fields, failed: false})
          }, 4000)
        } else {
          setFields({email: '', password: '', failed: false, success: true})
          
        }
        
      } catch (e) {
        console.log(e)
        setFields({...fields, failed: true})
      }
    } else {
      setFields({...fields, failed: true})
    }
    
  }
  return (
    <form onSubmit={onsubmit} className="login-form">
      <p>lorem ipsum</p>
      <p style={{display: failed ? 'block' : 'none' }} className="note">login Failed</p>
      <p style={{display: success ? 'block' : 'none' }} className="note">login Successful</p>
      <div className="form-group">
        
        <label htmlFor="email">Email</label>
        <input onChange={onchange} type="text"  value={fields.email} name="email" className="email" id="email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">password</label>
        <input onChange={onchange} name="password" value={fields.password} type="password" id="password"/>
      </div>
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginForm
