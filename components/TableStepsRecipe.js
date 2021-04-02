import React from 'react'
import Table from 'react-bootstrap/Table'

const TableStepsRecipe = ({ message }) => (
  <div className='tablesStepsResume'>
    <Table borderless>
      <td className='tableSteps'>{message}</td>
      <button className='deleteButtonSteps'>X</button>
    </Table>
  </div>
)

TableStepsRecipe.defaultProps = {
  message: 'Aceptar'
}

export default TableStepsRecipe
