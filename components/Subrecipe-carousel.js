import React, { useRef } from 'react'
import Slider from 'react-slick'
import CardIngredient from '../components/Ingredient-card'
import Arrow from '../public/arrow_right.svg'
import ArrowLeft from '../public/arrow_left.svg'

export default function SubRecipesCarousel ({ children }) {
  const costumerSlider = useRef()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  const next = () => {
    costumerSlider.current.slickNext()
  }

  const previous = () => {
    costumerSlider.current.slickPrev()
  }

  return (
    <div className='carousel-wrapper'>
      <div className='carousel-header'>
        <h3>Recetas complementarias</h3>
      </div>
      <div className='carousel-body'>
        <Slider ref={costumerSlider} {...settings}>
          <div key={1}>
            <CardIngredient />
          </div>
          <div key={2}>
            <CardIngredient />
          </div>
          <div key={3}>
            <CardIngredient />
          </div>
          <div key={4}>
            <CardIngredient />
          </div>
          <div key={5}>
            <CardIngredient />
          </div>
          <div key={6}>
            <CardIngredient />
          </div>
        </Slider>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button className='button-navigator' onClick={previous}>
          <img src={ArrowLeft} alt='' />
        </button>
        <button className='button-navigator' onClick={next}>
          <img src={Arrow} alt='' />
        </button>
      </div>
    </div>
  )
}
