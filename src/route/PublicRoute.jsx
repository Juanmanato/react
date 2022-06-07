import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detalle from '../pages/Detalle'
import NotFound from '../pages/NotFound'
import CrearProducto from '../pages/CrearProducto'
import ModificarProducto from '../pages/ModificarProducto'


export default function publicRoute() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Navigate/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Registro" element={<Register/>} />
            <Route path='/producto/crearProducto' element={<CrearProducto />} />
            <Route path='/producto/modificarProducto/:id' element={<ModificarProducto />} />
            <Route path='/producto/:id' element={<Detalle />} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      
    </div>
  )
}
