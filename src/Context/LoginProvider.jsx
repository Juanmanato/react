import React from 'react'
import {useState} from 'react'
import LoginContext from './LoginContext'
import {useNavigate} from 'react-router-dom'

export default function LoginProvider(props) {

    const[userLogin, setUserLogin] = useState(localStorage.getItem('login')||false)
    const [userInfo, setUserInfo] = useState({})
    const navigate = useNavigate()
    
    const loginUser = (userInfo)=> {
        setUserLogin(true)
        setUserInfo(userInfo)
        localStorage.setItem('login', true)
        window.history.back()
    }
    const logOutUser = ()=> {
        setUserLogin(false)
        localStorage.removeItem('login')
        navigate('/')
    }

  return (
    <div>
        <LoginContext.Provider value={{ userInfo, loginUser, logOutUser, userLogin}}>
            {props.children}
        </LoginContext.Provider>

    </div>
  )
}
