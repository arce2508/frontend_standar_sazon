import React from 'react'
import Table from 'react-bootstrap/Table'

const ShowIngredient = ({ image, name, grossWeight, netWeight, priceUnit, measureByBuy, amount, performancePercent }) => {
  return (
    <div>
      <Table borderless className='tittleResume'>
        {
          image
            ? <img className='img-ingredient' src={image} alt='imagen ingrediente' />
            : <div className='img-box' />
        }

        <td>{name}</td>
        <td>{grossWeight}</td>
        <td>{netWeight}</td>
        <td>{performancePercent} %</td>
        <td>{priceUnit}</td>
        <td>{measureByBuy}</td>
        <td>{amount}</td>
        <div>
          <button className='deletebutton'>X</button>
        </div>

      </Table>
    </div>
  )
}

export default ShowIngredient
