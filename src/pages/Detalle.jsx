import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import {traerProductoId} from '../service/productsService'
import {Card, Button} from 'react-bootstrap'
import LoginContext from '../Context/LoginContext'
// import Loading from '../component/Loading'

export default function Detalle() {

    const {id} = useParams()
    const [productoId, setProductoId] = useState ({})

    useEffect(() => {
        const producto = async ()=>{
            try{
                const response = await traerProductoId(id)
                setProductoId(response.data())
            }catch(e){
                console.log(e)
            }
        }
        producto()
    },[id])

    const[compra, setCompra] = useState()

    const handleCompra = () =>{
      setCompra("gracias por su compra")
    }


  return (
    <LoginContext.Consumer>
        {context => 
        
        <div>
        {/* {!productoId && <Loading/>} ver porque no muestra el spinner y como hacer un map con las imagenes del carousel */}
        <Card style={{ width: '35rem' }}>
        {/* <Carousel variant='dark'>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productoId.imagen}
                alt="First slide"
                />
               
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productoId.imagen}
                alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={productoId.imagen}
                alt="Third slide"
                />

               
            </Carousel.Item>
        </Carousel> */}
        
        <Card.Body>
            <Card.Title>{productoId.nombre}</Card.Title>
            <Card.Text>
            {productoId.precio}
            </Card.Text>
            <Card.Text>
            {productoId.descripcion}
            </Card.Text>
            {context.userLogin &&
            <>
            <Button onClick={handleCompra} variant="primary">Comprar</Button>
            <p>{compra}</p>
            </>
            }
        </Card.Body>

        {context.userLogin &&
        <Button as = {Link} to={'/producto/modificarProducto/'+ id}>Modificar</Button>
            }
        </Card>
        
    </div>

        }
    </LoginContext.Consumer>
    
  )
}
