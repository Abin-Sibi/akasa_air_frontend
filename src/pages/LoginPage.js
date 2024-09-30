import React, { useState } from 'react'
import Login from '../components/User/Login/Login'
import Register from '../components/User/Register/Register'
import './LoginPage.css'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [login,setLogin] = useState(true);
    const [register,setRegister] = useState(false);
    const navigate = useNavigate();

    const showLogin = ()=>{
        setLogin(true);
        setRegister(false)
    }
    const showRegister = ()=>{
        setRegister(true)
        setLogin(false)
    }
    const adminLogin = ()=>{
      navigate('/admin');
  }

  return (
    <div className='loginPage'>
        <div className='loginPageBox'>
        {login && <Login/>}
        { register &&< Register/>}

{register &&<button onClick={showLogin} className='lbuttons' >Already a user ? - login</button>}

{login && <button onClick={showRegister} className='lbuttons'>New user ? - register</button>}
{login && <button onClick={adminLogin} className='labuttons'>login as Admin</button>}
        </div>


      
    </div>
  )
}

export default LoginPage
