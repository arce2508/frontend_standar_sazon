import PLUS from '../public/img/plusicon.svg'
import React from 'react'

const AddUtencil = () => (
  <button className='AddButtonUtencil'>
    <span className='textButton'>Agregar utensilio</span>
    <img src={PLUS} alt='' />
  </button>
)

export default AddUtencil
