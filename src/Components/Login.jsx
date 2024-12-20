import React from 'react'

const Login = () => {
   
  return (
    <>
    <form className='reg-form'>
    <h1 style={{ color: 'purple', textAlign: 'center' ,fontSize:'1.2rem'}}>Login</h1>
    <input type="text"
      placeholder='Username' />
    <input type="password"
      placeholder='Password'/>
    <button>Submit</button>
  </form>
</>
  )
}

export default Login