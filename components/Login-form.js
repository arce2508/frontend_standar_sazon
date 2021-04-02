import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { login } from '../services/users'

import PacmanLoader from 'react-spinners/PacmanLoader'

const schema = yup.object().shape({
  email: yup.string().email('El email no es valido').required('El campo es requerido'),
  password: yup.string().required('El campo es requerido').min(8, 'El numero de caracteres debe ser mayor a 8')
})
const loginForm = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const onSubmit = async (dataForm) => {
    setLoading(true)
    setError()
    // console.log('Enviando al server...')
    // console.log(dataForm)
    const response = await login(dataForm)
    const responseJSON = await response.json()
    // console.log(responseJSON)
    if (!responseJSON.success) {
      setError('Credenciales Invalidas')
      setLoading(false)
      return
    }
    setLoading(true)
    router.push('/recipes')
    localStorage.setItem('token', responseJSON.data.token)
  }
  const errorClassEmail = errors.email ? 'error' : null
  const errorClassPassword = errors.password ? 'error' : null
  return (
    <div className='create-form-wrapper'>
      <form className='form-group' onSubmit={handleSubmit(onSubmit)}>
        <div className='single-divider'>
          <div className='form-input'>
            <label for=''>Email*</label>
            <input name='email' ref={register} type='email' className={errorClassEmail} placeholder='Correo electronico' id='' />
            <p>{errors.email?.message}</p>
          </div>
          <div className='form-input'>
            <label for=''>Contraseña*</label>
            <input name='password' ref={register} type='password' className={errorClassPassword} placeholder='Escribe tu contraseña' id='' />
            {errors.password?.message}
          </div>
          <div className=' d-flex flex-column align-items-center w-100 mb-1'>
            <p>{error}</p>
          </div>
          <div className='pacman'>
            <PacmanLoader color='#00AF91' loading={loading} size={20} />
          </div>
        </div>
        <button type='submit' className='create-button'>Inicia sesión</button>
      </form>
    </div>
  )
}

export default loginForm
