import React from 'react'
import Input from '../component/Input'
import {Form, Button} from 'react-bootstrap'
import {useState} from 'react'
import firebase from '../config/firebase'
import {useNavigate} from 'react-router-dom'

export default function Register() {

  const navigate = useNavigate()
  const [registro, setRegistro] = useState({nombre: '', apellido: '', email: '', contraseña: ''})

  const datosRegistro = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setRegistro({...registro, [name]:value})
  }

  const guardarDatosRegistro = async (event) =>{
    try{
      event.preventDefault()
       const usuario = await firebase.auth().createUserWithEmailAndPassword(registro.email,registro.contraseña)
       if(usuario.user.uid){
        await firebase.firestore().collection('usuarios')
         .add({
           name:registro.nombre,
           lastName: registro.apellido,
           userId: usuario.user.uid,
           email:registro.email
         })
       }
       navigate('/login')
    }catch(err){
      console.log(err)
    }
  
  }

  return (
    <>
         {/* validar los datos del form y condicional cunado carga datos o redirigir y si da error vovler al formualrio */}
      <Form onSubmit = {guardarDatosRegistro}>
         <Input label = 'Nombre' type = 'text' name = 'nombre' placeholder = 'Debe ingresar su nombre' change= {datosRegistro}/>
         <Input label = 'Apellido' type = 'text' name = 'apellido' placeholder = 'Debe ingresar su Apellido' change= {datosRegistro}/>
         <Input label = 'Email' type = 'email' name = 'email' placeholder = 'Debe ingresar su correo electronico' change= {datosRegistro}/>
         <Input label = 'Contraseña' type = 'password' name = 'contraseña' placeholder = 'Debe ingresar una contraseña' change= {datosRegistro}/>
         <Button type="submit">Ingresar</Button>
     </Form>
    </>
  )
}
