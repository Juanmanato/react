import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import {useState, useContext} from 'react'
import firebase from "../config/firebase"
import LoginContext from '../Context/LoginContext'

export default function Login() {

  const [login, setLogin] = useState({usuario:'', password:''})

  const context = useContext(LoginContext)
  const datosLogin = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setLogin({...login, [name]:value})
  }
  const guardarDatosLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(login.usuario, login.password)
        const userInfo = await firebase.firestore().collection('usuarios').where("userId", "==", user.user.uid).get()
        const nombre = userInfo.docs[0].data().name
        context.loginUser(nombre)
      return user
    }catch(error){
      console.log(error)
    }
  }


  return (
    <div>
      {/* validar los datos del form y condicional cunado  hacer un condicional para que si los datos estan mal cartel de error de usuario o contraseña */}
     <Form onSubmit={guardarDatosLogin}>
         <Input label = 'Usuario' type = 'email' name = 'usuario' placeholder = 'Debe ingresar su usuario' change = {datosLogin}/>
         <Input label = 'Contraseña' type = 'password' name = 'password' placeholder = 'Debe ingresar una contraseña' change = {datosLogin}/>
         <Button type="submit">Ingresar</Button>
     </Form>
    </div>
  )
}
