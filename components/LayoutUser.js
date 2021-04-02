import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import NavUser from './NavUser'
import SideBar from '../components/Side-bar'
import Icon from '../public/StandarSazonFondo.ico'
import { userRequest } from '../services/users'

export default function LayoutUser ({ children }) {
  const [user, setUser] = useState({})

  const getUsers = async () => {
    console.log(localStorage.getItem('token'))
    const response = await userRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    console.log(responseJSON.data)
    return responseJSON.data
  }

  useEffect(async () => {
    const profile = await getUsers()
    console.log(profile)
    setUser(profile)
  }, [])
  return (
    <>
      <Head>
        <title>Standard & Sazón</title>
        <link rel='icon' href={Icon} />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;500;600;700;800;900&display=swap' rel='stylesheet' />
        <scrip src='https://kit.fontawesome.com/1f42bf96bf.js' crossOrigin='anonymous' />
      </Head>
      <NavUser name={user.name} lastName={user.lastName} membership='Basic' />
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-md-3 p-0'>
            <SideBar name={user.name} lastName={user.lastName} membership='Basic' />
          </div>
          <div className='col-12 col-md-9 inner-scroll'>
            {/* Contenido */}
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
