import LayoutUser from '../../components/LayoutUser'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import NextButton from '../../components/NextButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { createSubrecipe } from '../../services/subrecipes'

const schema = yup.object().shape({
  name: yup.string().required('El nombre es requerido'),
  category: yup.string().required('Categoria es requerida')
})
export default function App () {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const onSubmit = async (dataForm) => {
    console.log(dataForm)
    setLoading(true)
    const response = await createSubrecipe(localStorage.getItem('token'), dataForm)
    const responseJSON = await response.json()
    if (!responseJSON.success) {
      setError('')
      setLoading(false)
      return
    }
    setLoading(true)
    router.push({
      pathname: '/subrecipes/ingredients',
      query: { subrecipe: responseJSON.data._id }
    })
  }
  const errorClassName = errors.name ? 'error' : null
  const errorClassCategory = errors.category ? 'error' : null
  return (
    <LayoutUser>
      <form className='create-form-init' onSubmit={handleSubmit(onSubmit)}>
        <h1 className='first-data text-center'>Primeros datos</h1>
        <div className='newDataRecipe'>
          <div className='izquierda'>
            <div className='form-input'>
              <label for=''>Nombre de la Receta*</label>
              <input className={`input ${errorClassName}`} name='name' ref={register} type='text' placeholder='Escribe el nombre de la receta' />
              <p>{errors.name?.message}</p>
            </div>
            <div className=''>
              <div className='form-input'>
                <label for=''>Fecha*</label>
                <input className='input' ref={register} type='date' placeholder='Captura la fecha' name='' id='' />
              </div>
            </div>
          </div>
          <div className='derecha'>
            <div className='form-input'>
              <label for=''>Clasificación*</label>
              <select className={`input ${errorClassCategory}`} name='category' ref={register}>
                <option selected value=''>Clasificación del platillo</option>
                <option value='starters'>Entrada</option>
                <option value='soups'>Sopa</option>
                <option value='main-courses'>Plato fuerte</option>
                <option value='desserts'>Postre</option>
                <option value='drinks'>Bebida</option>
                <option value='sacuces'>Salsa</option>
              </select>
              <p>{errors.category?.message}</p>
            </div>
            <p className=''>*Elige entre nuestras categorías, la que más se ajuste al platillo que deseas preparar.</p>
          </div>
        </div>
        <div>
          <div className='d-flex justify-content-center text-align-center'>
            <div className='col-12 col-lg-4'>
              <NextButton message='Siguiente' />
            </div>
          </div>

        </div>
      </form>
    </LayoutUser>
  )
}
