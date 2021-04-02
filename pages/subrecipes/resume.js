import LayoutUser from '../../components/LayoutUser'
import React, { useEffect, useState } from 'react'
import Logo from '../../public/img/logo.svg'
import NextButton from '../../components/NextButton'
import { subRecipeRequestByID } from '../../services/subrecipes'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  production: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  performance: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  portionSize: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  cookingTime: yup.number().positive('Invalido').required('Requerido').typeError('Invalido')
})
export default function App () {
  const [resume, setResume] = useState({})
  const [performance, setPerformance] = useState(0)
  const [portion, setPortion] = useState(0)
  const [unit, setUnit] = useState(0)
  const { register, errors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const watchAllFields = watch()
  const subRecipe = '602b14e381261219071ac28e'
  console.log(subRecipe)

  const getAdmin = async () => {
    const response = await subRecipeRequestByID(subRecipe, localStorage.getItem('token'))
    const responseJSON = await response.json()
    console.log(responseJSON.data)
    return responseJSON.data
  }

  useEffect(async () => {
    const resumeGet = await getAdmin()
    setResume(resumeGet)
    console.log(resumeGet)
  }, [])

  useEffect(() => {
    const portionTotal = (parseFloat(watchAllFields.production) / watchAllFields.portionSize)
    setPortion(portionTotal)
  }, [watchAllFields.portionSize])

  useEffect(() => {
    const performanceResult = ((parseFloat(watchAllFields.production) / resume.grossWeightTotal) * 100).toFixed(0)
    setPerformance(performanceResult)
  }, [watchAllFields.production])

  useEffect(() => {
    const unitCost = resume.SubRecipeSchema?.totalAmount / portion
    setUnit(unitCost.toFixed(2))
  }, [watchAllFields.portionSize, portion])

  const errorClassProduction = errors.production ? 'error' : null
  const errorClassPortion = errors.performance ? 'error' : null
  const errorClassCooking = errors.cookingTime ? 'error' : null

  return (
    <LayoutUser>
      <from className='resume-data inline-block d-flex'>
        <div className='kgs-number d-flex text-left form-input'>
          <lable className='inp-letters'>Peso de la preparación:</lable>
          <lable className='inp-letters'>(kgs)</lable>
          <input className={`inp-summar ${errorClassProduction}`} type='number' placeholder='Peso' name='production' ref={register} />
        </div>
        <div className='data-time d-flex text-left form-input'>
          <lable className='inp-letters letters letters2'>Tamaño de la porciòn:</lable>
          <lable className='inp-letters'>(Kgs)</lable>
          <input className={`inp-summary time ${errorClassPortion}`} type='number' placeholder='Peso' name='portionSize' ref={register} />
        </div>
        <div className='data-temperature d-flex text-left form-input'>
          <lable className='inp-letters'>Tiempo de cocción:</lable>
          <lable className='inp-letters'>(Minutos)</lable>
          <input className={`inp-summar ${errorClassCooking}`} type='number' placeholder='Grados' name='cookingTime' ref={register} />
        </div>
      </from>

      <div className='summary d-flex justify-content-center'>
        <div className='technical-section'>
          <div className='technical d-flex'>
            <div>
              <p className='title-resume'>Resumen</p>
              <p className='main-title-resume'>Apartada Técnico</p>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Producción</p>
            <p className='unit-measurement green'> {watchAllFields.production} </p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Rendimiento</p>
            <p className='unit-measurement orange unit'>{performance} %</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tamaño de la porción</p>
            <p className='unit-measurement orange unit'> {watchAllFields.portionSize} Kgrs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Número de porciones</p>
            <p className='unit-measurement green'>{portion} Porciones</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de preparación</p>
            <p className='unit-measurement green'>{watchAllFields.cookingTime} Minutos</p>
          </div>
        </div>

        <div className='admin-section justify-content-center'>
          <div className='technical d-flex '>
            <div>
              <p className='title-resume'>Resumen</p>
              <p className='main-title-resume'>Administrativo</p>
            </div>
            <img src={Logo} alt='logo' className='logo' />
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical totals'>
              <p className='technical-concepts totals-resume'>Costo total de insumos</p>
            </div>
            <p className='totals unit-measurement iva green'>$ {resume.SubRecipeSchema?.totalAmount} </p>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical'>
              <p className='technical-concepts totals-resume'>Costo Unitario</p>
              <p className='technical-concepts iva totals-resume'>(KG o LT)</p>
            </div>
            <p className='unit-measurement green'>$ {unit} </p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center text-align-center'>
        <div className='col-12 col-lg-4'>
          <NextButton message='Crear Subreceta' />
        </div>
      </div>
    </LayoutUser>
  )
}
