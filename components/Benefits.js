import React from 'react'
import Waste from '../public/nowaste.svg'
import Expand from '../public/expand.svg'
import Balance from '../public/balance.svg'
import Line from '../public/greenline.svg'

const benefitCard = () => {
  return (
    <div className='benefit-wrapper'>
      <div className='benefit-title'>
        <h2>Beneficios</h2>
        <img src={Line} alt='Linea' />
      </div>
      <div className='benefit-card-wrapper'>
        <img src={Waste} alt='Desperdicio' />
        <h3>Evite el desperdicio.</h3>
        <p>Conociendo las cantidades necesarias para cada receta, evitarás sobreinventarios, reduciendo pérdidas de insumos y dinero.</p>
      </div>
      <div className='benefit-card-wrapper'>
        <img src={Expand} alt='Expandir' />
        <h3>Escala tus menús.</h3>
        <p>Podrás calcular porciones, insumos, costos, utilidad y tiempos de preparación desde un solo plato, hasta el flujo de un restaurante completo.*</p>
        <caption>*Plan Premium</caption>
      </div>
      <div className='benefit-card-wrapper'>
        <img src={Balance} alt='Balance' />
        <h3>Encuentra el balance.</h3>
        <p>Monitorea el costeo de tus recetas y mantén la calidad de tus platillos con nuestro flujo de recetas estandarizadas.</p>
      </div>
    </div>
  )
}

export default benefitCard
