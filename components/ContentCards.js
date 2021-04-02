import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft, faPlusCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export const ContentCard1 = () => {
  return (
    <ul className='list-unstyled text-center card-content-how'>
      <li className='ingredient1Opacity'>Plato fuerte</li>
      <li className='ingredient2Opacity'>Postre</li>
      <li><FontAwesomeIcon icon={faCaretRight} /><strong> Salsa </strong><FontAwesomeIcon icon={faCaretLeft} />
      </li>
      <li className='ingredient4Opacity'>Ensalada</li>
      <li className='ingredient5Opacity'>Bebida</li>
    </ul>
  )
}

export const ContentCard2 = () => {
  return (
    <ul className='list-unstyled text-center card-content-how'>
      <li className='ingredient1Opacity'>Harina</li>
      <li><strong> Sal de ajo </strong></li>
      <li className='ingredient3Opacity'>Vinagre</li>
      <li className='ingredient1Opacity'>Mayonesa</li>
      <li className='ingredient3Opacity'>Oregano</li>
      <li className='ingredient3Opacity'>
        <FontAwesomeIcon icon={faPlusCircle} />  Agregar nuevo
      </li>
    </ul>
  )
}

export const ContentCard3 = () => {
  return (
    <ul className='list-unstyled text-center card-content-how'>
      <li>
        <FontAwesomeIcon icon={faCheckCircle} /><strong> Carnes de res</strong>
      </li>
      <li className='ingredient4Opacity'>Peso bruto</li>
      <li className='ingredient4Opacity'>4800 grs</li>
      <li />
      <li>
        <FontAwesomeIcon icon={faCheckCircle} /><strong> Carne de res</strong>
      </li>
      <li className='ingredient4Opacity'>Peso neto</li>
      <li className='ingredient4Opacity'>3600 gr</li>
    </ul>
  )
}

export const ContentCard4 = () => {
  return (
    <ul className='list-unstyled text-center card-content-how'>
      <li><strong>Número de porciones:</strong></li>
      <li className='ingredient3Opacity'>Tamaño de porción: 250 grs</li>
      <li className='ingredient2Opacity'>Rendimiento:3 platos</li>
      <li />
      <li className='ingredient3Opacity2'>Necesitas:</li>
      <li className='ingredient3Opacity'>Carne de res: 500 grs</li>
      <li className='ingredient2Opacity'>Elote: 250 grs</li>
    </ul>
  )
}
