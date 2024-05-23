import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className='footer_container'>
      <a href='https://github.com/jeru7' target='_blank'>
        <div className='footer--user_display'>
          <FontAwesomeIcon icon={faGithub} className='user-icon' />
          <p>jeru7</p>
        </div>
      </a>
    </footer>
  )
}

export default Footer
