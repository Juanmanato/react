import React from 'react'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import {useState} from 'react'
import firebase from "../config/firebase"


export default function Login() {

  const [login, setLogin] = useState({usuario:'', password:''})

  const datosLogin = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setLogin({...login, [name]:value})
  }
  const guardarDatosLogin = async (event) => {
    event.preventDefault()
    try{
      const user = await firebase.auth().signInWithEmailAndPassword(login.usuario, login.password)
      return user

    }catch(error){
      console.log(error)
    }
  }


  return (
    <div>
      {/* validar los datos del form y condicional cunado carga datos o redirigir y si da error vovler al formualrio */}
     <Form onSubmit={guardarDatosLogin}>
         <Input label = 'Usuario' type = 'email' name = 'usuario' placeholder = 'Debe ingresar su usuario' change = {datosLogin}/>
         <Input label = 'Contraseña' type = 'password' name = 'password' placeholder = 'Debe ingresar una contraseña' change = {datosLogin}/>
         <Button type="submit">Ingresar</Button>
     </Form>
    </div>
  )
}
