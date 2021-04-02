import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import LayoutUser from '../../../components/LayoutUser'
import Table from 'react-bootstrap/Table'
import NextButton from '../../../components/NextButton'
import ShowIngredient from '../../../components/ShowIngredient'
import { productRequest } from '../../../services/products'
import { subRecipeRequest } from '../../../services/subrecipes'
import { recipeUpdate, recipeRequestByID } from '../../../services/recipes'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

/* import faker from 'faker' */

const schema = yup.object().shape({
  product: yup.string().required('El campo es requerido'),
  netWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido'),
  grossWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido')
})

const schemaSubRecipe = yup.object().shape({
  subRecipe: yup.string().required('Campo requerido'),
  netWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido'),
  grossWeight: yup.number().typeError('Debe ser un valor numerico').positive('Debe ser un valor mayor a cero').required('El campo es requerido')
})

const Ingredients = () => {
  const router = useRouter()
  const [ingredients, setIngredients] = useState([])
  const [product, setProduct] = useState({})
  const [ingredientSelected, setIngredientSelected] = useState([])
  const [grossWeightTotal, setgrossWeightTotal] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)
  const [recipeToSend, setRecipeToSend] = useState({})
  const { register, handleSubmit, errors, watch, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'

  })
  const { recipe } = router.query

  const [subRecipesAll, setSubRecipes] = useState([])
  const [subRecipe, setSubRecipe] = useState({})
  const { register: registerSubRecipe, handleSubmit: handleSubmitSubRecipe, errors: errorsSubRecipe, watch: watchSubRecipe, setValue: setValueSubRecipe } = useForm({
    resolver: yupResolver(schemaSubRecipe),
    mode: 'onBlur',
    reValidateMode: 'onChange'

  })

  const getAmount = (netWeight, priceUnit) => (netWeight * priceUnit).toFixed(2)
  const getPerformancePercent = (netWeight, grossWeight) => (netWeight / grossWeight) * 100

  const watchAllFields = watch()

  useEffect(() => {
    const performancePercent = (getPerformancePercent(parseFloat(watchAllFields.netWeight), parseFloat(watchAllFields.grossWeight))).toFixed(0)
    const amount = parseFloat(getAmount(parseFloat(watchAllFields.netWeight), product.priceUnit))
    setProduct({ ...product, netWeight: parseFloat(watchAllFields.netWeight), grossWeight: parseFloat(watchAllFields.grossWeight), performancePercent, amount })
  }, [watchAllFields.netWeight, watchAllFields.grossWeight])

  useEffect(() => {
    const totalIngredientAmount = ingredientSelected.reduce((accum, ingredient) => {
      return accum += ingredient.amount
    }, 0)
    setTotalAmount(totalIngredientAmount)
    const TotalgrossWeight = ingredientSelected.reduce((accum, ingredient) => {
      return accum += ingredient.grossWeight
    }, 0)
    setgrossWeightTotal(TotalgrossWeight)
  }, [ingredientSelected])

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

  const getIngredients = async () => {
    const response = await productRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  useEffect(async () => {
    const ingredients = await getIngredients()
    setIngredients(ingredients)
    const subRecipesFull = await getSubRecipe()
    setSubRecipes(subRecipesFull)
    const recipe = await getRecipe()
    setRecipeToSend(recipe)
  }, [])

  const handleChange = (event) => {
    const productName = event.target.value
    const filteredProduct = ingredients.filter(product => product.name === productName)
    /* setProduct(filteredProduct[0]) */
    setProduct({
      product: filteredProduct[0]?.id,
      name: filteredProduct[0]?.name,
      measureByBuy: filteredProduct[0]?.measureByBuy,
      image: filteredProduct[0]?.image,
      netWeight: filteredProduct[0]?.netWeight,
      grossWeight: filteredProduct[0]?.grossWeight,
      performancePercent: filteredProduct[0]?.performancePercent,
      priceUnit: filteredProduct[0]?.priceUnit
    })
  }

  const onSubmit = async ({ netWeight, grossWeight, id }) => {
    setIngredientSelected([...ingredientSelected, product])
    setValue('product', '')
    setValue('netWeight', '')
    setValue('grossWeight', '')
  }

  const handleClickSaveIngredients = async () => {
    console.log('Enviando datos')
    const recipeUpdated = await updateRecipe({ ...recipeToSend, ingredients: ingredientSelected, grossWeightTotal, directIndirectCosts: { totalAmount } })
    if (recipeUpdated.success) {
      router.push({
        pathname: '/recipes/create/utencils',
        query: { recipe: recipeUpdated.data._id }
      })
      return
    }
    router.reload()
  }

  const errorClassIngrediente = errors.ingrediente ? 'error' : null
  const errorClassSubReceta = errors.subreceta ? 'error' : null
  const errorClassPesoBruto = errors.pesoBruto ? 'error' : null
  const errorClassPesoNeto = errors.pesoNeto ? 'error' : null

  const watchAllFieldsSubRecipe = watchSubRecipe()

  useEffect(() => {
    const performancePercent = (getPerformancePercent(parseFloat(watchAllFieldsSubRecipe.netWeight), parseFloat(watchAllFieldsSubRecipe.grossWeight))).toFixed(0)
    const amount = parseFloat(getAmount(parseFloat(watchAllFieldsSubRecipe.netWeight), subRecipe.priceUnit))
    setSubRecipe({ ...subRecipe, netWeight: parseFloat(watchAllFieldsSubRecipe.netWeight), grossWeight: parseFloat(watchAllFieldsSubRecipe.grossWeight), performancePercent, amount })
  }, [watchAllFieldsSubRecipe.netWeight, watchAllFieldsSubRecipe.grossWeight])

  const getSubRecipe = async () => {
    const response = await subRecipeRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  const subRecipeHandleChange = (event) => {
    const subRecipesName = event.target.value
    const filteredSubRecipe = subRecipesAll.filter(subRecipe => subRecipe.name === subRecipesName)
    /* setSubRecipe(filteredSubRecipe[0]) */
    setSubRecipe({
      product: filteredSubRecipe[0]?.id,
      name: filteredSubRecipe[0]?.name,
      measureByBuy: 'Kg/Lt',
      image: filteredSubRecipe[0]?.image,
      netWeight: filteredSubRecipe[0]?.netWeight,
      grossWeight: filteredSubRecipe[0]?.grossWeight,
      performancePercent: filteredSubRecipe[0]?.performancePercent,
      priceUnit: filteredSubRecipe[0]?.unitCost
    })
  }

  const onSubmitSubRecipes = ({ netWeight, grossWeight }) => {
    setIngredientSelected([...ingredientSelected, subRecipe])
    setValueSubRecipe('subRecipe', '')
    setValueSubRecipe('netWeight', '')
    setValueSubRecipe('grossWeight', '')
  }
  return (
    <LayoutUser>
      <div className='section-add-ingredients'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-input'>
            <p>Agregar ingrediente</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column'>
                <label>Ingrediente</label>
                <input type='search' list='products' ref={register} onChange={handleChange} placeholder='Ingrediente' name='product' className={errorClassIngrediente} />
                <datalist id='products'>
                  {
                    ingredients.length !== 0
                      ? (
                          ingredients.map(ingredients =>
                            <option key={ingredients._id} value={ingredients.name} />
                          )

                        )
                      : <option value='No hay ingredientes ' />
                    }
                </datalist>
                <p>{errors.product?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso Bruto(kg)</label>
                <input type='text' ref={register} placeholder='Peso bruto' name='grossWeight' className={errorClassPesoBruto} />
                <p>{errors.grossWeight?.message}</p>
              </div>
              <div className='d-flex flex-column '>
                <label>Peso neto(kg)</label>
                <input type='text' ref={register} placeholder='Peso neto' name='netWeight' className={errorClassPesoNeto} />
                <p>{errors.netWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ {product?.priceUnit}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>{product?.measureByBuy} </p>
              </div>
              <button type='submit' className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>

        <form onSubmit={handleSubmitSubRecipe(onSubmitSubRecipes)}>
          <div className='form-input'>
            <p>Agregar Subreceta</p>
            <div className='d-flex justify-content-between align-items-center'>
              <div className='d-flex flex-column '>
                <label>Subreceta</label>
                <input type='search' list='subRecipes' placeholder='Subreceta' name='subRecipe' onChange={subRecipeHandleChange} ref={registerSubRecipe} className={errorClassSubReceta} />
                <datalist id='subRecipes'>
                  {
                    subRecipesAll.lenght !== 0
                      ? (
                          subRecipesAll.map(subRecipe =>
                            <option key={subRecipe._id} value={subRecipe.name} />
                          )
                        )
                      : <option value='No hay Sub recetas creadas' />
                    }
                </datalist>
                <p>{errorsSubRecipe.subRecipe?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso bruto(kg)</label>
                <input type='text' placeholder='Peso bruto' name='grossWeight' ref={registerSubRecipe} className={errorClassPesoBruto} />
                <p>{errorsSubRecipe.grossWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <label>Peso neto(kg)</label>
                <input type='text' placeholder='Peso neto' name='netWeight' ref={registerSubRecipe} className={errorClassPesoNeto} />
                <p>{errorsSubRecipe.netWeight?.message}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Importe</p>
                <p>$ {subRecipe?.priceUnit}</p>
              </div>
              <div className='d-flex flex-column'>
                <p>Unidad de M</p>
                <p>Kg/Lt</p>
              </div>
              <button type='submit' className='plusbutton'><span>+</span></button>
            </div>
          </div>
        </form>
        <div>
          <Table borderless className='tittleTable'>
            <div className='resumeIngredientSteps'>
              <td>Ingrediente</td>
              <td>Peso Bruto</td>
              <td>Peso neto</td>
              <td>Porcentaje %</td>
              <td>Costo unitario</td>
              <td>U. M.</td>
              <td>Importe</td>
            </div>
          </Table>
        </div>
        <div>
          {
          ingredientSelected.length !== 0
            ? (
                ingredientSelected.map((ingredientSelected, index) => (
                  <div key={index}>
                    <ShowIngredient image={ingredientSelected.image} name={ingredientSelected.name} grossWeight={ingredientSelected.grossWeight} netWeight={ingredientSelected.netWeight} priceUnit={ingredientSelected.priceUnit} measureByBuy={ingredientSelected.measureByBuy} amount={ingredientSelected.amount} performancePercent={ingredientSelected.performancePercent} />
                  </div>
                ))
              )
            : null
        }
        </div>
        <div className='importStyle d-flex justify-content-between align-items-end'>
          <p>Importe</p>
          <p>$ {totalAmount}</p>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <button type='button' onClick={handleClickSaveIngredients} className='createButton'>
              <p className='textButton'>Siguiente</p>
              <span className='createIconButton'>
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
        </div>
      </div>

    </LayoutUser>
  )
}

export default Ingredients
