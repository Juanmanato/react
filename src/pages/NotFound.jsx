import React from 'react'
import gifError from '../assets/giphy2.gif'
export default function NotFound() {
  return (
  
     <div>
            <h1>UPSS!!! parace que la pagina no existe o esta en mantenimiento</h1>
            <img src ={gifError} alt="imagen error"/>
            <p>Error 404</p>
        </div>
    
  )
}
