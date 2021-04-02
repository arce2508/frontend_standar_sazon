import React from 'react'

const CardHow = ({ children, backgroundSrc, title, step, content, subContent }) => {
  const subContentElement = subContent
    ? <small>{subContent}</small>
    : null

  return (
    <div className='card cardHow'>
      <div className='opacity-card-how'>
        <img
          src={backgroundSrc}
          layout='fill'
          className='card-img image'
          alt='Card steps in image'
        />
      </div>
      <div className='card-img-overlay text-white image'>
        <div className='card-img-overlay'>
          <h5 className='card-title'>{title}</h5>
          {children}
        </div>
      </div>
      <div className='card-body description'>
        <div className='step'>{step}</div>
        <p className='cardText'>{content}</p>
        {subContentElement}
      </div>
    </div>
  )
}

export default CardHow
