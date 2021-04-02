import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import Arrow from '../public/down_accordionarrow.svg'
import Tecnico from '../components/Technical'
import Administrativo from '../components/Administrative'
import Ingrediente from '../components/Ingredients-carousel'
import Utensilios from '../components/Utensils'
import Tecnica from '../components/Technique'
import Presentacion from '../components/Presentation'
import Subrecetas from '../components/Subrecipe-carousel'

const AccordionDetail = () => {
  return (
    <div className='accordion-wrapper'>
      <Accordion defaultActiveKey='0'>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <h4>Apartado técnico</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body><Tecnico /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            <h4>Apartado administrativo</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body><Administrativo /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='2'>
            <h4>Ingredientes</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Card.Body><Ingrediente /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='3'>
            <h4>Utensilios</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='3'>
            <Card.Body><Utensilios /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='4'>
            <h4>Técnica</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='4'>
            <Card.Body><Tecnica /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='5'>
            <h4>Presentación</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='5'>
            <Card.Body><Presentacion /></Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='6'>
            <h4>Sub recetas</h4> <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='6'>
            <Card.Body><Subrecetas /></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default AccordionDetail
