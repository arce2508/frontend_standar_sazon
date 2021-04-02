import LayoutUser from '../../../components/LayoutUser'
import Detail from '../../../components/Accordion'
import React from 'react'

const RecipeDetail = () => {
  return (
    <LayoutUser>
      <div className='inner-scroll'>
        <div className='header-detail'>
          <div className='header-detail-section'>
            <h4>Nombre de la receta</h4>
            <p>Receta</p>
          </div>
          <div className='header-detail-section middle-section'>
            <h4>Categoria</h4>
            <p>Categoria del platillo</p>
          </div>
          <div className='header-detail-section'>
            <h4>Tipo de receta</h4>
            <p>Standard</p>
          </div>
        </div>
        <Detail />
      </div>
    </LayoutUser>
  )
}

export default RecipeDetail
