import React from 'react'
import { Button, Card, Accordion } from 'react-bootstrap'
import Menu from '../public/menu.svg'
import ProfilePic from '../public/userpic.png'
import Book from '../public/glosaryicon.svg'
import Add from '../public/addicon.svg'
import Saved from '../public/rectetasicon.svg'

const sideBarDashboard = ({ name, lastName, membership }) => {
  return (
    <div className='side-container d-none d-lg-block'>
      <Accordion defaultActiveKey='0'>
        <Card className='border-0'>
          <Card.Header>
            <Accordion.Toggle as={Button} variant='link' eventKey='0'>
              <img className='burger-button' src={Menu} alt='logo' />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>
              <div className='aside-content'>
                <h3 className='greeting-aside'>¡Bienvenida!</h3>
                <span><img src={ProfilePic} alt='' /></span>
                <span className='color-divider-aside' />
                <span className='orange-card-footer-aside'>
                  <p className='user-name-aside'> {name} {lastName} </p>
                  <p className='account-footer-aside'> {membership} </p>
                </span>
              </div>
              <a className='nav-link-aside' href='/recipes'>Mis recetas <span className='nav-icon-aside'><img src={Saved} alt='' /></span></a>
              <a className='nav-link-aside' href='/recipes/create'>Crear receta <span className='nav-icon-aside'><img src={Add} alt='' /></span> </a>
              <a className='nav-link-aside' href='/subrecipes'>Crear subreceta <span className='nav-icon-aside'><img src={Add} alt='' /></span></a>
              <a className='nav-link-aside' href='#Glosario'>Glosario <span className='nav-icon-aside'><img src={Book} alt='' /></span></a>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default sideBarDashboard
