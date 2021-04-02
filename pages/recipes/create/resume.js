import LayoutUser from '../../../components/LayoutUser'
import React, { useEffect, useState } from 'react'
import Logo from '../../../public/img/logo.svg'
import NextButton from '../../../components/NextButton'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { recipeUpdate, recipeRequestByID } from '../../../services/recipes'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const schema = yup.object().shape({
  production: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  portionSize: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  preparationTime: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  cookingTime: yup.number().positive('Invalido').required('Requerido').typeError('Invalido'),
  operatingTemperature: yup.number().positive('Invalido').required('Requerido').typeError('Invalido')
})
export default function App () {
  const [resume, setResume] = useState({})
  const [performance, setPerformance] = useState(0)
  const [portion, setPortion] = useState(0)
  const [labor, setLabor] = useState(0)
  const [indirect, setIndirect] = useState(0)
  const [expenses, setExpenses] = useState(0)
  const [utility, setUtility] = useState(0)
  const [siva, setSiva] = useState(0)
  const [total, setTotal] = useState(0)
  const [recipeToSend, setRecipeToSend] = useState({})
  const { register, errors, watch } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })
  const watchAllFields = watch()
  const router = useRouter()
  const { recipe } = router.query
  const getRecipe = async () => {
    const response = await recipeRequestByID(recipe, localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  const updateRecipe = async (objectrecipe) => {
    const response = await recipeUpdate(recipe, objectrecipe, localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON
  }

  const getAdmin = async () => {
    const response = await recipeRequestByID(recipe, localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  useEffect(async () => {
    const resumeGet = await getAdmin()
    setResume(resumeGet)
    setRecipeToSend(resumeGet)
  }, [])

  const handleClickSaveRecipe = async () => {
    console.log('Enviando datos')
    const recipeUpdated = await updateRecipe({ ...recipeToSend, timePerformance: { production: parseFloat(watchAllFields.production) } })
    if (recipeUpdated.success) {
      router.push('/recipes')
      return
    }
    router.reload()
  }

  useEffect(() => {
    const performanceResult = ((parseFloat(watchAllFields.production) / resume.grossWeightTotal) * 100).toFixed(0)
    setPerformance(performanceResult)
  }, [watchAllFields.production])

  useEffect(() => {
    const portionTotal = (parseFloat(watchAllFields.production) / watchAllFields.portionSize)
    setPortion(portionTotal)
  }, [watchAllFields.portionSize])

  useEffect(() => {
    const laborTotal = (parseFloat(watchAllFields.preparationTime) / 0.46).toFixed(2)
    setLabor(laborTotal)
  }, [watchAllFields.preparationTime])

  useEffect(() => {
    const indirectTotal = (parseFloat(resume.directIndirectCosts?.totalAmount) * 0.30).toFixed(2)
    setIndirect(indirectTotal)
  }, [watchAllFields.preparationTime])

  useEffect(() => {
    const expensesTotal = (resume.directIndirectCosts?.totalAmount + parseFloat(labor) + parseFloat(indirect)) / parseFloat(portion)
    setExpenses(expensesTotal.toFixed(2))
  }, [watchAllFields.portionSize, labor, indirect])

  useEffect(() => {
    const utilityTotal = ((parseFloat(expenses) * 0.30) / 0.70).toFixed(2)
    setUtility(utilityTotal)
  }, [watchAllFields.portionSize, expenses])

  useEffect(() => {
    const sinIva = parseFloat(utility) + parseFloat(expenses)
    setSiva(sinIva.toFixed(2))
  }, [watchAllFields.portionSize, utility, expenses])

  useEffect(() => {
    const bigTotal = parseFloat(siva) * 1.16
    setTotal(bigTotal.toFixed(2))
  }, [watchAllFields.portionSize, siva])

  const errorClassProduction = errors.production ? 'error' : null
  const errorClassPortion = errors.portionSize ? 'error' : null
  const errorClassPreparation = errors.preparationTime ? 'error' : null
  const errorClassCooking = errors.cookingTime ? 'error' : null
  const errorClassTemperature = errors.operatingTemperature ? 'error' : null

  return (
    <LayoutUser>
      <form className='resume-data d-flex'>
        <div className='kgs-number d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Producción (Peso total de tu receta):</lable>
          <lable className='inp-letters'>(kgs)</lable>
          <input className={`inp-summar ${errorClassProduction}`} type='number' placeholder='Peso' name='production' ref={register} />
          <p>{errors.production?.message}</p>
          <lable className='inp-letters letters'>Tamaño de la porción:</lable>
          <lable className='inp-letters'>KG</lable>
          <input className={`inp-summar ${errorClassPortion}`} type='number' placeholder='Tamaño de porciones' name='portionSize' ref={register} />
          <p>{errors.portionSize?.message}</p>
        </div>
        <div className='data-time d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Tiempo de preparación:</lable>
          <lable className='inp-letters'>(Minutos)</lable>
          <input className={`inp-summar ${errorClassPreparation}`} type='number' placeholder='Tiempo' name='preparationTime' ref={register} />
          <p>{errors.preparationTime?.message}</p>
          <lable className='inp-letters letters'>Tiempo de cocción:</lable>
          <lable className='inp-letters'>(Unidades)</lable>
          <input className={`inp-summar ${errorClassCooking}`} type='number' placeholder='Cocción' name='cookingTime' ref={register} />
          <p>{errors.cookingTime?.message}</p>
        </div>
        <div className='data-temperature d-flex flex-column text-left form-input'>
          <lable className='inp-letters'>Temperatura de servicio:</lable>
          <lable className='inp-letters'>(ºC)</lable>
          <input className={`inp-summar ${errorClassTemperature}`} type='number' placeholder='Grados' name='operatingTemperature' ref={register} />
          <p>{errors.operatingTemperature?.message}</p>
        </div>
      </form>

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
            <p className='unit-measurement orange unit'> {performance} %</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tamaño de la porción</p>
            <p className='unit-measurement orange unit'> {watchAllFields.portionSize} Kgrs</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Número de porciones</p>
            <p className='unit-measurement green'> {portion} Unidades</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de preparación</p>
            <p className='unit-measurement green'> {watchAllFields.preparationTime} Minutos</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Tiempo de cocción</p>
            <p className='unit-measurement green'> {watchAllFields.cookingTime} Minutos</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Temperatura de servicio</p>
            <p className='unit-measurement green'> {watchAllFields.operatingTemperature} ºC</p>
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
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costo total de insumos</p>
            <p className='unit-measurement orange'>$  {resume.directIndirectCosts?.totalAmount} </p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costo de la mano de obra</p>
            <p className='unit-measurement orange'>$ {labor} </p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costo y gastos indirectos</p>
            <p className='unit-measurement orange'>$ {indirect} </p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Costos y gastos por porción</p>
            <p className='unit-measurement orange'>$ {expenses} </p>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical totals'>
              <p className='technical-concepts totals-resume'>Precio de venta</p>
              <p className='technical-concepts iva totals-resume'>por porción (S/IVA)</p>
            </div>
            <p className='totals unit-measurement iva green'> {siva} </p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>% del costo y gastos por porción</p>
            <p className='unit-measurement orange'>70%</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>% de utilidad por porción</p>
            <p className='unit-measurement orange'>30%</p>
          </div>
          <div className='technical d-flex'>
            <p className='technical-concepts'>Utilidad por porción</p>
            <p className='unit-measurement orange'>$ {utility} </p>
          </div>
          <div className='totals d-flex justify-content-between'>
            <div className='technical'>
              <p className='technical-concepts totals-resume'>Precio de venta</p>
              <p className='technical-concepts iva totals-resume'>por porción (C/IVA)</p>
            </div>
            <p className='unit-measurement green'> {total} </p>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center text-align-center'>
        <div className='col-12 col-lg-4'>
          <button type='button' onClick={handleClickSaveRecipe} className='createButton'>
            <p className='textButton'>Crear receta</p>
            <span className='createIconButton'>
              <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </button>
        </div>
      </div>
    </LayoutUser>
  )
}
