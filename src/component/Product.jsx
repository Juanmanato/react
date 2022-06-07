import React, {useState} from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Product(props) {
    const{nombre, precio, descripcion, id} = props

    const[compra, setCompra] = useState()

    const handleCompra = () =>{
      setCompra("gracias por su compra")
    }

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
            ${precio}
            </Card.Text>
            <Card.Text>
            {descripcion}
            </Card.Text>
        <Button as = {Link} to = {'/producto/' + id} variant="primary">Detalle</Button>
        <br/>
        <Button onClick={handleCompra} variant="primary">Comprar</Button>
        <p>{compra}</p>
        </Card.Body>
    </Card>
  )
}
