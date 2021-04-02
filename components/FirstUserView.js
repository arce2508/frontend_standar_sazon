import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CtaButton from '../components/CtaButton'

const FirstUserView = (icon, message) => {
  return (
    <div className='container-first-user'>
      <h2 className='text-user'>
        <FontAwesomeIcon icon={faPlusCircle} /> Aun no tienes recetas
      </h2>
      <br />
      <br />
      <h2 className='text-user'>Vamos a crear algo juntos</h2>
      <CtaButton
        href='recipes/create'
        message='Crea una receta'
      />
    </div>
  )
}

FirstUserView.defaultProps = {
  message: 'Aceptar'
}

export default FirstUserView
