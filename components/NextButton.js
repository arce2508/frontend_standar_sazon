import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const NextButton = ({ icon, message }) => (
  <button type='submit' className='createButton'>
    <p className='textButton'>{message}</p>
    <span className='createIconButton'>
      <FontAwesomeIcon icon={icon} />
    </span>
  </button>
)

NextButton.defaultProps = {
  icon: faChevronRight,
  message: 'Aceptar'
}

export default NextButton
