import LayoutUser from '../../components/LayoutUser'
import React, { useEffect, useState } from 'react'

import CardRecipeView from '../../components/CardRecipeView'
import Carrusel from '../../components/Carrusel'
import FirstUserView from '../../components/FirstUserView'

import { recipeRequest } from '../../services/recipes'

const Recipes = () => {
  const [recipesAll, setRecipesAll] = useState([])

  const getRecipes = async () => {
    const response = await recipeRequest(localStorage.getItem('token'))
    const responseJSON = await response.json()
    return responseJSON.data
  }

  useEffect(async () => {
    const recipes = await getRecipes()
    console.log(recipes)
    setRecipesAll(recipes)
  }, [])

  const recipeComponents = recipesAll.map(recipe =>
    <div key={recipe.id} className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
      <CardRecipeView
        title={recipe.name}
        price={recipe.price}
        category={recipe.category}
        time='1hr'
        id={recipe._id}
        backgroundSrc='/imagesRecipeView/CardImage1.svg'
      />
    </div>
  )

  return (
    <LayoutUser>
      <div className='container-cards-recipes'>
        <div className='row'>
          <div className='col-12 mx-auto'>
            {
              recipesAll.lenght !== 0
                ? <Carrusel />
                : null
            }
          </div>
          {
            recipesAll.length !== 0
              ? recipeComponents
              : <FirstUserView />
          }

          {/* <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Shots de camarónes'
              price='180.00'
              backgroundSrc='/imagesRecipeView/CardImage2.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Nachos supremos'
              price='125.00'
              backgroundSrc='/imagesRecipeView/CardImage3.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Sopa de verduras'
              price='150.00'
              backgroundSrc='/imagesRecipeView/CardImage5.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Crema de champiñones'
              price='650.00'
              backgroundSrc='/imagesRecipeView/CardImage4.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Ramen con huevo'
              price='175.00'
              backgroundSrc='/imagesRecipeView/CardImage6.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Tomahaw'
              price='650.00'
              backgroundSrc='/imagesRecipeView/CardImage8.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Milanesa de pollo'
              price='225.00'
              backgroundSrc='/imagesRecipeView/CardImage9.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Hamburguesa'
              price='250.00'
              backgroundSrc='/imagesRecipeView/CardImage10.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Pastelillos frutales'
              price='55.00'
              backgroundSrc='/imagesRecipeView/CardImage11.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Cupcake'
              price='55.00'
              backgroundSrc='/imagesRecipeView/CardImage12.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Helado de vainilla'
              price='90.00'
              backgroundSrc='/imagesRecipeView/CardImage13.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Guacamole'
              price='150.00'
              backgroundSrc='/imagesRecipeView/CardImage14.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Salsa martajada'
              price='100.00'
              backgroundSrc='/imagesRecipeView/CardImage15.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Salsa roja'
              price='65.00'
              backgroundSrc='/imagesRecipeView/CardImage18.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Mojito'
              price='130.00'
              backgroundSrc='/imagesRecipeView/CardImage16.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Capuchino'
              price='110.00'
              backgroundSrc='/imagesRecipeView/CardImage17.svg'
            />
          </div>
          <div className='col-12 col-md-6 col-xl-4 mt-3 mx-auto'>
            <CardRecipeView
              title='Daikiri'
              price='150.00'
              backgroundSrc='/imagesRecipeView/CardImage19.svg'
            />
          </div> */}
        </div>
      </div>
    </LayoutUser>
  )
}

export default Recipes
