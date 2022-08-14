import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/contact.class'

const ComponentB = ({contact}) => {
  return (
    <div>
      <h2>
        Nombre : {contact.name}
      </h2>

      <h3>
        Description : {contact.lastName}
      </h3>

      <h4>
        Level : {contact.email}
      </h4>

      <h5>
        This contact is : {contact.conected ? 'Contacto En Línea' : 'Contacto No Disponible'}
      </h5>
    </div>
  )
}


ComponentB.propTypes = {
  contact : PropTypes.instanceOf(Contact)
}

export default ComponentB