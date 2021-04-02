import React from 'react'

const UtencilsButtonsOrange = ({ id, message, checked, onChange }) => {
  const color = checked ? 'green' : 'orange'

  return (
    <div className={`button-utencils d-flex ${color}`}>
      <input className='checkmark' name={id} type='checkbox' checked={checked} onChange={onChange} />
      <label className=' '>{message}
      </label>
    </div>
  )
}

UtencilsButtonsOrange.defaultProps = {
  message: 'Aceptar'
}

export default UtencilsButtonsOrange
