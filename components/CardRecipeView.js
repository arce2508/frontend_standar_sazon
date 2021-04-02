import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faDollarSign, faIndustry } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'

const CardRecipeView = ({ id, title, icon, category, entry, price, backgroundSrc, time }) => {
  const router = useRouter()

  return (
    <container>
      <row className='row row-cols-1 row-cols-md-3 g-4'>
        <div className='col'>
          <div className='card  cardRecipeView'>
            <div className='image'>
              <img
                src={backgroundSrc}
                layout='fill'
                className='card-img image'
                alt='Card steps in image'
              />
            </div>
            <div className='card-body descriptionCardRecipe'>
              <h5 className='card-title title'>{title}</h5>
              <ul className='list-unstyled text-center card-content-how'>
                <li className='category'>{category}</li>
                {}
                <li className='time'>
                  <FontAwesomeIcon icon={faClock} />{time}
                </li>
                <li className='price'>
                  <FontAwesomeIcon icon={faDollarSign} /> {price}
                </li>
              </ul>
              <div className='containerButtonRecipeView'>
                <button className='iconWrapperRecipe justify-content-left' onClick={() => router.push({ pathname: 'recipes/detail', query: { recipe: id } })}>
                  <FontAwesomeIcon icon={icon} /><h3 className='buttonText'> Cocinar</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </row>
    </container>
  )
}

CardRecipeView.defaultProps = {
  icon: faIndustry,
  title: 'Alitas clásicas',
  category: 'Categorías',
  entry: 'Entradas',
  time: '1/2 hr',
  price: '150.00'

}
export default CardRecipeView
