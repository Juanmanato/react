import React from 'react'
import {Form} from 'react-bootstrap'
export default function input(props) {
    const { label, type, name, placeholder, change, value} = props
  return (
    <div>
        <Form.Group className="mb-3"  >
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} name= {name} value={value} placeholder={placeholder} onChange={change}  />
        </Form.Group>
    </div>
  )
}
