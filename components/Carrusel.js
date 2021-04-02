
import Slider from 'react-slick'

const CarruselCategories = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500

  }
  return (
    <div className='container-carrusel-categories'>
      <Slider {...settings}>
        <div>
          <button className='button-carrusel-categories red'>
            <span href='#'>Entradas</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories orange'>
            <span href='#'>Sopas</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories yellow'>
            <span href='#'>Bebidas</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories green'>
            <span href='#'>Postres</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories red'>
            <span href='#'>Plato fuerte</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories orange'>
            <span href='#'>Salsas</span>
          </button>
        </div>
        <div>
          <button className='button-carrusel-categories yellow'>
            <span href='#'>Complementos</span>
          </button>
        </div>
      </Slider>
    </div>
  )
}

export default CarruselCategories
