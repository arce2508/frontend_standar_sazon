import React from 'react'
import Logo from '../public/logo.svg'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='all-footer'>
        <Link href='/' passHref>
          <a href=''>
            <img src={Logo} alt='logo' />
          </a>
        </Link>
        <nav>
          <ul className='container-footer'>

            <li><a href='#beneficios'>Beneficios</a></li>
            <li className='my-2'><a href='#como-funciona'>¿Cómo funciona?</a></li>
            <li><a href='#planes'>Planes</a></li>

          </ul>
        </nav>
        <div className='item-info'>
          <p>Información</p>
          <p>+ 52 55 6474 5613</p>
          <p>dmgs.mx@gmail.com</p>
        </div>

      </div>
      <div className='privacidad'>
        <p>© 2021 Standar & Sazón </p>
        <p>Aviso de privacidad</p>
      </div>
    </footer>

  )
}

export default Footer
