import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import InputArea from '../component/InputArea'
import {traerProductoId ,modificar, eliminar} from '../service/productsService'
import Loading from "../component/Loading"

function ModificarProducto() {
    const {id} = useParams()
    const [datos, setDatos] = useState({nombre:'', precio:'', descripcion:''})
    useEffect( ()=>{
        const producto = async ()=>{
            try{
                const response = await traerProductoId(id)
                setDatos(response.data())
            }catch(error){
                console.error(error)
            }
        }
        producto()   
    },[id])

    const verDatos = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setDatos({...datos, [name]:value})
    }

    const guardarDatos = async (event)=>{
        try{
            event.preventDefault()
            const response = await modificar(id, datos)
            return response
        }catch(e){
            console.log(e)
        }

    }
    const handleEliminar = async () => {
        return await eliminar(id)
    }

  return (
    <>
     {datos.length === 0 && <Loading/>}
        <div>
            <div>
                <Button onClick={handleEliminar}>Eliminar este producto</Button>
            </div>
             {/* validar los datos del form y condicional cunado carga datos o redirigir y si da error vovler al formualrio */}
            <Form onSubmit = {guardarDatos}>
                <Input label= "Nombre" type="text" name="nombre" value={datos.nombre } change={verDatos} />
                <Input label= "Precio" type="number" name="precio" value={datos.precio} change={verDatos}/>
                <InputArea label= "Descripcion"type="text" name="descripcion" value={datos.descripcion} change={verDatos}/>
                <Button type='submit'>Guardar</Button>
            </Form>
        </div>
    </>
  )
}

export default ModificarProducto
