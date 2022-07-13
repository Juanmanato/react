import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Detalle from '../pages/Detalle'
import NotFound from '../pages/NotFound'
import CrearProducto from '../pages/CrearProducto'
import ModificarProducto from '../pages/ModificarProducto'
import LoginContext from '../Context/LoginContext'


export default function publicRoute() {
  return (
    <div>
      <LoginContext.Consumer>
       {context =>
       
       <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Navigate/>} />
        {!context.userLogin && 
        <>
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Register/>} />
          </>
        }
         {context.userLogin && <> 
          <Route path='/producto/crearProducto' element={<CrearProducto />} />
          <Route path='/producto/modificarProducto/:id' element={<ModificarProducto />} />
         </>}
       <Route path='/producto/:id' element={<Detalle />} />
       <Route path="*" element={<NotFound/>} />
   </Routes>

       }
        </LoginContext.Consumer>
    </div>
  )
}
