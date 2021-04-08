import { Link } from 'react-router-dom'
import './NavBar.scss'

function NavBar() {
  return (
    <div id='navbar'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/articles-list'>Articles</Link>
          </li>
        </ul>        
      </nav>
    </div>
  )
}

export default NavBar