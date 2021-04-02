import LayoutUser from '../../components/LayoutUser'
import React from 'react'
import Table from 'react-bootstrap/Table'
import NextButton from '../../components/NextButton'
import ShowIngredient from '../../components/ShowIngredient'

const Ingredients = () => {
  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label for=''>Ingrediente</label>
                <input type='text' placeholder='Ingrediente' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Pesoneto</label>
                <input type='text' placeholder='Peso neto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <label for=''>Peso Bruto</label>
                <input type='text' placeholder='Peso bruto' name='' id='' />
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ 9</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>- </p>
              </div>
              <button className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>
        <Table borderless className='tittleTable'>
          <td>Ingrediente</td>
          <td>Peso Bruto</td>
          <td>Peso neto</td>
          <td>Costo unitario</td>
          <td>U. M.</td>
          <td>Importe</td>
        </Table>
        <ShowIngredient />
        <div className='importStyle d-flex justify-content-between align-items-end'>
          <p>Importe</p>
          <p href=''>$ 45</p>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <NextButton message='Siguiente' />
          </div>
        </div>
      </div>
    </LayoutUser>
  )
}

export default Ingredients
