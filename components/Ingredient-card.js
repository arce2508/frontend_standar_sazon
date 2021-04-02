import React from 'react'
import Avatar from '../public/pumpkin.png'

const IngredientCard = () => {
  return (
    <div className='ingredient-card-wrapper'>
      <div class='ingredient-pic'>
        <h4>Titulo</h4>
        <img src={Avatar} alt='' />
      </div>
      <div class='ingredient-body'>
        <div class='letf-side'>
          <div class='card-item'>
            <h5>Peso bruto</h5>
            <div class='pricer'>
              <p>#</p><p>unidad</p>
            </div>
          </div>
          <div class='card-item'>
            <h5>Peso neto</h5>
            <div class='pricer'>
              <p>#</p><p>unidad</p>
            </div>
          </div>
        </div>
        <div class='right-side'>
          <div class='card-item'>
            <h5>Costo unitario</h5>
            <div class='pricer'>
              <p>$</p><p>costo</p>
            </div>
          </div>
          <div class='card-item'>
            <h5>Importe</h5>
            <div class='pricer'>
              <p>$</p><p>importe</p>
            </div>
          </div>
        </div>
        <div class='card-item'>
          <h5>Porción</h5>
          <div class='pricer'>
            <p>#</p><p>piezas</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientCard
