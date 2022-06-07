import {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import InputArea from '../component/InputArea'
import { crearProducto, subirImg } from '../service/productsService'

function CrearProducto() {
  
    const [producto, setProducto] = useState({nombre:'', precio:'', descripcion:'', imagen:'' })
    const [image, setImage] = useState('')

    const datosProductos = (event) =>{
      const name = event.target.name
      const value = event.target.value
      const file = event.target.file
      setProducto({...producto, [name]:value})
      setImage({...image, [file]:value})
      console.log(file)
      console.log('producto', producto)
    }

    const guardarDatos = async (event) =>{
      try{
        event.preventDefault()
        const response = await crearProducto(producto)
        const img = await subirImg(image)
        return (response, img)
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
            <InputArea label= "descripcion" type="textarea" name="descripcion" placeholder = "descripcion del producto" change={datosProductos} />
            <Input label="Imagen" type="file" change ={datosProductos} />
            <Button type="submit">Guardar</Button>
        </Form>
    </div>
  )
}

export default CrearProducto
