import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import { crearProducto} from '../service/productsService'
// import { subirImg } from '../service/productsService'
import {useNavigate} from 'react-router-dom'

function CrearProducto() {
  
  const [producto, setProducto] = useState({nombre:'', precio:'', descripcion:'' })
  // const [image, setImage] = useState() campo imagen:"" en setProducto
  const navigate = useNavigate()

  const datosProductos = (event) =>{
    const name = event.target.name
    const value = event.target.value
    setProducto({...producto, [name]:value})
    // setImage({file })
    // console.log('image', image)
    console.log('producto', producto)
    }

    const guardarDatos = async (event) =>{
      try{
        event.preventDefault()
        const response = await crearProducto(producto)
        // const img = await subirImg(image)
        navigate('/')
        return (response )
      }catch(error){
        console.log(error)
      }

    }
    
  return (
    <div>
       {/* validar los datos del form y condicional cunado carga datos o redirigir y si da error vovler al formualrio */}
        <Form onSubmit={guardarDatos}>
            <Input label="Nombre" type="text" name="nombre" placeholder="nombre del producto" change ={datosProductos} />
            <Input label="Precio" type="number" name="precio" placeholder="precio del producto" change ={datosProductos} />
            <Input label= "Descripcion" type="textarea" name="descripcion" placeholder = "descripcion del producto" change={datosProductos} />
            {/* <Input label="Imagen" type="file" name="imagen" change ={datosProductos} /> guardar imagen */}
            <Button type="submit">Guardar</Button>
        </Form>
    </div>
  )
}

export default CrearProducto
