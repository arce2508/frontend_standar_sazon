import LayoutUser from '../../components/LayoutUser'
import React, { useState, useEffect } from 'react'
import NextButton from '../../components/NextButton'
import UtencilsButtons from '../../components/UtencilsButton'
import TableStepsRecipe from '../../components/TableStepsRecipe'
import AddUtencil from '../../components/AddUtencil'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  tehnical: yup.string().required('El campo es requerido')
})
const utencilsMock = [
  {
    name: 'sarten',
    id: 'sarten'
  },
  {
    name: 'olla',
    id: 'olla'
  },
  {
    name: 'cuchillo',
    id: 'cuchillo'
  },
  {
    name: 'budinera',
    id: 'budinera'
  },
  {
    name: 'tabla',
    id: 'tabla'
  },
  {
    name: 'licuadora',
    id: 'licuadora'
  },
  {
    name: 'freidora',
    id: 'freidora'
  },
  {
    name: 'pala',
    id: 'pala'
  },
  {
    name: 'soplete',
    id: 'soplete'
  },
  {
    name: 'cucharón',
    id: 'cucharón'
  },
  {
    name: 'atomizador',
    id: 'atomizador'
  },
  {
    name: 'bowl',
    id: 'bowl'
  },
  {
    name: 'rallador',
    id: 'rallador'
  },
  {
    name: 'espatula',
    id: 'espatula'
  },
  {
    name: 'colador',
    id: 'colador'
  }
]

const getUtencilComponents = (utencils, checkedUtencils, handleUtencilCheck, groupsOf = 5) => {
  const utencilsCopy = [...utencils]
  const groups = new Array(Math.ceil(utencils.length / groupsOf))
    .fill()
    .map(_ => utencilsCopy.splice(0, groupsOf))

  return groups.map((group, i) => <div className='labelUtencils d-flex flex-row justify-content-between' key={i}>
    {
      group.map((utencil, j) => <UtencilsButtons
        key={utencil.id}
        id={utencil.id}
        message={utencil.name}
        checked={checkedUtencils[utencil.id]}
        onChange={handleUtencilCheck}
                                />)
    }
                                  </div>)
}

const Utencilios = () => {
  const [utencils, setUtencils] = useState([])
  const [checkedUtencils, setCheckedUtencils] = useState({})
  const [utencilsSelected, setUtencilsSelected] = useState([])
  const [instructions, setInstructions] = useState([])
  const { register, handleSubmit, errors, setValue } = useForm({
    resolver: yupResolver(schema),
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const addInstructions = (dataForm) => {
    setInstructions([...instructions, dataForm.tehnical])
    setValue('tehnical')
  }

  const handleUtencilCheck = event => {
    const newCheckedUtencils = {
      ...checkedUtencils,
      [event.target.name]: event.target.checked
    }

    const arrayOfCheckedUtencils = Object
      .entries(newCheckedUtencils)
      .filter(([, checked]) => checked)
      .map(([id]) => id)

    setCheckedUtencils(newCheckedUtencils)
    console.log(newCheckedUtencils)
    console.log(arrayOfCheckedUtencils)
    setUtencilsSelected(arrayOfCheckedUtencils)
  }

  const utencilComponents = getUtencilComponents(utencils, checkedUtencils, handleUtencilCheck)

  useEffect(async () => {
    const response = utencilsMock // TODO: Call API.
    setUtencils(response)
  }, [utencils])

  const errorInstructions = errors.tehnical ? 'error' : null

  return (
    <LayoutUser>
      <div className='allUtencils'>
        <p>Utensilios</p>
        {utencilComponents}
        <div>
          <AddUtencil />
        </div>
        <div>
          <p>Escribe tus instrucciones</p>
          <div className='card-table'>
            <div>
              <div>
                <form className='form-input d-flex flex-row' onSubmit={handleSubmit(addInstructions)}>
                  <input
                    className='inputStep'
                    type='textbox'
                    placeholder='Pasos a seguir'
                    text=''
                    name='tehnical'
                    ref={register}

                  />
                  <p>{errorInstructions}</p>
                  <div className=''>
                    <button type='submit' className='plusbutton'>+</button>
                  </div>
                </form>
                <div>
                  {
                    instructions.length !== 0
                      ? (
                          instructions.map((instruction, index) => (
                          <div key={index}>
                            <TableStepsRecipe message={instruction} />
                          </div>

                          ))
                        )
                      : null
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-lg-4'>
            <NextButton message='Siguiente' />
          </div>
        </div>
      </div>
    </LayoutUser>
  )
}
export default Utencilios
