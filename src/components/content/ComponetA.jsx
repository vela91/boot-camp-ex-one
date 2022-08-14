import React, { Component } from 'react'
import { Contact } from '../../models/contact.class'
import ComponentB from '../pure/ComponetB'

const ComponentA = () => {
const defaultContact = new Contact(
  'Jose', 'vela', 'test@test.com', true
)

  return (
    <div>
      <h1>
        Contact: 
      </h1>
      <ComponentB  contact={defaultContact} />
    </div>
  )
}


export default ComponentA