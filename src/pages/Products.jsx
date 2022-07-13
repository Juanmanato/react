import React from 'react'
import {useState, useEffect} from 'react'
import Product from '../component/Product'
import Loading from '../component/Loading'
import {traerProductos} from '../service/productsService'
import {Row} from 'react-bootstrap'


export default function Productos() {

  const [Productos, setProductos] = useState([])

  useEffect(() =>{
    const productos = async () => {
      try{
        const data = await traerProductos();
        setProductos(data);
      }catch(error){
        console.log(error)
      }
    }
    productos();

  },[])


        return (
          <>
          {Productos.length === 0 && <Loading/>}
          <Row>
            {Productos.map((prodcuto)=> <Product key={prodcuto.id} 
            id = {prodcuto.id} 
            nombre = {prodcuto.data().nombre} 
            precio = {prodcuto.data().precio} 
            descripcion = {prodcuto.data().descripcion}
            // imagen = {prodcuto.data().imagen}
            />).slice(0, 8)}
          </Row>
          </>
    )
}
