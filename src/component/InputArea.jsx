import React from 'react'
import {Form} from 'react-bootstrap'
export default function InputArea(props) {
    const { label, type, name, placeholder, change, value} = props
  return (
    <div>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
            <Form.Label>{label}</Form.Label>
            <Form.Control as="textarea" type={type} name= {name} value={value} placeholder={placeholder} onChange={change}  />
        </Form.Group>
    </div>
  )
}
