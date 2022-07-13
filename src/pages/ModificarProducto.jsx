import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'
import Input from '../component/Input'
import {traerProductoId ,modificar, eliminar} from '../service/productsService'
import Loading from "../component/Loading"
import {useNavigate} from 'react-router-dom'

function ModificarProducto() {
    const {id} = useParams()
    const navigate = useNavigate()
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
            navigate('/')
            return response
        }catch(e){
            console.log(e)
        }

    }
    const handleEliminar = async () => {
        const borrar = await eliminar(id)
        navigate('/')
        return borrar
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
                <Input label= "Descripcion"type="textarea" name="descripcion" value={datos.descripcion} change={verDatos}/>
                <Button type='submit'>Guardar</Button>
            </Form>
        </div>
    </>
  )
}

export default ModificarProducto
