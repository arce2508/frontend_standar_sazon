import React from 'react'
import Link from 'next/link'
import { Button, Navbar, Form, Nav } from 'react-bootstrap'
import Logo from '../public/logo.svg'

const navBar = () => {
  return (
    <div>
      <Navbar className='nav-style d-md-flex px-4-lg' expand='lg'>
        <Link href='/' passHref>
          <a href=''>
            <img src={Logo} alt='logo' />
          </a>
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='link-style m-auto'>
            <Nav.Link href='#beneficios'>Beneficios</Nav.Link>
            <Nav.Link href='#como-funciona'>¿Cómo funciona?</Nav.Link>
            <Nav.Link href='#planes'>Planes</Nav.Link>
            <Nav.Link className='link-account' href='/create'>Crear cuenta</Nav.Link>
          </Nav>
          <Form className='form-nav' inline>
            <Link href='/login' passHref>
              <Button>Iniciar Sesión</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default navBar
