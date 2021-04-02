import Link from 'next/link'

import arrowIcon from '../public/dark-arrow.svg'

const CtaButton = ({ href, color, alt, icon, message }) => (
  <div className='call-to-action'>
    <Link href={href}>
      <button className={color}>
        <img src={icon} alt={alt} />
        <p>{message}</p>
      </button>
    </Link>
  </div>
)

CtaButton.defaultProps = {
  href: '#',
  color: 'orange',
  icon: arrowIcon,
  alt: 'Right arrow icon',
  message: 'Aceptar'
}

export default CtaButton
