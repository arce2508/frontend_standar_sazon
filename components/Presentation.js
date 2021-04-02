import React from 'react'
import Image from 'react-bootstrap/Image'
import Dummie from '../public/munchies.png'

const ImagePresentation = () => {
  return (
    <div className='presentation-wrapper'>
      <div class='carousel-header'>
        <h3>Consejos de preparación</h3>
      </div>
      <Image src={Dummie} fluid />
    </div>
  )
}

export default ImagePresentation
